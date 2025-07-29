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
    <section className="w-full min-h-screen bg-[#0a1629] relative overflow-hidden">
      {/* Background overlay with tech-inspired pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1629] via-[#1a2b4a] to-[#0a1629] opacity-90"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-28 h-28 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-64 right-24 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-48 left-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-teal-400/10 rounded-full blur-lg animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Section Header */}
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
            Most Our <span className="text-red-500">Popular</span> Products
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A Variety Of Smart Solutions, Designed Just For You.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, index) => (
            <div
              key={p.title}
              className="group relative overflow-hidden"
            >
              {/* Card Background with Enhanced Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card Content */}
              <div className="relative bg-transparent rounded-2xl p-8 flex flex-col items-center shadow-2xl h-[520px] border border-gray-700/50 group-hover:border-red-500/50 transition-all duration-500 backdrop-blur-sm">
                
                {/* Badge for featured product */}
                {index === 1 && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    POPULAR
                  </div>
                )}

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                  {p.title}
                </h3>
                <div className="text-gray-300 text-sm mb-6">{p.subtitle}</div>

                {/* Enhanced Product Image */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative transform group-hover:scale-105 transition-transform duration-300">
                    {p.image}
                  </div>
                </div>

                <div className="text-white text-2xl font-bold mb-4 group-hover:text-red-400 transition-colors duration-300">
                  {p.price}
                </div>

                <button
                  onClick={() => toggleCard(p.title)}
                  className="text-red-400 hover:text-red-300 text-sm mb-6 flex items-center gap-2 hover:underline cursor-pointer transition-all duration-300 group/btn"
                >
                  {expandedCard === p.title ? 'Show Less' : 'Learn More'}
                  <span className={`text-lg transition-transform duration-300 group-hover/btn:scale-110 ${expandedCard === p.title ? 'rotate-180' : ''}`}>
                    &#8595;
                  </span>
                </button>

                <button className="mt-auto px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg text-lg font-bold text-white shadow-xl transition-all duration-300 transform hover:scale-105">
                  Get A Quote
                </button>

                {/* Decorative elements */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Enhanced Detailed View */}
                <div className={`absolute inset-0 bg-gradient-to-br from-black/95 to-gray-900/95 rounded-2xl p-8 flex flex-col transition-all duration-500 ease-in-out backdrop-blur-sm border border-red-500/20 ${expandedCard === p.title ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}>
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{p.title}</h3>
                      <div className="text-gray-300 text-sm">{p.subtitle}</div>
                    </div>
                    <button
                      onClick={() => toggleCard(p.title)}
                      className="w-10 h-10 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-red-600 hover:to-red-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Enhanced Features List */}
                  <div className="flex-1">
                    <div className="space-y-4 text-left">
                      {p.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3 group/feature hover:bg-white/5 p-2 rounded-lg transition-colors duration-300">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-5 h-5 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                          <p className="text-white text-sm leading-relaxed font-medium group-hover/feature:text-gray-200 transition-colors duration-300">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced CTA Button */}
                  <button className="mt-6 w-full px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg text-lg font-bold text-white shadow-xl transition-all duration-300 transform hover:scale-105">
                    Get Quote Now
                  </button>
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