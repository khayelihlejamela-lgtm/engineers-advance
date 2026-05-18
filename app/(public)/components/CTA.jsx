"use client";

import { useState, useEffect, useRef } from "react";

export default function CTASection() {
  const [mounted, setMounted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const hasErrors = Object.keys(errors).length > 0;

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const pathwayRef = useRef(null);

  const scrollToFirstError = (errors) => {
  if (errors.fullName && fullNameRef.current) {
    fullNameRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  if (errors.email && emailRef.current) {
    emailRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  if (errors.phone && phoneRef.current) {
    phoneRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  if (errors.pathway && pathwayRef.current) {
    pathwayRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
};


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const fullName = form.fullName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const pathway = form.pathway.value.trim();

    const newErrors = {};

    if (!fullName) newErrors.fullName = "Full name is required";
    if (!email) newErrors.email = "Email is required";
    if (!phone) newErrors.phone = "Phone number is required";
    if (!pathway) newErrors.pathway = "Please select a pathway";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      scrollToFirstError(newErrors);
      setLoading(false);
      return;
    }
    
    setLoading(true);

    const res = await fetch("/api/register-interest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        full_name: fullName,
        email,
        background: `CTA - ${pathway}`,
        message: `Phone: ${phone}`,
      }),
    });

    if (res.status === 409) {
      setErrors({ email: "This email has already been registered" });
      setLoading(false);
      return;
    }

    setLoading(false);

    setSubmitted(true);
  };

  return submitted ? (
    <section id="cta" className="scroll-mt-[var(--navbar-height)] relative py-10 px-6 bg-white">
      <div className="max-w-3xl mx-auto bg-gray-50 p-10 rounded-2xl shadow-lg border border-[var(--brand-secondary)]/20 text-center">
        <h2 className="text-3xl font-bold text-[var(--brand-primary)] mb-4">
          Thank you!
        </h2>
        <p className="text-gray-700 text-lg">
          We’ll be in touch soon.
        </p>
      </div>
    </section>
  ) : (
    <section id="cta" className="scroll-mt-[var(--navbar-height)] relative py-10 px-6 bg-white">

      <h2 className="text-4xl text-[var(--brand-primary)] font-bold text-center mb-4 font-montserrat">
        Ready to Start Your Engineering Journey?
      </h2>

      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
        Register your interest and we’ll contact you with next steps.
      </p>

      <div className="max-w-3xl mx-auto bg-gray-50 p-10 rounded-2xl shadow-lg border border-[var(--brand-secondary)]/20">

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">

          {/* Full Name */}
          <div>
            <label className="block mb-2 font-semibold text-gray-800">
              Full Name
            </label>
            <input
              ref={fullNameRef}
              name="fullName"
              type="text"
              className={`w-full p-3 rounded-md border ${
                errors.fullName
                  ? "border-red-500"
                  : "border-[var(--brand-secondary)]/40"
              } bg-white text-gray-800 
              focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] 
              transition-all duration-300`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-semibold text-gray-800">
              Email Address
            </label>
            <input
              ref={emailRef}
              name="email"
              type="email"
              className={`w-full p-3 rounded-md border ${
                errors.email
                  ? "border-red-500"
                  : "border-[var(--brand-secondary)]/40"
              } bg-white text-gray-800 
              focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] 
              transition-all duration-300`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-semibold text-gray-800">
              Phone Number
            </label>
            <input
              ref={phoneRef}
              name="phone"
              type="tel"
              className={`w-full p-3 rounded-md border ${
                errors.phone
                  ? "border-red-500"
                  : "border-[var(--brand-secondary)]/40"
              } bg-white text-gray-800 
              focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] 
              transition-all duration-300`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Pathway */}
          <div>
            <label className="block mb-2 font-semibold text-gray-800">
              Engineering Pathway
            </label>
            <select
              ref={pathwayRef}
              name="pathway"
              className={`w-full p-3 rounded-md border ${
                errors.pathway
                  ? "border-red-500"
                  : "border-[var(--brand-secondary)]/40"
              } bg-white text-gray-800 
              focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] 
              transition-all duration-300`}
            >
              <option value="">Select a pathway</option>
              <option>Mechanical Engineering</option>
              <option>Electrical Engineering</option>
              <option>Manufacturing & Production</option>
              <option>Energy & Renewables</option>
              <option>General Engineering</option>
            </select>
            {errors.pathway && (
              <p className="text-red-500 text-sm mt-1">{errors.pathway}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-semibold text-gray-800">
              Tell us about your background (optional)
            </label>
            <textarea
              name="message"
              rows="5"
              className="w-full p-3 rounded-md border border-[var(--brand-secondary)]/40 
                         bg-white text-gray-800 
                         focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] 
                         transition-all duration-300"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`
                py-3 rounded-md font-semibold transition-all duration-300
                touch-manipulation

                ${loading 
                  ? "opacity-60 cursor-not-allowed" 
                  : "hover:bg-[var(--brand-primary)] active:scale-95 active:bg-[var(--brand-primary)]"
                }

                ${hasErrors 
                  ? "border-2 border-red-500 bg-white text-red-600 animate-[shake_0.2s_ease-in-out]" 
                  : "bg-[var(--brand-secondary)] text-white"
                }
              `}
            >
              {loading ? "Submitting..." : "Register Your Interest"}
            {errors.submit && (
              <p className="text-red-500 text-center mt-4">{errors.submit}</p>
            )}
          </button>
        </form>

      </div>
    </section>
  );
}
