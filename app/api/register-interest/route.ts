export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting (Node runtime only)
const rateLimitMap = new Map<string, number[]>();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

export async function POST(req: Request) {
  console.log("🔥 API HIT: /api/register-interest");

  // Rate limit
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();

  const userRequests = rateLimitMap.get(ip) || [];
  const recentRequests = userRequests.filter((t) => now - t < WINDOW_MS);

  if (recentRequests.length >= MAX_REQUESTS) {
    return NextResponse.json(
      { error: "You are submitting too quickly. Please try again later." },
      { status: 429 }
    );
  }

  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);

  try {
    const data = await req.json();
    console.log("📥 Received data:", data);

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false } }
    );

    const full_name = data.full_name || data.fullName;
    const email = data.email;
    const background = data.background || "CTA Registration";
    const message = data.message || null;

    // Validation
    if (!full_name || typeof full_name !== "string") {
      return NextResponse.json({ error: "Full name is required" }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    if (!background || typeof background !== "string") {
      return NextResponse.json({ error: "Background is required" }, { status: 400 });
    }

    // Insert into Supabase
    const { error } = await supabase
      .from("interest_submissions")
      .insert([{ full_name, email, background, message }]);

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "You have already registered your interest." },
          { status: 409 }
        );
      }

      console.error("❌ Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to save registration" },
        { status: 500 }
      );
    }

    const CTA_TEMPLATE = `
      <div style="background:#f5f7fa; padding:40px 0; font-family:Arial, sans-serif;">
        <div style="max-width:520px; margin:0 auto; background:white; border-radius:12px; padding:32px; border:1px solid #e5e7eb;">
          
          <div style="text-align:center; margin-bottom:24px;">
            <img src="https://engineersadvance.com/logo1.png" alt="Engineers Advance" style="height:48px; width:auto;" />
          </div>

          <h2 style="color:#0A2540; text-align:center; font-size:22px; margin:0 0 12px;">
            Thank You for Registering Your Interest
          </h2>

          <p style="color:#4b5563; font-size:16px; text-align:center; margin:0 0 24px;">
            Hi {{NAME}},<br/>
            We're excited to have you on this journey with <strong>Engineers Advance</strong>.
          </p>

          <p style="color:#4b5563; font-size:15px; line-height:1.6; margin-bottom:24px;">
            Your registration has been received successfully. Our team is currently reviewing your submission, and we’ll be in touch soon with the next steps.
            <br/><br/>
            In the meantime, feel free to explore our pathways, resources, and upcoming opportunities designed to help you advance your engineering career.
          </p>

          <div style="text-align:center; margin:32px 0;">
            <a href="https://engineersadvance.com"
              style="
                background:#0A2540;
                color:white;
                padding:12px 24px;
                border-radius:8px;
                text-decoration:none;
                font-size:16px;
                font-weight:bold;
                display:inline-block;
              ">
              Visit Engineers Advance
            </a>
          </div>

          <p style="color:#9ca3af; font-size:12px; text-align:center; line-height:1.5;">
            If you didn’t submit this registration, you can safely ignore this email.<br/>
            © ${new Date().getFullYear()} Engineers Advance. All rights reserved.
          </p>

        </div>
      </div>
      `;


    // 2. Send confirmation email
    const html = CTA_TEMPLATE.replace("{{NAME}}", full_name || "");

    await resend.emails.send({
      from: "Engineers Advance <no-reply@engineersadvance.com>",
      to: email,
      subject: "Thanks for Registering Your Interest",
      text: `Thank you for registering your interest with Engineers Advance.`,
      html,
    });

    // 3. Return success
    return Response.json({ success: true });
    } 
  
  catch (err) {
    console.error("❌ Route error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}