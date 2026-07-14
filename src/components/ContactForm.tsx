"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { AnimatedSection } from "./ui/AnimatedSection";
import { GlowButton } from "./ui/GlowButton";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <AnimatedSection id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="gradient-border mx-auto max-w-xl overflow-hidden rounded-3xl bg-card glow-purple">
          <div className="p-8 md:p-10">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Запросить доступ к MVP
              </h2>
              <p className="mt-3 text-muted">
                Оставьте контакты — мы сообщим о готовности MVP и условиях
                раннего доступа
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-8 text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/15">
                  <CheckCircle2 className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-lg font-semibold">Заявка принята</h3>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  Спасибо за интерес к FareLook. Мы свяжемся с вами по
                  указанным контактным данным.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-muted"
                  >
                    Имя
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Александр"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-white/25 focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="contact@company.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-white/25 focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-muted"
                  >
                    Телефон
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+7 (999) 000-00-00"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-white/25 focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                <GlowButton type="submit" className="w-full !py-4">
                  {loading ? "Отправка..." : "Отправить заявку"}
                  {!loading && <ArrowRight className="h-4 w-4" />}
                </GlowButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
