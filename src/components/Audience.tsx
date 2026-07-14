"use client";

import { Building2, Car, Truck, Users } from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./ui/AnimatedSection";

const audiences = [
  {
    icon: Car,
    title: "Водители сервисов заказа поездок",
    description:
      "Оценка маршрутов и предварительный расчёт стоимости поездки перед выездом.",
  },
  {
    icon: Building2,
    title: "Таксопарки",
    description:
      "Инструмент для анализа маршрутов и планирования загрузки водителей парка.",
  },
  {
    icon: Users,
    title: "Корпоративные автопарки",
    description:
      "Оценка стоимости служебных поездок и контроль маршрутных параметров.",
  },
  {
    icon: Truck,
    title: "Логистические компании",
    description:
      "Предварительный расчёт стоимости перевозок и анализ маршрутной информации.",
  },
];

export function Audience() {
  return (
    <AnimatedSection id="audience" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Для кого
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Продукт ориентирован на участников рынка пассажирских и логистических
            перевозок
          </p>
        </div>

        <StaggerContainer className="grid gap-5 sm:grid-cols-2">
          {audiences.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group h-full rounded-2xl border border-white/6 bg-card p-8 transition-all duration-300 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-light/10 transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-5 w-5 text-accent-lighter" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
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
