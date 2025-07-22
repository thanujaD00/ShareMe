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
    <section className="w-full bg-[#181f33] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-white">
            Customer Testimonial
          </h2>
          <p className="text-gray-300 text-lg">
            Hear What Our Customers Are Saying About ShareMe Cards
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#1a2332] rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-colors"
            >
              {/* Avatar and Name */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {testimonial.name}
                  </h4>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {testimonial.text}
              </p>

              {/* Star Rating */}
              <div className="flex gap-1">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentIndex ? 'bg-red-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows (Optional - hidden on mobile, can be shown if needed) */}
        <div className="hidden lg:flex justify-center gap-4 mt-6">
          <button
            onClick={prevTestimonials}
            disabled={currentIndex === 0}
            className="w-12 h-12 border-2 border-red-500 rounded-full flex items-center justify-center hover:bg-red-500 transition group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5 text-red-500 group-hover:text-white transform rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonials}
            disabled={currentIndex >= maxIndex}
            className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
