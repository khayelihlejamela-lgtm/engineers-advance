import Hero from "./components/Hero";
import ValueProps from "./components/ValueProps";
import Stats from "./components/Stats";
import WhoWeSupport from "./components/WhoWeSupport";
import Pathways from "./components/Pathways";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";


export default function PublicPage() {
  return (
    <main className="font-sans text-gray-900 pt-[var(--navbar-height)]">
      <Hero />
      <ValueProps />
      <Stats />
      <WhoWeSupport />
      <Pathways />
      <About />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}