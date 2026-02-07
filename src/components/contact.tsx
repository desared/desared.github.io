"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const WEBHOOK_URL =
  "https://hook.eu1.make.com/4vya511bc75b65marhp426kddal30l7u";

export function Contact() {
  const { t } = useLanguage();
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get("name") as string).trim();
    const email = (data.get("email") as string).trim();
    const subject = (data.get("subject") as string).trim();
    const msg = (data.get("message") as string).trim();

    if (!name || !email || !subject || !msg) {
      setMessage({ text: t.contact.form.error, type: "error" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage({ text: t.contact.form.error, type: "error" });
      return;
    }

    setSending(true);
    setMessage(null);

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        subject,
        message: msg,
        timestamp: serverTimestamp(),
        read: false,
      });

      try {
        const formData = new URLSearchParams();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("subject", subject);
        formData.append("message", msg);
        formData.append("timestamp", new Date().toISOString());

        await fetch(WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          body: formData,
        });
      } catch {
        // Webhook notification sent or blocked by CORS
      }

      setMessage({ text: t.contact.form.success, type: "success" });
      form.reset();
    } catch {
      setMessage({ text: t.contact.form.error, type: "error" });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.contact.intro}
          </p>
        </div>

        <Card className="bg-card/50 border-border">
          <CardContent className="pt-8 pb-8 px-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.contact.form.name}</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t.contact.form.name}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t.contact.form.email}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t.contact.form.email}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">{t.contact.form.subject}</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder={t.contact.form.subject}
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{t.contact.form.message}</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t.contact.form.message}
                  rows={5}
                  required
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>

              {message && (
                <div
                  className={`p-3 rounded-lg text-sm ${
                    message.type === "success"
                      ? "bg-primary/10 text-primary"
                      : "bg-destructive/10 text-destructive"
                  }`}
                >
                  {message.text}
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={sending}
                className="w-full sm:w-auto font-medium"
              >
                <Send className="h-4 w-4 mr-2" />
                {sending ? t.contact.form.sending : t.contact.form.submit}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
