"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import MobileDesktopToggle from "../(public)/components/MobileDesktopToggle";
import Navbar from "../(public)/components/Navbar";   // <-- import your navbar
import {
  BuildingOfficeIcon,
  Cog6ToothIcon,
  BoltIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  UsersIcon,
  ChartBarIcon,
  BriefcaseIcon,
  LightBulbIcon,
  MegaphoneIcon,
  PuzzlePieceIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";


export default function PartnerPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [mounted, setMounted] = useState(false);

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpVerifying, setOtpVerifying] = useState(false);

  const orgRef = useRef(null);
  const contactRef = useRef(null);
  const emailRef = useRef(null);
  const typeRef = useRef(null);
  const messageRef = useRef(null);

  const scrollToFirstError = (errors) => {
    const scroll = (ref) => {
      if (!ref?.current) return;
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => window.scrollBy(0, -120), 200);
    };

    if (errors.organisation_name) return scroll(orgRef);
    if (errors.contact_name) return scroll(contactRef);
    if (errors.email) return scroll(emailRef);
    if (errors.partnership_type) return scroll(typeRef);
    if (errors.message) return scroll(messageRef);
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


  const hasErrors = Object.keys(errors).length > 0;

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!otpVerified) {
      setErrors({ email: "Please verify your email first" });
      return;
    }

  const form = e.target;
  const organisation_name = form.organisation_name.value.trim();
  const contact_name = form.contact_name.value.trim();
  const email = form.email.value.trim();
  const partnership_type = form.partnership_type.value.trim();
  const message = form.message.value.trim();

  const newErrors = {};

  if (!organisation_name) newErrors.organisation_name = "Organisation name is required";
  if (!contact_name) newErrors.contact_name = "Contact name is required";
  if (!email) newErrors.email = "Email is required";
  if (!partnership_type) newErrors.partnership_type = "Partnership type is required";
  if (!message) newErrors.message = "Message is required";

  setErrors(newErrors);


  if (Object.keys(newErrors).length > 0) {
    return;
  }

  setLoading(true);

  const formData = new FormData(form);

  const res = await fetch("/api/partner-enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      organisation: formData.get("organisation_name"),
      contact_name: formData.get("contact_name"),
      email: formData.get("email"),
      partnership_type: formData.get("partnership_type"),
      message: formData.get("message"),
    }),
  });

    setLoading(false);

    if (res.status === 409) {
      setErrors({ email: "This email has already been registered" });
      return;
    }

    setSubmitted(true);
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar partnerMode={true} />

      {/* HERO */}
      <section className="pt-28 pb-16 px-6 bg-white text-center">
        <h1 className="text-4xl text-[var(--brand-primary)] max-w-5xl mx-auto font-bold mb-4">Empowering the next generation of engineers - and the industries that rely on them!</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Engineers Advance bridges the gap between emerging engineers and the organisations that need them.
          We provide structured pathways, practical guidance, and industry‑aligned support that helps engineers grow - and helps partners build reliable talent pipelines.
        </p>

        <button
          onClick={() =>
            document.getElementById("partner-form").scrollIntoView({ behavior: "smooth" })
          }
          className="mt-8 px-6 py-3 
            bg-[var(--brand-secondary)] text-white 
            rounded-lg 
            transition-all duration-300 
            hover:bg-[var(--brand-primary)] hover:cursor-pointer
            active:scale-95 active:bg-[var(--brand-primary)]
            focus:ring-2 focus:ring-[var(--brand-secondary)] focus:ring-offset-2
            touch-manipulation"
        >
          Become a Partner
        </button>
      </section>

      {/* WHY PARTNER */}
      <section  id="why-us"
                className="scroll-mt-[var(--navbar-height)] relative py-10 px-6 bg-gray-50">
        {/* Top fade */}
        <div
          className="absolute top-0 left-0 w-full h-16 pointer-events-none z-10"
          style={{
            background: "linear-gradient(to bottom, white 0%, rgba(255,255,255,0) 100%)"
          }}
        ></div>

        <div
          className="absolute top-0 left-0 w-full h-12 pointer-events-none z-10"
          style={{
            background: "linear-gradient(to bottom, white 0%, rgba(255,255,255,0) 100%)"
          }}
        ></div>

        <h2 className="text-3xl font-bold text-[var(--brand-primary)] text-center mb-12 font-montserrat">
          Why Partner With Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">

          {/* ITEM */}
          <div className="group flex flex-col active:scale-95
            touch-manipulation items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-md hover:-translate-y-1">
            <div className="h-20 w-20 flex items-center justify-center rounded-full border-2 border-[var(--brand-secondary)] mb-4 transition-all duration-300 group-hover:bg-[var(--brand-secondary)]">
              <UsersIcon className="h-10 w-10 text-[var(--brand-secondary)] group-hover:text-white transition-all duration-300" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Strong Partnerships</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We build long‑term, collaborative relationships that support your workforce goals.
            </p>
          </div>

          <div className="group flex flex-col active:scale-95
            touch-manipulation items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-md hover:-translate-y-1">
            <div className="h-20 w-20 flex items-center justify-center rounded-full border-2 border-[var(--brand-secondary)] mb-4 transition-all duration-300 group-hover:bg-[var(--brand-secondary)]">
              <ChartBarIcon className="h-10 w-10 text-[var(--brand-secondary)] group-hover:text-white transition-all duration-300" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">High‑Quality Talent</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Access motivated, industry‑ready engineers trained to meet your standards.
            </p>
          </div>

          <div className="group flex flex-col active:scale-95
            touch-manipulation items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-md hover:-translate-y-1">
            <div className="h-20 w-20 flex items-center justify-center rounded-full border-2 border-[var(--brand-secondary)] mb-4 transition-all duration-300 group-hover:bg-[var(--brand-secondary)]">
              <UsersIcon className="h-10 w-10 text-[var(--brand-secondary)] group-hover:text-white transition-all duration-300" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Diverse Talent Pipeline</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We help you reach underrepresented groups and strengthen workforce diversity.
            </p>
          </div>

          <div className="group flex flex-col active:scale-95
            touch-manipulation items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-md hover:-translate-y-1">
            <div className="h-20 w-20 flex items-center justify-center rounded-full border-2 border-[var(--brand-secondary)] mb-4 transition-all duration-300 group-hover:bg-[var(--brand-secondary)]">
              <ShieldCheckIcon className="h-10 w-10 text-[var(--brand-secondary)] group-hover:text-white transition-all duration-300" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Reliable Support</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              From onboarding to ongoing engagement, we support you every step of the way.
            </p>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 w-full h-24 pointer-events-none z-10"
          style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, white 100%)"
          }}
        ></div>

      </section>

      {/* PARTNERSHIP OPPORTUNITIES */}
      <section id="partnership-opportunities" 
               className=" scroll-mt-[var(--navbar-height)] py-10 px-6 bg-white">
        <h2 className="text-3xl font-bold text-[var(--brand-primary)] text-center mb-12 font-montserrat">
          Partnership Opportunities
        </h2>

        <div className="flex flex-col gap-10 max-w-4xl mx-auto">

          {/* Talent Pipeline */}
          <div className="group flex items-start gap-6 p-6 rounded-xl transition-all duration-300 
                          hover:bg-[var(--brand-secondary)] hover:shadow-md hover:-translate-y-1">

            <div className="h-20 w-20 flex items-center justify-center rounded-full bg-white 
                            border-2 border-[var(--brand-secondary)] flex-shrink-0 transition-all duration-300">
              <BriefcaseIcon className="h-10 w-10 text-[var(--brand-secondary)] 
                                      transition-all duration-300" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 
                            transition-all duration-300 group-hover:text-white">
                Talent Pipeline
              </h3>
              <p className="text-gray-600 leading-relaxed 
                            transition-all duration-300 group-hover:text-white/90">
                Connect with motivated, industry‑ready engineers prepared for real‑world roles.
              </p>
            </div>
          </div>

          {/* Training Collaboration */}
          <div className="group flex items-start gap-6 p-6 rounded-xl transition-all duration-300 
                          hover:bg-[var(--brand-secondary)] hover:shadow-md hover:-translate-y-1">

            <div className="h-20 w-20 flex items-center justify-center rounded-full bg-white 
                            border-2 border-[var(--brand-secondary)] flex-shrink-0 transition-all duration-300">
              <AcademicCapIcon className="h-10 w-10 text-[var(--brand-secondary)] 
                                      transition-all duration-300" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 
                            transition-all duration-300 group-hover:text-white">
                Training Collaboration
              </h3>
              <p className="text-gray-600 leading-relaxed 
                            transition-all duration-300 group-hover:text-white/90">
                Co‑develop training aligned with your standards and workforce needs.
              </p>
            </div>
          </div>

          {/* Industry Insights */}
          <div className="group flex items-start gap-6 p-6 rounded-xl transition-all duration-300 
                          hover:bg-[var(--brand-secondary)] hover:shadow-md hover:-translate-y-1">

            <div className="h-20 w-20 flex items-center justify-center rounded-full bg-white 
                            border-2 border-[var(--brand-secondary)] flex-shrink-0 transition-all duration-300">
              <LightBulbIcon className="h-10 w-10 text-[var(--brand-secondary)] 
                                      transition-all duration-300" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 
                            transition-all duration-300 group-hover:text-white">
                Industry Insights
              </h3>
              <p className="text-gray-600 leading-relaxed 
                            transition-all duration-300 group-hover:text-white/90">
                Share expertise and shape the next generation of engineering talent.
              </p>
            </div>
          </div>

          {/* Events & Outreach */}
          <div className="group flex items-start gap-6 p-6 rounded-xl transition-all duration-300 
                          hover:bg-[var(--brand-secondary)] hover:shadow-md hover:-translate-y-1">

            <div className="h-20 w-20 flex items-center justify-center rounded-full bg-white 
                            border-2 border-[var(--brand-secondary)] flex-shrink-0 transition-all duration-300">
              <MegaphoneIcon className="h-10 w-10 text-[var(--brand-secondary)] 
                                      transition-all duration-300" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 
                            transition-all duration-300 group-hover:text-white">
                Events & Outreach
              </h3>
              <p className="text-gray-600 leading-relaxed 
                            transition-all duration-300 group-hover:text-white/90">
                Engage with candidates through workshops, talks, and industry events.
              </p>
            </div>
          </div>

          {/* Custom Partnerships */}
          <div className="group flex items-start gap-6 p-6 rounded-xl transition-all duration-300 
                          hover:bg-[var(--brand-secondary)] hover:shadow-md hover:-translate-y-1">

            <div className="h-20 w-20 flex items-center justify-center rounded-full bg-white 
                            border-2 border-[var(--brand-secondary)] flex-shrink-0 transition-all duration-300">
              <PuzzlePieceIcon className="h-10 w-10 text-[var(--brand-secondary)] 
                                      transition-all duration-300" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 
                            transition-all duration-300 group-hover:text-white">
                Custom Partnerships
              </h3>
              <p className="text-gray-600 leading-relaxed 
                            transition-all duration-300 group-hover:text-white/90">
                Build a tailored partnership that aligns with your organisation’s goals.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className=" relative py-10 px-6 bg-gray-50">
        {/* Top fade */}
        <div
          className="absolute top-0 left-0 w-full h-12 pointer-events-none z-10"
          style={{
            background: "linear-gradient(to bottom, white 0%, rgba(255,255,255,0) 100%)"
          }}
        ></div>

        <h2 className="text-3xl text-[var(--brand-primary)] font-bold text-center mb-12 font-montserrat">
          Who We Work With
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">

          {/* ITEM */}
          <div className="group flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-md hover:-translate-y-1">
            <div className="h-20 w-20 flex items-center justify-center rounded-full border-2 border-[var(--brand-secondary)] mb-4 transition-all duration-300 group-hover:bg-[var(--brand-secondary)] group-hover:text-white">
              <BuildingOfficeIcon className="h-10 w-10 text-[var(--brand-secondary)] group-hover:text-white transition-all duration-300" />
            </div>
            <p className="text-lg font-semibold text-gray-800">Engineering Firms</p>
          </div>

          <div className="group flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-md hover:-translate-y-1">
            <div className="h-20 w-20 flex items-center justify-center rounded-full border-2 border-[var(--brand-secondary)] mb-4 transition-all duration-300 group-hover:bg-[var(--brand-secondary)] group-hover:text-white">
              <Cog6ToothIcon className="h-10 w-10 text-[var(--brand-secondary)] group-hover:text-white transition-all duration-300" />
            </div>
            <p className="text-lg font-semibold text-gray-800">Manufacturing</p>
          </div>

          <div className="group flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-md hover:-translate-y-1">
            <div className="h-20 w-20 flex items-center justify-center rounded-full border-2 border-[var(--brand-secondary)] mb-4 transition-all duration-300 group-hover:bg-[var(--brand-secondary)] group-hover:text-white">
              <BoltIcon className="h-10 w-10 text-[var(--brand-secondary)] group-hover:text-white transition-all duration-300" />
            </div>
            <p className="text-lg font-semibold text-gray-800">Energy & Renewables</p>
          </div>

          <div className="group flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-md hover:-translate-y-1">
            <div className="h-20 w-20 flex items-center justify-center rounded-full border-2 border-[var(--brand-secondary)] mb-4 transition-all duration-300 group-hover:bg-[var(--brand-secondary)] group-hover:text-white">
              <UserGroupIcon className="h-10 w-10 text-[var(--brand-secondary)] group-hover:text-white transition-all duration-300" />
            </div>
            <p className="text-lg font-semibold text-gray-800">Recruiters</p>
          </div>

          <div className="group flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-md hover:-translate-y-1">
            <div className="h-20 w-20 flex items-center justify-center rounded-full border-2 border-[var(--brand-secondary)] mb-4 transition-all duration-300 group-hover:bg-[var(--brand-secondary)] group-hover:text-white">
              <AcademicCapIcon className="h-10 w-10 text-[var(--brand-secondary)] group-hover:text-white transition-all duration-300" />
            </div>
            <p className="text-lg font-semibold text-gray-800">Training Providers</p>
          </div>

          <div className="group flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-md hover:-translate-y-1">
            <div className="h-20 w-20 flex items-center justify-center rounded-full border-2 border-[var(--brand-secondary)] mb-4 transition-all duration-300 group-hover:bg-[var(--brand-secondary)] group-hover:text-white">
              <BuildingLibraryIcon className="h-10 w-10 text-[var(--brand-secondary)] group-hover:text-white transition-all duration-300" />
            </div>
            <p className="text-lg font-semibold text-gray-800">Universities</p>
          </div>

          <div className="group flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-md hover:-translate-y-1">
            <div className="h-20 w-20 flex items-center justify-center rounded-full border-2 border-[var(--brand-secondary)] mb-4 transition-all duration-300 group-hover:bg-[var(--brand-secondary)] group-hover:text-white">
              <BuildingLibraryIcon className="h-10 w-10 text-[var(--brand-secondary)] group-hover:text-white transition-all duration-300" />
            </div>
            <p className="text-lg font-semibold text-gray-800">Colleges</p>
          </div>

          <div className="group flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-md hover:-translate-y-1">
            <div className="h-20 w-20 flex items-center justify-center rounded-full border-2 border-[var(--brand-secondary)] mb-4 transition-all duration-300 group-hover:bg-[var(--brand-secondary)] group-hover:text-white">
              <UsersIcon className="h-10 w-10 text-[var(--brand-secondary)] group-hover:text-white transition-all duration-300" />
            </div>
            <p className="text-lg font-semibold text-gray-800">Community Organisations</p>
          </div>

        </div>
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 w-full h-24 pointer-events-none z-10"
          style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, white 100%)"
          }}
        ></div>

      </section>

      {/* FORM */}
      <section id="partner-form" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-[var(--brand-primary)] text-center mb-10">Let’s Create Opportunities Together</h2>

        <div className="w-full max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 p-8 rounded-lg text-center shadow-sm">
              <h2 className="text-2xl font-bold text-green-700 mb-3">
                Enquiry Submitted Successfully
              </h2>
              <p className="text-green-700 text-lg">
                Thank you for reaching out. We’ll get back to you shortly.
              </p>
          </div>
        ) : (

          <div className="max-w-3xl mx-auto bg-gray-50 p-10 rounded-2xl shadow-lg border border-[var(--brand-secondary)]/20">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-8"
            >
              <div ref={orgRef}>
                <label className="block mb-2 font-semibold text-gray-800">Organisation Name</label>
                <input
                  type="text"
                  name="organisation_name"
                  className={`w-full p-3 rounded-md border ${
                    errors.organisation_name
                      ? "border-red-500"
                      : "border-[var(--brand-secondary)]/40"
                  } bg-white text-gray-800 
                  focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] 
                  transition-all duration-300`}
                  placeholder="Your organisation"
                />
                {errors.organisation_name && (
                  <p className="text-red-500 text-sm mt-1">{errors.organisation_name}</p>
                )}
              </div>

              <div ref={contactRef}>
                <label className="block mb-2 font-semibold text-gray-800">Contact Person</label>
                <input
                  type="text"
                  name="contact_name"
                  className={`w-full p-3 rounded-md border ${
                    errors.contact_name
                      ? "border-red-500"
                      : "border-[var(--brand-secondary)]/40"
                  } bg-white text-gray-800 
                  focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] 
                  transition-all duration-300`}
                  placeholder="Your name"
                />
                {errors.contact_name && (
                  <p className="text-red-500 text-sm mt-1">{errors.contact_name}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 font-semibold text-gray-800">Email Address</label>

                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  className={`w-full p-3 rounded-md border ${
                    errors.email ? "border-red-500" : "border-[var(--brand-secondary)]/40"
                  } bg-white text-gray-800 
                  focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] 
                  transition-all duration-300`}
                  placeholder="you@organisation.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}

                {!otpSent && (
                  <button
                    type="button"
                    onClick={sendOtp}
                    className="mt-3 px-4 py-2 bg-[var(--brand-secondary)] text-white rounded-md hover:cursor-pointer hover:bg-[var(--brand-primary)] active:scale-95 active:bg-[var(--brand-primary)] transition-all duration-300"
                  >
                    {otpLoading ? "Sending..." : "Send Verification Code"}
                  </button>
                )}

                {otpSent && !otpVerified && (
                  <div className="mt-4">
                    <input
                      type="text"
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full p-3 rounded-md border border-[var(--brand-secondary)]/40 text-center tracking-widest hover:cursor-pointer"
                      placeholder="Enter 6‑digit code"
                    />

                    <button
                      type="button"
                      onClick={verifyOtp}
                      className="mt-3 px-4 py-2 bg-[var(--brand-secondary)] text-white rounded-md hover:cursor-pointer hover:bg-[var(--brand-primary)] active:scale-95 active:bg-[var(--brand-primary)] transition-all duration-300"
                    >
                      {otpVerifying ? "Verifying..." : "Verify Code"}
                    </button>
                  </div>
                )}

                {otpVerified && (
                  <p className="text-green-600 font-semibold mt-2">Email verified ✓</p>
                )}
              </div>

              <div ref={typeRef}>
                <label className="block mb-2 font-semibold text-gray-800">Type of Partnership</label>
                <select
                  name="partnership_type"
                  defaultValue=""
                  className={`w-full p-3 rounded-md border ${
                    errors.partnership_type ? "border-red-500" : "border-[var(--brand-secondary)]/40"
                  } bg-white text-gray-800 
                  focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] 
                  transition-all duration-300`}
                >
                  <option value="" disabled>Select partnership type</option>
                  <option value="Talent Pipeline">Talent Pipeline</option>
                  <option value="Training Collaboration">Training Collaboration</option>
                  <option value="Industry Insights">Industry Insights</option>
                  <option value="Events & Outreach">Events & Outreach</option>
                  <option value="Other">Other</option>
                </select>
                {errors.partnership_type && (
                  <p className="text-red-500 text-sm mt-1">{errors.partnership_type}</p>
                )}
              </div>

              <div ref={messageRef}>
                <label className="block mb-2 font-semibold text-gray-800">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className={`w-full p-3 rounded-md border ${
                    errors.message ? "border-red-500" : "border-[var(--brand-secondary)]/40"
                  } bg-white text-gray-800 
                  focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] 
                  transition-all duration-300`}
                  placeholder="Tell us how you'd like to collaborate..."
                ></textarea>

                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

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
                {loading ? "Submitting..." : "Become a Partner"}
              </button>
            </form>
          </div>
        )}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-2 text-center bg-gray-900 text-gray-300">
        {/* Logo */}
        <img
          src="/logo1.png"
          alt="Engineers Advance Logo"
          href="/"
          className="h-10 active:scale-95
            touch-manipulation mb-2 w-auto mx-auto"
        />
        
        <p className="text-sm">
          For direct enquiries:{" "}
          <a
            href="mailto:partners@engineersadvance.com"
            className="footer-link"
          >
            partners@engineersadvance.com
          </a>
        </p>

      {/* Home Link */}
      <p className="text-sm pt-1">
        <a
          href="/"
          className="footer-link"
        >
          Home
        </a>
      </p>

        {/* Mobile/Desktop Toggle */}
        <MobileDesktopToggle />

        {/* Copyright */}
        <p className="text-xs mt-2 text-gray-200/70">
          © {new Date().getFullYear()} Engineers Advance. All rights reserved.
        </p>
      </section>
    </>
  );
}
