"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { Award, Server, Languages } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t.skills.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.skills.intro}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Certifications */}
          <Card className="bg-card/50 border-border hover:border-primary/30 transition-all duration-300">
            <CardContent className="pt-8 pb-8 px-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">
                  {t.skills.certifications.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {t.skills.certifications.items.map((cert, i) => (
                  <li key={i}>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {cert.name}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Tech Stack */}
          <Card className="bg-card/50 border-border hover:border-primary/30 transition-all duration-300">
            <CardContent className="pt-8 pb-8 px-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Server className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">
                  {t.skills.techStack.title}
                </h3>
              </div>
              <div className="space-y-4">
                {t.skills.techStack.categories.map((cat, i) => (
                  <div key={i}>
                    <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wider">
                      {cat.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item, j) => (
                        <Badge
                          key={j}
                          variant="secondary"
                          className="text-xs font-mono"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="bg-card/50 border-border hover:border-primary/30 transition-all duration-300">
            <CardContent className="pt-8 pb-8 px-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Languages className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">
                  {t.skills.languages.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {t.skills.languages.items.map((lang, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="relative w-6 h-4 rounded-sm overflow-hidden shrink-0">
                      <Image
                        src={lang.flag}
                        alt={lang.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{lang.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {lang.level}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <a href="#contact">{t.skills.cta}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
