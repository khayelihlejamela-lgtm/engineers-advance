import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { email, name } = await req.json();

  const htmlTemplate = `
    <div style="background:#f5f7fa; padding:40px 0; font-family:Arial, sans-serif;">
      <div style="max-width:520px; margin:0 auto; background:white; border-radius:12px; padding:32px; border:1px solid #e5e7eb;">
        
        <div style="text-align:center; margin-bottom:24px;">
          <img src="https://engineersadvance.com/logo1.png" alt="Engineers Advance" style="height:48px; width:auto;" />
        </div>

        <h2 style="color:#0A2540; text-align:center; font-size:22px; margin:0 0 12px;">
          Thank You for Registering Your Interest
        </h2>

        <p style="color:#4b5563; font-size:16px; text-align:center; margin:0 0 24px;">
          Hi ${name || ""},<br/>
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

  await resend.emails.send({
    from: "Engineers Advance <no-reply@engineersadvance.com>",
    to: email,
    subject: "Thanks for Registering Your Interest",
    text: `Thank you for registering your interest with Engineers Advance. We’ll be in touch soon.`,
    html: htmlTemplate,
  });

  return Response.json({ success: true });
}
