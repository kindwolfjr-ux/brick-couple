import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Sparkles, Heart } from "lucide-react";

interface PreOrderSectionProps {
  onPreOrderClick: () => void;
}

export function PreOrderSection({ onPreOrderClick }: PreOrderSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background decorative glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D9443D]/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Floating decorative heart - top right */}
      <motion.div
        className="absolute top-12 right-[10%] opacity-10"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Heart className="w-16 h-16 text-[#D9443D] fill-current blur-sm" />
      </motion.div>

      {/* Floating LEGO brick - top left */}
      <motion.div
        className="absolute top-16 left-[8%] opacity-8"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="w-20 h-14 rounded-lg bg-[#FFD000] blur-lg relative">
          <div className="absolute top-0 left-0 w-full flex justify-evenly p-1.5">
            <div className="w-4 h-4 rounded-full bg-[#FFD000]" />
            <div className="w-4 h-4 rounded-full bg-[#FFD000]" />
          </div>
        </div>
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-12 md:p-16 bg-gradient-to-br from-white/90 to-[#D9443D]/5 border-2 border-[#D9443D]/20 rounded-3xl shadow-xl backdrop-blur-xl relative overflow-hidden">
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent pointer-events-none" />
            
            <div className="text-center relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#D9443D]/10 mb-6 backdrop-blur-sm"
              >
                <Sparkles className="w-10 h-10 text-[#D9443D]" />
              </motion.div>

              <motion.h2 
                className="mb-6 text-3xl md:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Ограниченный предзаказ
              </motion.h2>
              
              <motion.p 
                className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Предзаказы открыты до <span className="text-[#D9443D]">31 декабря 2025 года</span>. Всего <span className="text-[#D9443D]">20 наборов</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button
                  onClick={onPreOrderClick}
                  size="lg"
                  className="bg-gradient-to-r from-[#D9443D] to-[#D9443D]/90 hover:from-[#D9443D]/90 hover:to-[#D9443D]/80 text-white rounded-full px-12 py-7 text-lg shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group"
                >
                  <span className="relative z-10">Забронировать набор</span>
                  {/* Animated glow effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
