import Link from "next/link";

const UPDATED = "15 September 2026";

const TERMS_SECTIONS = [
  "About these terms",
  "The service",
  "Important assessment limitations",
  "Professional institutions and frameworks",
  "Accounts and security",
  "Your documents and information",
  "Acceptable use",
  "Free, preview and premium features",
  "Training providers and external services",
  "Our intellectual property",
  "Availability and changes",
  "Ending your use or account",
  "Our responsibility to you",
  "Privacy",
  "Changes to these terms",
  "General",
  "Governing law and disputes",
  "Contact us",
];

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-700">
      <section className="border-b border-gray-200 bg-white px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
        <div className="mx-auto w-full max-w-7xl min-w-0">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link className="cursor-pointer touch-manipulation rounded-md hover:text-[var(--brand-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-secondary)]" href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Terms and Conditions</span>
          </nav>
          <div className="mt-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-secondary)] sm:text-sm">Legal information</p>
            <h1 className="mt-3 break-words text-3xl font-bold tracking-tight text-[var(--brand-primary)] sm:text-4xl lg:text-5xl">Terms and Conditions</h1>
            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              The terms that apply when you create an account and use Engineers Advance.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
              <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5">Engineers Advance Ltd</span>
              <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5">Last updated {UPDATED}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto grid w-full max-w-7xl min-w-0 gap-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:items-start">
          <aside className="hidden lg:block">
            <nav aria-label="Terms sections" className="sticky top-[calc(var(--navbar-height)+1.5rem)] max-h-[calc(100vh-var(--navbar-height)-3rem)] overflow-y-auto rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-[var(--brand-primary)]">On this page</p>
              <ol className="mt-4 space-y-1">
                {TERMS_SECTIONS.map((section, index) => (
                  <li key={section}>
                    <a className="block cursor-pointer touch-manipulation rounded-lg px-3 py-2 text-sm leading-snug text-gray-600 transition hover:bg-gray-50 hover:text-[var(--brand-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-secondary)]" href={`#${sectionId(index + 1, section)}`}>
                      {index + 1}. {section}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="min-w-0 space-y-10 rounded-2xl border border-gray-200 bg-white p-5 leading-relaxed shadow-sm sm:rounded-3xl sm:p-8 lg:p-10">
        <LegalSection title="1. About these terms">
          <p>
            These terms govern your access to and use of Engineers Advance. By
            creating an account or using the platform, you agree to them. If you do
            not agree, do not create an account or use the service.
          </p>
          <p>
            Engineers Advance is operated by Engineers Advance Ltd, a company
            registered in England and Wales under company number 16760261, with its
            registered office at Flat 2, 112 Southbourne Grove, Westcliff-On-Sea,
            England, SS0 9UU. Contact us at <EmailLink />.
          </p>
          <p>You must be at least 18 years old to create an account.</p>
        </LegalSection>

        <LegalSection title="2. The service">
          <p>
            Engineers Advance is an engineering career-development platform. It
            uses information you submit to identify professional evidence, map that
            evidence against a selected engineering pathway, generate a structured
            competency profile and suggest possible development priorities.
          </p>
          <p>
            Features may include CV and supporting-document processing, evidence
            review, candidate clarification, competency assessment, profile
            generation, development-plan previews and links to learning
            opportunities. Features may change as the MVP is tested and developed.
          </p>
        </LegalSection>

        <LegalSection title="3. Important assessment limitations">
          <p>
            Competency ratings, confidence indicators, mappings, explanations and
            development suggestions are automated or AI-assisted estimates based
            on the information available. They may be incomplete, inaccurate or
            unsuitable for a particular purpose.
          </p>
          <p>
            The service is for career-development guidance and is not professional,
            legal, employment, immigration, financial or educational advice. You
            must review results and use your own judgement before acting on them.
          </p>
          <p>Engineers Advance does not:</p>
          <ul>
            <li>verify that every claim in a CV, document or clarification is true;</li>
            <li>guarantee employment, promotion, salary, admission, qualification or career progression;</li>
            <li>make an official recruitment or employer assessment;</li>
            <li>award EngTech, IEng, CEng or any other professional title, registration or accreditation; or</li>
            <li>replace assessment by an employer, regulator, professional institution or qualified adviser.</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Professional institutions and frameworks">
          <p>
            Engineers Advance is not a professional institution and does not claim
            to represent, be endorsed by or be affiliated with ICE, IET, IChemE,
            APM, Engineering Council or any other institution unless we expressly
            state otherwise. References to professional standards or competency
            concepts are for guidance and comparison. The relevant institution&apos;s
            current rules and assessment processes remain authoritative.
          </p>
        </LegalSection>

        <LegalSection title="5. Accounts and security">
          <ul>
            <li>You must provide accurate account information and keep it up to date.</li>
            <li>You must keep your password and authentication codes confidential.</li>
            <li>You are responsible for activity carried out through your account unless caused by our failure to use reasonable care.</li>
            <li>You must notify us promptly if you suspect unauthorised access.</li>
            <li>You may not create accounts using another person&apos;s identity or use automated means to create accounts.</li>
          </ul>
          <p>
            We may require email verification, password recovery or additional
            security checks. We may suspend access where reasonably necessary to
            protect users, investigate misuse or comply with law.
          </p>
        </LegalSection>

        <LegalSection title="6. Your documents and information">
          <p>
            You retain ownership of CVs, supporting documents, clarifications and
            other content you submit. You give us a limited, non-exclusive licence
            to host, copy, extract, transform and process that content only as
            reasonably necessary to operate, secure and improve the service and
            provide the features you request.
          </p>
          <p>You confirm that:</p>
          <ul>
            <li>the information you provide is accurate to the best of your knowledge and is not deliberately misleading;</li>
            <li>you own the content or have the rights and permissions needed to provide it;</li>
            <li>you have a lawful basis to provide any personal information about another person; and</li>
            <li>your content does not infringe intellectual-property, confidentiality, privacy or other rights.</li>
          </ul>
          <p>
            Candidate clarifications are treated as self-attested information. We
            may assess their relevance and evidential quality, but we do not
            independently establish whether they are true.
          </p>
        </LegalSection>

        <LegalSection title="7. Acceptable use">
          <p>You must not:</p>
          <ul>
            <li>use the platform unlawfully, fraudulently or to misrepresent another person&apos;s experience;</li>
            <li>upload malware, harmful code, unlawfully obtained material or content you are not entitled to use;</li>
            <li>attempt to access another user&apos;s account, private data or restricted systems;</li>
            <li>probe, overload, disrupt, scrape or reverse engineer the service except where the law expressly permits it;</li>
            <li>circumvent rate limits, security controls, payment controls or access restrictions; or</li>
            <li>use generated output as an official accreditation, licence or employer-issued assessment.</li>
          </ul>
        </LegalSection>

        <LegalSection title="8. Free, preview and premium features">
          <p>
            During the MVP, some features may be free, limited, labelled as preview,
            or displayed as examples of future premium functionality. A preview or
            teaser does not promise that a feature, course or provider is currently
            available.
          </p>
          <p>
            If we introduce paid subscriptions, one-off purchases or commissions,
            we will show the applicable price, billing period, renewal terms,
            cancellation rights and any additional purchase terms before you place
            an order. These terms do not themselves authorise a charge.
          </p>
        </LegalSection>

        <LegalSection title="9. Training providers and external services">
          <p>
            The learning hub may recommend or link to courses and services supplied
            by independent providers. Unless expressly stated otherwise, Engineers
            Advance does not deliver those courses and is not a party to your
            contract with the provider. The provider is responsible for course
            content, accreditation claims, pricing, availability, refunds,
            certification and delivery.
          </p>
          <p>
            We may receive a referral fee or commission if you purchase through a
            partner link. Where applicable, we will disclose the commercial
            relationship. A commission does not guarantee that a course is suitable
            for you. Verify the provider, course recognition and terms before
            purchasing.
          </p>
          <p>
            Links to third-party websites are provided for convenience. Their terms
            and privacy policies apply when you use them.
          </p>
        </LegalSection>

        <LegalSection title="10. Our intellectual property">
          <p>
            The platform, branding, software, interfaces, assessment structures,
            text and other materials supplied by Engineers Advance are owned by us
            or our licensors and are protected by intellectual-property law. We
            grant you a personal, limited, revocable, non-transferable right to use
            the service for your own lawful career development.
          </p>
          <p>
            You may download or use your own submitted content and personal profile
            for your own purposes. You may not reproduce, sell, license or
            commercially exploit the platform or its underlying framework without
            permission.
          </p>
        </LegalSection>

        <LegalSection title="11. Availability and changes">
          <p>
            We aim to provide a reliable service but do not guarantee uninterrupted,
            error-free or permanent availability. We may maintain, update, restrict
            or discontinue features where reasonably necessary, including for
            security, legal, technical or product-development reasons.
          </p>
          <p>
            We will take reasonable care not to remove a paid core service during a
            paid term without an appropriate remedy required by law. MVP and preview
            features may change substantially as we test them.
          </p>
        </LegalSection>

        <LegalSection title="12. Ending your use or account">
          <p>
            You may stop using the service at any time. The MVP does not yet have
            self-service account deletion; you can request deletion by emailing
            <span> </span><EmailLink /> from your registered email address. We may
            need to verify your identity.
          </p>
          <p>
            We may suspend or terminate an account that materially breaches these
            terms, creates security or legal risk, or misuses the service. Where
            appropriate, we will give notice and a reasonable opportunity to
            resolve the issue unless immediate action is reasonably necessary.
          </p>
          <p>
            Deletion and retention are handled as described in our privacy policy.
          </p>
        </LegalSection>

        <LegalSection title="13. Our responsibility to you">
          <p>
            Nothing in these terms excludes or limits liability where doing so
            would be unlawful, including liability for death or personal injury
            caused by negligence, fraud or fraudulent misrepresentation, or your
            statutory consumer rights.
          </p>
          <p>
            We are responsible for losses that are a foreseeable result of our
            breach of these terms or failure to use reasonable care and skill. We
            are not responsible for losses that were not foreseeable, were caused
            by information you supplied, arose from your failure to review an
            assessment, or resulted from an independent third-party service outside
            our reasonable control.
          </p>
          <p>
            The service is supplied for personal career-development use. We are not
            responsible for business losses such as loss of profit, revenue,
            opportunity, goodwill or anticipated savings where you use it for trade
            or business purposes.
          </p>
        </LegalSection>

        <LegalSection title="14. Privacy">
          <p>
            Our <Link className="font-medium text-[var(--brand-secondary)] underline" href="/privacy">Privacy Policy</Link> explains how we collect, use, share and retain personal information, including the use of AI-assisted processing and service providers.
          </p>
        </LegalSection>

        <LegalSection title="15. Changes to these terms">
          <p>
            We may update these terms to reflect changes to the service, law,
            security requirements or our business. We will publish the updated
            version with a new fixed date. If a change materially affects existing
            users&apos; rights or paid services, we will provide reasonable notice
            where practicable and any choices required by law. Changes do not apply
            retrospectively merely because you continue using the service.
          </p>
        </LegalSection>

        <LegalSection title="16. General">
          <p>
            If a provision is found unlawful or unenforceable, the remaining
            provisions continue to apply. A delay in enforcing a right does not
            waive it. You may not transfer your account or rights under these terms
            without our permission. We may transfer our rights and obligations as
            part of a reorganisation or business transfer, provided this does not
            reduce your mandatory legal rights.
          </p>
        </LegalSection>

        <LegalSection title="17. Governing law and disputes">
          <p>
            These terms are governed by the laws of England and Wales. The courts
            of England and Wales will have jurisdiction, except that consumers
            living elsewhere may retain rights to bring proceedings in their home
            courts where mandatory law permits. Nothing in these terms removes
            consumer rights that cannot legally be excluded.
          </p>
          <p>
            Please contact us first if you have a complaint so we can try to resolve
            it informally.
          </p>
        </LegalSection>

        <LegalSection title="18. Contact us">
          <p>
            Engineers Advance Ltd<br />
            Flat 2, 112 Southbourne Grove<br />
            Westcliff-On-Sea, England, SS0 9UU<br />
            Email: <EmailLink />
          </p>
        </LegalSection>
          </article>
        </div>
      </section>
    </main>
  );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  const match = title.match(/^(\d+)\.\s*(.+)$/);
  const id = match ? sectionId(Number(match[1]), match[2]) : undefined;

  return (
    <section id={id} className="scroll-mt-28 space-y-4 border-b border-gray-200 pb-10 last:border-b-0 last:pb-0">
      <h2 className="text-xl font-semibold text-[var(--brand-primary)] sm:text-2xl">{title}</h2>
      <div className="space-y-4 text-sm leading-7 sm:text-base [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_ul]:space-y-2">{children}</div>
    </section>
  );
}

function sectionId(number: number, title: string) {
  return `${number}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

function EmailLink() {
  return <a className="font-medium text-[var(--brand-secondary)] underline" href="mailto:info@engineersadvance.com">info@engineersadvance.com</a>;
}
