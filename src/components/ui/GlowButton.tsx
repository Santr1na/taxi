"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
}

export function GlowButton({
  children,
  href,
  variant = "primary",
  type = "button",
  className = "",
  onClick,
}: GlowButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-accent to-accent-light text-white glow-button hover:brightness-110",
    secondary:
      "glass text-foreground hover:bg-white/5 border border-white/10",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
