 import React from "react";

interface PreOrderSectionProps {
  onPreOrderClick?: () => void;
}

const PreOrderSection: React.FC<PreOrderSectionProps> = ({ onPreOrderClick }) => {
  return (
    <section
      className="relative bg-[#050300] text-white min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-[22vh] pb-[15vh]"
    >
      {/* Затемнение */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Заголовок */}
        <h2 className="text-5xl md:text-6xl font-extrabold mb-20 leading-tight">
          Ограниченный предзаказ
        </h2>

        {/* Карточка */}
        <div
          className="relative max-w-xl w-full p-12 md:p-14 rounded-[36px]
          bg-[rgba(10,10,10,0.65)] backdrop-blur-2xl
          border border-[rgba(255,255,255,0.08)]
          shadow-[0_0_60px_rgba(0,0,0,0.45)]
          flex flex-col items-center text-center"
        >
          {/* Текст */}
          <p className="text-[#FFF4E6] text-lg md:text-xl mb-14 max-w-md leading-relaxed">
            Предзаказы открыты до{" "}
            <span className="text-white font-semibold">31 декабря 2025 года</span>.
            Всего{" "}
            <span className="text-[#FFD479] font-semibold">50 наборов</span>.
          </p>

          {/* Кнопка */}
          <button
            onClick={onPreOrderClick}
            className="mt-6 px-12 py-4 text-[#050300] text-lg font-semibold rounded-full
              bg-gradient-to-b from-[#FFD479] to-[#E9C46A]
              shadow-[0_0_30px_rgba(255,212,121,0.4)]
              hover:shadow-[0_0_60px_rgba(255,212,121,0.6)]
              hover:scale-[1.03]
              transition-all duration-300"
          >
            Забронировать
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreOrderSection;
