import React, { useEffect, useMemo, useState } from "react";

// Import each icon with a unique name
import TradeSvg from "../../assets/icons/trade.svg";
import DocPng from "../../assets/icons/doc.png";
import CalcSvg from "../../assets/icons/calc.svg";
import MonitorPng from "../../assets/icons/monitor.png";
import DataCollectionSvg from "../../assets/icons/data-collection.svg";
import PaymentSvg from "../../assets/icons/payment.svg";

const CARDS = [
  {
    icon: TradeSvg,
    alt: "Servicing trade finance technology icon",
    title: "Servicing Trade Finance Technology",
    description: "Advanced comprehensive servicing trade finance programs",
  },
  {
    icon: DocPng,
    alt: "Tracking invoices and credit notes icon",
    title: "Tracking Invoices and Credit Notes",
    description:
      "Handling the tracking of billing documents at all levels and defining customized reporting",
  },
  {
    icon: CalcSvg,
    alt: "Pricing management icon",
    title: "Pricing Management",
    description: "Flexible pricing options and managing participation",
  },
  {
    icon: MonitorPng,
    alt: "Monitor credit limits icon",
    title: "Monitor Credit Limits",
    description:
      "Enabling monitoring and management of credit limits across multiple counterparties and organizational hierarchies",
  },
  {
    icon: DataCollectionSvg,
    alt: "Processing methodology icon",
    title: "Processing Methodology",
    description:
      "Processing schedules that align with operational goals and specific program related requirements",
  },
  {
    icon: PaymentSvg,
    alt: "Reconciling automation icon",
    title: "Reconciling Automation",
    description:
      "Automated reconciliation functionalities covering obligor, invoice and batch of invoices level",
  },
];

function useItemsPerView() {
  const [itemsPerView, setItemsPerView] = useState(3);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w >= 1024) setItemsPerView(3); // lg+
      else if (w >= 640) setItemsPerView(2); // sm–md
      else setItemsPerView(1); // mobile
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return itemsPerView;
}

export default function OurFinancialSolutions() {
  const itemsPerView = useItemsPerView();

  // Build pages (1/2/3 cards depending on viewport)
  const pages = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < CARDS.length; i += itemsPerView) {
      chunks.push(CARDS.slice(i, i + itemsPerView));
    }
    return chunks;
  }, [itemsPerView]);

  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0); // avoid out-of-range after resize
  }, [itemsPerView]);

  const totalPages = pages.length;
  const canPrev = page > 0;
  const canNext = page < totalPages - 1;

  const goNext = () => canNext && setPage((p) => p + 1);
  const goPrev = () => canPrev && setPage((p) => p - 1);

  // Simple touch swipe
  useEffect(() => {
    let startX = 0;
    let endX = 0;
    const el = document.getElementById("ofs-track");
    if (!el) return;

    const onTouchStart = (e) => { startX = e.touches[0].clientX; };
    const onTouchMove = (e) => { endX = e.touches[0].clientX; };
    const onTouchEnd = () => {
      const delta = endX - startX;
      if (Math.abs(delta) > 40) {
        if (delta < 0) goNext();
        else goPrev();
      }
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [canNext, canPrev]);

  return (
    <section className="relative w-full bg-[#e3e7eb] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F48034] mb-6">
            Technology
          </h2>
          <p className="text-lg text-gray-700">
            Automated end-to-end processing of invoices and credit notes, credit
            limits and payments management, alerts and notifications all with
            artificial intelligence processing components.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div
              id="ofs-track"
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${totalPages * 100}%`,
                transform: `translateX(-${page * (100 / totalPages)}%)`,
              }}
              aria-live="polite"
            >
              {pages.map((cards, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0"
                  style={{ width: `${100 / totalPages}%` }}
                >
                  <div
                    className={
                      itemsPerView === 3
                        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        : itemsPerView === 2
                        ? "grid grid-cols-1 sm:grid-cols-2 gap-6"
                        : "grid grid-cols-1 gap-6"
                    }
                  >
                    {cards.map((card, idx) => (
                      <article
                        key={card.title + idx}
                        className="
                          group
                          rounded-3xl
                          p-6
                          bg-[#EEF2F5]
                          transition-colors duration-300
                          hover:bg-[#EADFD7]
                          shadow
                          flex flex-col
                        "
                      >
                        {/* Icon pill */}
                        <div
                          className="
                            mb-5 inline-flex items-center justify-center
                            w-12 h-12 rounded-xl
                            bg-white
                            transition-colors duration-300
                            group-hover:bg-[#F48034]
                          "
                        >
                          <img
                            src={card.icon}
                            alt={card.alt || card.title}
                            className="w-7 h-7"
                          />
                        </div>

                        <h3 className="text-xl font-bold leading-snug text-gray-800">
                          {card.title}
                        </h3>
                        <p className="mt-3 text-sm text-gray-600">
                          {card.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows only when there's another page */}
          {canNext && (
            <button
              onClick={goNext}
              className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-4 lg:-right-8 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#F48034] rounded-lg flex items-center justify-center hover:bg-[#F48034]/90 transition-colors duration-200 shadow-lg z-10"
              aria-label="Next"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {canPrev && (
            <button
              onClick={goPrev}
              className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-4 lg:-left-8 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#F48034] rounded-lg flex items-center justify-center hover:bg-[#F48034]/90 transition-colors duration-200 shadow-lg z-10"
              aria-label="Previous"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-10 h-[10px] rounded-full transition-colors duration-200 ${
                i === page ? "bg-[#F48034]" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
