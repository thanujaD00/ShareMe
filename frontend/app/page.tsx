import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsBar from "../components/StatsBar";
import WhyChooseSection from "../components/WhyChooseSection";
import PopularProductsSection from "../components/PopularProductsSection";
import WhyUsefulSection from "../components/WhyUsefulSection";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1629] text-white font-sans">
      <Navbar />
      <div className="pt-24">
        <HeroSection />
        <StatsBar />
        <WhyChooseSection />
        <PopularProductsSection />
        <WhyUsefulSection />
        <TestimonialSection />
        <Footer />
      </div>
    </div>
  );
}
