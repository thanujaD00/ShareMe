import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsBar from "../components/StatsBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1629] text-white font-sans">
      <Navbar />
      <HeroSection />
      <StatsBar />
    </div>
  );
}
