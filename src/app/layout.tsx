import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FareLook — Узнайте стоимость заказа ещё до принятия",
  description:
    "Приложение для водителей Яндекс Про. Автоматически определяет параметры нового заказа и показывает ориентировочную стоимость поездки.",
  keywords: [
    "Яндекс Про",
    "водители такси",
    "стоимость заказа",
    "Android приложение",
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
