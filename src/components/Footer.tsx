import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/30 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-6 h-6 text-[#D9443D] fill-[#D9443D]" />
            </motion.div>
          </div>
          
          <p className="text-muted-foreground mb-2">
            Проект <span className="relative inline-block">
              Brick Couple
              {/* Animated heart pulse behind "любовь" */}
              <motion.span
                className="absolute -left-1 top-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-4 h-4 text-[#D9443D] fill-[#D9443D] opacity-0" />
              </motion.span>
            </span> — <span className="relative inline-block">
              любовь
              <motion.span
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-8 h-8 text-[#D9443D] fill-[#D9443D]" />
              </motion.span>
            </span>, собранная из деталей.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
            <span>Создано LEGO-энтузиастами из Москвы</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Сделано с</span>
            <Heart className="w-4 h-4 text-[#D9443D] fill-[#D9443D]" />
            <span>и настоящими деталями LEGO</span>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            LEGO® является товарным знаком компании LEGO Group, которая не спонсирует и не одобряет этот проект.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
