import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function FormSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({ name: "", contact: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        mode: "no-cors", // важно: чтобы не блокировало CORS
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    toast.success("Вы в списке!", {
      description:
        "Мы свяжемся с вами в течение 24 часов для подтверждения заказа.",
    });

    setFormData({ name: "", contact: "" });
  } catch (err) {
    console.error("Ошибка при отправке:", err);
    toast.error("Ошибка при отправке заявки");
  } finally {
    setIsSubmitting(false);
  }
};



  return (
    <section ref={ref} id="pre-order-form" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-white/90 to-[#D9443D]/5 backdrop-blur-xl border-2 border-[#D9443D]/20 rounded-3xl shadow-xl relative overflow-hidden">
            {/* Glass overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent pointer-events-none" />
            
            <div className="text-center mb-8 relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D9443D]/10 mb-4 backdrop-blur-sm"
              >
                <Heart className="w-8 h-8 text-[#D9443D]" />
              </motion.div>
              
              <h2 className="mb-2 text-3xl md:text-4xl">Присоединиться к списку предзаказа</h2>
              <p className="text-muted-foreground">
                Будьте среди первых 50 пар, получивших свои уникальные LEGO-фигурки
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="rounded-xl border border-white/40 focus:border-[#D9443D] transition-all duration-300 px-4 py-3 bg-white/50 backdrop-blur-md focus:shadow-lg focus:bg-white/70"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  required
                  className="rounded-xl border border-white/40 focus:border-[#2451B6] transition-all duration-300 px-4 py-3 bg-white/50 backdrop-blur-md focus:shadow-lg focus:bg-white/70"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center text-sm text-muted-foreground mt-6 relative z-10"
            >
              Мы свяжемся с вами в течение 24 часов для подтверждения заказа
            </motion.p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
