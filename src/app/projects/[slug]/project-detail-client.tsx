"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { getProjectBySlug } from "@/data/projects";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProjectDetailClient({ slug }: { slug: string }) {
  const { lang } = useLanguage();
  const project = getProjectBySlug(slug, lang);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <Button asChild variant="outline">
            <Link href="/#portfolio">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {lang === "en" ? "Back to Portfolio" : "Zurück zum Portfolio"}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Button asChild variant="ghost" size="sm" className="mb-8 -ml-2">
          <Link href="/#portfolio">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {lang === "en" ? "Back to Portfolio" : "Zurück zum Portfolio"}
          </Link>
        </Button>

        {/* Hero */}
        <div className="space-y-6 mb-12">
          <p className="font-mono text-primary text-sm tracking-widest uppercase">
            {project.subtitle}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {project.title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            {project.description}
          </p>
          {project.liveLink && (
            <Button asChild size="lg">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {lang === "en" ? "View Live Project" : "Live-Projekt ansehen"}
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          )}
        </div>

        {/* Project image */}
        <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden mb-12 border border-border">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {project.metrics.map((metric, i) => (
            <Card
              key={i}
              className="bg-card/50 border-border p-5 text-center space-y-1"
            >
              <div className="text-2xl font-bold text-primary">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Content sections */}
        <div className="space-y-12">
          {project.sections.map((section, i) => (
            <div key={i} className="space-y-4">
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mt-16 space-y-4">
          <h2 className="text-2xl font-bold">
            {lang === "en" ? "Technologies Used" : "Verwendete Technologien"}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-sm px-3 py-1"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Demo image */}
        {project.demoImage && (
          <div className="mt-16 space-y-4">
            <h2 className="text-2xl font-bold">
              {lang === "en" ? "Live Demo" : "Live-Demo"}
            </h2>
            <div className="flex justify-center">
              <div className="relative rounded-xl overflow-hidden border border-border max-w-sm">
                <Image
                  src={project.demoImage}
                  alt={`${project.title} demo`}
                  width={400}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button asChild variant="outline">
            <Link href="/#portfolio">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {lang === "en" ? "All Projects" : "Alle Projekte"}
            </Link>
          </Button>
          {project.liveLink && (
            <Button asChild>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {lang === "en" ? "View Live Project" : "Live-Projekt ansehen"}
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}
