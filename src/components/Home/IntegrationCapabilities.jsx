import React from "react";

export default function IntegrationCapabilities() {
  return (
    <section className="relative w-full bg-[#e3e7eb] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left side - Heading */}
          <div className="lg:col-span-3">
            <h2 className="text-4xl font-bold text-[#F48034] lg:text-5xl">
              Integration Capabilities
            </h2>
          </div>

          {/* Vertical separator */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="h-[100px] w-[5px] bg-[#F48034]/30 mx-auto"></div>
          </div>

          {/* Right side - Description */}
          <div className="lg:col-span-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Advanced functionalities by seamless integration with other{" "}
              <a
                href="https://kstf.ch/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F48034] font-semibold hover:underline"
              >
                KS-TF AG
              </a>{" "}
              software and other Application Programming Interfaces (APIs)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
