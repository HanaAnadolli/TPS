import React from "react";

function OurSolution() {
  return (
    <section className="relative w-full bg-[#e3e7eb] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left side - Heading */}
          <div className="lg:col-span-3">
            <h2 className="text-4xl font-bold text-[#F48034] lg:text-5xl">
              Our Solution
            </h2>
          </div>

          {/* Vertical separator */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="h-[70px] w-[5px] bg-[#F48034]/30 mx-auto"></div>
          </div>

          {/* Right side - Description */}
          <div className="lg:col-span-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              TPS is a next-generation software designed for clients seeking to replace manual processes and generic frameworks with an intelligent and customizable solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurSolution;
