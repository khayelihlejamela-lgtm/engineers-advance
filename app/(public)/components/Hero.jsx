"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-10 bg-white text-center pb-10"
    >
      <div className="relative max-w-6xl mx-auto px-6 z-10 pb-10">
        <h1 className="text-4xl text-[var(--brand-primary)] md:text-5xl font-bold leading-tight mb-8 w-full mx-auto">
          Struggling to get a job in engineering?
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          You’re not alone - thousands of engineers struggle to break into the UK job market every year. 
          Whether it’s unclear pathways, missing industry expectations, or a lack of guidance, the process can feel overwhelming. 
          We simplify it with structured support, practical tools, and a clear route into engineering roles that match your skills.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() =>
                  document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })
                }
            className="px-6 py-3 
              bg-[var(--brand-secondary)] text-white 
              rounded-lg 
              transition-all duration-300 
              hover:bg-[var(--brand-primary)]
              active:scale-95 active:bg-[var(--brand-primary)]
              focus:ring-2 focus:ring-[var(--brand-secondary)] focus:ring-offset-2
              touch-manipulation"
          >
            Candidate Sign Up
          </button>

          <a
            href="/partner"
            className="border border-[var(--brand-secondary)] 
            text-[var(--brand-primary)] 
            px-6 py-3 rounded-md 
            transition-all duration-300 
            hover:bg-[var(--brand-primary)] hover:text-white

            active:scale-95 
            active:bg-[var(--brand-primary)] 
            active:text-white

            focus:ring-2 focus:ring-[var(--brand-secondary)] focus:ring-offset-2
            touch-manipulation"
          >
            Partner With Us
          </a>
        </div>
      </div>

      {/* Fade from white (hero) to gray (value props) */}
      <div
        className="absolute bottom-0 left-0 w-full h-12 pointer-events-none z-20"
        style={{
          background: "linear-gradient(to bottom, white 0%, #f9fafb 100%)"
        }}
      ></div>

    </section>
  );
}
