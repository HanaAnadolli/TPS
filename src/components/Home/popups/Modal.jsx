import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ open, onClose, children }) => {
  useEffect(() => {
    if (!open) return;
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    
    return () => {
      // Restore body scrolling when modal closes
      document.body.style.overflow = 'unset';
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 flex items-center justify-center"
      style={{ zIndex: 99999 }}
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} aria-hidden="true" />
      <div
        className="relative w-[95%] max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden"
        style={{ animation: "modalIn 200ms ease" }}
      >
        {/* Close button - top right corner */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 text-black hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>

        {/* Main content */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[90vh]">
          {children}
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(8px) }
          to   { opacity: 1; transform: translateY(0) }
        }
      `}</style>
    </div>,
    document.body
  );
};

export default Modal;

