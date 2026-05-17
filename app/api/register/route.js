{/*import { supabase } from "../../../lib/supabase";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json(
      { message: "Account created! Please check your email to verify." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Registration error:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
  */}