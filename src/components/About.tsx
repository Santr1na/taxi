"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { AnimatedSection } from "./ui/AnimatedSection";

export function About() {
  return (
    <AnimatedSection id="about" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="gradient-border mx-auto max-w-3xl rounded-3xl bg-card p-8 md:p-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-accent-lighter" />
            <span className="text-xs font-medium text-accent-lighter">
              О проекте
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold tracking-tight md:text-3xl"
          >
            FareLook на стадии MVP
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 space-y-4 leading-relaxed text-muted"
          >
            <p>
              FareLook — платформа для расчёта ориентировочной стоимости поездок
              и анализа маршрутов. Продукт разрабатывается как самостоятельный
              сервис для работы с маршрутной информацией, параметрами поездки
              и результатами расчёта.
            </p>
            <p>
              Проект находится на стадии MVP. Ведётся разработка первой версии
              продукта. Изучаются возможности интеграции с сервисами расчёта
              стоимости и маршрутной информации.
            </p>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
