import { motion } from "motion/react";
import { Heart, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="relative text-center py-16 border-t border-white/10"
      style={{
        backgroundColor: "#000000", // <-- ЧЁРНЫЙ ФОН
      }}
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Заголовок / бренд */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4 flex items-center justify-center gap-2"
        >
          <Sparkles className="w-5 h-5 text-[#FFD479]" />
          <h3
            className="text-xl font-semibold tracking-tight"
            style={{
              color: "#FFF4E6",
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            Brick Couple
          </h3>
          <Sparkles className="w-5 h-5 text-[#FFD479]" />
        </motion.div>

        {/* Основной текст */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg font-medium mb-3"
          style={{
            color: "#FFF4E6",
            textShadow: "0 1px 8px rgba(0,0,0,0.4)",
          }}
        >
          Любовь, собранная из деталей.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm mb-6"
          style={{
            color: "#FFD479",
            textShadow: "0 1px 6px rgba(0,0,0,0.3)",
          }}
        >
          Сделано вручную, с{" "}
          <Heart className="inline w-4 h-4 text-[#E74C3C] fill-[#E74C3C]" /> и
          настоящими деталями LEGO
        </motion.p>

        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#FFD479]/60 to-transparent mx-auto mb-6" />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xs text-[#FFF4E6]/60"
          style={{
            textShadow: "0 1px 4px rgba(0,0,0,0.3)",
          }}
        >
          © {new Date().getFullYear()} Brick Couple. Все права защищены.
        </motion.p>
      </div>
    </footer>
  );
}

export default Footer;