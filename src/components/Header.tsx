"use client";

import { motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import { GlowButton } from "./ui/GlowButton";

const navLinks = [
  { label: "Возможности", href: "#benefits" },
  { label: "Как работает", href: "#how-it-works" },
  { label: "О проекте", href: "#about" },
  { label: "Для кого", href: "#audience" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl glass-strong px-5 py-3.5">
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-lighter">
            <Zap className="h-4 w-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-semibold tracking-tight">FareLook</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <GlowButton href="#contact" className="!px-5 !py-2.5 !text-sm">
            Запросить доступ
          </GlowButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 md:hidden"
          aria-label="Меню"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 max-w-6xl rounded-2xl glass-strong p-4 md:hidden"
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 px-2">
              <GlowButton href="#contact" className="w-full">
                Запросить доступ
              </GlowButton>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
