"use client";

import { useRef } from "react";

export default function WhoWeSupport() {
  const bgRef = useRef(null);
  let targetX = 50;
  let targetY = 50;
  let currentX = 50;
  let currentY = 50;

  const animate = () => {
    if (!bgRef.current) return;

    // Easing factor (lower = smoother)
    const ease = 0.05;

    currentX += (targetX - currentX) * ease;
    currentY += (targetY - currentY) * ease;

    bgRef.current.style.backgroundPosition = `${currentX}% ${currentY}%`;

    requestAnimationFrame(animate);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 30; // movement range
    const y = ((e.clientY - rect.top) / rect.height) * 30;

    targetX = x;
    targetY = y;
  };

  // Start animation loop once
  if (typeof window !== "undefined") {
    requestAnimationFrame(animate);
  }

  return (
    <section
      id="who-we-support"
      className="relative pt-10 pb-22"
      onMouseMove={handleMouseMove}
    >
      {/* Gradient fade at the top */}
      <div className="absolute top-0 left-0 w-full h-12 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, white 0%, rgba(255,255,255,0) 100%)"
          }}>
      </div>

      {/* Bottom vertical fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-20 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, white 100%)"
        }}
      ></div>

      {/* Smooth parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-auto"
        style={{
          backgroundImage: `url('/icons/engineers.jpg')`,
          backgroundPosition: "50% 50%",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 pointer-events-none"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--brand-primary)] mb-12"
        style={{textShadow: "0 1px 2px rgba(0,0,0,0.15)"}}>
          Built for Engineers at Every Stage!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div
            className="relative p-6 bg-white rounded-lg shadow-sm h-full flex flex-col transition-transform duration-300 ease-out will-change-transform overflow-hidden"
            onMouseMove={(e) => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              // 3D tilt
              const rotateX = ((y - rect.height / 2) / rect.height) * -10;
              const rotateY = ((x - rect.width / 2) / rect.width) * 10;

              card.style.transform = `
                perspective(800px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.03)
              `;

              // Glow highlight
              const glow = card.querySelector(".glow");
              glow.style.opacity = 1;
              glow.style.background = `
                radial-gradient(
                  circle at ${x}px ${y}px,
                  rgba(0, 167, 181,0.25),
                  transparent 60%
                )
              `;
            }}
            onMouseLeave={(e) => {
              const card = e.currentTarget;
              card.style.transform = `
                perspective(800px)
                rotateX(0deg)
                rotateY(0deg)
                scale(1)
              `;

              const glow = card.querySelector(".glow");
              glow.style.opacity = 0;
            }}
          >
            {/* Glow layer */}
            <div className="glow absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"></div>

            {/* Card content */}
            <h3 className="text-xl font-semibold text-[var(--brand-primary)] mb-3">
              Internationally trained engineers navigating the UK system.
            </h3>
            <p className="text-gray-600 flex-grow leading-relaxed">
              Professionals with overseas qualifications seeking UK‑aligned skills, confidence,
              and pathways into engineering roles.
            </p>
          </div>


          <div className="relative p-6 bg-white rounded-lg shadow-sm h-full flex flex-col transition-transform duration-300 ease-out will-change-transform overflow-hidden"
            onMouseMove={(e) => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              // 3D tilt
              const rotateX = ((y - rect.height / 2) / rect.height) * -10;
              const rotateY = ((x - rect.width / 2) / rect.width) * 10;

              card.style.transform = `
                perspective(800px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.03)
              `;

              // Glow highlight
              const glow = card.querySelector(".glow");
              glow.style.opacity = 1;
              glow.style.background = `
                radial-gradient(
                  circle at ${x}px ${y}px,
                  rgba(0, 167, 181,0.25),
                  transparent 60%
                )
              `;
            }}
            onMouseLeave={(e) => {
              const card = e.currentTarget;
              card.style.transform = `
                perspective(800px)
                rotateX(0deg)
                rotateY(0deg)
                scale(1)
              `;

              const glow = card.querySelector(".glow");
              glow.style.opacity = 0;
            }}
          >
            {/* Glow layer */}
            <div className="glow absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"></div>
            
            <h3 className="text-xl font-semibold text-[var(--brand-primary)] mb-3">
              UK graduates seeking direction and confidence.
            </h3>
            <p className="text-gray-600 flex-grow leading-relaxed">
              Graduates who have the academic foundation but need clarity, structure, and real‑world engineering exposure to confidently enter the workforce.
            </p>
          </div>

          <div className="relative p-6 bg-white rounded-lg shadow-sm h-full flex flex-col transition-transform duration-300 ease-out will-change-transform overflow-hidden"
            onMouseMove={(e) => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              // 3D tilt
              const rotateX = ((y - rect.height / 2) / rect.height) * -10;
              const rotateY = ((x - rect.width / 2) / rect.width) * 10;

              card.style.transform = `
                perspective(800px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.03)
              `;

              // Glow highlight
              const glow = card.querySelector(".glow");
              glow.style.opacity = 1;
              glow.style.background = `
                radial-gradient(
                  circle at ${x}px ${y}px,
                  rgba(0, 167, 181,0.25),
                  transparent 60%
                )
              `;
            }}
            onMouseLeave={(e) => {
              const card = e.currentTarget;
              card.style.transform = `
                perspective(800px)
                rotateX(0deg)
                rotateY(0deg)
                scale(1)
              `;

              const glow = card.querySelector(".glow");
              glow.style.opacity = 0;
            }}
          >
            {/* Glow layer */}
            <div className="glow absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"></div>
            
            <h3 className="text-xl font-semibold text-[var(--brand-primary)] mb-3">
              Career‑switchers entering engineering for the first time.
            </h3>
            <p className="text-gray-600 flex-grow leading-relaxed">
              Individuals transitioning from other industries who need practical skills, industry context, and guided support to break into engineering roles.
            </p>
          </div>

          <div className="relative p-6 bg-white rounded-lg shadow-sm h-full flex flex-col transition-transform duration-300 ease-out will-change-transform overflow-hidden"
            onMouseMove={(e) => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              // 3D tilt
              const rotateX = ((y - rect.height / 2) / rect.height) * -10;
              const rotateY = ((x - rect.width / 2) / rect.width) * 10;

              card.style.transform = `
                perspective(800px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.03)
              `;

              // Glow highlight
              const glow = card.querySelector(".glow");
              glow.style.opacity = 1;
              glow.style.background = `
                radial-gradient(
                  circle at ${x}px ${y}px,
                  rgba(0, 167, 181,0.25),
                  transparent 60%
                )
              `;
            }}
            onMouseLeave={(e) => {
              const card = e.currentTarget;
              card.style.transform = `
                perspective(800px)
                rotateX(0deg)
                rotateY(0deg)
                scale(1)
              `;

              const glow = card.querySelector(".glow");
              glow.style.opacity = 0;
            }}
          >
            {/* Glow layer */}
            <div className="glow absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"></div>

            <h3 className="text-xl font-semibold text-[var(--brand-primary)] mb-3">
              Early‑Career Engineers.
            </h3>
            <p className="text-gray-600 flex-grow leading-relaxed">
              New graduates and technicians looking to strengthen technical foundations and
              workplace readiness.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
