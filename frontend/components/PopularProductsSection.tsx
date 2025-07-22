"use client";

import { useState } from "react";

const products = [
  {
    title: "Basic White Card",
    subtitle: "Smart Business Card",
    price: "LKR 3850",
    image: (
      <div className="w-40 h-24 bg-white rounded-lg shadow flex items-center justify-center mb-6">
        <span className="text-gray-700 font-bold">[Card Image]</span>
      </div>
    ),
    features: [
      "Card With Black Letters And White Color Background.",
      "We Will Create A Web Profile Without A Fee.",
      "The Front Of The Card Will Have Your Name And Your Company Name.",
      "The Back Of The Card Will Have Your Brand Company And QR Code.",
      "This Card Is The Size Of A Credit Card. (8.6cm X 5.4cm)"
    ]
  },
  {
    title: "Basic Black Card",
    subtitle: "Smart Business Card",
    price: "LKR 4250",
    image: (
      <div className="w-40 h-24 bg-gray-900 rounded-lg shadow flex items-center justify-center mb-6">
        <span className="text-white font-bold">[Card Image]</span>
      </div>
    ),
    features: [
      "Card With White Letters And Black Color Background.",
      "We Will Create A Web Profile Without A Fee.",
      "The Front Of The Card Will Have Your Name And Your Company Name.",
      "The Back Of The Card Will Have Your Brand Company And QR Code.",
      "This Card Is The Size Of A Credit Card. (8.6cm X 5.4cm)"
    ]
  },
  {
    title: "Customize Card",
    subtitle: "Smart Business Card",
    price: "LKR 5900",
    image: (
      <div className="w-40 h-24 bg-white rounded-lg shadow flex items-center justify-center mb-6">
        <span className="text-gray-700 font-bold">[Card Image]</span>
      </div>
    ),
    features: [
      "Fully Customizable Design With Your Brand Colors.",
      "We Will Create A Web Profile Without A Fee.",
      "Custom Logo And Brand Elements Integration.",
      "Premium Finishes And Special Effects Available.",
      "This Card Is The Size Of A Credit Card. (8.6cm X 5.4cm)"
    ]
  },
];

const PopularProductsSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (cardTitle: string) => {
    setExpandedCard(expandedCard === cardTitle ? null : cardTitle);
  };

  return (
    <section className="w-full bg-[#181f33] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-white">Most Our Popular Products</h2>
        <p className="text-gray-300 text-lg mb-10">A Variety Of Smart Solutions, Designed Just For You.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.title}
              className="bg-[#232b3e] rounded-2xl p-8 flex flex-col items-center shadow-md h-[500px] relative overflow-hidden"
            >
              <h3 className="text-xl font-bold text-white mb-1">{p.title}</h3>
              <div className="text-gray-300 text-sm mb-4">{p.subtitle}</div>

              {/* Keep the original image always visible */}
              <div className="mb-6">
                {p.image}
              </div>

              <div className="text-white text-2xl font-bold mb-2">{p.price}</div>

              <button
                onClick={() => toggleCard(p.title)}
                className="text-red-400 text-sm mb-4 flex items-center gap-1 hover:underline cursor-pointer transition-transform duration-300"
              >
                {expandedCard === p.title ? 'Show Less' : 'Learn More'}
                <span className={`text-lg transition-transform duration-300 ${expandedCard === p.title ? 'rotate-180' : ''}`}>
                  &#8595;
                </span>
              </button>

              <button className="mt-auto px-8 py-3 bg-red-600 hover:bg-red-700 rounded-md text-lg font-bold text-white shadow transition">Get A Quote</button>

              {/* Detailed View - Slides up from bottom */}
              <div className={`absolute inset-0 bg-black rounded-2xl p-8 flex flex-col transition-transform duration-500 ease-in-out ${expandedCard === p.title ? 'translate-y-0' : 'translate-y-full'
                }`}>
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{p.title}</h3>
                    <div className="text-gray-300 text-sm">{p.subtitle}</div>
                  </div>
                  <button
                    onClick={() => toggleCard(p.title)}
                    className="w-8 h-8 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Features List - Matching the image exactly */}
                <div className="flex-1">
                  <div className="space-y-4 text-left">
                    {p.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-white text-sm leading-relaxed font-medium">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection; 