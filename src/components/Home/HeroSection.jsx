// HeroSection.jsx
import React from "react";
import TPSOrbit from "./TPSOrbit";

function HeroSection() {
  return (
    <section className="relative isolate w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Mobile Layout: Text first, then orbit */}
        <div className="lg:hidden space-y-12">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl font-semibold text-[#F48034] leading-tight">
              Trade Programs Servicing
            </h1>
            <br />
            <p className="text-lg sm:text-xl text-black/80 leading-relaxed">
              TPS enables financial institutions to operate receivables and payables based financing programs whilst having access to own technology.
            </p>
            <br />
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F48034]">
              Flexible. Automated. Fully in Your Control.
            </h2>
            <button className="mt-6 rounded-full bg-neutral-300 px-5 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-400">
              Learn More
            </button>
          </div>

          {/* Orbit graphic - responsive: it will fill the container width (capped by maxSize) */}
          <div className="flex justify-center px-4">
            <div className="w-full max-w-[720px]">
              <TPSOrbit maxSize={720} />
            </div>
          </div>
        </div>

        {/* Desktop Layout: Side by side */}
        <div className="hidden lg:grid grid-cols-2 items-center gap-16">
          <div className="max-w-xl">
            <h1 className="text-4xl font-semibold text-[#F48034]">
              Trade Programs Servicing
            </h1>
            <br />
            <p className="mt-4 text-base text-black/80">
              TPS enables financial institutions to operate <br />
              receivables and payables based financing <br />
              programs whilst having access to own technology.
            </p>
            <br />
            <h2 className="text-2xl font-semibold text-[#F48034]">
              Flexible. Automated. Fully in Your Control.
            </h2>
            <button className="mt-6 rounded-full bg-neutral-300 px-5 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-400">
              Learn More
            </button>
          </div>

          <div className="flex justify-center lg:justify-end">
            {/* cap the orbit at 500px on desktop */}
            <div className="w-full max-w-[500px]">
              <TPSOrbit maxSize={500} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
