import React from 'react';
import Modal from './Modal';
import omtPopupImg from '../../../assets/popups/omt-popup.png';
import OmtVector from '../../../assets/popups/omt-vector.svg?react';
import CheckIconSvg from '../../../assets/popups/check.svg?react';

const OMTPopup = ({ open, onClose }) => {
  const data = {
    heading: "Operations Management Tool (OMT)",
    subheading: "Streamline User Experience and Enhance Automation with AI",
    brand: "#1DA565",
    bullets: [
      {
        title: "Interactive User Support",
        body: "Embedded guidance to help users navigate and utilize TPS features confidently.",
      },
      {
        title: "Automated Invoice Audit",
        body: "Reduces manual workload and improves accuracy by auditing digital invoices against TPS records.",
      },
      {
        title: "Real-time Performance Monitoring & Reporting",
        body: "Enables data-driven insight for faster, more confident decision making.",
      },
      {
        title: "Trade Finance Program Setup Assistant",
        body: "Verifies program setup parameters and offers solutions on demand based on client prompts.",
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
                    <OmtVector className="w-5 h-5" />
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
              src={omtPopupImg} 
              alt="OMT Popup" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default OMTPopup;

