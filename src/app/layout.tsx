import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FareLook — Оценка стоимости поездок и анализ маршрутов",
  description:
    "Мобильный сервис для расчёта ориентировочной стоимости поездок и анализа маршрутов. Продукт на стадии MVP.",
  keywords: [
    "стоимость поездки",
    "анализ маршрутов",
    "расчёт стоимости",
    "мобильное приложение",
    "MVP",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
