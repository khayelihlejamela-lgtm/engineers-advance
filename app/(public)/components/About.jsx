export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-[var(--navbar-height)] pt-6 pb-10 relative bg-gray-50"
    >
      <div className="w-full mx-auto text-center space-y-10">

        <h2 className="text-3xl md:text-4xl text-[var(--brand-primary)] font-bold">
          What is Engineers Advance?
        </h2>

        {/* Highlighted Mission Block */}
        <div className="p-8">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            This is a UK‑based career development platform built
              to support migrant engineers at every stage of their professional journey.
              We provide structured pathways, personalised mentorship, and
              practical tools that help both internationally and UK trained migrant
              engineers navigate the complexities of the UK engineering
              landscape.
          </p>
        </div>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Our mission is simple:{" "}
          <strong className="text-[var(--brand-secondary)]">
            to make engineering careers in the UK more accessible, transparent,
            and achievable.
          </strong>
        </p>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Engineers Advance does not deliver training directly. Instead, we partner with
          accredited external training providers and align our development pathways with
          recognised professional institutions. This ensures every engineer receives
          high‑quality, industry‑aligned support while we focus on guidance, clarity and
          career progression.
        </p>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          We combine industry insights, one‑to‑one guidance, and a growing
          community of professionals to ensure every engineer has the clarity
          and support they need to progress with confidence. Whether you’re
          seeking your first UK role, transitioning into a new discipline, or
          aiming for senior positions, Engineers Advance equips you with the
          direction and resources to move forward.
        </p>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          We exist to bridge the gap between engineering talent and opportunity
          - and to empower engineers to build careers that truly reflect their
          skills, ambition, and potential.
        </p>

      </div>
    {/* Bottom fade from gray to white */}
    <div
      className="absolute bottom-0 left-0 w-full h-12 pointer-events-none z-10"
      style={{
        background: "linear-gradient(to bottom, rgba(249,250,251,0) 0%, white 100%)"
      }}
    ></div>
    </section>
  );
}
