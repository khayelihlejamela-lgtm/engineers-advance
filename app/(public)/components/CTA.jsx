"use client";

import { useState, useEffect, useRef } from "react";

export default function CTASection() {
  const [mounted, setMounted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpVerifying, setOtpVerifying] = useState(false);


  const hasErrors = Object.keys(errors).length > 0;

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const pathwayRef = useRef(null);

  const scrollToFirstError = (errors) => {
  const scroll = (ref) => {
    if (!ref?.current) return;
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => window.scrollBy(0, -120), 200); // adjust for navbar
  };

  if (errors.fullName) return scroll(fullNameRef);
  if (errors.email) return scroll(emailRef);
  if (errors.phone) return scroll(phoneRef);
  if (errors.pathway) return scroll(pathwayRef);
};

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      scrollToFirstError(errors);
    }
  }, [errors]);


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const sendOtp = async () => {
  if (!emailRef.current.value.trim()) {
    setErrors({ email: "Email is required" });
    return;
  }

  setOtpLoading(true);

  const res = await fetch("/api/otp/send", {
    method: "POST",
    body: JSON.stringify({ email: emailRef.current.value.trim() }),
  });

  setOtpLoading(false);

  if (res.ok) {
    setOtpSent(true);
  }
};

  const verifyOtp = async () => {
    setOtpVerifying(true);

    const res = await fetch("/api/otp/verify", {
      method: "POST",
      body: JSON.stringify({
        email: emailRef.current.value.trim(),
        code: otp,
      }),
    });

    const data = await res.json();
    setOtpVerifying(false);

    if (data.verified) {
      setOtpVerified(true);
    } else {
      setErrors({ email: "Invalid or expired code" });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otpVerified) {
    setErrors({ email: "Please verify your email first" });
    scrollToFirstError({ email: true });
    return;
  }


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
                errors.email ? "border-red-500" : "border-[var(--brand-secondary)]/40"
              } bg-white text-gray-800 
              focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] 
              transition-all duration-300`}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}

            {/* Send OTP button */}
            {!otpSent && (
              <button
                type="button"
                onClick={sendOtp}
                className="mt-3 px-4 py-2 bg-[var(--brand-secondary)] text-white rounded-md font-semibold transition-all duration-300 hover:cursor-pointer hover:bg-[var(--brand-primary)] active:scale-95"
              >
                {otpLoading ? "Sending..." : "Send Verification Code"}
              </button>
            )}

            {/* OTP Input */}
            {otpSent && !otpVerified && (
              <div className="mt-4">
                <input
                  type="text"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full p-3 rounded-md border border-[var(--brand-secondary)]/40 text-center tracking-widest text-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] transition-all duration-300"
                  placeholder="Enter 6‑digit code"
                />

                <button
                  type="button"
                  onClick={verifyOtp}
                  className="mt-3 px-4 py-2 bg-[var(--brand-secondary)] text-white rounded-md hover:cursor-pointer font-semibold transition-all duration-300 hover:bg-[var(--brand-primary)] active:scale-95"
                >
                  {otpVerifying ? "Verifying..." : "Verify Code"}
                </button>
              </div>
            )}

            {/* Verified */}
            {otpVerified && (
              <p className="text-green-600 font-semibold mt-2">
                Email verified ✓
              </p>
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
            disabled={loading || !otpVerified} 
            className={`
                py-3 rounded-md font-semibold transition-all duration-300
                touch-manipulation

                ${!otpVerified ? "opacity-50 cursor-not-allowed" : ""}

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

      <div className="mt-8 flex justify-center gap-6 text-sm text-gray-500">
        <a
          href="/terms"
          className="hover:text-[var(--brand-secondary)] hover:underline transition-colors 
          touch-manipulation active:scale-95"
        >
          Terms & Conditions
        </a>
        <span className="text-gray-400">•</span>
        <a
          href="/privacy"
          className="hover:text-[var(--brand-secondary)] hover:underline transition-colors 
          touch-manipulation active:scale-95"
        >
          Privacy Policy
        </a>
      </div>

    </section>
  );
}
