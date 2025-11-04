import React from "react";

interface PreOrderSectionProps {
  onPreOrderClick?: () => void;
}

const PreOrderSection: React.FC<PreOrderSectionProps> = ({ onPreOrderClick }) => {
  return (
    <section className="bg-black text-white py-24 md:py-32 text-center bg-gradient-fade relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ограниченный предзаказ
        </h2>
        <p className="text-[#FFF4E6] mb-10 text-base md:text-lg">
          Предзаказы открыты до{" "}
          <span className="text-goldLight font-semibold">31 декабря 2025 года</span>.
          Всего <span className="text-goldLight font-semibold">50 наборов</span>.
        </p>

        <div className="glass-card inline-block p-10 rounded-2xl max-w-xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Станьте одним из первых
          </h3>
          <p className="text-[#FFF4E6] mb-8">
            Количество мест ограничено. Забронируйте свой набор сейчас и получите
            уникальный подарок, созданный специально для вас.
          </p>
          <button
            onClick={onPreOrderClick}
            className="btn-gold glow-gold text-base md:text-lg px-10 py-4 rounded-full font-semibold"
          >
            Забронировать набор
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreOrderSection;
