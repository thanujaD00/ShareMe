"use client";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0a1629]/95 backdrop-blur-md shadow-lg' 
        : 'bg-[#0a1629]/80 backdrop-blur-sm'
    }`}>
      <div className="flex justify-between items-center px-8 py-10 max-w-7xl mx-auto">
        <a href="/" className="text-3xl font-extrabold tracking-wide text-red-500 hover:text-red-400 transition-colors duration-300">LOGO</a>
        <ul className="flex gap-16 text-lg font-bold text-white">
          <li><a href="#product" className="hover:text-red-400 transition-colors duration-300 border-b-2 border-transparent hover:border-red-400">Product</a></li>
          <li><a href="/about" className="hover:text-red-400 transition-colors duration-300 border-b-2 border-transparent hover:border-red-400">About Us</a></li>
          <li><a href="/contact" className="hover:text-red-400 transition-colors duration-300 border-b-2 border-transparent hover:border-red-400">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 