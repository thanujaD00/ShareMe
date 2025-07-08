import Image from "next/image";

const HeroSection = () => (
  <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-8 pt-20 pb-8 gap-12 md:gap-20" style={{ minHeight: "650px" }}>
    {/* Image/Mockup - image only, no extra styles */}
    <div className="flex-1 flex justify-center md:justify-start items-center">
      <Image
        src="/nfc-hero.png"
        alt="NFC business card demo"
        width={420}
        height={520}
        priority
      />
    </div>
    {/* Text Content */}
    <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-8">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight md:leading-[1.1] font-[var(--font-poppins)]">
        Revolutionize Your <br className="hidden md:block" />
        <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Networking Experience
        </span>
        <span className="text-red-500 text-6xl align-top">.</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-200 max-w-xl font-medium mt-2 font-[var(--font-poppins)]">
        Transform Your Business Connections With Our Smart ShareMe Business Cards. Share Your Details Instantly And Make A Lasting Impression.
      </p>
      <button className="mt-4 px-10 py-4 bg-red-600 hover:bg-red-700 rounded-md text-lg md:text-xl font-bold flex items-center gap-4 shadow-lg transition font-[var(--font-poppins)]">
        Buy Now
        <span className="inline-flex items-center justify-center w-7 h-7 ml-2">
          <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2.5" fill="none" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 8l4 4-4 4" />
          </svg>
        </span>
      </button>
    </div>
  </section>
);

export default HeroSection; 