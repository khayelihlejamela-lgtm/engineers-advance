import {
  ArrowRightIcon,
  CheckCircleIcon,
  DocumentMagnifyingGlassIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import InterestForm from "@/features/early-access/InterestForm";

export const metadata = {
  title: "Engineers Advance | Register for early access",
  description:
    "Register your interest in an evidence-led engineering competency profile and help shape the Engineers Advance MVP.",
};

const pathways = [
  "Mechanical",
  "Electrical & Instrumentation",
  "Chemical / Process",
  "Civil / Structural",
  "Project Management",
];

const benefits = [
  "See what your professional evidence currently demonstrates",
  "Understand your professional and technical competency profile",
  "Identify where stronger evidence or development could help",
  "Choose the priorities most relevant to your own career direction",
];

export default function EarlyAccessLandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-gray-700">
      <header className="border-b border-gray-200 bg-white">
        <div
          className="
            mx-auto
            flex
            min-h-20
            w-full
            max-w-7xl
            items-center
            justify-between
            gap-2
            px-4
            sm:gap-4
            sm:px-6
            lg:px-8
          "
        >
          <a
            href="/"
            aria-label="Engineers Advance home"
            className="
              inline-flex
              min-h-11
              min-w-0
              shrink
              cursor-pointer
              touch-manipulation
              items-center
              rounded-lg
              transition
              duration-150
              active:scale-[0.97]
              active:opacity-70
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[var(--brand-secondary)]
              [-webkit-tap-highlight-color:transparent]
            "
          >
            <img
              src="/logo1.png"
              alt="Engineers Advance"
              width={150}
              height={60}
              className="
                block
                h-auto
                max-w-full
                shrink-0
                object-contain
              "
              style={{
                width: "clamp(105px, 28vw, 150px)",
                height: "auto",
              }}
            />
          </a>

          <a
            href="#register"
            className="
              inline-flex
              min-h-11
              shrink-0
              cursor-pointer
              touch-manipulation
              items-center
              justify-center
              whitespace-nowrap
              rounded-xl
              bg-[var(--brand-secondary)]
              px-3
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition
              duration-150
              hover:bg-[var(--brand-primary)]
              active:scale-[0.98]
              active:bg-[var(--brand-primary)]
              active:shadow-none
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[var(--brand-secondary)]
              focus-visible:ring-offset-2
              [-webkit-tap-highlight-color:transparent]
              sm:px-5
            "
          >
            <span className="sm:hidden">
              Register
            </span>

            <span className="hidden sm:inline">
              Register interest
            </span>
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="pointer-events-none absolute -right-40 -top-32 h-96 w-96 rounded-full bg-[var(--brand-secondary)]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[var(--brand-primary)]/5 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl min-w-0 gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:items-center lg:gap-16">
          <div className="min-w-0">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--brand-secondary)]/15 bg-[var(--brand-secondary)]/5 px-3 py-2 text-xs font-semibold text-[var(--brand-secondary)] sm:px-4 sm:text-sm">
              <SparklesIcon aria-hidden="true" className="h-4 w-4 shrink-0" />
              Early access is being prepared
            </div>

            <h1 className="mt-6 max-w-4xl break-words text-4xl font-bold leading-[1.08] tracking-tight text-[var(--brand-primary)] sm:text-5xl lg:text-6xl">
              Understand what your engineering experience demonstrates.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl">
              Engineers Advance is building an evidence-led engineering career-development platform that turns your CV and supporting professional evidence into a structured competency profile.
            </p>

            <ul className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex min-w-0 items-start gap-3 rounded-xl bg-gray-50 px-4 py-3 text-sm leading-relaxed text-gray-700">
                  <CheckCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-secondary)]" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span>No CV required to register interest</span>
              <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" />
              <span>No account is created yet</span>
            </div>
          </div>

          <div id="register" className="scroll-mt-6">
            <InterestForm />
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-secondary)] sm:text-sm">Why it matters</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--brand-primary)] sm:text-3xl lg:text-4xl">
              Your experience should lead to clearer development decisions.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              Engineers often know what they have worked on, but not how that experience translates into a structured view of capability, or which development priorities will make the greatest difference next.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ValueCard
              icon={<DocumentMagnifyingGlassIcon aria-hidden="true" className="h-7 w-7" />}
              title="Built from evidence"
            >
              The assessment starts with professional evidence in your CV and supporting documents, not a generic score alone.
            </ValueCard>

            <ValueCard
              icon={<SparklesIcon aria-hidden="true" className="h-7 w-7" />}
              title="A structured profile"
            >
              Evidence is mapped into professional competencies and technical capabilities for your selected pathway.
            </ValueCard>

            <ValueCard
              icon={<ShieldCheckIcon aria-hidden="true" className="h-7 w-7" />}
              title="You choose the direction"
            >
              The platform can recommend priorities, while you decide what is most relevant to your career development.
            </ValueCard>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-secondary)] sm:text-sm">How the MVP will work</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--brand-primary)] sm:text-3xl lg:text-4xl">
                From professional evidence to a clearer competency picture.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                Early candidates will test the complete assessment journey and help us understand what is genuinely useful before access is widened.
              </p>
            </div>

            <ol className="grid gap-4 sm:grid-cols-2">
              <Step number="01" title="Choose a pathway">Select the engineering direction that best reflects your role or progression goal.</Step>
              <Step number="02" title="Review your evidence">Upload a CV and review the professional evidence identified before mapping begins.</Step>
              <Step number="03" title="Build your profile">See how your evidence supports professional competencies and technical capabilities.</Step>
              <Step number="04" title="Choose what comes next">Review recommendations and select the areas you want to develop further.</Step>
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-primary)] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-secondary)] sm:text-sm">Initial pathways</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">Built for different engineering directions.</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              Register your pathway interest now. It will help determine the composition and order of the first candidate testing groups.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {pathways.map((pathway) => (
              <div key={pathway} className="flex min-h-14 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/90">
                <CheckCircleIcon aria-hidden="true" className="h-5 w-5 shrink-0 text-[var(--brand-secondary)]" />
                {pathway}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto w-full max-w-4xl rounded-3xl border border-[var(--brand-secondary)]/15 bg-[var(--brand-secondary)]/5 px-5 py-10 text-center sm:px-10 sm:py-12">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--brand-primary)] sm:text-3xl">Help shape the first release.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Registering interest does not create an account. When the MVP is ready, selected candidates will receive an invitation to create an account and complete the normal verified signup process.
          </p>
          <a
            href="#register"
            className="mt-7 inline-flex min-h-11 cursor-pointer touch-manipulation items-center justify-center gap-2 rounded-xl bg-[var(--brand-secondary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-150 hover:bg-[var(--brand-primary)] active:scale-[0.98] active:bg-[var(--brand-primary)] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-secondary)] focus-visible:ring-offset-2 [-webkit-tap-highlight-color:transparent]"
          >
            Register for early access
            <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-gray-950 px-4 py-8 text-gray-400 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-white">Engineers Advance Ltd</p>
            <p className="mt-1 text-xs">Company number 16760261</p>
          </div>
          <nav aria-label="Legal" className="flex flex-wrap gap-5">
            <a className="inline-flex min-h-11 cursor-pointer touch-manipulation items-center rounded-lg px-1 py-3 transition duration-150 hover:text-white active:scale-[0.97] active:text-[var(--brand-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-secondary)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 [-webkit-tap-highlight-color:transparent]" href="/privacy">Privacy Policy</a>
            <a className="inline-flex min-h-11 cursor-pointer touch-manipulation items-center rounded-lg px-1 py-3 transition duration-150 hover:text-white active:scale-[0.97] active:text-[var(--brand-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-secondary)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 [-webkit-tap-highlight-color:transparent]" href="/terms">Terms and Conditions</a>
            <a className="inline-flex min-h-11 cursor-pointer touch-manipulation items-center rounded-lg px-1 py-3 transition duration-150 hover:text-white active:scale-[0.97] active:text-[var(--brand-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-secondary)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 [-webkit-tap-highlight-color:transparent]" href="mailto:info@engineersadvance.com">Contact</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

function ValueCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <article className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-secondary)]/10 text-[var(--brand-secondary)]">{icon}</div>
      <h3 className="mt-5 text-lg font-semibold text-[var(--brand-primary)]">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">{children}</p>
    </article>
  );
}

function Step({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <li className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
      <p className="text-sm font-semibold text-[var(--brand-secondary)]">{number}</p>
      <h3 className="mt-2 text-lg font-semibold text-[var(--brand-primary)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{children}</p>
    </li>
  );
}
