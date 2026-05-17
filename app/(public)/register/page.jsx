"use client";

import { useState } from "react";

export default function Register() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    let data;
    try {
      data = await res.json();
    } catch {
      alert("Unexpected server response");
      setLoading(false);
      return;
    }

    if (res.ok) {
      alert(data.message);
      window.location.href = "/login";   // 🔥 redirect happens here
    } else {
      alert(data.error || "Something went wrong");
    }

    setLoading(false);
  };

  return (
    <main className="pt-28 max-w-md mx-auto p-10 pt-36">
      <h1 className="text-3xl font-bold mb-6">Create Your Account</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border p-3 rounded"
            placeholder="Your name"
          />
        </div>

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
            placeholder="Create a password"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 w-full"
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>
      </form>
    </main>
  );
}