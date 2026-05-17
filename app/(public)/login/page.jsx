"use client";

import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      window.location.href = "/dashboard";
    } else {
      alert(data.error || "Invalid email or password");
    }

    setLoading(false);
  };

  return (
    <main className="pt-28 max-w-md mx-auto p-10 pt-36">
      <h1 className="text-3xl font-bold mb-6">Sign In</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border p-3 rounded"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="password"
            required
            className="w-full border p-3 rounded"
            placeholder="Your password"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 w-full"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-4">
        Don’t have an account?{" "}
        <a href="/register" className="text-blue-600 hover:underline">
          Create one
        </a>
      </p>
    </main>
  );
}
