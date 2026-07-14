"use client";

import { Shield, Smartphone, Zap, MapPin } from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./ui/AnimatedSection";

const benefits = [
  {
    icon: Zap,
    emoji: "⚡",
    title: "Быстро",
    description:
      "Стоимость отображается практически мгновенно после появления заказа.",
    accent: "from-accent/20 to-accent-light/5",
    iconColor: "text-accent-lighter",
  },
  {
    icon: MapPin,
    emoji: "📍",
    title: "Автоматическое определение маршрута",
    description: "Определяются точки отправления и назначения.",
    accent: "from-info/20 to-info/5",
    iconColor: "text-info",
  },
  {
    icon: Smartphone,
    emoji: "📱",
    title: "Работает в фоне",
    description: "Не требует постоянного открытия приложения.",
    accent: "from-success/20 to-success/5",
    iconColor: "text-success",
  },
  {
    icon: Shield,
    emoji: "🔒",
    title: "Конфиденциальность",
    description: "Данные пользователя не передаются третьим лицам.",
    accent: "from-accent-lighter/20 to-accent/5",
    iconColor: "text-accent-lighter",
  },
];

export function Benefits() {
  return (
    <AnimatedSection id="benefits" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Преимущества
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Всё необходимое для принятия взвешенного решения по каждому заказу
          </p>
        </div>

        <StaggerContainer className="grid gap-5 sm:grid-cols-2">
          {benefits.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group gradient-border h-full rounded-2xl bg-card p-6 transition-all duration-300 hover:bg-card/80 hover:shadow-lg hover:shadow-accent/5 md:p-8">
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.accent}`}
                >
                  <item.icon className={`h-5 w-5 ${item.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold">
                  <span className="mr-1.5">{item.emoji}</span>
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
