import React from "react";
import howItWorksBg from "../assets/HowItWorks_BG.png";

const steps = [
  {
    number: "1",
    title: "Вы присылаете фото",
    text: "Отправьте фото пары. Этого достаточно, чтобы мы начали сборку.",
  },
  {
    number: "2",
    title: "Собираем вашу пару с душой",
    text: "Наша команда вручную подбирает самые подходящие детали, чтобы получилась именно ваша Лего-пара.",
  },
  {
    number: "3",
    title: "Отправляем в подарочной упаковке",
    text: "Вы получаете готовый набор — тёплый подарок, который обязательно вызовет улыбку.",
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section
      className="relative py-24 px-6 md:px-16 flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${howItWorksBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Оверлей для затемнения */}
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-white font-extrabold text-4xl md:text-5xl mb-3">
          Как это работает
        </h2>
        <p className="text-[#FFF4E6] text-lg md:text-xl">
          Четыре простых шага до вашей Лего-пары
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center p-8 rounded-[32px]
            bg-[rgba(10,10,10,0.65)] backdrop-blur-xl
            border border-[rgba(255,255,255,0.08)]
            shadow-[0_0_40px_rgba(0,0,0,0.3)]
            hover:shadow-[0_0_60px_rgba(255,212,121,0.15)]
            transition-all duration-500"
          >
            <div
              className="absolute -top-6 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
              bg-gradient-to-b from-[#FFD479] to-[#E9C46A]
              shadow-[0_0_20px_rgba(255,212,121,0.4)]
              text-[#050300]"
            >
              {step.number}
            </div>

            <h3 className="text-white text-xl font-semibold mt-6 mb-4">
              {step.title}
            </h3>
            <p className="text-[#FFF4E6] text-base leading-relaxed">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
