import React from "react";

interface PreOrderSectionProps {
  onPreOrderClick?: () => void;
}

const PreOrderSection: React.FC<PreOrderSectionProps> = ({ onPreOrderClick }) => {
  return (
    <section
      className="relative bg-[#050300] text-white py-28 md:py-36 text-center overflow-hidden"
    >
      {/* Мягкий затемняющий слой */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        {/* Заголовок */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Ограниченный предзаказ
          </h2>
          <p className="text-[#FFF4E6] text-lg md:text-xl leading-relaxed">
            Предзаказы открыты до{" "}
            <span className="text-[#FFD479] font-semibold">
              31 декабря 2025 года
            </span>
            . Всего{" "}
            <span className="text-[#FFD479] font-semibold">50 наборов</span>.
          </p>
        </div>

        {/* Основная карточка */}
        <div
          className="relative inline-block max-w-xl w-full p-10 md:p-12 rounded-[36px] 
          bg-[rgba(10,10,10,0.65)] backdrop-blur-2xl 
          border border-[rgba(255,255,255,0.08)] 
          shadow-[0_0_40px_rgba(0,0,0,0.4)] 
          hover:shadow-[0_0_60px_rgba(255,212,121,0.15)]
          transition-all duration-500"
        >
          <h3 className="text-2xl font-semibold mb-6">
            Станьте одним из первых
          </h3>

          <p className="text-[#FFF4E6] text-base md:text-lg leading-relaxed mb-10">
            Количество мест ограничено. Забронируйте свой набор сейчас и получите
            уникальный подарок, созданный специально для вас.
          </p>

          <button
            onClick={onPreOrderClick}
            className="px-10 py-4 text-[#050300] text-lg font-semibold rounded-full
              bg-gradient-to-b from-[#FFD479] to-[#E9C46A]
              shadow-[0_0_25px_rgba(255,212,121,0.4)]
              hover:shadow-[0_0_45px_rgba(255,212,121,0.6)]
              hover:scale-[1.03]
              transition-all duration-300"
          >
            Забронировать набор
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreOrderSection;
