export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// ⭐ Branded Partner Confirmation Email Template
const PARTNER_TEMPLATE = `
<div style="background:#f5f7fa; padding:40px 0; font-family:Arial, sans-serif;">
  <div style="max-width:520px; margin:0 auto; background:white; border-radius:12px; padding:32px; border:1px solid #e5e7eb;">
    
    <div style="text-align:center; margin-bottom:24px;">
      <img src="https://engineersadvance.com/logo1.png" alt="Engineers Advance" style="height:48px; width:auto;" />
    </div>

    <h2 style="color:#0A2540; text-align:center; font-size:22px; margin:0 0 12px;">
      Partnership Enquiry Received
    </h2>

    <p style="color:#4b5563; font-size:16px; text-align:center; margin:0 0 24px;">
      Hi {{NAME}},<br/>
      Thank you for your interest in partnering with <strong>Engineers Advance</strong>.
    </p>

    <p style="color:#4b5563; font-size:15px; line-height:1.6; margin-bottom:24px;">
      We've received your partnership enquiry and our team is currently reviewing the details you shared.
      We typically respond within <strong>2–3 working days</strong> with next steps, collaboration options,
      and any additional information we may need.
      <br/><br/>
      If your enquiry is time-sensitive, you can reply directly to this email and we’ll do our best to prioritise it.
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
      If you didn’t submit this enquiry, you can safely ignore this email.<br/>
      © ${new Date().getFullYear()} Engineers Advance. All rights reserved.
    </p>

  </div>
</div>
`;


// ⭐ Simple IP-based rate limiting
const rateLimitMap = new Map<string, number[]>();
const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 3;

export async function POST(req: Request) {
  console.log("🔥 API HIT: /api/partner-enquiry");

  try {
    // ⭐ Rate limiting
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();

    const userRequests = rateLimitMap.get(ip) || [];
    const recentRequests = userRequests.filter((t: number) => now - t < WINDOW_MS);

    if (recentRequests.length >= MAX_REQUESTS) {
      return NextResponse.json(
        { error: "You are submitting too quickly. Please try again later." },
        { status: 429 }
      );
    }

    recentRequests.push(now);
    rateLimitMap.set(ip, recentRequests);

    // ⭐ Parse incoming data
    const data = await req.json();
    console.log("📥 Received data:", data);

    const organisation = data.organisation;
    const contact_name = data.contact_name;
    const email = data.email;
    const partnership_type = data.partnership_type;
    const message = data.message;

    // ⭐ Validation
    if (!organisation || typeof organisation !== "string") {
      return NextResponse.json({ error: "Organisation name is required" }, { status: 400 });
    }

    if (!contact_name || typeof contact_name !== "string") {
      return NextResponse.json({ error: "Contact name is required" }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    if (!partnership_type || typeof partnership_type !== "string") {
      return NextResponse.json({ error: "Partnership type is required" }, { status: 400 });
    }

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // ⭐ Supabase client
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false } }
    );

    // ⭐ Insert into Supabase
    const { error } = await supabase
      .from("partner_submissions")
      .insert([{ organisation, contact_name, email, partnership_type, message }]);

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "This organisation has already submitted an enquiry." },
          { status: 409 }
        );
      }

      console.error("❌ Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to save partner enquiry" },
        { status: 500 }
      );
    }

    // ⭐ Send confirmation email
    const html = PARTNER_TEMPLATE.replace("{{NAME}}", contact_name);

    await resend.emails.send({
      from: "Engineers Advance <no-reply@engineersadvance.com>",
      to: email,
      subject: "Partnership Enquiry Received",
      text:
        "Thank you for your partnership enquiry. Our team will review it and respond within 2–3 working days.",
      html,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("❌ Route error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
