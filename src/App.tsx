import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import PreOrderSection from "./components/PreOrderSection";
import { FormSection } from "./components/FormSection";
import Footer from "./components/Footer";
import { YandexMetrika } from "./components/YandexMetrika"; // ✅ Добавили Метрику

import fullBg from "./assets/FULL_BG.png";
import "./global.css";

export default function App() {
  // 🔸 Прокрутка к форме предзаказа
  const handlePreOrderClick = () => {
    const formSection = document.getElementById("pre-order-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 🔸 Прокрутка к блоку "Как это работает"
  const handleLearnMoreClick = () => {
    const howItWorksSection = document.getElementById("how-it-works");
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {/* 📈 Яндекс.Метрика */}
      <YandexMetrika />

      {/* 🎄 Единый фон для Hero + HowItWorks */}
      <div
        style={{
          backgroundImage: `url(${fullBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <HeroSection
          onPreOrderClick={handlePreOrderClick}
          onLearnMoreClick={handleLearnMoreClick}
        />
        <HowItWorksSection />
      </div>

      {/* 🧱 Блок "Ограниченный предзаказ" */}
      <PreOrderSection onPreOrderClick={handlePreOrderClick} />

      {/* 📝 Форма предзаказа */}
      <FormSection />

      {/* ⚙️ Футер */}
      <Footer />
    </div>
  );
}
