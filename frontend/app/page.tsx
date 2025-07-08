import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsBar from "../components/StatsBar";
import WhyChooseSection from "../components/WhyChooseSection";
import PopularProductsSection from "../components/PopularProductsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1629] text-white font-sans">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <WhyChooseSection />
      <PopularProductsSection />
    </div>
  );
}
