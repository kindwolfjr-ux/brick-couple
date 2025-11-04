import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import howItWorksBg from "../assets/HowItWorks_BG.png";

const steps = [
  {
    number: 1,
    title: "Вы присылаете фото",
    description:
      "Отправьте фото пары — этого достаточно, чтобы мы начали сборку.",
  },
  {
    number: 2,
    title: "Собираем вашу пару с душой",
    description:
      "Наша команда вручную подбирает самые подходящие детали, чтобы получилась именно ваша Лего-пара.",
  },
  {
    number: 3,
    title: "Отправляем в подарочной упаковке",
    description:
      "Вы получаете готовый набор — тёплый подарок, который обязательно вызовет улыбку.",
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative overflow-hidden py-24 md:py-32 flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: `url(${howItWorksBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Заголовок */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-16"
      >
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-4"
          style={{
            color: "#FFFFFF",
            textShadow: "0 2px 8px rgba(0,0,0,0.4)",
          }}
        >
          Как это работает
        </h2>
        <p
          className="text-lg"
          style={{
            color: "#FFF4E6",
            textShadow: "0 1px 5px rgba(0,0,0,0.3)",
          }}
        >
          Четыре простых шага до вашей Лего-пары
        </p>
      </motion.div>

      {/* Карточки */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl px-6 relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="relative flex flex-col items-center text-center rounded-2xl p-8 md:p-10 transition-all duration-300"
            style={{
              background: "rgba(10, 10, 10, 0.55)",
              backdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 8px 35px rgba(0,0,0,0.4)",
            }}
          >
            {/* Золотой кружок с номером */}
            <div
              className="flex items-center justify-center w-14 h-14 rounded-full mb-5"
              style={{
                background: "radial-gradient(circle, #FFD479 0%, #E9C46A 100%)",
                boxShadow: "0 0 25px rgba(255, 212, 121, 0.45)",
                color: "#050300",
                fontWeight: 700,
                fontSize: "1.3rem",
              }}
            >
              {step.number}
            </div>

            {/* Заголовок */}
            <h3
              className="text-xl font-semibold mb-3 leading-snug"
              style={{ color: "#FFFFFF" }}
            >
              {step.title}
            </h3>

            {/* Описание */}
            <p
              className="text-base leading-relaxed max-w-xs"
              style={{ color: "#FFF4E6" }}
            >
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
