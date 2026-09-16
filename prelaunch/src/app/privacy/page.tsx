import Link from "next/link";

const UPDATED = "16 September 2026";

const PRIVACY_SECTIONS = [
  "Who we are",
  "Scope of this policy",
  "Information we collect",
  "How and why we use information",
  "AI-assisted processing and profiling",
  "Service providers and disclosures",
  "International transfers",
  "Retention",
  "Security",
  "Cookies and local storage",
  "Your rights",
  "Complaints",
  "Changes to this policy",
  "Contact us",
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-700">
      <section className="border-b border-gray-200 bg-white px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
        <div className="mx-auto w-full max-w-7xl min-w-0">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link className="cursor-pointer touch-manipulation rounded-md hover:text-[var(--brand-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-secondary)]" href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Privacy Policy</span>
          </nav>
          <div className="mt-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-secondary)] sm:text-sm">Legal information</p>
            <h1 className="mt-3 break-words text-3xl font-bold tracking-tight text-[var(--brand-primary)] sm:text-4xl lg:text-5xl">Privacy Policy</h1>
            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              How Engineers Advance collects, uses, protects and retains your personal information when you register your interest or use the platform.
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
            <nav aria-label="Privacy policy sections" className="sticky top-[calc(var(--navbar-height)+1.5rem)] rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-[var(--brand-primary)]">On this page</p>
              <ol className="mt-4 space-y-1">
                {PRIVACY_SECTIONS.map((section, index) => (
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
        <LegalSection title="1. Who we are">
          <p>
            Engineers Advance Ltd (&quot;Engineers Advance&quot;, &quot;we&quot;,
            &quot;our&quot; or &quot;us&quot;) operates an engineering competency and
            career-development platform. We are the controller of the personal
            information described in this policy.
          </p>
          <p>
            Engineers Advance Ltd is registered in England and Wales under
            company number 16760261. Our registered office is Flat 2, 112
            Southbourne Grove, Westcliff-On-Sea, England, SS0 9UU.
          </p>
          <p>
            Privacy enquiries and requests can be sent to{" "}
            <EmailLink address="info@engineersadvance.com" />.
          </p>
        </LegalSection>

        <LegalSection title="2. Scope of this policy">
          <p>
            This policy applies when you visit our website, register interest in
            the MVP, join an invitation list, create or use an account, upload a CV
            or supporting document, provide clarification, generate a competency
            profile, contact us, or submit a partnership enquiry. It does not
            govern websites or services operated by third parties.
          </p>
          <p>
            The service is intended for people aged 18 or over. We do not
            knowingly offer accounts to children.
          </p>
          <p>
            Registering interest does not create an Engineers Advance account.
            We do not ask for a password, CV or supporting document as part of
            the early-access registration form.
          </p>
        </LegalSection>

        <LegalSection title="3. Information we collect">
          <ul>
            <li>
              <strong>Early-access information:</strong> first name, email
              address, engineering pathway, career stage, development challenge
              (if supplied), willingness to test the MVP, consent choice and
              timestamps, registration status, confirmation and invitation
              records, and campaign-attribution values such as UTM source,
              medium and campaign contained in the page URL.
            </li>
            <li>
              <strong>Account information:</strong> name, email address,
              authentication identifiers, account status and selected engineering
              pathway.
            </li>
            <li>
              <strong>Professional information:</strong> CVs, supporting
              documents, employment history, education, qualifications, project
              experience, responsibilities, achievements and other information
              contained in material you submit.
            </li>
            <li>
              <strong>Assessment information:</strong> extracted evidence,
              candidate clarifications, evidence mappings, verification results,
              competency ratings, confidence indicators, profile summaries and
              development priorities.
            </li>
            <li>
              <strong>Technical and usage information:</strong> IP address,
              browser and device information, authentication and security logs,
              request timestamps, error logs, workflow status and service usage.
            </li>
            <li>
              <strong>Service-operation information:</strong> AI provider, model,
              operation type, token usage, duration and estimated processing cost.
            </li>
            <li>
              <strong>Communications:</strong> support requests, privacy requests,
              feedback, early-access correspondence and partnership-enquiry
              details.
            </li>
          </ul>
          <p>
            We collect most information directly from you. We may also receive
            technical information from your browser or device, campaign
            attribution from a link you followed (for example, a LinkedIn post),
            and assessment information generated from the materials you submit.
          </p>
          <p>
            Providing early-access information is voluntary. If you later create
            an account, the account and professional information needed to deliver
            the service must be provided for us to perform our contract with you.
            If required information is not provided, we may be unable to provide
            the relevant feature.
          </p>
          <p>
            Please remove unnecessary information about other people before
            uploading documents. You must have a lawful basis to provide any
            third-party personal information contained in your documents.
          </p>
          <p>
            The service does not require special-category information such as
            health, ethnicity, religion, political opinions, trade-union membership
            or sexual orientation. Please redact such information unless it is
            genuinely necessary for your use of the service.
          </p>
        </LegalSection>

        <LegalSection title="4. How and why we use information">
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="min-w-[680px] divide-y divide-gray-200 text-left text-sm">
              <thead className="bg-gray-50 text-[var(--brand-primary)]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Purpose</th>
                  <th className="px-4 py-3 font-semibold">Typical information</th>
                  <th className="px-4 py-3 font-semibold">Lawful basis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white align-top">
                <PolicyRow purpose="Record your interest in the MVP, confirm your registration, manage invitation batches and send launch or access updates you requested." information="Early-access information, consent records, email-delivery status and campaign attribution." basis="Your consent. You may withdraw it at any time." />
                <PolicyRow purpose="Create and administer your account; authenticate you; provide requested features." information="Account and authentication information." basis="Performance of our contract with you." />
                <PolicyRow purpose="Extract professional evidence and generate, update and display competency assessments." information="Documents, clarifications and assessment information." basis="Performance of our contract with you." />
                <PolicyRow purpose="Secure, debug and maintain the platform; prevent misuse and investigate incidents." information="Account, technical, security and workflow information." basis="Our legitimate interests in providing a secure and reliable service; and legal obligations where applicable." />
                <PolicyRow purpose="Measure reliability and processing costs and improve the service." information="Usage, workflow, provider, model, token, duration, cost and error information." basis="Our legitimate interests in operating and improving the platform. We do not use this basis to send marketing." />
                <PolicyRow purpose="Respond to support, privacy and partnership enquiries." information="Contact details and communications." basis="Steps at your request, performance of a contract, and our legitimate interests in responding and keeping appropriate records." />
                <PolicyRow purpose="Comply with law, establish or defend legal claims and enforce our terms." information="Relevant account, transaction, usage and communication records." basis="Legal obligation and our legitimate interests in protecting our rights." />
              </tbody>
            </table>
          </div>
          <p>
            Where we rely on legitimate interests, those interests are operating,
            securing and improving Engineers Advance and understanding service
            performance. We consider the effect on users and do not rely on this
            basis where your rights and interests override ours. We do not use
            legitimate interests to override your choice about early-access or
            launch emails.
          </p>
          <p>
            You can withdraw early-access email consent at any time by replying to
            an email with &quot;unsubscribe&quot; or contacting {" "}
            <EmailLink address="hello@engineersadvance.com" />. Withdrawal does
            not affect processing carried out before it was received. We may keep
            a minimal suppression record so that we do not contact you again by
            mistake.
          </p>
        </LegalSection>

        <LegalSection title="5. AI-assisted processing and profiling">
          <p>
            Engineers Advance uses AI-assisted processing to identify professional
            evidence in submitted documents, map it to competency frameworks,
            verify mapping relationships and help produce competency profiles and
            narrative explanations. Deterministic rules may also be used to produce
            ratings and confidence indicators.
          </p>
          <p>
            Results are estimates based on the information available and may be
            incomplete or incorrect. They are provided for career-development
            guidance. They do not award professional status, determine recruitment,
            create legal rights, or make decisions producing legal or similarly
            significant effects about you.
          </p>
          <p>
            You can review extracted evidence before assessment and can contact us
            if you believe information or a profile is inaccurate.
          </p>
        </LegalSection>

        <LegalSection title="6. Service providers and disclosures">
          <p>We use service providers acting on our behalf, including:</p>
          <ul>
            <li><strong>Supabase</strong> for authentication, database and document storage. Our primary database region is in Ireland.</li>
            <li><strong>Vercel</strong> for website and application hosting.</li>
            <li><strong>OpenAI</strong> for AI-assisted evidence and competency processing.</li>
            <li><strong>Resend</strong> for authentication, early-access, invitation and transactional email delivery.</li>
          </ul>
          <p>
            We may also disclose information to professional advisers, regulators,
            courts, law-enforcement bodies or potential business successors where
            reasonably necessary and lawful.
          </p>
          <p>
            We do not sell your personal information. We will not give your CV or
            competency profile to employers, training providers or professional
            institutions unless you ask us to, clearly agree to a relevant feature,
            or we are legally required to do so.
          </p>
          <p>
            The planned Learning Hub may in future link users to independent
            training providers and Engineers Advance may receive a commission from
            a successful purchase. It is not currently used to disclose your
            profile or contact details to providers. We will explain any such
            sharing and obtain the permission required before introducing it.
          </p>
        </LegalSection>

        <LegalSection title="7. International transfers">
          <p>
            Although our primary Supabase database is hosted in Ireland, some
            providers or their subprocessors may process information in the United
            Kingdom, European Economic Area, United States or other countries.
            Where UK data-protection law requires safeguards, we use appropriate
            contractual and organisational measures, such as recognised standard
            contractual clauses and the UK international data-transfer addendum or
            equivalent lawful mechanisms.
          </p>
          <p>
            Contact us if you would like more information about safeguards relevant
            to your information.
          </p>
        </LegalSection>

        <LegalSection title="8. Retention">
          <ul>
            <li>Early-access registrations are reviewed after the invitation programme and are normally deleted or anonymised if they have not become an account within 24 months, unless you ask us to delete the registration sooner or we must retain a limited record for legal reasons.</li>
            <li>If you unsubscribe from early-access or launch emails, we stop those emails and may retain a minimal suppression record, such as your email address and opt-out date, to respect that request.</li>
            <li>Account, documents, evidence and competency-profile information are normally kept while your account remains active so that your profile can be maintained and updated.</li>
            <li>When you request account deletion, we aim to remove active account content within 30 days after verifying the request, unless information must be retained for legal, security or dispute purposes.</li>
            <li>Support, privacy and partnership-enquiry correspondence may be kept for up to 24 months after the matter closes, unless a longer period is reasonably required.</li>
            <li>Security and diagnostic logs are normally kept for up to 12 months.</li>
            <li>Transaction, consent and legal-claim records may be kept for up to six years where needed to comply with law or establish, exercise or defend legal rights.</li>
            <li>Aggregated or irreversibly anonymised statistics may be retained because they no longer identify you.</li>
          </ul>
          <p>
            Deleted information may remain temporarily in restricted backups until
            those backups are overwritten under our providers&apos; normal schedules.
            It is not restored to ordinary use unless required for disaster
            recovery or legal reasons.
          </p>
        </LegalSection>

        <LegalSection title="9. Security">
          <p>
            We use reasonable technical and organisational measures intended to
            protect personal information, including access controls, authenticated
            accounts, encrypted network connections and restricted administrative
            access. No internet service is completely secure, and we cannot promise
            absolute security. Keep your password confidential and contact us if
            you suspect unauthorised account access.
          </p>
        </LegalSection>

        <LegalSection title="10. Cookies and local storage">
          <p>
            We use cookies or browser storage that are necessary for authentication,
            security, session continuity and core platform operation. The
            early-access page can record UTM campaign values already present in
            its URL, but this does not require advertising cookies or cross-site
            tracking. We do not currently use Vercel Analytics or Speed Insights
            and do not currently use non-essential advertising or
            behavioural-tracking cookies.
          </p>
          <p>
            If we introduce non-essential analytics or advertising technologies,
            we will update this policy and obtain consent where required before
            using them.
          </p>
        </LegalSection>

        <LegalSection title="11. Your rights">
          <p>Depending on the circumstances, UK data-protection law gives you rights to:</p>
          <ul>
            <li>access your personal information;</li>
            <li>correct inaccurate or incomplete information;</li>
            <li>request deletion or restriction;</li>
            <li>object to processing based on legitimate interests;</li>
            <li>receive certain information in a portable format;</li>
            <li>withdraw consent where processing is based on consent; and</li>
            <li>complain to a supervisory authority.</li>
          </ul>
          <p>
            These rights are not absolute. We may need to verify your identity and
            may retain information where the law permits or requires it. The MVP
            does not yet provide self-service account deletion; send requests to{" "}
            <EmailLink address="info@engineersadvance.com" />.
          </p>
          <p>
            For early-access email consent, you can also reply to the message with
            &quot;unsubscribe&quot; or email {" "}
            <EmailLink address="hello@engineersadvance.com" />. We normally respond
            to data-protection requests within one month, subject to the extensions
            and exceptions allowed by law.
          </p>
        </LegalSection>

        <LegalSection title="12. Complaints">
          <p>
            Please contact us first so we can try to resolve your concern. You also
            have the right to complain to the UK Information Commissioner&apos;s
            Office through{" "}
            <a className="font-medium text-[var(--brand-secondary)] underline" href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noreferrer">
              ico.org.uk/make-a-complaint
            </a>.
          </p>
        </LegalSection>

        <LegalSection title="13. Changes to this policy">
          <p>
            We may update this policy when the platform, our providers or legal
            requirements change. We will publish the revised policy with a new
            fixed update date and provide additional notice where a change is
            material. We will not use information for a materially different
            purpose without providing the information or obtaining the permission
            required by law.
          </p>
        </LegalSection>

        <LegalSection title="14. Contact us">
          <p>
            Engineers Advance Ltd<br />
            Flat 2, 112 Southbourne Grove<br />
            Westcliff-On-Sea, England, SS0 9UU<br />
            Email: <EmailLink address="info@engineersadvance.com" />
          </p>
          <p>
            You can also review our <Link className="font-medium text-[var(--brand-secondary)] underline" href="/terms">Terms and Conditions</Link>.
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

function PolicyRow({ purpose, information, basis }: { purpose: string; information: string; basis: string }) {
  return <tr><td className="px-4 py-4">{purpose}</td><td className="px-4 py-4">{information}</td><td className="px-4 py-4">{basis}</td></tr>;
}

function EmailLink({ address }: { address: string }) {
  return <a className="font-medium text-[var(--brand-secondary)] underline" href={`mailto:${address}`}>{address}</a>;
}
