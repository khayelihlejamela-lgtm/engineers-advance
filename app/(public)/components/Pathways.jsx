import Link from "next/link";
import Image from "next/image";
import { WrenchScrewdriverIcon, AcademicCapIcon, CpuChipIcon } from "@heroicons/react/24/outline";

export default function Pathways() {
  const pathways = [
    {
      title: "Engineering Fundamentals",
      slug: "engineering-fundamentals",
      description:
        "For engineers who need to strengthen or refresh their technical base before entering UK roles.",
      icon: <WrenchScrewdriverIcon className="h-10 w-10 text-[var(--brand-secondary)]" />,
      image: "/images/engineering-fundamentals.jpg",
    },
    {
      title: "UK Workplace Skills",
      slug: "uk-workplace-skills",
      description:
        "For engineers who understand the technical side but need to adapt to UK expectations.",
      icon: <AcademicCapIcon className="h-10 w-10 text-[var(--brand-secondary)]" />,
      image: "/images/uk-workplace-skills.jpg",
    },
    {
      title: "Technical Upskilling",
      slug: "technical-upskilling",
      description:
        "For engineers who want to become job‑ready in high‑demand technical areas.",
      icon: <CpuChipIcon className="h-10 w-10 text-[var(--brand-secondary)]" />,
      image: "/images/technical-upskilling.jpg",
    },
  ];

  return (
    <section
      id="pathways"
      className="scroll-mt-[var(--navbar-height)] relative pt-10 pb-20 bg-white"
    >
      <h2 className="text-3xl text-[var(--brand-primary)] md:text-4xl font-bold text-center mb-12">
        Our Pathways
      </h2>

      <div className="w mx-auto px-6 flex flex-wrap justify-center grid grid-cols-1 md:grid-cols-3 gap-12">
        {pathways.map((p) => (
          <div
            key={p.slug}
            className="p-2 flex-grow border-[var(--brand-secondary)] rounded-lg shadow-sm hover:shadow-[6px_6px_12px_rgba(0,0,0,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <Image
              src={p.image}
              alt={p.title}
              width={200}
              height={400}
              loading="eager"
              className="w-full h-40 object-cover rounded-md mb-5"
            />

            <div className="mb-4">{p.icon}</div>

            <h3 className="text-xl text-[var(--brand-primary)] font-semibold mb-3">{p.title}</h3>

            <p className="text-gray-600 flex-grow leading-relaxed">
              {p.description}
            </p>

            <Link
              href={`/pathways/${p.slug}`}
              className="text-[var(--brand-secondary)] font-medium mt-4 inline-block hover:underline"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
      {/* Fade from white (pathways) to gray (why us) */}
      <div
        className="absolute bottom-0 left-0 w-full h-12 pointer-events-none z-20"
        style={{
          background: "linear-gradient(to bottom, white 0%, #f9fafb 100%)"
        }}
      ></div>

    </section>
  );
}
