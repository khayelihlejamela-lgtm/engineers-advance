export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export async function POST(req: Request) {
  const { email } = await req.json();

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );

  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const expires = new Date(Date.now() + 1000 * 60 * 10);

  await supabase.from("email_otps").insert({
    email,
    code,
    expires_at: expires,
    used: false,
  });

  const resend = new Resend(process.env.RESEND_API_KEY!);

    const htmlTemplate = `
    <div style="background:#f5f7fa; padding:40px 0; font-family:Arial, sans-serif;">
      <div style="max-width:520px; margin:0 auto; background:white; border-radius:12px; padding:32px; border:1px solid #e5e7eb;">
        
        <div style="text-align:center; margin-bottom:24px;">
          <img src="https://engineersadvance.com/logo1.png" alt="Engineers Advance" style="height:48px; width:auto;" />
        </div>

        <h2 style="color:#0A2540; text-align:center; font-size:22px; margin:0 0 12px;">
          Your Verification Code
        </h2>

        <p style="color:#4b5563; font-size:16px; text-align:center; margin:0 0 24px;">
          Use the code below to verify your email address with <strong>Engineers Advance</strong>.
        </p>

        <div style="
          font-size:36px;
          font-weight:bold;
          letter-spacing:8px;
          text-align:center;
          padding:16px 0;
          background:#f3f4f6;
          border-radius:8px;
          color:#0A2540;
          border:1px solid #d1d5db;
          margin-bottom:24px;
        ">
          ${code}
        </div>

        <p style="color:#6b7280; font-size:14px; text-align:center; margin-bottom:32px;">
          This code expires in <strong>10 minutes</strong>.
        </p>

        <p style="color:#9ca3af; font-size:12px; text-align:center; line-height:1.5;">
          If you didn’t request this code, you can safely ignore this email.<br/>
          © ${new Date().getFullYear()} Engineers Advance. All rights reserved.
        </p>

      </div>
    </div>
  `;

  await resend.emails.send({
    from: "Engineers Advance <no-reply@engineersadvance.com>",
    to: email,
    subject: "Your Engineers Advance Verification Code",
    text: `Your verification code is: ${code}`,
    html: htmlTemplate,
  });

  return Response.json({ success: true });
}
