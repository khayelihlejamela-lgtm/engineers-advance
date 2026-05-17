import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// ⭐ Simple IP-based rate limiting
const rateLimitMap = new Map<string, number[]>();
const WINDOW_MS = 60 * 1000; // 1 minute
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

    // ⭐ Server-side validation
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
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // ⭐ Insert into Supabase
    const { error } = await supabase
      .from("partner_submissions")
      .insert([{ organisation, contact_name, email, partnership_type, message }]);

    // ⭐ Duplicate email protection
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

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Route error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
