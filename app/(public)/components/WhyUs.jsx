import { HeartIcon, ClipboardDocumentCheckIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="scroll-mt-[var(--nav-height)] pt-10 pb-10 px-6 bg-white"
    >
      <h2 className="text-3xl md:text-4xl text-[var(--brand-primary)] font-bold text-center mb-12">
        Why Us?
      </h2>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-12 w-full mx-auto">

        <div className="p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:border-[var(--brand-secondary)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.15)] text-center">
          <HeartIcon className="h-10 w-10 text-[var(--brand-secondary)] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3 text-left">We Understand Your Challenges!</h3>
          <p className="text-gray-600 leading-relaxed text-left">
            Migrant engineers face challenges that go far beyond technical ability - from navigating unfamiliar hiring practices to translating overseas experience into UK‑recognised value. 
            We’ve lived these realities ourselves, and we’ve supported many engineers through the same journey. 
            That’s why our approach is built on genuine understanding: we know the barriers, the frustrations, and the opportunities, and we turn that insight into practical guidance that helps you move forward with confidence.
          </p>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:border-[var(--brand-secondary)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.15)] text-center">
          <ClipboardDocumentCheckIcon className="h-10 w-10 text-[var(--brand-secondary)] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3 text-left">We Know What Employers Want!</h3>
          <p className="text-gray-600 leading-relaxed text-left">
           UK employers look for more than technical ability - they want engineers who understand local standards, communicate clearly, and can integrate seamlessly into their teams. 
           Because we work closely with industry and track real hiring trends, we know exactly what employers expect at every stage of the process. 
           We translate those expectations into clear guidance, helping you present your skills in a way that resonates with hiring managers and sets you apart from other applicants.
          </p>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:border-[var(--brand-secondary)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.15)] text-center">
          <ArrowUpRightIcon className="h-10 w-10 text-[var(--brand-secondary)] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3 text-left">We Help You Get Hired!</h3>
          <p className="text-gray-600 leading-relaxed text-left">
            Getting hired in the UK isn’t just about having the right qualifications - it’s about presenting your experience in a way employers immediately understand and value. 
            We help you do exactly that. From refining your CV and aligning your skills to UK standards, to preparing you for interviews and connecting you with real opportunities, we focus on the actions that move you closer to an offer. 
            Our goal is simple: to turn your potential into employment.
          </p>
        </div>

      </div>
    </section>
  );
}
