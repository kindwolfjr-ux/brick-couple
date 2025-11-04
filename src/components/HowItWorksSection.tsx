import React from "react";

export default function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      title: "Вы присылаете фото",
      description:
        "Отправьте фото пары. Этого достаточно, чтобы мы начали сборку.",
    },
    {
      id: 2,
      title: "Собираем вашу пару с душой",
      description:
        "Наша команда вручную подбирает самые подходящие детали, чтобы получилась именно ваша Лего-пара.",
    },
    {
      id: 3,
      title: "Отправляем в подарочной упаковке",
      description:
        "Вы получаете готовый набор — тёплый подарок, который обязательно вызовет улыбку.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative flex flex-col items-center text-center py-28 px-6 bg-[var(--background)] text-white"
    >
      <h2 className="text-5xl font-extrabold mb-3 drop-shadow-[0_0_10px_rgba(255,212,121,0.3)]">
        Как это работает
      </h2>
      <p className="text-lg text-[var(--text-secondary)] mb-16">
        Четыре простых шага до вашей Лего-пары
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative flex flex-col items-center rounded-3xl bg-[rgba(10,10,10,0.65)] border border-[rgba(255,255,255,0.08)] shadow-[0_0_25px_rgba(255,212,121,0.15)] p-10 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,212,121,0.35)]"
          >
            <div className="absolute -top-6 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-b from-[var(--gold-light)] to-[var(--gold-dark)] text-black font-extrabold text-xl shadow-[0_0_25px_rgba(255,212,121,0.5)]">
              {step.id}
            </div>

            <h3 className="text-xl md:text-2xl font-bold mt-6 mb-4">
              {step.title}
            </h3>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-[85%]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
