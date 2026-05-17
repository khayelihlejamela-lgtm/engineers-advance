"use client";

import HowItWorksStep from "./HowItWorksStep";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Assess Your Pathway",
      description:
        "We evaluate your background, experience, and goals to identify the most suitable engineering pathway for you.",
    },
    {
      number: "2",
      title: "Build Your Skills",
      description:
        "Follow a structured, industry‑aligned learning plan designed to strengthen your technical and workplace skills.",
    },
    {
      number: "3",
      title: "Engage With Employers",
      description:
        "Understand UK employer expectations and prepare for real engineering opportunities with confidence.",
    },
    {
      number: "4",
      title: "Advance Your Career",
      description:
        "Gain clarity, confidence, and the skills needed to secure engineering roles and grow professionally.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="scroll-mt-[var(--navbar-height)] pt-10 pb-16 px-6 bg-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-primary)] text-center mb-16">
        How It Works
      </h2>

      <div className="max-w-5xl mx-auto space-y-10">
        {steps.map((step, index) => (
          <HowItWorksStep key={step.number} step={step} index={index} />
        ))}
      </div>
    </section>
  );
}
