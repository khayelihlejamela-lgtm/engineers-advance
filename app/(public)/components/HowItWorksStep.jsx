"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* -------------------------------------------------------
   ARROW SVG — Step‑specific geometry
   ------------------------------------------------------- */
function ArrowSVG({ index }) {
  let path = "";
  let arrowHead = "";

  /* STEP 1 (index 0) — left aligned
     Right → down → curve left → point to Step 2 number */
  if (index === 0) {
    path = "M10 20 C 120 20, 120 80, 60 120";
    arrowHead = "M90 120 L 60 120 L 60 100";
  }

  /* STEP 2 (index 1) — right aligned
     Left → down → curve right → point to Step 3 text */
  if (index === 1) {
    path = "M150 20 C 40 20, 40 80, 100 120";
    arrowHead = "M65 110 L 100 120 L 105 110";
  }

  /* STEP 3 (index 2) — left aligned
     Same logic as Step 1 */
  if (index === 2) {
    path = "M10 20 C 120 20, 120 80, 60 120";
    arrowHead = "M90 120 L 60 120 L 60 100";
  }

  /* STEP 4 (index 3) — right aligned
     Same as Step 2 */
  if (index === 3) {
    path = "M100 10 C 40 20, 20 80, 200 80";
    arrowHead = "M125 90 L 160 80 L 130 60";
  }

  return (
    <svg
      width="160"
      height="140"
      viewBox="0 0 160 140"
      fill="none"
      stroke="var(--brand-primary)"
      strokeWidth="4"
    >
      <path d={path} strokeLinecap="round" strokeLinejoin="round" />
      <path d={arrowHead} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* -------------------------------------------------------
   MAIN COMPONENT
   ------------------------------------------------------- */
export default function HowItWorksStep({ step, index, isLast }) {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollingDown = window.scrollY > lastScrollY.current;
      lastScrollY.current = window.scrollY;

      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.75;

      if (scrollingDown && rect.top < triggerPoint) {
        setAnimate(true);
      }

      if (!scrollingDown && rect.top > window.innerHeight) {
        setAnimate(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.45,
        ease: [0.25, 0.8, 0.25, 1],
        delay: index * 0.1,
      }}
      className={`
        relative bg-white rounded-xl p-6
        flex flex-col md:flex-row items-center md:items-start gap-8
        transition-shadow duration-300 hover:shadow-[0_4px_12px_rgba(0,167,181,0.18)]

        ${index % 2 === 1 ? "md:flex-row-reverse" : ""}
      `}
    >
      {/* Number */}
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-full bg-[var(--brand-secondary)] text-white flex items-center justify-center text-2xl font-bold shadow-md">
          {step.number}
        </div>
      </div>

      {/* Text */}
      <div className="md:w-2/3">
        <h3 className="text-xl font-semibold text-[var(--brand-primary)] mb-2">
          {step.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* INTERNAL ARROW (desktop only) */}
      {!isLast && (
        <div
          className={`
            hidden md:block absolute top-1/2 transform -translate-y-1/2
            ${index % 2 === 1 ? "left-[-20px]" : "right-[-20px]"}
          `}
        >
          <ArrowSVG index={index} />
        </div>
      )}
    </motion.div>
  );
}
