import Link from "next/link";

export default async function Page({ params }) {
  // Next.js 14+ passes params as a Promise
  const { slug } = await params;

  // Pathway data
  const pathwayData = {
    "engineering-fundamentals": {
      title: "Engineering Fundamentals",
      image: "/images/engineering-fundamentals.jpg",
      overview: "Overview:",
      content: `
The Engineering Fundamentals Pathway strengthens the core technical knowledge that UK employers expect.

Who This Pathway Is For:
• Engineers with international qualifications  
• Engineers returning to the field  
• Graduates who want stronger fundamentals  
• Anyone preparing for technical interviews  v

Outcomes:
• Stronger technical foundation  
• Clearer communication  
• Better interview performance  
      `,
    },

    "uk-workplace-skills": {
      title: "UK Workplace Skills",
      image: "/images/uk-workplace-skills.jpg",
      overview: "Overview:",
      content: `
The UK Workplace Skills Pathway helps you adapt to UK engineering culture.

Who This Pathway Is For:
• Engineers new to the UK  
• Engineers wanting better communication  
• Anyone unsure about UK expectations  

Outcomes:
• Confident communication  
• Understanding team structures  
• First‑day readiness  
      `,
    },

    "technical-upskilling": {
      title: "Technical Upskilling",
      image: "/images/technical-upskilling.jpg",
      overview: "Overview:",
      content: `
Hands‑on, industry‑aligned skills that UK employers actively look for.

Who This Pathway Is For:
• Engineers wanting to be more competitive  
• Engineers transitioning into manufacturing or quality  
• Graduates needing practical skills  

Outcomes:
• A portfolio of practical work  
• Skills matching UK job descriptions  
• Increased interview chances  
      `,
    },
  };

  const pathway = pathwayData[slug];

  // Handle invalid slugs
  if (!pathway) {
    return (
      <main className="p-10 text-center text-xl">
        <p className="text-gray-700">Pathway not found.</p>
        <Link href="/#pathways" className="text-blue-600 underline mt-4 inline-block">
          Back to Pathways
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 pt-28 pb-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[var(--brand-secondary)] hover:underline">Home</Link> /{" "}
        <Link href="/#pathways" className="hover:text-[var(--brand-secondary)] hover:underline">Pathways</Link> /{" "}
        <span className="text-gray-700 font-medium">{pathway.title}</span>
      </nav>

      {/* Image */}
      <img
        src={pathway.image}
        alt={pathway.title}
        className="w-full h-60 object-cover rounded-md mb-6"
      />

      {/* Title */}
      <h1 className="text-3xl text-[var(--brand-primary)] font-bold mb-4">{pathway.title}</h1>

      <div className="flex flex-col pt-4 space-y-0">
        {/* Overview */}
        <h2 className="text-xl text-[var(--brand-secondary)] font-semibold">{pathway.overview}</h2>

        {/* Content */}
        <p className="text-gray-700 leading-relaxed whitespace-pre-line mt-0">
          {pathway.content}
        </p>
      </div>
    </main>
  );
}
