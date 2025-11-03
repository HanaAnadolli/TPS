import React from 'react';
import Modal from './Modal';
import servicesPopupImg from '../../../assets/popups/services-popup.png';
import EfficiencyIcon from '../../../assets/popups/efficiency.svg?react';
import MissionIcon from '../../../assets/popups/mission.svg?react';

const ServicesPopup = ({ open, onClose }) => {
  const data = {
    heading: "API Connectivity for External Services",
    subtitle: "Seamless, Real-Time Data Exchange",
    description:
      "APIs enable instant and flexible communication between systems, automating the flow of financial and operational data with unmatched speed and accuracy. Connect TPS directly to ERP systems for streamlined workflows.",
    brand: "#F48034",
    bullets: [
      {
        title: "Real-Time Integration",
        body: "Direct access to billing, financial, and payment records.",
        icon: EfficiencyIcon,
      },
      {
        title: "Increased Accuracy",
        body: "Automated data exchange reduces manual errors and accelerates processes.",
        icon: MissionIcon,
      },
    ],
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* LEFT SIDE */}
          <div>
            <h2
              className="text-2xl sm:text-3xl font-extrabold mb-2"
              style={{ color: data.brand }}
            >
              {data.heading}
            </h2>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              {data.subtitle}
            </h3>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-8">
              {data.description}
            </p>

            {/* UPDATED BULLETS (ICON ON TOP) */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {data.bullets.map((b, i) => {
                const Icon = b.icon;
                return (
                  <li key={i} className="flex flex-col items-start text-left">
                    
                    {/* Icon */}
                    <div
                      className="w-12 h-12 mb-3 rounded-full flex items-center justify-center border-2"
                      style={{ borderColor: `${data.brand}33` }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <div
                      className="font-semibold text-sm sm:text-base mb-1"
                      style={{ color: data.brand }}
                    >
                      {b.title}
                    </div>

                    {/* Body */}
                    <div className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      {b.body}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex items-center justify-center lg:justify-end">
            <img
              src={servicesPopupImg}
              alt="External Services Illustration"
              className="w-full max-w-md lg:max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ServicesPopup;
