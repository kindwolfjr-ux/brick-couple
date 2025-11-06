import React from "react";
import ornament from "../assets/игрушка.png";

interface HeroSectionProps {
  onPreOrderClick?: () => void;
  onLearnMoreClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  onPreOrderClick,
  onLearnMoreClick,
}) => {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 overflow-hidden"
      style={{ paddingTop: "5vh" }}
    >
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 w-full max-w-7xl mx-auto">
        {/* ТЕКСТОВОЙ БЛОК */}
        <div
          className="max-w-lg md:max-w-2xl p-8 md:p-12 rounded-[36px] shadow-[0_8px_50px_rgba(0,0,0,0.5)] md:-mt-12"
          style={{
            background: "rgba(10, 10, 10, 0.65)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          {/* Заголовок */}
          <h1 className="text-white font-extrabold leading-tight mb-6 text-4xl md:text-6xl tracking-tight">
            <span className="block">Создадим вашу</span>
            <span className="block">Лего-пару</span>
            <span className="block">по фото</span>
          </h1>

          {/* Подзаголовок */}
          <p className="text-[#FFF4E6] text-base md:text-xl leading-relaxed mb-10">
            Вы присылаете фото, мы собираем <br /> с теплом и вниманием
          </p>

          {/* КНОПКИ */}
          <div className="flex flex-col md:flex-row gap-5 mt-4">
            <button
              onClick={onPreOrderClick}
              className="w-full md:w-auto px-10 py-4 text-[#050300] text-lg font-semibold rounded-full
              bg-gradient-to-b from-[#FFD479] to-[#E9C46A]
              shadow-[0_0_25px_rgba(255,212,121,0.4)]
              hover:shadow-[0_0_45px_rgba(255,212,121,0.6)]
              hover:scale-[1.03]
              transition-all duration-300"
            >
              Сделать предзаказ
            </button>

            <button
              onClick={onLearnMoreClick}
              className="w-full md:w-auto px-10 py-4 text-[#FFF4E6] text-lg font-medium rounded-full
              bg-white/10 border border-white/20
              hover:bg-white/20 hover:scale-[1.03]
              transition-all duration-300"
            >
              Подробнее
            </button>
          </div>
        </div>

        {/* ИЗОБРАЖЕНИЕ ШАРА */}
        <div className="flex justify-center md:justify-end relative">
          <img
            src={ornament}
            alt="Лего-пара в шаре"
            className="w-[300px] sm:w-[400px] md:w-[520px]
                       drop-shadow-[0_0_40px_rgba(255,212,121,0.4)]
                       relative -top-12 md:-top-20"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
