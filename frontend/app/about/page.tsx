import Navbar from "../../components/Navbar";
import AboutUsSection from "../../components/AboutUsSection";
import Footer from "../../components/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#0a1629] text-white font-sans">
      <Navbar />
      <AboutUsSection />
      <Footer />
    </div>
  );
}
