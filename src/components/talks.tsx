"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { Calendar, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Talks() {
  const { t } = useLanguage();

  return (
    <section id="talks" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t.talks.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.talks.intro}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {t.talks.entries.map((talk, i) => (
            <Card
              key={i}
              className="bg-card/50 border-border overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <div className="md:flex">
                <div className="relative w-full md:w-72 h-48 md:h-auto shrink-0">
                  <Image
                    src={talk.image}
                    alt={talk.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-semibold">{talk.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    {talk.date}
                  </div>
                  <p className="text-sm text-foreground/90">{talk.topic}</p>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <Badge variant="secondary" className="text-xs">
                      {talk.organizer}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <a href="#skills">{t.talks.cta}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
