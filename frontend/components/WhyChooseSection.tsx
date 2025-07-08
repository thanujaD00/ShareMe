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
  <section className="w-full bg-[#0a1629] py-16 px-4">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-white">Why Choose Our ShareMe Cards?</h2>
      <p className="text-gray-300 text-lg mb-10">Experience The Future Of Networking With Our Innovative NFC Business Cards</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={
              `flex flex-col items-start p-6 rounded-xl border border-transparent transition text-left hover:border-red-500 bg-[#16213e]`
            }
          >
            <div className="mb-3">{f.icon}</div>
            <h3 className="text-lg font-bold text-white mb-1">{f.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection; 