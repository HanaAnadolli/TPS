import React from 'react';
import Modal from './Modal';
import cmtPopupImg from '../../../assets/popups/cmt-popup.png';
import CmtVector from '../../../assets/popups/cmt-vector.svg?react';
import CheckIconSvg from '../../../assets/popups/check.svg?react';

const CMTPopup = ({ open, onClose }) => {
  const data = {
    heading: "Compliance Management Tool (CMT)",
    subheading: "Onboarding and Handling of Regulatory Compliance and Monitoring",
    brand: "#F0C430",
    bullets: [
      {
        title: "Streamlined Onboarding",
        body: "Simplifies and accelerates the onboarding process, aligning with industry best practices and regulatory standards.",
      },
      {
        title: "Continuous Compliance Monitoring",
        body: "Enables automated, ongoing oversight to ensure consistent adherence to evolving regulatory requirements.",
      },
      {
        title: "Enhanced Risk Assessment",
        body: "Offers a real-time, holistic view of relationship exposure through dynamic monitoring capabilities.",
      },
      {
        title: "Proactive Compliance Management",
        body: "Empowers clients to implement additional system-driven, automated controls tailored to their unique risk frameworks.",
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
                    <CmtVector className="w-5 h-5" />
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
              src={cmtPopupImg} 
              alt="CMT Popup" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CMTPopup;

