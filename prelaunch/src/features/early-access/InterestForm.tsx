"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const pathways = [
  ["mechanical", "Mechanical"],
  ["electrical_instrumentation", "Electrical & Instrumentation"],
  ["chemical_process", "Chemical / Process"],
  ["civil_structural", "Civil / Structural"],
  ["project_management", "Project Management"],
] as const;

const careerStages = [
  ["student_graduate", "Student or recent graduate"],
  ["early_career", "Early-career engineer"],
  ["developing", "Developing / mid-career engineer"],
  ["experienced", "Experienced / senior engineer"],
  ["transitioning", "Moving into a new engineering direction"],
  ["returning", "Returning to engineering"],
] as const;

type Attribution = {
  source: string;
  medium: string;
  campaign: string;
};

export default function InterestForm() {
  const [submitting, setSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState("");
  const lock = useRef(false);
  const [attribution, setAttribution] = useState<Attribution>({ source: "direct", medium: "none", campaign: "prelaunch" });

  useEffect(() => {
    const parameters = new URLSearchParams(window.location.search);
    setAttribution({
      source: parameters.get("utm_source")?.slice(0, 100) || "direct",
      medium: parameters.get("utm_medium")?.slice(0, 100) || "none",
      campaign: parameters.get("utm_campaign")?.slice(0, 150) || "prelaunch",
    });
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (lock.current) return;

    lock.current = true;
    setSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const values = new FormData(form);

    try {
      const response = await fetch("/api/register-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: values.get("first_name"),
          email: values.get("email"),
          engineering_path: values.get("engineering_path"),
          career_stage: values.get("career_stage"),
          development_challenge: values.get("development_challenge"),
          willing_to_test: values.get("willing_to_test") === "on",
          consent: values.get("consent") === "on",
          website: values.get("website"),
          utm_source: attribution.source,
          utm_medium: attribution.medium,
          utm_campaign: attribution.campaign,
        }),
      });

      const result = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) throw new Error(result?.error || "We could not register your interest. Please try again.");

      form.reset();
      setCompleted(true);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "We could not register your interest. Please try again.");
    } finally {
      lock.current = false;
      setSubmitting(false);
    }
  }

  if (completed) {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-white p-6 shadow-xl sm:p-8" role="status">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircleIcon aria-hidden="true" className="h-7 w-7" />
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-[var(--brand-primary)]">Your interest is registered.</h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          Thank you. We will email you when candidate invitations begin. Check your inbox for a confirmation message and add Engineers Advance to your safe senders.
        </p>
        <p className="mt-4 text-xs leading-relaxed text-gray-500">
          No platform account has been created. You will complete the verified signup process only if you accept a future invitation.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-xl sm:p-7 lg:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-secondary)]">Register your interest</p>
      <h2 className="mt-2 text-2xl font-semibold text-[var(--brand-primary)]">Join the early-access list.</h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">Tell us a little about your engineering direction. This takes around one minute.</p>

      {error && <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800" role="alert">{error}</div>}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <Field label="First name" htmlFor="first_name">
            <input id="first_name" name="first_name" type="text" autoComplete="given-name" required maxLength={100} disabled={submitting} className={controlClass} />
          </Field>

          <Field label="Email address" htmlFor="email">
            <input id="email" name="email" type="email" autoComplete="email" required maxLength={320} disabled={submitting} className={controlClass} />
          </Field>
        </div>

        <Field label="Engineering pathway" htmlFor="engineering_path">
          <select id="engineering_path" name="engineering_path" required defaultValue="" disabled={submitting} className={`${controlClass} cursor-pointer`}>
            <option value="" disabled>Select a pathway</option>
            {pathways.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </Field>

        <Field label="Career stage" htmlFor="career_stage">
          <select id="career_stage" name="career_stage" required defaultValue="" disabled={submitting} className={`${controlClass} cursor-pointer`}>
            <option value="" disabled>Select your current stage</option>
            {careerStages.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </Field>

        <Field label="What would you most like help understanding?" htmlFor="development_challenge" hint="Optional — do not include sensitive personal information.">
          <textarea id="development_challenge" name="development_challenge" rows={3} maxLength={500} disabled={submitting} className={`${controlClass} resize-y`} placeholder="For example: which capabilities to strengthen for my next role" />
        </Field>

        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" autoComplete="off" tabIndex={-1} />
        </div>

        <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 p-4 text-sm leading-relaxed text-gray-600">
          <input name="willing_to_test" type="checkbox" disabled={submitting} className="mt-1 h-5 w-5 shrink-0 cursor-pointer touch-manipulation accent-[var(--brand-secondary)]" />
          <span>I would be willing to test the MVP and provide feedback on the experience.</span>
        </label>

        <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 p-4 text-sm leading-relaxed text-gray-600">
          <input name="consent" type="checkbox" required disabled={submitting} className="mt-1 h-5 w-5 shrink-0 cursor-pointer touch-manipulation accent-[var(--brand-secondary)]" />
          <span>
            Email me about Engineers Advance MVP access and launch updates. I understand that I can unsubscribe at any time. See the <a className="inline-flex min-h-11 cursor-pointer touch-manipulation items-center font-medium text-[var(--brand-secondary)] underline" href="/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>.
          </span>
        </label>

        <button type="submit" disabled={submitting} className="inline-flex min-h-12 w-full cursor-pointer touch-manipulation items-center justify-center gap-2 rounded-xl bg-[var(--brand-secondary)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-secondary)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60">
          {submitting ? "Registering…" : "Register for early access"}
          {!submitting && <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />}
        </button>

        <p className="text-center text-xs leading-relaxed text-gray-500">Registering interest does not guarantee selection or create a platform account.</p>
      </form>
    </div>
  );
}

const controlClass = "mt-1.5 min-h-12 w-full touch-manipulation rounded-xl border border-gray-300 bg-white px-3.5 py-3 text-base text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[var(--brand-secondary)] focus:ring-2 focus:ring-[var(--brand-secondary)]/20 disabled:cursor-not-allowed disabled:bg-gray-100";

function Field({ label, htmlFor, hint, children }: { label: string; htmlFor: string; hint?: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
      {label}
      {children}
      {hint && <span className="mt-1 block text-xs font-normal text-gray-500">{hint}</span>}
    </label>
  );
}
