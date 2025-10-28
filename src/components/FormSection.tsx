import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

export function FormSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({ name: "", contact: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // ✅ новое состояние

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

      setTimeout(() => {
        setIsSubmitted(true); // ✅ показываем сторону "Спасибо!"
      }, 400);
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
      className="py-20 relative overflow-hidden"
    >
      {/* Фоновое свечение */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-[10%] w-24 h-24 rounded-full bg-[#FFD000]/10 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-[15%] w-32 h-32 rounded-full bg-[#D9443D]/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 perspective-1000">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Flip container */}
          <motion.div
  className="relative w-full flex items-center justify-center"
  animate={{
    rotateY: isSubmitted ? 180 : 0,
  }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
  style={{
    transformStyle: "preserve-3d",
    perspective: 1200,
    minHeight: "650px", // ✅ стабильно держит высоту на всех экранах
  }}
>



            {/* Front side — форма */}
            <Card
              className="p-8 md:p-12 bg-gradient-to-br from-white/90 to-[#D9443D]/5 backdrop-blur-xl border-2 border-[#D9443D]/20 rounded-3xl shadow-xl absolute w-full backface-hidden"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="text-center mb-8 relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D9443D]/10 mb-4 backdrop-blur-sm"
                >
                  <Heart className="w-8 h-8 text-[#D9443D]" />
                </motion.div>

                <h2 className="mb-2 text-3xl md:text-4xl">
                  Присоединиться к предзаказу
                </h2>
                <p className="text-muted-foreground">
                  Будьте среди первых, кто получит свою Лего-пару
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Label htmlFor="name" className="mb-2 block">
                    Ваши имена
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Юля и Антон"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="rounded-xl border border-white/40 focus:border-[#D9443D] transition-all duration-300 px-4 py-3 bg-white/50 backdrop-blur-md focus:shadow-lg focus:bg-white/70"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Label htmlFor="contact" className="mb-2 block">
                    Почта
                  </Label>
                  <Input
                    id="contact"
                    type="text"
                    placeholder="name@example.com"
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                    required
                    className="rounded-xl border border-white/40 focus:border-[#2451B6] transition-all duration-300 px-4 py-3 bg-white/50 backdrop-blur-md focus:shadow-lg focus:bg-white/70"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#D9443D] to-[#D9443D]/90 hover:from-[#D9443D]/90 hover:to-[#D9443D]/80 text-white rounded-full py-6 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? "Отправка..." : "Отправить заявку"}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </Button>
                </motion.div>
              </form>
            </Card>

            {/* Back side — экран благодарности */}
            <Card
              className="p-12 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#fff]/80 to-[#FFD000]/10 backdrop-blur-xl border-2 border-[#D9443D]/20 rounded-3xl shadow-xl absolute w-full rotate-y-180 backface-hidden"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#D9443D]/10 mb-6 backdrop-blur-sm"
              >
                <Heart className="w-10 h-10 text-[#D9443D]" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-medium mb-4">
                Спасибо за заявку!
              </h2>
              <p className="text-muted-foreground text-lg max-w-md">
                Мы обязательно свяжемся с вами в течение 24 часов.
                <br />
                Спасибо, что выбрали Brick Couple ❤️
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
