import Image from "next/image";

export default function ValueProps() {
  return (
    <section
      id="value-props"
      className="relative pt-10 pb-10 bg-gray-50 -mt-6"
    >
      <div className="w mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* Value Prop 1 */}
        <div className="text-center flex flex-col items-center">
          <div className="w-full aspect-[4/3] mb-6 overflow-hidden rounded-lg">
            <Image
              src="/icons/pathways.png"
              alt="Career Pathways"
              width={200}
              height={200}
              className="w-full h-full active:scale-95
            touch-manipulation object-cover shadow-sm"
            />
          </div>

          <h3 className="text-xl text-[var(--brand-primary)] font-semibold mb-3">Clear Career Pathways</h3>
          <p className="text-gray-600 leading-relaxed max-w-sm">
            Structured guidance for every stage of your engineering career.
            From your first UK role to senior progression, we provide clarity where it matters most.
          </p>
        </div>

        {/* Value Prop 2 */}
        <div className="text-center flex flex-col items-center">
          <div className="w-full aspect-[4/3] mb-6 overflow-hidden rounded-lg">
            <Image
              src="/icons/support1.jpg"
              alt="Personalised Support"
              width={200}
              height={200}
              className="w-full h-full active:scale-95
            touch-manipulation object-cover shadow-sm"
            />
          </div>

          <h3 className="text-xl text-[var(--brand-primary)] font-semibold mb-3">Personalised Support</h3>
          <p className="text-gray-600 leading-relaxed max-w-sm">
            Your background, goals, and experience matter. 
            We guide you with tailored advice that helps you stand out and position yourself for real opportunities
          </p>
        </div>

        {/* Value Prop 3 */}
        <div className="text-center flex flex-col items-center">
          <div className="w-full aspect-[4/3] mb-6 overflow-hidden rounded-lg">
            <Image
              src="/icons/industry.jpg"
              alt="Industry Insight"
              width={200}
              height={200}
              className="w-full h-full active:scale-95
            touch-manipulation object-cover shadow-sm"
              loading="eager"
            />
          </div>

          <h3 className="text-xl text-[var(--brand-primary)] font-semibold mb-3">Real Industry Insight</h3>
          <p className="text-gray-600 leading-relaxed max-w-sm">
            Everything we teach is grounded in what UK employers actually look for - practical, current, and based on real hiring expectations.
          </p>
        </div>

      </div>
    {/* Bottom fade from gray to white */}
    <div
      className="absolute bottom-0 left-0 w-full h-10 pointer-events-none z-10"
      style={{
        background: "linear-gradient(to bottom, rgba(249,250,251,0) 0%, white 100%)"
      }}
    ></div>
  
    </section>
  );
}
