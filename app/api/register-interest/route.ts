import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const rateLimitMap = new Map<string, number[]>();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // allow 3 submissions per minute per IP


export async function POST(req: Request) {
  console.log("🔥 API HIT: /api/register-interest");

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
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const full_name = data.full_name || data.fullName;
    const email = data.email;
    const background = data.background || "CTA Registration";
    const message = data.message || null;

    // ⭐ SERVER-SIDE VALIDATION
    if (!full_name || typeof full_name !== "string") {
      return NextResponse.json({ error: "Full name is required" }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    if (!background || typeof background !== "string") {
      return NextResponse.json({ error: "Background is required" }, { status: 400 });
    }

    const { error } = await supabase
      .from("interest_submissions")
      .insert([{ full_name, email, background, message }]);

    if (error) {
      if (error.code === "23505") {
        // 23505 = unique_violation
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

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Route error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
