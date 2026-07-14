"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  MapPin,
  Navigation,
  Route,
  Wallet,
} from "lucide-react";

export function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[320px] lg:max-w-[360px]"
    >
      <div className="absolute -inset-8 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" />
      <div className="absolute -right-4 top-1/4 h-32 w-32 rounded-full bg-info/10 blur-2xl" />
      <div className="absolute -left-4 bottom-1/4 h-24 w-24 rounded-full bg-success/10 blur-2xl" />

      <div className="animate-float relative">
        <div className="gradient-border rounded-[2.5rem] p-[3px] glow-purple">
          <div className="overflow-hidden rounded-[2.4rem] bg-[#0c0c0e] p-2.5 shadow-2xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#111827]">
              <div className="flex items-center justify-between px-5 pt-3 pb-1">
                <span className="text-[10px] font-medium text-white/60">9:41</span>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-white/80" />
                  <div className="h-2 w-2 rounded-full bg-white/80" />
                  <div className="h-2.5 w-4 rounded-sm bg-white/80" />
                </div>
              </div>

              <div className="px-4 pb-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-lighter">
                    <ZapIcon />
                  </div>
                  <span className="text-sm font-semibold">FareLook</span>
                </div>
              </div>

              <div className="mx-4 mb-3 rounded-2xl border border-success/20 bg-success/5 p-4">
                <div className="mb-1 flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                  </span>
                  <span className="text-[11px] font-medium text-success">
                    Новый заказ
                  </span>
                </div>
                <div className="mt-3 text-3xl font-bold tracking-tight">
                  847 ₽
                </div>
                <div className="mt-0.5 text-xs text-muted">ориентировочно</div>
              </div>

              <div className="mx-4 space-y-3 rounded-2xl glass p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/15">
                    <MapPin className="h-3.5 w-3.5 text-accent-light" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted">
                      Подача
                    </div>
                    <div className="text-sm font-medium leading-snug">
                      ул. Тверская, 12
                    </div>
                  </div>
                </div>

                <div className="ml-3.5 h-4 border-l border-dashed border-white/15" />

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-info/15">
                    <Navigation className="h-3.5 w-3.5 text-info" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted">
                      Назначение
                    </div>
                    <div className="text-sm font-medium leading-snug">
                      аэропорт Шереметьево, терминал B
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-4 mt-3 grid grid-cols-3 gap-2">
                <StatPill icon={<Wallet className="h-3 w-3" />} label="Тариф" value="Комфорт+" />
                <StatPill icon={<Route className="h-3 w-3" />} label="Расстояние" value="34 км" />
                <StatPill icon={<Clock className="h-3 w-3" />} label="Время" value="42 мин" />
              </div>

              <div className="mx-4 mt-4 mb-5 flex gap-2">
                <button
                  type="button"
                  className="flex-1 rounded-xl bg-gradient-to-r from-accent to-accent-light py-2.5 text-xs font-semibold text-white"
                >
                  Принять
                </button>
                <button
                  type="button"
                  className="flex-1 rounded-xl border border-white/10 py-2.5 text-xs font-medium text-muted"
                >
                  Пропустить
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/20" />
      </div>
    </motion.div>
  );
}

function ZapIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5 text-white"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function StatPill({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-white/5 px-2.5 py-2.5 text-center">
      <div className="mb-1 flex justify-center text-muted">{icon}</div>
      <div className="text-[9px] text-muted">{label}</div>
      <div className="text-[11px] font-semibold">{value}</div>
    </div>
  );
}
