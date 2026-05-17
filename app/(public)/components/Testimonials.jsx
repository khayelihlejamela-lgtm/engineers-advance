import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-[var(--nav-height)] pt-20 pb-6 px-6 bg-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What You’ll Achieve
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mx-auto">

        <div className="p-8 border rounded-lg shadow-sm bg-white">
          <CheckCircleIcon className="h-8 w-8 text-[var(--brand-primary)] mb-4 mx-auto" />
          <h3 className="text-xl text-[var(--brand-secondary)] font-semibold mb-3">
            See Your Future With Precision
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Gain a clear, structured understanding of where you are now - and the exact engineering roles you can grow into.
          </p>
        </div>

        <div className="p-8 border rounded-lg shadow-sm bg-white">
          <CheckCircleIcon className="h-8 w-8 text-[var(--brand-primary)] mb-4 mx-auto" />
          <h3 className="text-xl text-[var(--brand-secondary)] font-semibold mb-3">
            Develop the Skills Employers Expect
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Build the technical awareness, professional behaviours, and engineering mindset that help you stand out in the UK industry.
          </p>
        </div>

        <div className="p-8 border rounded-lg shadow-sm bg-white">
          <CheckCircleIcon className="h-8 w-8 text-[var(--brand-primary)] mb-4 mx-auto" />
          <h3 className="text-xl text-[var(--brand-secondary)] font-semibold mb-3">
            Turn Ambition Into Action
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Stop guessing. Start progressing with a guided, step‑by‑step route built for early‑career and transitioning engineers.
          </p>
        </div>

      </div>
    </section>
  );
}
