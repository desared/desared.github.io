"use client";

import { useLanguage } from "@/lib/i18n";
import { SearchCheck, GraduationCap, Cloud, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const iconMap = {
  search: SearchCheck,
  graduation: GraduationCap,
  cloud: Cloud,
  rocket: Rocket,
} as const;

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t.about.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.about.intro}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.cards.map((card, i) => {
            const Icon = iconMap[card.icon];
            const content = (
              <CardContent className="pt-8 pb-8 px-6 text-center space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {card.description}
                </p>
              </CardContent>
            );

            if ("link" in card && card.link) {
              return (
                <a
                  key={i}
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="h-full bg-card/50 border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group cursor-pointer">
                    {content}
                  </Card>
                </a>
              );
            }

            return (
              <Card
                key={i}
                className="bg-card/50 border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                {content}
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <a href="#portfolio">{t.about.cta}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
