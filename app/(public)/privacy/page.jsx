export default function PrivacyPolicy() {
    const lastUpdated = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-10 text-[var(--brand-primary)]">
        Privacy Policy
      </h1>

      <section className="space-y-6">
        <p><strong>Last updated:</strong> {lastUpdated}</p>

        <h2 className="text-2xl font-semibold">1. Introduction</h2>
        <p>
          This Privacy Policy explains how Engineers Advance (“we”, “our”, “us”)
          collects, uses, and protects your personal information.
        </p>

        <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
        <p>
          We may collect personal details, career information, usage data, and
          information submitted through forms or enquiries.
        </p>

        <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
        <p>
          We use your information to provide career guidance, connect you with
          external training providers, support job readiness, and improve our
          services.
        </p>

        <h2 className="text-2xl font-semibold">4. Sharing Your Information</h2>
        <p>
          We may share your information with external training providers, employers,
          or professional institutions only when you request or consent to it.
        </p>

        <h2 className="text-2xl font-semibold">5. Data Security</h2>
        <p>
          We take reasonable measures to protect your information, though no online
          system is completely secure.
        </p>

        <h2 className="text-2xl font-semibold">6. Your Rights</h2>
        <p>
          You may request access, correction, deletion, or withdrawal of consent at
          any time by contacting us.
        </p>

        <h2 className="text-2xl font-semibold">7. Data Retention</h2>
        <p>
          We retain personal information only as long as necessary to provide our
          services or comply with legal obligations.
        </p>

        <h2 className="text-2xl font-semibold">8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy at any time. Continued use of our
          services constitutes acceptance of the updated Policy.
        </p>

        <h2 className="text-2xl font-semibold">9. Contact Us</h2>
        <p>Email: info@engineersadvance.com</p>
      </section>
    </main>
  );
}
