"use client";

const AboutUsSection = () => {
  return (
    <>
      {/* First Section - Who We Are */}
      <section id="about" className="w-full min-h-screen bg-[#0a1629] relative overflow-hidden">
        {/* Background overlay with tech-inspired pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1629] via-[#1a2b4a] to-[#0a1629] opacity-90"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-400/10 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-teal-400/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-blue-400/10 rounded-full blur-lg animate-pulse delay-3000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Who We Are
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Learn More About Us
            </p>
          </div>

          {/* Main Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Our Story Label */}
              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-red-500"></div>
                <span className="text-gray-400 uppercase tracking-widest text-sm font-medium">
                  OUR STORY
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Our Journey Began With A Goal.
                <br />
                <span className="text-gray-300">
                  To Make Networking Faster, Easier,
                  <br />
                  And Paperless.
                </span>
              </h2>

              {/* Description */}
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  We started with a simple vision: revolutionize the way people connect and share their professional information. In a world moving towards digital transformation, we saw the need for smart, sustainable, and efficient networking solutions.
                </p>
                <p>
                  Our team of passionate innovators came together to create NFC-enabled business cards that bridge the gap between traditional networking and modern technology. We believe that every connection should be meaningful, instant, and environmentally conscious.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Innovation First</h3>
                    <p className="text-gray-400 text-sm">Cutting-edge NFC technology for seamless connections</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Eco-Friendly</h3>
                    <p className="text-gray-400 text-sm">Reducing paper waste with digital solutions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">User-Centric</h3>
                    <p className="text-gray-400 text-sm">Designed with simplicity and efficiency in mind</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Quality Focused</h3>
                    <p className="text-gray-400 text-sm">Premium materials and craftsmanship</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                  Learn More About Our Mission
                </button>
              </div>
            </div>

            {/* Right Content - Image Placeholder */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
                {/* Main Image Placeholder */}
                <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-400 font-medium">Team Image Placeholder</p>
                    <p className="text-gray-500 text-sm mt-1">800 x 600px recommended</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/20 rounded-full blur-sm"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500/20 rounded-full blur-md"></div>
                
                {/* Small card-like element overlay */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="w-20 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-md flex items-center justify-center mb-2">
                    <span className="text-gray-300 text-xs font-bold">NFC Card</span>
                  </div>
                  <p className="text-white text-xs font-medium">Smart Business Card</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Company Information */}
      <section className="w-full bg-[#181f33] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Company Info */}
            <div className="space-y-8">
              {/* About Us Label */}
              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-red-500"></div>
                <span className="text-gray-400 uppercase tracking-widest text-sm font-medium">
                  ABOUT US
                </span>
              </div>

              {/* Main Content */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  <span className="text-red-500">ShareMe</span> Is A Smart NFC Business Card Solution
                  <br />
                  <span className="text-gray-300">
                    Developed Under Digital Bridge In January 2024.
                  </span>
                </h2>

                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Our Mission Is To Make Networking Smarter, Faster, And Paperless. With Just One Tap, Users Can Instantly Share Their Contact Details, Social Media Links, Websites, And More — No Apps Or Manual Input Needed.
                  </p>
                  
                  <p>
                    Whether You're A Professional, Entrepreneur, Or Part Of A Growing Team, <span className="text-red-400 font-semibold">ShareMe</span> Helps You Make A Lasting Impression And Stay Connected.
                  </p>
                  
                  <p>
                    We Also Create Customized NFC Solutions For Businesses, Helping Them Improve Operations, Enhance Customer Engagement, And Explore New Ways Of Working In The Digital World.
                  </p>
                  
                  <p>
                    At <span className="text-red-400 font-semibold">ShareMe</span>, We Believe In Simple, Powerful Tools That Connect People And Ideas Effortlessly.
                  </p>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3 bg-[#232b3e] p-4 rounded-lg">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Instant Sharing</h3>
                    <p className="text-gray-400 text-sm">One tap connection</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-[#232b3e] p-4 rounded-lg">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">No Apps Needed</h3>
                    <p className="text-gray-400 text-sm">Works with any device</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-[#232b3e] p-4 rounded-lg">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Eco-Friendly</h3>
                    <p className="text-gray-400 text-sm">Zero paper waste</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-[#232b3e] p-4 rounded-lg">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.50 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Customizable</h3>
                    <p className="text-gray-400 text-sm">Tailored solutions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image Placeholder */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
                {/* Main Image Placeholder */}
                <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <p className="text-gray-400 font-medium">Company/Product Image</p>
                    <p className="text-gray-500 text-sm mt-1">800 x 600px recommended</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/20 rounded-full blur-sm"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500/20 rounded-full blur-md"></div>
                
                {/* Stats overlay */}
                <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-red-400 text-2xl font-bold">2024</div>
                  <p className="text-white text-sm font-medium">Founded</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;
