import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function BackgroundShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large floating heart - top left */}
      <motion.div
        className="absolute top-[10%] left-[5%] text-[#D9443D] opacity-10"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Heart className="w-32 h-32 fill-current blur-sm" />
      </motion.div>

      {/* Medium floating heart - top right */}
      <motion.div
        className="absolute top-[15%] right-[8%] text-[#FFD000] opacity-12"
        animate={{
          y: [0, 40, 0],
          x: [0, -15, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Heart className="w-24 h-24 fill-current blur-md" />
      </motion.div>

      {/* LEGO brick shape - middle left */}
      <motion.div
        className="absolute top-[40%] left-[10%] opacity-8"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <div className="w-28 h-20 rounded-lg bg-[#2451B6] blur-xl relative">
          <div className="absolute top-0 left-0 w-full flex justify-evenly p-2">
            <div className="w-6 h-6 rounded-full bg-[#2451B6]" />
            <div className="w-6 h-6 rounded-full bg-[#2451B6]" />
            <div className="w-6 h-6 rounded-full bg-[#2451B6]" />
          </div>
        </div>
      </motion.div>

      {/* Circle - middle right (уменьшенная подложка) */}
<motion.div
  className="absolute top-[42%] right-[20%] w-28 h-28 rounded-full bg-[#D9443D] opacity-8 blur-2xl"
  animate={{
    scale: [1, 1.2, 1],
    y: [0, 20, 0],
  }}
  transition={{
    duration: 9,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 0.5,
  }}
/>

      {/* Small heart - bottom left */}
      <motion.div
        className="absolute bottom-[20%] left-[15%] text-[#FFD000] opacity-15"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <Heart className="w-20 h-20 fill-current blur-sm" />
      </motion.div>

      {/* LEGO brick - bottom right */}
      <motion.div
        className="absolute bottom-[25%] right-[10%] opacity-10"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <div className="w-24 h-16 rounded-lg bg-[#D9443D] blur-lg relative">
          <div className="absolute top-0 left-0 w-full flex justify-evenly p-1.5">
            <div className="w-5 h-5 rounded-full bg-[#D9443D]" />
            <div className="w-5 h-5 rounded-full bg-[#D9443D]" />
          </div>
        </div>
      </motion.div>

      {/* Additional circle - top center */}
      <motion.div
        className="absolute top-[25%] left-[45%] w-32 h-32 rounded-full bg-[#2451B6] opacity-6 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
      />

      {/* Small circle - bottom center */}
      <motion.div
        className="absolute bottom-[15%] left-[40%] w-24 h-24 rounded-full bg-[#FFD000] opacity-10 blur-2xl"
        animate={{
          scale: [1, 1.15, 1],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Heart - center left */}
      <motion.div
        className="absolute top-[55%] left-[3%] text-[#D9443D] opacity-8"
        animate={{
          y: [0, 25, 0],
          x: [0, 10, 0],
          rotate: [0, -12, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Heart className="w-28 h-28 fill-current blur-lg" />
      </motion.div>

      {/* Brick shape - top far right */}
      <motion.div
        className="absolute top-[5%] right-[3%] opacity-7"
        animate={{
          y: [0, -35, 0],
          rotate: [0, 12, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3.5,
        }}
      >
        <div className="w-20 h-14 rounded-lg bg-[#FFD000] blur-xl relative">
          <div className="absolute top-0 left-0 w-full flex justify-evenly p-1">
            <div className="w-4 h-4 rounded-full bg-[#FFD000]" />
            <div className="w-4 h-4 rounded-full bg-[#FFD000]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
