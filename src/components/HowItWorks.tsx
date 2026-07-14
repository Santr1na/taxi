"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  ChevronDown,
  LayoutDashboard,
  Map,
  Settings2,
} from "lucide-react";
import { AnimatedSection } from "./ui/AnimatedSection";

const steps = [
  {
    icon: Map,
    title: "Выбор маршрута",
    description: "Пользователь указывает точки отправления и назначения",
    color: "text-accent-lighter",
    bg: "bg-accent/15",
  },
  {
    icon: Settings2,
    title: "Получение параметров маршрута",
    description: "Система определяет расстояние, время и тарифные условия",
    color: "text-info",
    bg: "bg-info/15",
  },
  {
    icon: Calculator,
    title: "Расчёт ориентировочной стоимости",
    description: "Формируется предварительная оценка стоимости поездки",
    color: "text-success",
    bg: "bg-success/15",
  },
  {
    icon: LayoutDashboard,
    title: "Отображение результата",
    description: "Результат расчёта показывается в удобном мобильном интерфейсе",
    color: "text-accent-lighter",
    bg: "bg-accent/15",
  },
];

export function HowItWorks() {
  return (
    <AnimatedSection
      id="how-it-works"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Как работает
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Последовательность расчёта от выбора маршрута до отображения результата
          </p>
        </div>

        <div className="hidden lg:block">
          <div className="relative flex items-start justify-between">
            <div className="absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative flex w-[22%] flex-col items-center text-center"
              >
                <div
                  className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl ${step.bg} glow-purple`}
                >
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>
                <h3 className="mt-5 text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 lg:hidden">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex w-full max-w-sm flex-col items-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="gradient-border w-full rounded-2xl bg-card p-6 text-center"
              >
                <div
                  className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${step.bg}`}
                >
                  <step.icon className={`h-6 w-6 ${step.color}`} />
                </div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </motion.div>
              {index < steps.length - 1 && (
                <ChevronDown className="my-1 h-5 w-5 text-accent/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
