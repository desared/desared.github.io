"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Lang } from "@/data/translations";

const sections = ["about", "portfolio", "talks", "skills", "contact"] as const;

export function Navigation() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navKeys: Record<(typeof sections)[number], string> = {
    about: t.nav.about,
    portfolio: t.nav.portfolio,
    talks: t.nav.talks,
    skills: t.nav.skills,
    contact: t.nav.contact,
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a
            href="#top"
            className="font-mono text-primary font-semibold text-sm tracking-wide hover:text-primary/80 transition-colors"
          >
            {t.nav.brand}
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {navKeys[id]}
              </a>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            {/* Language dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {lang === "en" ? "EN" : "DE"}
                <ChevronDown className="h-3 w-3" />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-card border border-border rounded-lg shadow-lg overflow-hidden">
                  <button
                    onClick={() => {
                      setLang("en" as Lang);
                      setLangOpen(false);
                    }}
                    className={`w-full px-3 py-2 text-left text-sm hover:bg-secondary transition-colors ${
                      lang === "en" ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLang("de" as Lang);
                      setLangOpen(false);
                    }}
                    className={`w-full px-3 py-2 text-left text-sm hover:bg-secondary transition-colors ${
                      lang === "de" ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    Deutsch
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-b border-border">
          <div className="px-4 py-4 space-y-3">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {navKeys[id]}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2 border-t border-border">
              {/* Theme toggle (mobile) */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>

              <div className="h-4 w-px bg-border" />

              {/* Language switcher (mobile) */}
              <button
                onClick={() => {
                  setLang("en" as Lang);
                  setMobileOpen(false);
                }}
                className={`text-sm px-3 py-1 rounded ${
                  lang === "en"
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => {
                  setLang("de" as Lang);
                  setMobileOpen(false);
                }}
                className={`text-sm px-3 py-1 rounded ${
                  lang === "de"
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground"
                }`}
              >
                DE
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
