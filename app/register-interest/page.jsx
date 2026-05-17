"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function RegisterInterest() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const res = await fetch("/api/register-interest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        full_name: formData.get("full_name"),
        email: formData.get("email"),
        background: formData.get("background"),
        message: formData.get("message"),
      }),
    });

    if (res.ok) {
      router.push("/register-interest/success");
      return;
    }

    setLoading(false);
  };

  return (
    <>
      {/* CLICKABLE LOGO */}
      <header className="py-2 flex justify-center items-center w-full">
        <Link href="/" className="max-w-[150px] w-full px-2 flex justify-center">
          <Image
            src="/logo1.png"
            alt="Engineers Advance Logo"
            width={500}
            height={500}
            className="w-full h-auto cursor-pointer"
            priority
          />
        </Link>
      </header>

      {/* FORM SECTION */}
      <section className="max-w-xl mx-auto pt-4 pb-10 px-4 sm:px-10">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Be First to Access Engineers Advance
        </h1>

        <p className="text-gray-600 text-center mb-10">
          Get notified when we launch and gain early access to pathways, guidance, and opportunities.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="full_name"
              required
              className="w-full border p-2 rounded"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border p-2 rounded"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Background</label>
            <input
              type="text"
              name="background"
              className="w-full border p-2 rounded"
              placeholder="Mechanical Engineer, Graduate, Career Switcher..."
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message (Optional)</label>
            <textarea
              name="message"
              rows="3"
              className="w-full border p-3 rounded"
              placeholder="Tell us a bit about your goals..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[var(--brand-secondary)] text-white px-6 py-2 rounded-md hover:bg-[var(--brand-primary)] w-full"
          >
            {loading ? "Submitting..." : "Get Early Access"}
          </button>
        </form>
      </section>
    </>
  );
}
