import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import PreOrderSection from "./components/PreOrderSection";
import Footer from "./components/Footer";
import "./global.css";

export default function App() {
  const handlePreOrderClick = () => {
    const formSection = document.getElementById("pre-order-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      <HeroSection onPreOrderClick={handlePreOrderClick} />
      <HowItWorksSection />
      <PreOrderSection onPreOrderClick={handlePreOrderClick} />
      <Footer />
    </div>
  );
}
