import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Heart } from "lucide-react";
import fireplaceBg from "../assets/камин.png";

export function FormSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({ name: "", contact: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name.trim(),
        contact: formData.contact.trim(),
      };

      await fetch(
        "https://script.google.com/macros/s/AKfycbyohyKgcvQF1az4M1zTmkfENJ4iREn7x0LdUbmdzaQbFD6Cj2TlXuZNHlyhuQrSzo5tmw/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      setTimeout(() => setIsSubmitted(true), 500);
    } catch (err) {
      console.error("Ошибка при отправке:", err);
      alert("Ошибка при отправке заявки. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={ref}
      id="pre-order-form"
      className="relative py-24 flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${fireplaceBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Мягкое свечение */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[20%] left-[15%] w-[300px] h-[300px] bg-[#FFD479]/15 blur-3xl rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Контейнер с эффектом flip */}
      <motion.div
        className="relative z-10 w-full max-w-2xl mx-auto"
        animate={{ rotateY: isSubmitted ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          transformStyle: "preserve-3d",
          perspective: 1200,
          minHeight: "640px",
        }}
      >
        {/* Передняя сторона */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl p-10 md:p-12 shadow-2xl"
          style={{
            background: "rgba(15, 15, 15, 0.65)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 45px rgba(0,0,0,0.6)",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Иконка */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="flex items-center justify-center mb-5"
          >
            <div
              className="flex items-center justify-center w-16 h-16 rounded-full"
              style={{
                background: "radial-gradient(circle, #FFD479 0%, #E9C46A 100%)",
                boxShadow: "0 0 25px rgba(255, 212, 121, 0.45)",
              }}
            >
              <Heart className="w-8 h-8 text-[#050300]" />
            </div>
          </motion.div>

          {/* Заголовок */}
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: "#FFFFFF" }}
          >
            Присоединиться к предзаказу
          </h2>
          <p
            className="text-lg mb-10 leading-relaxed"
            style={{ color: "#FFF4E6" }}
          >
            Будьте среди первых, кто получит свою Лего-пару
          </p>

          {/* Форма */}
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-6 max-w-md mx-auto"
          >
            <input
              type="text"
              placeholder="Юля и Антон"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-5 py-3.5 rounded-xl text-base bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#FFD479]/60 focus:bg-white/30 transition-all"
            />

            <input
              type="email"
              placeholder="name@example.com"
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
              required
              className="w-full px-5 py-3.5 rounded-xl text-base bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#FFD479]/60 focus:bg-white/30 transition-all"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              disabled={isSubmitting}
              className="rounded-full font-semibold text-lg px-10 py-4 transition-all duration-300 w-full"
              style={{
                background: "linear-gradient(180deg, #FFD479 0%, #E9C46A 100%)",
                color: "#050300",
                boxShadow: "0 0 25px rgba(255, 212, 121, 0.45)",
              }}
            >
              {isSubmitting ? "Отправка..." : "Отправить заявку"}
            </motion.button>
          </form>
        </motion.div>

        {/* Задняя сторона (Спасибо) */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl text-center p-12"
          style={{
            transform: "rotateY(180deg)",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 8px 45px rgba(0,0,0,0.6)",
            backfaceVisibility: "hidden",
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.1, 1], opacity: [0, 1, 1] }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center w-20 h-20 rounded-full mb-6"
            style={{
              background: "radial-gradient(circle, #FFD479 0%, #E9C46A 100%)",
              boxShadow: "0 0 25px rgba(255, 212, 121, 0.45)",
            }}
          >
            <Heart className="w-10 h-10 text-[#050300]" />
          </motion.div>

          <h2
            className="text-3xl md:text-4xl font-semibold mb-3"
            style={{ color: "#FFFFFF" }}
          >
            Спасибо за заявку!
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "#FFF4E6" }}
          >
            Мы свяжемся с вами в течение 24 часов.  
            Спасибо, что выбрали <strong>Brick Couple ❤️</strong>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
