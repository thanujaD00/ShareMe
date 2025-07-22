"use client";

import { useState } from "react";

const benefits = [
  {
    number: "01",
    title: "Eco-Friendly Alternative",
    description: "Ditch The Hassle And Waste Of Printing Hundreds Of Paper Business Cards.",
    subtitle: "Go Digital With A Smarter, Greener Solution.",
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
    <section className="w-full bg-[#0a1629] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-white text-center">
          Why ShareMe Card Is Useful?
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Image Section */}
          <div className="flex-1 w-full">
            {currentBenefit.image}
          </div>
          
          {/* Content Section */}
          <div className="flex-1 space-y-4 min-h-[350px] flex flex-col justify-start">
            <div className="text-red-500 text-xl font-bold">
              {currentBenefit.number}
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {currentBenefit.title}
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              {currentBenefit.description}
            </p>
            
            {currentBenefit.subtitle && (
              <p className="text-gray-300 text-lg leading-relaxed font-medium">
                {currentBenefit.subtitle}
              </p>
            )}
            
            {/* Spacer to maintain consistent height */}
            {!currentBenefit.subtitle && (
              <div className="h-[1.75rem]"></div>
            )}
            
            {/* Navigation arrows */}
            <div className="flex gap-4 mt-6">
              <button 
                onClick={prevBenefit}
                className="w-12 h-12 border-2 border-red-500 rounded-full flex items-center justify-center hover:bg-red-500 transition group"
              >
                <svg className="w-5 h-5 text-red-500 group-hover:text-white transform rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button 
                onClick={nextBenefit}
                className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Dots indicator */}
            <div className="flex gap-2 mt-4">
              {benefits.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition ${
                    index === currentIndex ? 'bg-red-500' : 'bg-gray-600'
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
