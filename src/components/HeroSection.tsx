import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Heart, Sparkles } from "lucide-react";
import heroImage from "../assets/lego-mockup-new.png";

interface HeroSectionProps {
  onPreOrderClick: () => void;
}

export function HeroSection({ onPreOrderClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating hearts decoration - more variety */}
      <motion.div
        className="absolute top-20 left-[10%] text-[#D9443D] opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Heart className="w-10 h-10 fill-current" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-[15%] text-[#2451B6] opacity-15"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Heart className="w-8 h-8 fill-current" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-[20%] text-[#FFD000] opacity-15"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Heart className="w-7 h-7 fill-current" />
      </motion.div>

      {/* Additional floating sparkles */}
      <motion.div
        className="absolute top-1/3 right-[25%] text-[#FFD000] opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-[10%] text-[#D9443D] opacity-15"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -180, -360],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.h1
              className="mb-4 text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Создай свою <br />
              LEGO-минифигурку<br />
              по фото
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Персональный подарок для пар, <br />
              созданный из настоящих деталей LEGO.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
                {/* Основная кнопка */}
                <Button
                  onClick={onPreOrderClick}
                  size="lg"
                  className="bg-gradient-to-r from-[#D9443D] to-[#D9443D]/90 hover:from-[#D9443D]/90 hover:to-[#D9443D]/80 text-white rounded-full px-10 py-6 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group"
                >
                  <span className="relative z-10">Сделать предзаказ</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>

                {/* Вторичная кнопка */}
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    document
                      .getElementById("how-it-works")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="border border-white/40 bg-white/50 backdrop-blur-md text-[#D9443D] hover:bg-white/70 rounded-full px-10 py-6 shadow-md transition-all relative z-20"
                >
                  Подробнее
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="relative flex justify-center items-center"
>
  {/* Decorative glow behind image — уменьшенная подложка */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[40%] bg-gradient-to-br from-[#D9443D]/20 via-[#FFD000]/15 to-[#2451B6]/15 rounded-3xl blur-3xl -z-10 opacity-60" />

  {/* Radial spotlight glow — уменьшенный фон */}
<motion.div
  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20"
  animate={{
    scale: [1, 1.05, 1],
    opacity: [0.4, 0.6, 0.4],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <div className="w-[60%] h-[45%] bg-gradient-to-br from-[#D9443D]/20 via-[#FFD000]/15 to-[#2451B6]/15 rounded-3xl blur-3xl opacity-60" />
</motion.div>

  {/* Image */}
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    className="rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm relative z-10"
  >
    <div className="relative rounded-3xl p-6 flex justify-center items-center">
      <img
        src={heroImage}
        alt="LEGO пара в рамке"
        className="w-full h-auto rounded-3xl"
      />
    </div>
  </motion.div>
</motion.div>

        </div>
      </div>
    </section>
  );
}
