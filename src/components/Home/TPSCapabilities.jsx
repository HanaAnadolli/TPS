import React, { useState } from "react";

function TPSCapabilities() {
  const [activeTab, setActiveTab] = useState("distribution");

  const tabs = [
    { id: "distribution", label: "Distribution Financing" },
    { id: "receivables", label: "Receivables Financing" },
    { id: "payables", label: "Trade Payables Financing" }
  ];

  const distributionContent = {
    title: "Distribution Financing",
    description: "Early settlement date for the vendor (- DSO) and extended payment term for the buyer (+ DPO).",
    features: [
      {
        icon: "/src/assets/tps-capabilities/credit-card.png",
        text: "Vendor reduces customer credit risk and receives early receivables payment"
      },
      {
        icon: "/src/assets/tps-capabilities/percent.png",
        text: "Vendor can sponsor the program with early payment discount offered to the selected customers"
      },
      {
        icon: "/src/assets/tps-capabilities/payable.png",
        text: "Buyers extend payables terms and can afford to purchase more from the Vendor"
      },
      {
        icon: "/src/assets/tps-capabilities/exchange.png",
        text: "An enhanced trading relationship between the vendor a buyer is created"
      },
      {
        icon: "/src/assets/tps-capabilities/settlement-icon.png",
        text: "Credit and settlement management is supported by the tools used to manage the program"
      }
    ]
  };

  const receivablesContent = {
    title: "Receivables Financing",
    description: "Early settlement date for the vendor.",
    features: [
      {
        icon: "/src/assets/tps-capabilities/credit-card.png",
        text: "Vendor reduces customer credit risk and receives early receivables payment"
      },
      {
        icon: "/src/assets/tps-capabilities/ratio.png",
        text: "Vendor financial ratios improve and as such its grading"
      },
      {
        icon: "/src/assets/tps-capabilities/liquidity.png",
        text: "Vendor can use excess liquidity form the program to reduce financial debt"
      },
      {
        icon: "/src/assets/tps-capabilities/settlement-icon.png",
        text: "Credit and settlement management is supported by the tools used to manage the program"
      }
    ]
  };

  const payablesContent = {
    title: "Trade Payables Financing",
    description: "Extended payment terms for the buyer (+ DPO) on trades with key vendors, with the possibility of anticipating settlement date to the supplier so that the buyer can benefit from the early payment cash discounts.",
    features: [
      {
        icon: "/src/assets/tps-capabilities/liquidity-2.png",
        text: "Buyer extends payable terms and as such generated liquidity"
      },
      {
        icon: "/src/assets/tps-capabilities/ratio.png",
        text: "Buyer financial ratios improve"
      },
      {
        icon: "/src/assets/tps-capabilities/liquidity.png",
        text: "Buyer can use excess liquidity form the program to reduce financial debt"
      },
      {
        icon: "/src/assets/tps-capabilities/deal.png",
        text: "Credit capacity with third parties increase"
      }
    ]
  };

  const getCurrentContent = () => {
    switch (activeTab) {
      case "distribution":
        return distributionContent;
      case "receivables":
        return receivablesContent;
      case "payables":
        return payablesContent;
      default:
        return distributionContent;
    }
  };

  const currentContent = getCurrentContent();

  return (
    <section 
      className="relative w-full bg-[#e3e7eb] py-16"
      style={{
        background: `
          linear-gradient(135deg, #e3e7eb 0%, #e3e7eb 60%, #F4803410 100%),
          #e3e7eb
        `
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-[#F48034] lg:text-5xl mb-12">
          TPS Capabilities
        </h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-8 mb-8 border-b border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-lg font-medium transition-all duration-300 ease-in-out ${
                activeTab === tab.id
                  ? "text-[#F48034] border-b-2 border-[#F48034]"
                  : "text-gray-700 hover:text-[#F48034]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {/* Section Heading */}
          <h3 
            key={`title-${activeTab}`}
            className="text-3xl font-bold text-gray-800 animate-in slide-in-from-top-4 duration-500"
          >
            {currentContent.title}
          </h3>

          {/* Description */}
          <p 
            key={`description-${activeTab}`}
            className="text-lg text-gray-700 leading-relaxed max-w-4xl animate-in slide-in-from-left-4 duration-500 delay-100"
          >
            {currentContent.description}
          </p>

          {/* Feature Blocks */}
          <div 
            key={`features-${activeTab}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-in fade-in-0 duration-700 delay-200"
          >
            {currentContent.features.map((feature, index) => (
              <div 
                key={`${activeTab}-${index}`}
                className="text-center space-y-4 animate-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="mb-4 flex justify-center">
                  <img 
                    src={feature.icon} 
                    alt={`Feature ${index + 1}`}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TPSCapabilities;
