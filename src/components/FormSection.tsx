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
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${fireplaceBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* затемнение для контраста */}
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />

      <motion.div
        className="relative z-10 w-full max-w-lg px-6 md:px-10"
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 60 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {!isSubmitted ? (
          <div
            className="p-14 md:p-16 rounded-[40px] mx-auto
              bg-[rgba(10,10,10,0.65)] backdrop-blur-2xl
              border border-[rgba(255,255,255,0.08)]
              shadow-[0_0_50px_rgba(0,0,0,0.55)]
              flex flex-col items-center gap-8"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white leading-tight">
              Присоединиться к предзаказу
            </h2>

            <p className="text-lg leading-relaxed text-[#FFF4E6] max-w-sm mb-4">
              Будьте среди первых, кто получит свою Лего-пару
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-7 w-full max-w-sm"
            >
              <input
                type="text"
                placeholder="Юля и Антон"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full px-6 py-4 rounded-xl text-base 
                  bg-white/15 border border-white/25 text-white 
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
                className="w-full px-6 py-4 rounded-xl text-base 
                  bg-white/15 border border-white/25 text-white 
                  placeholder-white/70 focus:outline-none 
                  focus:ring-2 focus:ring-[#FFD479]/60 focus:bg-white/25 
                  transition-all"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                disabled={isSubmitting}
                className="mt-6 rounded-full font-semibold text-lg px-10 py-4 
                  text-[#050300]
                  bg-gradient-to-b from-[#FFD479] to-[#E9C46A]
                  shadow-[0_0_25px_rgba(255,212,121,0.45)]
                  hover:shadow-[0_0_45px_rgba(255,212,121,0.6)]
                  transition-all duration-300"
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
  className="p-14 md:p-16 rounded-[40px] 
    bg-[rgba(10,10,10,0.65)] backdrop-blur-2xl 
    border border-[rgba(255,255,255,0.08)]
    shadow-[0_0_50px_rgba(0,0,0,0.55)]
    flex flex-col items-center text-center
    max-w-2xl mx-auto break-words"
>
  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 leading-tight whitespace-nowrap">
    Спасибо за заявку!
  </h2>

  <p className="text-lg md:text-xl leading-relaxed text-[#FFF4E6] whitespace-pre-line">
    Мы свяжемся с вами{"\n"}
    в течение <span className="font-semibold text-white">24 часов</span>
    {"\n\n"}
    Спасибо, что выбрали{"\n"}
    <strong className="text-white">Brick Couple</strong> <span className="text-[#FFD479]">💛</span>
  </p>
</motion.div>





        )}
      </motion.div>
    </section>
  );
}
