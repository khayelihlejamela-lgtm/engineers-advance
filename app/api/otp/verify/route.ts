export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  const { email, code } = await req.json();

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );

  const { data } = await supabase
    .from("email_otps")
    .select("*")
    .eq("email", email)
    .eq("code", code)
    .eq("used", false)
    .single();

  if (!data || new Date(data.expires_at) < new Date()) {
    return NextResponse.json({ verified: false });
  }

  await supabase
    .from("email_otps")
    .update({ used: true })
    .eq("id", data.id);

  return NextResponse.json({ verified: true });
}
