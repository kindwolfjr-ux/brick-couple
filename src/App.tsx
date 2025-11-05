import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import PreOrderSection from "./components/PreOrderSection";
import Footer from "./components/Footer";
import heroBg from "./assets/Hero_BG.png";
import howItWorksBg from "./assets/HowItWorks_BG.png";
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
      {/* 🎄 Единый фон для Hero + HowItWorks */}
      <div
        style={{
          backgroundImage: `url(${heroBg}), url(${howItWorksBg})`,
          backgroundPosition: "center top, center 110vh", // подгоняем так, чтобы низ первой совпадал с верхом второй
          backgroundSize: "cover, cover",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        <HeroSection onPreOrderClick={handlePreOrderClick} />
        <HowItWorksSection />
      </div>

      <PreOrderSection onPreOrderClick={handlePreOrderClick} />
      <Footer />
    </div>
  );
}
