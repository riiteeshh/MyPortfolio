"use client";

import { useState } from "react";
import axios from "axios";
import { Loader2, Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Container, SectionHeading } from "@/components/section-container";
import { Reveal } from "@/components/reveal";
import type { ContactForm } from "@/app/types";
import { SITE } from "@/lib/data/site";

const EMPTY_FORM: ContactForm = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [formData, setFormData] = useState<ContactForm>(EMPTY_FORM);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const res = await axios.post("/api/send-mail", formData, {
        headers: { "Content-Type": "application/json" },
      });
      if (res.status !== 200) throw new Error("Failed");
      toast.success("Message sent. Thanks for reaching out.");
      setFormData(EMPTY_FORM);
    } catch {
      toast.error("Something went wrong sending the message.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's get in touch"
            description=""
          />
        </Reveal>

        <Reveal delay={100} className="grid gap-10 md:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            aria-label="Contact form"
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                aria-label="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                aria-label="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              aria-label="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              name="message"
              placeholder="Message"
              aria-label="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="h-32 w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <Button type="submit" disabled={isSending} className="w-full sm:w-auto">
              {isSending && <Loader2 className="size-4 animate-spin" />}
              Send message
            </Button>
          </form>

          <div className="flex flex-col justify-center gap-3 text-muted-foreground">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-2 hover:text-foreground"
            >
              <Mail className="size-4" /> {SITE.email}
            </a>
            <p className="text-sm">{SITE.location}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
