const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
    ),
    title: "Instant Sharing",
    desc: "Share Your Contact Information With A Simple Tap Of Your NFC-Enabled Card.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><circle cx="12" cy="16" r="1" /></svg>
    ),
    title: "Secure Technology",
    desc: "Enterprise-Grade Encryption Ensures Your Data Remains Protected At All Times.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 12h8" /></svg>
    ),
    title: "Update Your Info",
    desc: "You Can Edit Your Info Anytime. Also, You Can Customize The Color Of Your Profile, Along With Dark Mode Variations.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M12 8v8" /><path d="M8 12h8" /></svg>
    ),
    title: "No App Required",
    desc: "Profiles Can Be Viewed Directly Through A Browser, Making Them Compatible With All Smartphones And Tablets.",
  },
];

const WhyChooseSection = () => (
  <section className="w-full min-h-screen bg-[#0a1629] relative overflow-hidden">
    {/* Background overlay with tech-inspired pattern */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0a1629] via-[#1a2b4a] to-[#0a1629] opacity-90"></div>

    {/* Animated background elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 right-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-60 left-20 w-24 h-24 bg-blue-400/10 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 right-1/4 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-teal-400/10 rounded-full blur-lg animate-pulse delay-3000"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
          Why Choose Our <span className="text-red-500">ShareMe</span> Cards?
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Experience The Future Of Networking With Our Innovative NFC Business Cards
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="group relative overflow-hidden"
          >
            {/* Card Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Card Content */}
            <div className="relative flex flex-col items-start p-8 rounded-2xl border border-gray-700/50 group-hover:border-red-500/50 transition-all duration-500 backdrop-blur-sm">
              {/* Icon with enhanced styling */}
              <div className="mb-6 p-4 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                {f.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {f.desc}
              </p>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <button className="px-12 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg text-lg font-bold text-white shadow-xl transition-all duration-300 transform hover:scale-105">
          Get Your ShareMe Card Today
        </button>
      </div>
    </div>
  </section>
);

export default WhyChooseSection; 