"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Shanuka Amarasinghe",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. NFC Card Med Facilitated Every Interaction Seamlessly.",
    rating: 5,
    avatar: "/api/placeholder/60/60" // Placeholder for now
  },
  {
    id: 2,
    name: "Priya Jayawardena",
    text: "The ShareMe card revolutionized my networking experience. No more fumbling with paper cards or typing contact details manually.",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 3,
    name: "Kasun Perera",
    text: "Absolutely love the convenience and professional impression it creates. The NFC technology works flawlessly every time.",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 4,
    name: "Nimali Silva",
    text: "Best investment for my business networking. The water-resistant design has saved me multiple times in outdoor events.",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 5,
    name: "Thilina Fernando",
    text: "Eco-friendly solution that actually works! I've shared my contact with hundreds of people without printing a single card.",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 6,
    name: "Rashini Gunasekara",
    text: "The customization options are amazing. My clients are always impressed with the sleek design and instant sharing.",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerView = 3;
  const maxIndex = Math.max(0, testimonials.length - testimonialsPerView);

  const nextTestimonials = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevTestimonials = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerView);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="w-full min-h-screen bg-[#0a1629] relative overflow-hidden">
      {/* Background overlay with tech-inspired pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1629] via-[#1a2b4a] to-[#0a1629] opacity-90"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-16 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-24 w-24 h-24 bg-blue-400/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-green-400/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-400/10 rounded-full blur-lg animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Enhanced Header */}
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
            Customer <span className="text-red-500">Testimonial</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear What Our Customers Are Saying About ShareMe Cards
          </p>
        </div>

        {/* Enhanced Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative overflow-hidden"
            >
              {/* Card Background with Enhanced Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card Content */}
              <div className="relative bg-transparent rounded-2xl p-8 border border-gray-700/50 group-hover:border-red-500/50 transition-all duration-500 backdrop-blur-sm min-h-[280px] flex flex-col">
                
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 10c0-2.761 2.686-5 6-5 2.07 0 3.88.914 5.086 2.353A1 1 0 0115 8c-.552 0-1.054-.115-1.5-.319a1 1 0 00-.894.182c-.78.52-1.295 1.348-1.295 2.387 0 1.671 1.397 3 3.125 3H16a1 1 0 000-2h-1.564c-.548 0-.989-.442-.989-1 0-.317.2-.6.5-.75A1 1 0 0115 9c1.105 0 2 .895 2 2 0 2.761-2.686 5-6 5s-6-2.239-6-5z" clipRule="evenodd" />
                  </svg>
                </div>

                {/* Enhanced Avatar and Name */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg group-hover:text-red-400 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">Verified Customer</p>
                  </div>
                </div>

                {/* Enhanced Testimonial Text */}
                <p className="text-gray-300 leading-relaxed mb-6 flex-grow group-hover:text-gray-200 transition-colors duration-300">
                  "{testimonial.text}"
                </p>

                {/* Enhanced Star Rating */}
                <div className="flex gap-1 justify-center">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Dots Indicator */}
        <div className="flex justify-center gap-3 mb-8">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
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

        {/* Enhanced Navigation Arrows */}
        <div className="flex justify-center gap-4">
          <button
            onClick={prevTestimonials}
            disabled={currentIndex === 0}
            className="w-14 h-14 border-2 border-red-500 rounded-full flex items-center justify-center hover:bg-red-500 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110"
          >
            <svg className="w-6 h-6 text-red-500 group-hover:text-white transform rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonials}
            disabled={currentIndex >= maxIndex}
            className="w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110 shadow-lg"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
