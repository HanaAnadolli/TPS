import React, { useState, useRef, useEffect } from 'react';
import tpsImage from '../../assets/graphic/tps.png';
import tpsHoverImg from '../../assets/graphic/tps-hover.png';
import fmtImage from '../../assets/graphic/fmtomt.png';
import cmtImage from '../../assets/graphic/cmtomt.png';
import omtImage from '../../assets/graphic/omt.png';
import arrowImage from '../../assets/graphic/arrow.svg';

// Popup components
import CMTPopup from './popups/CMTPopup';
import FMTPopup from './popups/FMTPopup';
import OMTPopup from './popups/OMTPopup';
import ServicesPopup from './popups/ServicesPopup';

const TPSEcosystem = () => {
  // which popup is open: "fmt" | "cmt" | "omt" | "services" | null
  const [open, setOpen] = useState(null);
  const [tpsHoverLeft, setTpsHoverLeft] = useState(false);
  const [tpsHoverRight, setTpsHoverRight] = useState(false);
  
  const leftDiagramRef = useRef(null);
  const rightDiagramRef = useRef(null);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsSmall(window.innerWidth < 640);
    };
    
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 relative">
        {/* Vertical divider line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#F48034] transform -translate-x-1/2"></div>
        {/* Left Section: Unlock the Full Potential of TPS */}
        <div className="space-y-4 sm:space-y-6 pr-0 lg:pr-16">
          <div className="relative group cursor-pointer text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 relative z-10 transition-colors duration-300 group-hover:text-white">
              Unlock the Full Potential of TPS
            </h2>
            <div className="w-full h-1 bg-[#F48034]"></div>
            {/* Hover background div */}
            <div className="absolute inset-0 bg-[#F48034] transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100 -z-10"></div>
          </div>

          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p>
              Seamlessly connect TPS with the complete KSTF suite and external APIs to access a comprehensive ecosystem for managing Trade Finance operations.
            </p>
            <p>
              Maximize functionality and efficiency through advanced capabilities by connecting TPS with FMT and CMT and leverage AI-powered enhancements by connection to OMT.
            </p>
          </div>

          <div 
            ref={leftDiagramRef}
            className="relative mt-6 sm:mt-8 h-[280px] sm:h-[300px] lg:h-[360px] w-full overflow-hidden"
          >
            {/* External Services - Far Left */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
              <div 
                className="bg-[#929292] rounded-lg px-3 py-2 sm:px-3 sm:py-2 lg:px-4 lg:py-2.5 text-white font-medium text-xs sm:text-xs lg:text-sm whitespace-nowrap hover:bg-[#CACACA] cursor-pointer transition-colors"
                onClick={() => setOpen("services")}
                role="button"
                tabIndex={0}
                aria-label="Open External Services details"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpen("services");
                  }
                }}
              >
                External Services
              </div>
            </div>

            {/* Arrow from External Services to TPS */}
            <div className='absolute left-[38%] sm:left-[38%] bottom-[38%] sm:bottom-[34%] transform'>
              <span className='absolute right-[120%] bottom-[82%] transform -translate-y-1/2 text-xs sm:text-xs lg:text-sm'>APIs</span>
              <div className="rotate-[215deg] origin-left">
                <img src={arrowImage} alt="arrow to TPS" className="w-10 h-7 sm:w-12 sm:h-9 lg:w-20 lg:h-15" />
              </div>
            </div>

            {/* Main TPS - Center-Right */}
            <div className="absolute left-[60%] sm:left-[55%] lg:left-[58%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[160px] sm:w-[180px] lg:w-[220px]">
              <img 
                src={tpsHoverLeft ? tpsHoverImg : tpsImage} 
                alt="TPS" 
                className="w-[90%] sm:w-full h-auto"
                style={{
                  transition: "transform 800ms ease, filter 800ms ease",
                  transform: tpsHoverLeft ? "scale(1.03)" : "scale(1)",
                  filter: tpsHoverLeft ? "drop-shadow(0px 8px 16px rgba(0,0,0,0.3))" : "none",
                }}
                onMouseEnter={() => setTpsHoverLeft(true)}
                onMouseLeave={() => setTpsHoverLeft(false)}
              />
              <div className="absolute bottom-[-12px] sm:bottom-[-15px] lg:bottom-[-18px] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <span className="text-white text-[8px] sm:text-[9px] lg:text-[10px] font-semibold">POWERED BY</span>
                <img 
                  src={omtImage} 
                  alt="OMT" 
                  className="w-12 h-6 sm:w-12 sm:h-6 lg:w-15 lg:h-8 mt-0.5 sm:mt-1 cursor-pointer transition-all hover:brightness-[0.6]"
                  onClick={() => setOpen("omt")}
                  role="button"
                  tabIndex={0}
                  aria-label="Open OMT details"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setOpen("omt");
                    }
                  }}
                />
              </div>
            </div>

            {/* Arrow from TPS to CMT - rotated upward */}
            <div className="absolute left-[70%] sm:left-[68%] lg:left-[70%] top-[25%] sm:top-[22%] transform -rotate-[4deg] origin-left">
              <img src={arrowImage} alt="arrow to CMT" className="w-10 h-10 sm:w-12 sm:h-9 lg:w-20 lg:h-15" />
            </div>

            {/* CMT - Top Right */}
            <div className="absolute right-0 top-10 sm:top-10 cursor-pointer hover:opacity-80 transition-opacity w-[70px] sm:w-[75px] lg:w-[90px]">
              <img 
                src={cmtImage} 
                alt="CMT" 
                className="w-full h-auto cursor-pointer"
                onClick={() => setOpen("cmt")}
                role="button"
                tabIndex={0}
                aria-label="Open CMT details"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpen("cmt");
                  }
                }}
              />
            </div>

            {/* Arrow from TPS to FMT - rotated downward */}
            <div className="absolute left-[72%] sm:left-[71%] lg:left-[73%] bottom-[26%] sm:bottom-[30%] transform rotate-[45deg] origin-left">
              <img src={arrowImage} alt="arrow to FMT" className="w-10 h-10 sm:w-12 sm:h-9 lg:w-20 lg:h-15" />
            </div>

            {/* FMT - Bottom Right */}
            <div className="absolute right-0 bottom-10 sm:bottom-12 cursor-pointer hover:opacity-80 transition-opacity w-[70px] sm:w-[75px] lg:w-[90px]">
              <img 
                src={fmtImage} 
                alt="FMT" 
                className="w-full h-auto cursor-pointer"
                onClick={() => setOpen("fmt")}
                role="button"
                tabIndex={0}
                aria-label="Open FMT details"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpen("fmt");
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Section: Customize TPS Capabilities */}
        <div className="space-y-4 sm:space-y-6 pl-0 lg:pl-16">
          <div className="relative group cursor-pointer text-center px-2">
            <h2 className="text-lg sm:text-xl lg:text-[22px] font-bold text-gray-800 mb-3 relative z-10 transition-colors duration-300 group-hover:text-white leading-tight">
              Customize TPS Capabilities to your Strategic Focus
            </h2>
            <div className="w-full h-1 bg-[#F48034]"></div>
            {/* Hover background div */}
            <div className="absolute inset-0 bg-[#F48034] transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100 -z-10"></div>
          </div>

          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p>
              Optimize performance in areas that align perfectly with your specific operational requirements.
            </p>
            <p>
              Whether it's unlocking AI-powered capabilities or enabling specific compliance features, this modular approach offers the flexibility to configure TPS according to your unique business context, without the complexity of a full-scale deployment.
            </p>
          </div>

          {/* Simplified Diagram matching Figma */}
          <div 
            ref={rightDiagramRef}
            className="relative mt-6 sm:mt-8 h-[280px] sm:h-[300px] lg:h-[360px] w-full overflow-hidden"
          >
            {/* External Services - Far Left */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
              <div 
                className="bg-[#929292] rounded-lg px-3 py-2 sm:px-3 sm:py-2 lg:px-4 lg:py-2.5 text-white font-medium text-xs sm:text-xs lg:text-sm whitespace-nowrap hover:bg-[#CACACA] cursor-pointer transition-colors"
                onClick={() => setOpen("services")}
                role="button"
                tabIndex={0}
                aria-label="Open External Services details"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpen("services");
                  }
                }}
              >
                External Services
              </div>
            </div>

            {/* Arrow from External Services to TPS */}
            <div className='absolute left-[48%] sm:left-[40%] bottom-[32%] sm:bottom-[34%] transform'>
              <span className='absolute right-[120%] bottom-[82%] transform -translate-y-1/2 text-xs sm:text-xs lg:text-sm'>APIs</span>
              <div className="rotate-[215deg] origin-left">
                <img src={arrowImage} alt="arrow to TPS" className="w-15 h-14 sm:w-12 sm:h-9 lg:w-22 lg:h-18" />
              </div>
            </div>

            {/* Main TPS - centered */}
            <div className="absolute left-[70%] sm:left-[58%] lg:left-[62%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[160px] sm:w-[180px] lg:w-[220px]">
              <img 
                src={tpsHoverRight ? tpsHoverImg : tpsImage} 
                alt="TPS" 
                className="w-full h-auto"
                style={{
                  transition: "transform 800ms ease, filter 800ms ease",
                  transform: tpsHoverRight ? "scale(1.03)" : "scale(1)",
                  filter: tpsHoverRight ? "drop-shadow(0px 8px 16px rgba(0,0,0,0.3))" : "none",
                }}
                onMouseEnter={() => setTpsHoverRight(true)}
                onMouseLeave={() => setTpsHoverRight(false)}
              />
              <div className="absolute bottom-[-12px] sm:bottom-[-15px] lg:bottom-[-18px] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <span className="text-white text-[8px] sm:text-[9px] lg:text-[10px] font-semibold">POWERED BY</span>
                <img 
                  src={omtImage} 
                  alt="OMT" 
                  className="w-12 h-6 sm:w-12 sm:h-6 lg:w-15 lg:h-8 mt-0.5 sm:mt-1 cursor-pointer transition-all hover:brightness-[0.6]"
                  onClick={() => setOpen("omt")}
                  role="button"
                  tabIndex={0}
                  aria-label="Open OMT details"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setOpen("omt");
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* POPUPS */}
      <CMTPopup open={open === "cmt"} onClose={() => setOpen(null)} />
      <FMTPopup open={open === "fmt"} onClose={() => setOpen(null)} />
      <OMTPopup open={open === "omt"} onClose={() => setOpen(null)} />
      <ServicesPopup open={open === "services"} onClose={() => setOpen(null)} />
    </section>
  );
};

export default TPSEcosystem;

