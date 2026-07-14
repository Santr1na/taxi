import { Zap } from "lucide-react";

const footerLinks = [
  { label: "Политика конфиденциальности", href: "#" },
  { label: "Пользовательское соглашение", href: "#" },
  { label: "Контакты", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-lighter">
              <Zap className="h-4 w-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-semibold">FareLook</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-white/6 pt-8 text-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} FareLook. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
