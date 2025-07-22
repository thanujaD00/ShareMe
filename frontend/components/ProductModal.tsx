"use client";

import { useState } from "react";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
    subtitle: string;
    price: string;
    image: React.ReactNode;
    features: string[];
  };
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#232b3e] rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition z-10"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white mb-1">{product.title}</h3>
            <p className="text-gray-300 text-sm">{product.subtitle}</p>
          </div>

          {/* Card Image */}
          <div className="mb-6 flex justify-center">
            <div className="w-64 h-40 bg-gray-200 rounded-xl shadow-lg flex items-center justify-center relative">
              {/* Card Design */}
              <div className="w-full h-full bg-white rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <h4 className="text-gray-800 font-bold text-lg">Your Name</h4>
                  <p className="text-gray-600 text-sm">Position</p>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-600 text-xs">123-456-7890</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-600 text-xs">email@example.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-600 text-xs">website.com</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-gray-500 text-xs">SHAREME</p>
                    <p className="text-gray-500 text-xs">SMART NFC CARD</p>
                  </div>
                  <div className="w-12 h-12 border-2 border-gray-400 rounded flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-300 rounded grid grid-cols-3 gap-0.5">
                      {Array.from({ length: 9 }, (_, i) => (
                        <div key={i} className="bg-gray-600 rounded-sm"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-3 mb-6">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>

          {/* Price and Actions */}
          <div className="text-center">
            <div className="text-white text-2xl font-bold mb-4">{product.price}</div>
            <button 
              className="w-full px-8 py-3 bg-red-600 hover:bg-red-700 rounded-md text-lg font-bold text-white shadow transition"
              onClick={onClose}
            >
              Get A Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
