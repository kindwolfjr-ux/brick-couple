import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
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
      className="relative py-32 flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${fireplaceBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Затемняющий слой для читаемости */}
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />

      {/* Основной контент */}
      <motion.div
        className="relative z-10 w-full max-w-2xl px-6 md:px-12"
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {!isSubmitted ? (
          <div
            className="p-10 md:p-12 rounded-[36px] shadow-[0_8px_40px_rgba(0,0,0,0.6)]
              bg-[rgba(10,10,10,0.65)] backdrop-blur-2xl
              border border-[rgba(255,255,255,0.08)]"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
              Присоединиться к предзаказу
            </h2>
            <p className="text-lg mb-10 leading-relaxed text-[#FFF4E6]">
              Будьте среди первых, кто получит свою Лего-пару
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 max-w-md mx-auto"
            >
              <input
                type="text"
                placeholder="Юля и Антон"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full px-5 py-3.5 rounded-xl text-base 
                  bg-white/15 border border-white/30 text-white 
                  placeholder-white/70 focus:outline-none 
                  focus:ring-2 focus:ring-[#FFD479]/60 focus:bg-white/25 
                  transition-all"
              />

              <input
                type="email"
                placeholder="name@example.com"
                value={formData.contact}
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
                required
                className="w-full px-5 py-3.5 rounded-xl text-base 
                  bg-white/15 border border-white/30 text-white 
                  placeholder-white/70 focus:outline-none 
                  focus:ring-2 focus:ring-[#FFD479]/60 focus:bg-white/25 
                  transition-all"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                disabled={isSubmitting}
                className="rounded-full font-semibold text-lg px-10 py-4 transition-all duration-300 w-full
                  text-[#050300]
                  bg-gradient-to-b from-[#FFD479] to-[#E9C46A]
                  shadow-[0_0_25px_rgba(255,212,121,0.45)]
                  hover:shadow-[0_0_45px_rgba(255,212,121,0.6)]"
              >
                {isSubmitting ? "Отправка..." : "Отправить заявку"}
              </motion.button>
            </form>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="p-12 rounded-[36px] bg-[rgba(255,255,255,0.1)] backdrop-blur-2xl border border-[rgba(255,255,255,0.2)] shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-white">
              Спасибо за заявку!
            </h2>
            <p className="text-lg leading-relaxed text-[#FFF4E6]">
              Мы свяжемся с вами в течение 24 часов.  
              Спасибо, что выбрали <strong>Brick Couple 💛</strong>
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
