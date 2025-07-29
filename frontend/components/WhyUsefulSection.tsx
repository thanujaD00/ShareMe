"use client";

import { useState } from "react";

const benefits = [
  {
    number: "01",
    title: "Eco-Friendly Alternative",
    description: "Ditch The Hassle And Waste Of Printing Hundreds Of Paper Business Cards. Go Digital With A Smarter, Greener Solution.",
    subtitle: "",
    image: (
      <div className="w-full h-64 bg-[#2a3441] rounded-lg flex items-center justify-center text-gray-400 font-medium">
        PHOTO
      </div>
    ),
  },
  {
    number: "02",
    title: "No Recurring Costs",
    description: "Pay Once For Your NFC Card — No Monthly Fees, No Subscriptions. Unlimited Taps, Unlimited Connections.",
    subtitle: "",
    image: (
      <div className="w-full h-64 bg-[#2a3441] rounded-lg flex items-center justify-center text-gray-400 font-medium">
        PHOTO
      </div>
    ),
  },
  {
    number: "03",
    title: "Instant Sharing",
    description: "Share Your Complete Contact Details With Just One Tap — Fast, Seamless, And Efficient For Both Parties.",
    subtitle: "",
    image: (
      <div className="w-full h-64 bg-[#2a3441] rounded-lg flex items-center justify-center text-gray-400 font-medium">
        PHOTO
      </div>
    ),
  },
  {
    number: "04",
    title: "Built To Last",
    description: "Crafted To Be Water-Resistant, The NFC Card Is Designed For Durability, Making It Reliable In Any Environment.",
    subtitle: "",
    image: (
      <div className="w-full h-64 bg-[#2a3441] rounded-lg flex items-center justify-center text-gray-400 font-medium">
        PHOTO
      </div>
    ),
  },
];

const WhyUsefulSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBenefit = () => {
    setCurrentIndex((prev) => (prev + 1) % benefits.length);
  };

  const prevBenefit = () => {
    setCurrentIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const currentBenefit = benefits[currentIndex];

  return (
    <section className="w-full min-h-screen bg-[#0a1629] relative overflow-hidden">
      {/* Background overlay with tech-inspired pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1629] via-[#1a2b4a] to-[#0a1629] opacity-90"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-16 w-32 h-32 bg-green-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-64 left-24 w-24 h-24 bg-blue-400/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-48 right-1/4 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-teal-400/10 rounded-full blur-lg animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Section Header */}
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
            Why <span className="text-red-500">ShareMe</span> Card Is Useful?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover The Advantages That Make Our NFC Cards The Perfect Choice For Modern Professionals
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Enhanced Image Section */}
          <div className="flex-1 w-full">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-2xl blur-2xl scale-110"></div>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 backdrop-blur-sm border border-white/10 shadow-2xl">
                <div className="w-full h-80 bg-gradient-to-br from-[#2a3441] to-[#1e2833] rounded-xl flex items-center justify-center text-gray-400 font-medium shadow-inner">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-400 font-medium">Feature Image</p>
                    <p className="text-gray-500 text-sm mt-1">800 x 600px</p>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/30 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500/30 rounded-full blur-md animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Content Section */}
          <div className="flex-1 space-y-6 min-h-[400px] flex flex-col justify-start">
            {/* Number badge */}
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full text-white font-bold text-xl">
              {currentBenefit.number}
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {currentBenefit.title}
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              {currentBenefit.description}
            </p>
            
            {currentBenefit.subtitle && (
              <p className="text-gray-300 text-lg leading-relaxed font-medium bg-gradient-to-r from-gray-800/30 to-gray-900/30 p-4 rounded-lg border border-gray-700/50">
                {currentBenefit.subtitle}
              </p>
            )}
            
            {/* Spacer to maintain consistent height */}
            {!currentBenefit.subtitle && (
              <div className="h-[4rem]"></div>
            )}
            
            {/* Enhanced Navigation arrows */}
            <div className="flex gap-4 mt-8">
              <button 
                onClick={prevBenefit}
                className="w-14 h-14 border-2 border-red-500 rounded-full flex items-center justify-center hover:bg-red-500 transition-all duration-300 group transform hover:scale-110"
              >
                <svg className="w-6 h-6 text-red-500 group-hover:text-white transform rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button 
                onClick={nextBenefit}
                className="w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Enhanced Dots indicator */}
            <div className="flex gap-3 mt-6">
              {benefits.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-red-500 to-red-600 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsefulSection;
