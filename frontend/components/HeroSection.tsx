import Image from "next/image";

const HeroSection = () => (
  <section className="w-full min-h-screen bg-[#0a1629] relative overflow-hidden">
    {/* Background overlay with tech-inspired pattern */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0a1629] via-[#1a2b4a] to-[#0a1629] opacity-90"></div>

    {/* Animated background elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-400/10 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-teal-400/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-blue-400/10 rounded-full blur-lg animate-pulse delay-3000"></div>
      <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-4000"></div>
    </div>

    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-8 pt-32 pb-8 gap-12 md:gap-20" style={{ minHeight: "650px" }}>
      {/* Image/Mockup - enhanced with effects */}
      <div className="flex-1 flex justify-center md:justify-start items-center">
        <div className="relative">
          {/* Glow effect behind image */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-2xl blur-2xl scale-110"></div>
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 backdrop-blur-sm border border-white/10 shadow-2xl">
            <Image
              src="/nfc-hero.png"
              alt="NFC business card demo"
              width={420}
              height={520}
              priority
              className="rounded-xl"
            />
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/30 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500/30 rounded-full blur-md animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
      
      {/* Text Content - enhanced typography and effects */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-8">
        {/* Label */}
        <div className="flex items-center gap-4">
          <div className="w-1 h-12 bg-red-500"></div>
          <span className="text-gray-400 uppercase tracking-widest text-sm font-medium">
            NEXT-GEN NETWORKING
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight md:leading-[1.1] font-[var(--font-poppins)]">
          Revolutionize Your <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Networking Experience
          </span>
          <span className="text-red-500 text-6xl align-top">.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-xl font-medium leading-relaxed font-[var(--font-poppins)]">
          Transform Your Business Connections With Our Smart ShareMe Business Cards. Share Your Details Instantly And Make A Lasting Impression.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg text-lg md:text-xl font-bold flex items-center justify-center gap-4 shadow-xl transition-all duration-300 transform hover:scale-105 font-[var(--font-poppins)]">
            Get A Quote
            <span className="inline-flex items-center justify-center w-7 h-7">
              <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2.5" fill="none" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 8l4 4-4 4" />
              </svg>
            </span>
          </button>
          
          <button className="px-10 py-4 bg-transparent border-2 border-gray-600 hover:border-red-500 hover:bg-red-500/10 rounded-lg text-lg md:text-xl font-bold text-white transition-all duration-300 font-[var(--font-poppins)]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection; 