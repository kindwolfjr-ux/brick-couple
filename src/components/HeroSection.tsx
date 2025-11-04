import React from "react";
import heroBg from "../assets/Hero_BG.png";
import ornament from "../assets/игрушка.png";

interface HeroSectionProps {
  onPreOrderClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPreOrderClick }) => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* LEGO-шар */}
      <img
        src={ornament}
        alt="Лего-пара в шаре"
        className="absolute left-[8%] top-[8%] w-[320px] md:w-[400px] lg:w-[440px]"
        style={{
          filter: "drop-shadow(0 0 35px rgba(255, 212, 121, 0.4))",
        }}
      />

      {/* ПОДЛОЖКА */}
      <div
        className="relative z-10 max-w-[480px] rounded-2xl p-8 md:p-10"
        style={{
          background: "rgba(10, 10, 10, 0.55)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 40px rgba(0, 0, 0, 0.45)",
          marginLeft: "auto",
          marginRight: "8%",
        }}
      >
        <h1
          style={{
            color: "#FFFFFF",
            fontSize: "2.6rem",
            fontWeight: 800,
            lineHeight: "1.3",
            marginBottom: "1rem",
            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          Создадим вашу <br /> Лего-пару по фото
        </h1>

        <p
          style={{
            color: "#FFF4E6",
            fontSize: "1.05rem",
            lineHeight: "1.6",
            marginBottom: "2rem",
          }}
        >
          Вы присылаете фото, мы собираем <br /> с теплом и вниманием.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={onPreOrderClick}
            style={{
              background:
                "linear-gradient(180deg, #FFD479 0%, #E9C46A 100%)",
              color: "#050300",
              padding: "12px 30px",
              borderRadius: "9999px",
              fontWeight: 600,
              fontSize: "15px",
              boxShadow: "0 0 15px rgba(255, 212, 121, 0.4)",
              transition: "all 0.3s ease",
            }}
          >
            Сделать предзаказ
          </button>

          <button
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#FFF4E6",
              padding: "12px 30px",
              borderRadius: "9999px",
              fontWeight: 500,
              fontSize: "15px",
              transition: "all 0.3s ease",
            }}
          >
            Подробнее
          </button>
        </div>
      </div>
    </section>
  );
};
