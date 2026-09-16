export const runtime =
  "nodejs";

export const dynamic =
  "force-dynamic";

import {
  NextResponse,
} from "next/server";

import {
  Resend,
} from "resend";

import {
  getAdminClient,
} from "@/lib/supabase/adminClient";

// ============================================================
// CONSTANTS
// ============================================================

const CONSENT_VERSION =
  "mvp-interest-v1-2026-09-16";

const PRIVACY_VERSION =
  "2026-09-16";

const CONSENT_TEXT =
  "Email me about Engineers Advance MVP access and launch updates. I understand that I can unsubscribe at any time.";

const MAX_REQUEST_BODY_LENGTH =
  20_000;

const PATHWAYS = [
  "mechanical",
  "electrical_instrumentation",
  "chemical_process",
  "civil_structural",
  "project_management",
] as const;

const CAREER_STAGES = [
  "student_graduate",
  "early_career",
  "developing",
  "experienced",
  "transitioning",
  "returning",
] as const;

const RATE_WINDOW_MS =
  15 * 60 * 1000;

const RATE_LIMIT =
  5;

// ============================================================
// TYPES
// ============================================================

type InterestRequestBody = {
  first_name?: unknown;
  email?: unknown;
  engineering_path?: unknown;
  career_stage?: unknown;
  development_challenge?: unknown;
  willing_to_test?: unknown;
  consent?: unknown;
  website?: unknown;
  utm_source?: unknown;
  utm_medium?: unknown;
  utm_campaign?: unknown;
};

// ============================================================
// BASIC IN-MEMORY RATE LIMIT
// ============================================================
//
// This is suitable as an MVP protection layer.
//
// Vercel serverless instances do not share memory, so it should
// not be treated as a complete distributed rate limiter.
// ============================================================

const requestsByIp =
  new Map<string, number[]>();

// ============================================================
// POST
// ============================================================

export async function POST(
  request: Request
) {
  try {
    // --------------------------------------------------------
    // 1. CHECK DECLARED REQUEST SIZE
    // --------------------------------------------------------

    const contentLength =
      Number(
        request.headers.get(
          "content-length"
        ) || 0
      );

    if (
      Number.isFinite(
        contentLength
      ) &&
      contentLength >
        MAX_REQUEST_BODY_LENGTH
    ) {
      return errorResponse(
        "Invalid request.",
        400
      );
    }

    // --------------------------------------------------------
    // 2. RATE LIMIT
    // --------------------------------------------------------

    const ip =
      getClientIp(request);

    const now =
      Date.now();

    const recentRequests =
      (
        requestsByIp.get(ip) ||
        []
      ).filter(
        (timestamp) =>
          now - timestamp <
          RATE_WINDOW_MS
      );

    if (
      recentRequests.length >=
      RATE_LIMIT
    ) {
      return errorResponse(
        "Too many requests. Please wait before trying again.",
        429
      );
    }

    recentRequests.push(now);

    requestsByIp.set(
      ip,
      recentRequests
    );

    pruneRateLimitMap(now);

    // --------------------------------------------------------
    // 3. READ AND PARSE BODY
    // --------------------------------------------------------

    const rawBody =
      await request.text();

    if (
      rawBody.length >
      MAX_REQUEST_BODY_LENGTH
    ) {
      return errorResponse(
        "Invalid request.",
        400
      );
    }

    let body:
      | InterestRequestBody
      | null = null;

    try {
      const parsed:
        unknown =
        JSON.parse(rawBody);

      if (
        parsed &&
        typeof parsed ===
          "object" &&
        !Array.isArray(parsed)
      ) {
        body =
          parsed as InterestRequestBody;
      }
    } catch {
      body = null;
    }

    if (!body) {
      return errorResponse(
        "Invalid request.",
        400
      );
    }

    // --------------------------------------------------------
    // 4. HONEYPOT
    // --------------------------------------------------------
    //
    // Return a normal-looking response so automated submitters
    // are not told that the request was rejected.
    // --------------------------------------------------------

    if (
      clean(
        body.website,
        200
      )
    ) {
      return NextResponse.json(
        {
          success: true,
        },
        {
          status: 201,
        }
      );
    }

    // --------------------------------------------------------
    // 5. NORMALISE INPUTS
    // --------------------------------------------------------

    const firstName =
      clean(
        body.first_name,
        100
      );

    const email =
      clean(
        body.email,
        320
      ).toLowerCase();

    const engineeringPath =
      clean(
        body.engineering_path,
        100
      );

    const careerStage =
      clean(
        body.career_stage,
        100
      );

    const developmentChallenge =
      clean(
        body.development_challenge,
        500
      ) || null;

    const willingToTest =
      body.willing_to_test ===
      true;

    const consent =
      body.consent === true;

    const utmSource =
      clean(
        body.utm_source,
        100
      ) || "direct";

    const utmMedium =
      clean(
        body.utm_medium,
        100
      ) || "none";

    const utmCampaign =
      clean(
        body.utm_campaign,
        150
      ) || "prelaunch";

    // --------------------------------------------------------
    // 6. VALIDATE
    // --------------------------------------------------------

    if (!firstName) {
      return errorResponse(
        "Enter your first name.",
        400
      );
    }

    if (!isEmail(email)) {
      return errorResponse(
        "Enter a valid email address.",
        400
      );
    }

    if (
      !PATHWAYS.includes(
        engineeringPath as
          (typeof PATHWAYS)[number]
      )
    ) {
      return errorResponse(
        "Select a valid engineering pathway.",
        400
      );
    }

    if (
      !CAREER_STAGES.includes(
        careerStage as
          (typeof CAREER_STAGES)[number]
      )
    ) {
      return errorResponse(
        "Select a valid career stage.",
        400
      );
    }

    if (!consent) {
      return errorResponse(
        "Consent is required to register for MVP updates.",
        400
      );
    }

    // --------------------------------------------------------
    // 7. INSERT REGISTRATION
    // --------------------------------------------------------

    const admin =
      getAdminClient();

    const consentedAt =
      new Date().toISOString();

    const {
      data: inserted,
      error: insertError,
    } = await admin
      .from(
        "mvp_interest_registrations"
      )
      .insert({
        first_name:
          firstName,

        email,

        engineering_path:
          engineeringPath,

        career_stage:
          careerStage,

        development_challenge:
          developmentChallenge,

        willing_to_test:
          willingToTest,

        consent:
          true,

        consent_text:
          CONSENT_TEXT,

        consent_version:
          CONSENT_VERSION,

        consented_at:
          consentedAt,

        privacy_version:
          PRIVACY_VERSION,

        utm_source:
          utmSource,

        utm_medium:
          utmMedium,

        utm_campaign:
          utmCampaign,

        status:
          "interested",
      })
      .select("id")
      .single();

    if (insertError) {
      if (
        insertError.code ===
        "23505"
      ) {
        /*
         * Do not reveal whether an email address is already
         * registered. Also avoid sending repeated confirmation
         * emails for duplicate submissions.
         */

        return NextResponse.json(
          {
            success: true,
          },
          {
            status: 201,
          }
        );
      }

      console.error(
        "MVP INTEREST: Database insertion failed",
        {
          code:
            insertError.code,

          message:
            insertError.message,
        }
      );

      return errorResponse(
        "We could not register your interest. Please try again.",
        500
      );
    }

    if (
      !inserted?.id
    ) {
      console.error(
        "MVP INTEREST: Registration inserted without an ID"
      );

      return errorResponse(
        "We could not register your interest. Please try again.",
        500
      );
    }

    // --------------------------------------------------------
    // 8. SEND CONFIRMATION EMAIL
    // --------------------------------------------------------

    const resend =
      getResendClient();

    if (!resend) {
      /*
       * The registration has already been stored successfully.
       * Do not present this as a failed registration merely
       * because the confirmation email could not be sent.
       */

      console.error(
        "MVP INTEREST: RESEND_API_KEY is not configured"
      );

      return NextResponse.json(
        {
          success: true,
          emailSent: false,
        },
        {
          status: 201,
        }
      );
    }

    const safeFirstName =
      escapeHtml(firstName);

    const html =
      createConfirmationEmail(
        safeFirstName
      );

    const {
      data: emailData,
      error: emailError,
    } =
      await resend.emails.send({
        from:
          getSenderAddress(),

        replyTo:
          "hello@engineersadvance.com",

        to:
          email,

        subject:
          "Your Engineers Advance interest is registered",

        text:
          createPlainTextEmail(
            firstName
          ),

        html,
      });

    if (emailError) {
      console.error(
        "MVP INTEREST: Confirmation email failed",
        {
          message:
            emailError.message,
        }
      );

      return NextResponse.json(
        {
          success: true,
          emailSent: false,
        },
        {
          status: 201,
        }
      );
    }

    // --------------------------------------------------------
    // 9. RECORD EMAIL DELIVERY REQUEST
    // --------------------------------------------------------

    const {
      error: emailUpdateError,
    } = await admin
      .from(
        "mvp_interest_registrations"
      )
      .update({
        confirmation_email_sent:
          true,

        confirmation_email_id:
          emailData?.id ||
          null,

        confirmation_email_sent_at:
          new Date().toISOString(),
      })
      .eq(
        "id",
        inserted.id
      );

    if (emailUpdateError) {
      /*
       * The registration and email send have both succeeded.
       * Log the instrumentation failure without returning an
       * error to the candidate.
       */

      console.error(
        "MVP INTEREST: Failed to record confirmation email",
        {
          code:
            emailUpdateError.code,

          message:
            emailUpdateError.message,
        }
      );
    }

    // --------------------------------------------------------
    // 10. SUCCESS
    // --------------------------------------------------------

    return NextResponse.json(
      {
        success: true,
        emailSent: true,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(
      "MVP INTEREST: Unexpected route failure",
      error instanceof Error
        ? {
            name:
              error.name,

            message:
              error.message,
          }
        : {
            message:
              "Unknown error",
          }
    );

    return errorResponse(
      "We could not register your interest. Please try again.",
      500
    );
  }
}

// ============================================================
// ENVIRONMENT HELPERS
// ============================================================

function getResendClient() {
  const apiKey =
    process.env.RESEND_API_KEY
      ?.trim();

  if (!apiKey) {
    return null;
  }

  return new Resend(
    apiKey
  );
}

function getSenderAddress() {
  const configuredSender =
    process.env
      .RESEND_FROM_EMAIL
      ?.trim();

  if (configuredSender) {
    return configuredSender;
  }

  return "Engineers Advance <hello@engineersadvance.com>";
}

function getSiteUrl() {
  const configuredUrl =
    process.env
      .NEXT_PUBLIC_SITE_URL
      ?.trim();

  return (
    configuredUrl ||
    "https://engineersadvance.com"
  ).replace(/\/+$/, "");
}

// ============================================================
// EMAIL TEMPLATES
// ============================================================

function createPlainTextEmail(
  firstName: string
) {
  return [
    `Hi ${firstName},`,
    "",
    "Thank you for registering your interest in Engineers Advance.",
    "",
    "We are preparing the MVP and will contact selected candidates when early-access invitations begin.",
    "",
    "No platform account has been created and no CV is required at this stage. If you later accept an invitation, you will complete the normal verified signup process.",
    "",
    "Questions? Reply to this email.",
    "",
    "To stop receiving MVP access or launch updates, reply with “unsubscribe”.",
    "",
    "Engineers Advance Ltd",
    "Company number 16760261",
  ].join("\n");
}

function createConfirmationEmail(
  safeFirstName: string
) {
  const siteUrl =
    getSiteUrl();

  return `
<!doctype html>
<html lang="en">
  <head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
    />
    <meta
      http-equiv="Content-Type"
      content="text/html; charset=UTF-8"
    />
    <title>
      Your Engineers Advance interest is registered
    </title>
  </head>

  <body
    style="
      margin: 0;
      padding: 0;
      background: #f5f7fa;
      font-family: Arial, Helvetica, sans-serif;
      color: #374151;
    "
  >
    <table
      role="presentation"
      width="100%"
      cellspacing="0"
      cellpadding="0"
      border="0"
      style="background: #f5f7fa;"
    >
      <tr>
        <td
          align="center"
          style="padding: 40px 16px;"
        >
          <table
            role="presentation"
            width="100%"
            cellspacing="0"
            cellpadding="0"
            border="0"
            style="
              max-width: 540px;
              background: #ffffff;
              border: 1px solid #e5e7eb;
              border-radius: 12px;
            "
          >
            <tr>
              <td
                align="center"
                style="padding: 32px 32px 20px;"
              >
                <img
                  src="${siteUrl}/logo1.png"
                  alt="Engineers Advance"
                  width="170"
                  style="
                    display: block;
                    width: 170px;
                    max-width: 100%;
                    height: auto;
                    margin: 0 auto;
                    border: 0;
                  "
                />
              </td>
            </tr>

            <tr>
              <td
                style="padding: 0 32px 32px;"
              >
                <p
                  style="
                    margin: 0;
                    color: #4b5563;
                    font-size: 16px;
                    line-height: 1.6;
                  "
                >
                  Hi ${safeFirstName},
                </p>

                <h1
                  style="
                    margin: 20px 0 0;
                    color: #0a2540;
                    font-size: 24px;
                    line-height: 1.3;
                    text-align: center;
                  "
                >
                  Your interest is registered
                </h1>

                <p
                  style="
                    margin: 18px 0 0;
                    color: #4b5563;
                    font-size: 15px;
                    line-height: 1.7;
                  "
                >
                  Thank you for registering your interest in
                  Engineers Advance. We are preparing the MVP and
                  will contact selected candidates when early-access
                  invitations begin.
                </p>

                <div
                  style="
                    margin: 24px 0;
                    padding: 18px;
                    border: 1px solid #e5e7eb;
                    border-radius: 10px;
                    background: #f9fafb;
                    color: #4b5563;
                    font-size: 14px;
                    line-height: 1.7;
                  "
                >
                  No platform account has been created and no CV is
                  required at this stage. If you later accept an
                  invitation, you will complete the normal verified
                  signup process.
                </div>

                <p
                  style="
                    margin: 0;
                    color: #6b7280;
                    font-size: 13px;
                    line-height: 1.6;
                  "
                >
                  Questions? Reply directly to this email. If you no
                  longer want MVP access or launch updates, reply with
                  “unsubscribe”.
                </p>
              </td>
            </tr>

            <tr>
              <td
                style="
                  border-top: 1px solid #e5e7eb;
                  padding: 20px 32px;
                  text-align: center;
                  color: #9ca3af;
                  font-size: 12px;
                  line-height: 1.6;
                "
              >
                Engineers Advance Ltd · Company number 16760261
                <br />

                <a
                  href="${siteUrl}/privacy"
                  style="color: #6b7280;"
                >
                  Privacy Policy
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();
}

// ============================================================
// REQUEST HELPERS
// ============================================================

function errorResponse(
  error: string,
  status: number
) {
  return NextResponse.json(
    {
      error,
    },
    {
      status,
    }
  );
}

function clean(
  value: unknown,
  maximumLength: number
) {
  if (
    typeof value !==
    "string"
  ) {
    return "";
  }

  return value
    .trim()
    .slice(
      0,
      maximumLength
    );
}

function isEmail(
  value: string
) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    value
  );
}

function getClientIp(
  request: Request
) {
  const forwardedFor =
    request.headers.get(
      "x-forwarded-for"
    );

  if (forwardedFor) {
    return (
      forwardedFor
        .split(",")[0]
        ?.trim() ||
      "unknown"
    );
  }

  return (
    request.headers.get(
      "x-real-ip"
    ) ||
    "unknown"
  );
}

function pruneRateLimitMap(
  now: number
) {
  /*
   * Prevent stale IP entries from accumulating indefinitely in
   * a long-lived development or server process.
   */

  if (
    requestsByIp.size <
    500
  ) {
    return;
  }

  for (
    const [
      ip,
      timestamps,
    ] of requestsByIp
  ) {
    const recent =
      timestamps.filter(
        (timestamp) =>
          now - timestamp <
          RATE_WINDOW_MS
      );

    if (
      recent.length === 0
    ) {
      requestsByIp.delete(
        ip
      );
    } else {
      requestsByIp.set(
        ip,
        recent
      );
    }
  }
}

function escapeHtml(
  value: string
) {
  const entities:
    Record<string, string> = {
      "&":
        "&amp;",

      "<":
        "&lt;",

      ">":
        "&gt;",

      '"':
        "&quot;",

      "'":
        "&#039;",
    };

  return value.replace(
    /[&<>"']/g,
    (character) =>
      entities[character] ||
      character
  );
}