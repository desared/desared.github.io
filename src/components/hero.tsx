"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function XingIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536l-4.879-8.916c-.004-.006-.004-.016 0-.022L22.139.756c.095-.191.097-.387.006-.535C22.056.078 21.894 0 21.686 0h-3.498zM3.648 4.74c-.211 0-.385.074-.473.216-.09.149-.078.339.02.531l2.34 4.05c.004.01.004.016 0 .021L3.169 13.8c-.09.189-.089.385 0 .536.089.151.26.22.478.22h3.346c.518 0 .766-.348.945-.667l2.42-4.37c-.016-.025-2.386-4.12-2.386-4.12-.168-.303-.43-.66-.966-.66H3.648z" />
    </svg>
  );
}

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/desared",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/desared/",
    label: "LinkedIn",
  },
  {
    icon: XingIcon,
    href: "https://www.xing.com/profile/Desared_Osmanllari/web_profiles?expandNeffi=true",
    label: "Xing",
  },
  {
    icon: XIcon,
    href: "https://x.com/DOsmanllari",
    label: "X",
  },
];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" className="text-foreground" />
        </svg>
      </div>

      {/* Diagonal accent lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <line x1="0%" y1="0%" x2="60%" y2="100%" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <line x1="20%" y1="0%" x2="80%" y2="100%" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <line x1="40%" y1="0%" x2="100%" y2="100%" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <line x1="60%" y1="0%" x2="100%" y2="60%" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <line x1="80%" y1="0%" x2="100%" y2="30%" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
        </svg>
      </div>

      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left - profile photo with glassmorphism */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-2xl" />

              {/* Glass container */}
              <div className="glass-border relative rounded-2xl p-3">
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-xl overflow-hidden">
                  <Image
                    src="/images/pic00.jpg"
                    alt="Desared Osmanllari"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right content - 3 cols */}
          <div className="lg:col-span-3 space-y-6 order-1 lg:order-2">
            <p className="font-mono text-primary text-sm tracking-widest uppercase">
              {t.hero.label}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              {t.hero.greeting}{" "}
              <span className="text-primary">{t.hero.name}</span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              {t.hero.description}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-11 h-11 rounded-full border border-primary/30 flex items-center justify-center text-primary/70 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-200"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="pt-2">
              <Button asChild size="lg" className="font-medium">
                <a href="#about">{t.hero.cta}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
