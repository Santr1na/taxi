"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { GlowButton } from "./ui/GlowButton";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="bg-radial-glow absolute inset-0" />
      <div className="bg-grid absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-light opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-light" />
              </span>
              <span className="text-xs font-medium text-accent-lighter">
                MVP · Android
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-[3.25rem]"
            >
              Платформа для расчёта стоимости поездок{" "}
              <span className="gradient-text">и маршрутной аналитики</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
            >
              FareLook — сервис для транспортных компаний и команд, которым
              нужен расчёт ориентировочной стоимости, анализ маршрутов и
              структурированные данные о параметрах поездки.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <GlowButton href="#contact">
                Запросить доступ
                <ArrowRight className="h-4 w-4" />
              </GlowButton>
              <GlowButton href="#contact" variant="secondary">
                <MessageCircle className="h-4 w-4" />
                Связаться с нами
              </GlowButton>
            </motion.div>
          </div>

          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
