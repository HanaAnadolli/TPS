import React from 'react';
import Modal from './Modal';
import fmtPopupImg from '../../../assets/popups/fmt-popup.png';
import FmtVector from '../../../assets/popups/fmt-vector.svg?react';
import CheckIconSvg from '../../../assets/popups/check.svg?react';

const FMTPopup = ({ open, onClose }) => {
  const data = {
    heading: "Financial Management Tool (FMT)",
    subheading: "Elevate Credit Risk Management",
    brand: "#36A8DF",
    bullets: [
      {
        title: "Two-Way Information Flow",
        body: "Exchange data on credit ratings, interest rates, and company details between TPS and FMT securely in real time.",
      },
      {
        title: "Continuous Credit Risk Monitoring",
        body: "Provides ongoing oversight of buyers' current financial and liquidity positions within trade finance programs.",
      },
      {
        title: "Advanced Credit Risk Assessment",
        body: "Delivers a dynamic, data-driven view of creditworthiness by combining financial metrics with behavioral signals.",
      },
      {
        title: "Customizable Credit Risk Controls",
        body: "Lets clients design automated, system-driven controls tailored to their risk governance frameworks.",
      },
    ],
  };

  const CheckIcon = () => <CheckIconSvg className="w-4 h-4" />;

  return (
    <Modal open={open} onClose={onClose}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Left side - Text content */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: data.brand }}>
              {data.heading}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-black">{data.subheading}</p>
          </div>

          <ul className="space-y-4">
            {data.bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <div className="mt-0.5 flex-shrink-0">
                  <div className="relative">
                    <FmtVector className="w-5 h-5" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <CheckIcon />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base mb-1" style={{ color: data.brand }}>
                    {b.title}
                  </div>
                  <div className="text-gray-800 leading-relaxed text-xs sm:text-sm">{b.body}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side - Popup Image */}
        <div className="flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src={fmtPopupImg} 
              alt="FMT Popup" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default FMTPopup;

