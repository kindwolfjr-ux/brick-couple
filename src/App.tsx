import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { PreOrderSection } from "./components/PreOrderSection";
import { FormSection } from "./components/FormSection";
import { Footer } from "./components/Footer";
import { BackgroundShapes } from "./components/BackgroundShapes";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const scrollToForm = () => {
    const formSection = document.getElementById("pre-order-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen relative">
      <BackgroundShapes />
      <HeroSection onPreOrderClick={scrollToForm} />
      <HowItWorksSection />
      <PreOrderSection onPreOrderClick={scrollToForm} />
      <FormSection />
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
