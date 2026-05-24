export default function TermsAndConditions() {
    const lastUpdated = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-10 text-[var(--brand-primary)]">
        Terms & Conditions
      </h1>

      <section className="space-y-6">
        <p><strong>Last updated:</strong> {lastUpdated}</p>

        <h2 className="text-2xl font-semibold">1. Introduction</h2>
        <p>
          Engineers Advance (“we”, “our”, “us”) provides career development
          guidance, pathway recommendations, and access to external training and
          employment opportunities for aspiring, early‑career and internationally
          trained engineers. By using our website or services, you agree to these
          Terms & Conditions.
        </p>

        <h2 className="text-2xl font-semibold">2. Scope of Services</h2>
        <p>
          Engineers Advance is a career development and guidance platform. We do
          not deliver training courses, qualifications, or instructional programmes
          directly. All training accessed through our platform is provided by
          independent third‑party training providers.
        </p>

        <h2 className="text-2xl font-semibold">3. Third‑Party Training Providers</h2>
        <p>
          We act solely as an intermediary connecting users with external training
          providers. We do not control or guarantee the content, quality,
          accreditation, or outcomes of any third‑party training. Any enrolment,
          payment, or certification is strictly between you and the provider.
        </p>

        <h2 className="text-2xl font-semibold">4. Professional Institutions</h2>
        <p>
          Engineers Advance is not a professional institution and does not award
          EngTech, IEng, CEng, or any other titles. We may align our pathways with
          standards from ICE, IET, APM, and IChemE, but we do not represent these
          institutions.
        </p>

        <h2 className="text-2xl font-semibold">5. User Responsibilities</h2>
        <p>
          You agree to provide accurate information, use our services lawfully, and
          independently verify any training or employment opportunity.
        </p>

        <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
        <p>
          Engineers Advance is not liable for losses arising from third‑party
          training or employment services, or decisions made based on our guidance.
        </p>

        <h2 className="text-2xl font-semibold">7. Changes to These Terms</h2>
        <p>
          We may update these Terms at any time. Continued use of our services
          constitutes acceptance of the updated Terms.
        </p>

        <h2 className="text-2xl font-semibold">8. Contact Us</h2>
        <p>Email: info@engineersadvance.com</p>
      </section>
    </main>
  );
}
