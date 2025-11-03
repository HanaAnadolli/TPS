// TPSOrbit.jsx
import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

import one from "../../assets/graphic/1.svg";
import two from "../../assets/graphic/2.svg";
import three from "../../assets/graphic/3.svg";
import four from "../../assets/graphic/4.svg";
import five from "../../assets/graphic/5.svg";
import six from "../../assets/graphic/6.svg";
import seven from "../../assets/graphic/7.svg";
import eight from "../../assets/graphic/8.svg";

// SVGs as React components
import FmtSvg from "../../assets/graphic/fmt.svg?react";
import CmtSvg from "../../assets/graphic/cmt.svg?react";

import omt from "../../assets/graphic/omt.png";
import omtHoverImg from "../../assets/graphic/omt-hover.png";
import tps from "../../assets/graphic/tps.png";
import tpsHoverImg from "../../assets/graphic/tps-hover.png";

// Popup images
import cmtPopupImg from "../../assets/popups/cmt-popup.png";
import fmtPopupImg from "../../assets/popups/fmt-popup.png";
import omtPopupImg from "../../assets/popups/omt-popup.png";

// Popup vectors and icons
import CmtVector from "../../assets/popups/cmt-vector.svg?react";
import FmtVector from "../../assets/popups/fmt-vector.svg?react";
import OmtVector from "../../assets/popups/omt-vector.svg?react";
import CheckIconSvg from "../../assets/popups/check.svg?react";

/* POPUPS data (unchanged) */
const POPUPS = {
  cmt: {
    heading: "Compliance Management Tool (CMT)",
    subheading: "Onboarding and Handling of Regulatory Compliance and Monitoring",
    brand: "#F0C430",
    bullets: [
      { title: "Streamlined Onboarding", body: "Simplifies and accelerates the onboarding process, aligning with industry best practices and regulatory standards." },
      { title: "Continuous Compliance Monitoring", body: "Enables automated, ongoing oversight to ensure consistent adherence to evolving regulatory requirements." },
      { title: "Enhanced Risk Assessment", body: "Offers a real-time, holistic view of relationship exposure through dynamic monitoring capabilities." },
      { title: "Proactive Compliance Management", body: "Empowers clients to implement additional system-driven, automated controls tailored to their unique risk frameworks." },
    ],
  },
  fmt: {
    heading: "Financial Management Tool (FMT)",
    subheading: "Elevate Credit Risk Management",
    brand: "#36A8DF",
    bullets: [
      { title: "Two-Way Information Flow", body: "Exchange data on credit ratings, interest rates, and company details between TPS and FMT securely in real time." },
      { title: "Continuous Credit Risk Monitoring", body: "Provides ongoing oversight of buyers’ current financial and liquidity positions within trade finance programs." },
      { title: "Advanced Credit Risk Assessment", body: "Delivers a dynamic, data-driven view of creditworthiness by combining financial metrics with behavioral signals." },
      { title: "Customizable Credit Risk Controls", body: "Lets clients design automated, system-driven controls tailored to their risk governance frameworks." },
    ],
  },
  omt: {
    heading: "Operations Management Tool (OMT)",
    subheading: "Streamline User Experience and Enhance Automation with AI",
    brand: "#1DA565",
    bullets: [
      { title: "Interactive User Support", body: "Embedded guidance to help users navigate and utilize TPS features confidently." },
      { title: "Automated Invoice Audit", body: "Reduces manual workload and improves accuracy by auditing digital invoices against TPS records." },
      { title: "Real-time Performance Monitoring & Reporting", body: "Enables data-driven insight for faster, more confident decision making." },
      { title: "Trade Finance Program Setup Assistant", body: "Verifies program setup parameters and offers solutions on demand based on client prompts." },
    ],
  },
};

/* Modal component (unchanged behavior, responsive-friendly) */
const Modal = ({ open, onClose, data }) => {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open || !data) return null;

  const { heading, subheading, brand, bullets } = data;
  const popupType = Object.keys(POPUPS).find((k) => POPUPS[k] === data);

  const CheckIcon = () => <CheckIconSvg className="w-4 h-4" />;

  const PopupImage = () => {
    if (popupType === "cmt") return <img src={cmtPopupImg} alt="CMT Popup" className="max-w-full max-h-full object-contain" />;
    if (popupType === "fmt") return <img src={fmtPopupImg} alt="FMT Popup" className="max-w-full max-h-full object-contain" />;
    if (popupType === "omt") return <img src={omtPopupImg} alt="OMT Popup" className="max-w-full max-h-full object-contain" />;
    return null;
  };

  return createPortal(
    <div role="dialog" aria-modal="true" className="fixed inset-0 flex items-center justify-center p-4" style={{ zIndex: 99999 }}>
      <div className="absolute inset-0 bg-black/60" onClick={onClose} aria-hidden="true" />
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden">
        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 z-10 text-black hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center">✕</button>
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[90vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: brand }}>{heading}</h2>
                <p className="text-sm sm:text-base font-semibold text-black">{subheading}</p>
              </div>

              <ul className="space-y-4">
                {bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      {popupType === "cmt" ? (
                        <div className="relative"><CmtVector className="w-5 h-5" /><div className="absolute inset-0 flex items-center justify-center"><CheckIcon /></div></div>
                      ) : popupType === "fmt" ? (
                        <div className="relative"><FmtVector className="w-5 h-5" /><div className="absolute inset-0 flex items-center justify-center"><CheckIcon /></div></div>
                      ) : popupType === "omt" ? (
                        <div className="relative"><OmtVector className="w-5 h-5" /><div className="absolute inset-0 flex items-center justify-center"><CheckIcon /></div></div>
                      ) : (
                        <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: brand }}><CheckIcon /></div>
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-sm sm:text-base mb-1" style={{ color: brand }}>{b.title}</div>
                      <div className="text-gray-800 leading-relaxed text-xs sm:text-sm">{b.body}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full h-56 sm:h-80 flex items-center justify-center">
                <PopupImage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

/* Responsive TPSOrbit */
const TPSOrbit = ({ className = "", maxSize = 820 }) => {
  const wrapperRef = useRef(null);
  const [S, setS] = useState(Math.min(820, maxSize)); // width (size)
  const H = S * 0.6;
  const [cmtHover, setCmtHover] = useState(false);
  const [fmtHover, setFmtHover] = useState(false);
  const [tpsHover, setTpsHover] = useState(false);
  const [omtHover, setOmtHover] = useState(false);
  const [open, setOpen] = useState(null);

  // measure container and react to size changes
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const measure = () => {
      const w = el.clientWidth || maxSize;
      setS(Math.max(260, Math.min(maxSize, w))); // clamp between 260 and maxSize
    };

    measure();

    // use ResizeObserver if available
    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(measure);
      ro.observe(el);
    } else {
      // fallback for older browsers
      window.addEventListener("resize", measure);
    }

    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", measure);
    };
  }, [maxSize]);

  const isSmall = S < 500;
  const cx = S * 0.56;
  const cy = H * 0.46;

  const pebbles = [
    { src: one, w: 0.1, dx: -0.26, dy: -0.05 },
    { src: two, w: 0.13, dx: -0.2, dy: -0.17 },
    { src: three, w: 0.12, dx: -0.06, dy: -0.35 },
    { src: four, w: 0.11, dx: 0.07, dy: -0.33 },
    { src: five, w: 0.15, dx: 0.3, dy: 0.03 },
    { src: six, w: 0.1, dx: 0.25, dy: 0.16 },
    { src: seven, w: 0.09, dx: 0.15, dy: 0.28 },
    { src: eight, w: 0.09, dx: -0.14, dy: 0.31 },
  ];
  const toXY = (dx, dy) => [cx + dx * S, cy + dy * H];

  const fmtBox = { left: S * 0.3 - S * 0.26, top: H * 0.6 - S * 0.08, w: S * 0.28 };
  const cmtBox = { left: S * 0.84 - S * 0.13, top: H * 0.11 - S * 0.08, w: S * 0.28 };

  const towardTPSTransform = (box, pixels = isSmall ? 20 : 50) => {
    const centerX = box.left + box.w / 2;
    const centerY = box.top + box.w / 2;
    const targetX = cx;
    const targetY = cy + S * 0.01;
    const vx = targetX - centerX;
    const vy = targetY - centerY;
    const len = Math.hypot(vx, vy) || 1;
    const dx = (vx / len) * pixels;
    const dy = (vy / len) * pixels;
    return `translate3d(${dx}px, ${dy}px, 0) scale(1.03)`;
  };

  const keyOpen = (e, which) => {
    const k = e.key;
    if (k === "Enter" || k === " " || k === "Spacebar") {
      e.preventDefault();
      setOpen(which);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={`relative mx-auto select-none ${className}`}
      style={{
        width: "100%",
        height: H,
        maxWidth: maxSize,
        overflow: "hidden",
      }}
      aria-label="TPS orbit graphic"
      role="img"
    >
      <style>{`
        .fmt svg path:first-of-type { fill: #36A8DF !important; }
        .cmt svg path:first-of-type { fill: #F0C430 !important; }
        .fmt svg text, .cmt svg text, .fmt svg path.text, .cmt svg path.text { fill: #ffffff !important; }
        .clickable { cursor: pointer; outline: none; }
        .clickable:focus-visible { box-shadow: 0 0 0 3px rgba(59,130,246,.7); border-radius: 16px; }
      `}</style>

      {/* FMT */}
      <div
        className={`fmt absolute clickable ${fmtHover ? "z-10" : "z-0"}`}
        style={{
          left: fmtBox.left,
          top: fmtBox.top,
          width: fmtBox.w,
          transform: fmtHover ? towardTPSTransform(fmtBox, isSmall ? 18 : 40) : "none",
          transition: "transform 420ms cubic-bezier(.22,.61,.36,1), filter 420ms ease",
          filter: fmtHover ? "drop-shadow(0 6px 12px rgba(0,0,0,.2))" : "none",
          padding: isSmall ? 8 : 12,
          borderRadius: 16,
        }}
        onMouseEnter={() => setFmtHover(true)}
        onMouseLeave={() => setFmtHover(false)}
        onClick={() => setOpen("fmt")}
        onTouchStart={() => setOpen("fmt")}
        tabIndex={0}
        role="button"
        aria-label="Open FMT details"
        onKeyDown={(e) => keyOpen(e, "fmt")}
      >
        <FmtSvg className="w-full h-auto" aria-label="FMT" />
        <img
          src={omt}
          alt="OMT"
          className={`absolute clickable transition-opacity duration-300 ${fmtHover || isSmall ? "opacity-100" : "opacity-0"}`}
          style={{ width: S * 0.11, left: -S * 0.012, top: -S * 0.001 }}
          onClick={(e) => {
            e.stopPropagation();
            setOpen("omt");
          }}
          tabIndex={fmtHover || isSmall ? 0 : -1}
          role="button"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
              e.preventDefault();
              e.stopPropagation();
              setOpen("omt");
            }
          }}
        />
      </div>

      {/* CMT */}
      <div
        className={`cmt absolute clickable ${cmtHover ? "z-10" : "z-0"}`}
        style={{
          left: cmtBox.left,
          top: cmtBox.top,
          width: cmtBox.w,
          transform: cmtHover ? towardTPSTransform(cmtBox, isSmall ? 14 : 30) : "none",
          transition: "transform 420ms cubic-bezier(.22,.61,.36,1), filter 420ms ease",
          filter: cmtHover ? "drop-shadow(0 6px 12px rgba(0,0,0,.2))" : "none",
          padding: isSmall ? 8 : 12,
          borderRadius: 16,
        }}
        onMouseEnter={() => setCmtHover(true)}
        onMouseLeave={() => setCmtHover(false)}
        onClick={() => setOpen("cmt")}
        onTouchStart={() => setOpen("cmt")}
        tabIndex={0}
        role="button"
        aria-label="Open CMT details"
        onKeyDown={(e) => keyOpen(e, "cmt")}
      >
        <CmtSvg className="w-full h-auto" aria-label="CMT" />
        <img
          src={omt}
          alt="OMT"
          className={`absolute clickable transition-opacity duration-300 ${cmtHover || isSmall ? "opacity-100" : "opacity-0"}`}
          style={{ width: S * 0.11, right: -S * 0.012, top: -S * 0.001 }}
          onClick={(e) => {
            e.stopPropagation();
            setOpen("omt");
          }}
          tabIndex={cmtHover || isSmall ? 0 : -1}
          role="button"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
              e.preventDefault();
              e.stopPropagation();
              setOpen("omt");
            }
          }}
        />
      </div>

      {/* TPS center */}
      <img
        src={tpsHover ? tpsHoverImg : tps}
        alt="TPS"
        className="absolute z-20"
        style={{
          left: cx - S * 0.2,
          top: cy - S * 0.13,
          width: S * 0.4,
          transition: "transform 600ms ease, filter 600ms ease",
          transform: tpsHover ? "scale(1.03)" : "scale(1)",
          filter: tpsHover ? "drop-shadow(0px 8px 16px rgba(0,0,0,0.3))" : "none",
        }}
        onMouseEnter={() => setTpsHover(true)}
        onMouseLeave={() => setTpsHover(false)}
      />

      {/* OMT */}
      <img
        src={omtHover ? omtHoverImg : omt}
        alt="OMT"
        className="absolute z-20 clickable"
        style={{
          left: cx - S * 0.09,
          top: cy + S * 0.06,
          width: S * 0.18,
          transition: "transform 300ms ease, filter 300ms ease",
          transform: omtHover ? "scale(1.05)" : "scale(1)",
        }}
        onMouseEnter={() => setOmtHover(true)}
        onMouseLeave={() => setOmtHover(false)}
        onClick={() => setOpen("omt")}
        tabIndex={0}
        role="button"
        onKeyDown={(e) => keyOpen(e, "omt")}
      />

      {/* pebbles */}
      {pebbles.map((p, i) => {
        const [x, y] = toXY(p.dx, p.dy);
        const w = S * p.w;
        return (
          <img
            key={i}
            src={p.src}
            alt={`pebble-${i + 1}`}
            className="absolute"
            style={{ left: x - w / 2, top: y - w / 2, width: w }}
          />
        );
      })}

      {/* Modal */}
      <Modal open={!!open} onClose={() => setOpen(null)} data={POPUPS[open]} />
    </div>
  );
};

export default TPSOrbit;
