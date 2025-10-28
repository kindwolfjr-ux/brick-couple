import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Card } from "./ui/card";
import { Camera, Search, Wrench, Gift } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Вы присылаете фото",
    description: "Отправьте фото пары — этого достаточно, чтобы мы начали сборку",
    icon: Camera,
    color: "#D9443D",
  },
  {
    number: 2,
    title: "Собираем вашу пару",
    description: "Наша команда выбирает самые подходящие элементы — от прически до цвета одежды",
    icon: Search,
    color: "#2451B6",
  },
  {
    number: 3,
    title: "Отправляем в подарочной упаковке",
    description: "Каждая фигурка создаётся вручную и с душой — чтобы получилась именно ваша Лего-пара",
    icon: Wrench,
    color: "#FFD000",
  },
  {
    number: 4,
    title: "Отправляем в подарочной упаковке",
    description: "Вы получаете готовый набор — тёплый подарок, который обязательно вызовет улыбку",
    icon: Gift,
    color: "#D9443D",
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
  id="how-it-works"
  ref={ref}
  className="py-16 relative overflow-hidden"
>
      {/* Background parallax decorative elements */}
      <motion.div
        className="absolute top-20 left-[5%] w-16 h-16 rounded-lg bg-[#D9443D]/5 rotate-12"
        style={{
          y: isInView ? 0 : 50,
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-[8%] w-20 h-20 rounded-lg bg-[#FFD000]/5 -rotate-6"
        style={{
          y: isInView ? 0 : -50,
        }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-3xl md:text-4xl">Как это работает</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Четыре простых шага до вашей Лего-пары
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
              >
                <Card className="p-4 h-full hover:shadow-lg transition-all duration-300 border border-white/30 rounded-2xl relative overflow-hidden backdrop-blur-xl bg-white/40 shadow-[0_8px_32px_0_rgba(217,68,61,0.08)]">
                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent pointer-events-none" />
                  
                  <div className="flex flex-col items-center text-center relative z-10">
                    <motion.div
                      className="w-11 h-11 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm"
                      style={{ backgroundColor: `${step.color}15` }}
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-5 h-5" style={{ color: step.color }} />
                    </motion.div>
                    
                    <div
                      className="mb-2 px-2.5 py-0.5 rounded-full inline-block backdrop-blur-sm text-sm"
                      style={{ backgroundColor: `${step.color}20`, color: step.color }}
                    >
                      Шаг {step.number}
                    </div>
                    
                    <h3 className="mb-1.5">{step.title}</h3>
                    
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
