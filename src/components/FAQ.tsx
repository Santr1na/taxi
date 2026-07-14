"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "./ui/AnimatedSection";

const faqs = [
  {
    question: "Что такое FareLook?",
    answer:
      "FareLook — платформа для расчёта ориентировочной стоимости поездок и анализа маршрутов. Продукт разрабатывается как самостоятельный сервис для работы с маршрутными данными и параметрами поездки.",
  },
  {
    question: "На какой стадии находится проект?",
    answer:
      "Проект на стадии MVP. Ведётся разработка первой версии продукта и формирование базового функционала для расчёта стоимости и маршрутной аналитики.",
  },
  {
    question: "Какие платформы поддерживаются?",
    answer:
      "Первая версия разрабатывается для Android. Информация о поддержке других платформ будет опубликована по мере развития продукта.",
  },
  {
    question: "Когда станет доступен MVP?",
    answer:
      "Точные сроки будут объявлены ближе к готовности тестовой версии. Сейчас мы формируем список участников для раннего доступа.",
  },
  {
    question: "Можно ли использовать продукт в коммерческих проектах?",
    answer:
      "Условия коммерческого использования будут определены после выхода MVP. Если вас интересует применение FareLook в бизнес-задачах, оставьте заявку — мы обсудим возможные форматы сотрудничества.",
  },
  {
    question: "Как получить ранний доступ?",
    answer:
      "Заполните форму на сайте. Мы свяжемся с вами, когда откроется тестирование или появятся условия для подключения к продукту.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <AnimatedSection id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Частые вопросы
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Ответы о продукте, этапе разработки и условиях раннего доступа
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="gradient-border overflow-hidden rounded-2xl bg-card"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 leading-relaxed text-muted">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
