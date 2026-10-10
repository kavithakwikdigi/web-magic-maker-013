import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { contact, type Service } from "@/lib/site";
import type { Article } from "@/lib/blog";
import { WhatsAppIcon } from "./icons";

export function FloatingWhatsApp() {
  return (
    <a
      href={contact.whatsappDefault}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Kwikdigi on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-navy-foreground shadow-soft transition hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

export function WhatsAppButton({ label = "Chat on WhatsApp" }: { label?: string }) {
  return (
    <a
      href={contact.whatsappDefault}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-bold text-navy transition hover:border-whatsapp hover:text-whatsapp"
    >
      <WhatsAppIcon className="h-5 w-5 text-whatsapp" /> {label}
    </a>
  );
}

export function PrimaryLink({ to, children }: { to: "/contact" | "/services" | "/blog" | "/about"; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-soft"
    >
      {children} <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="border-b border-border bg-sky">
      <div className="container-page py-16 md:py-20">
        <p className="eyebrow fade-up">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl fade-up">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground fade-up">{text}</p>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, text, center }: { eyebrow?: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{text}</p>}
    </div>
  );
}

export function ServiceCard({ s, index }: { s: Service; index: number }) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: s.slug }}
      className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-soft"
    >
      <span className="text-sm font-extrabold text-primary">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="mt-3 text-lg font-bold">{s.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
        Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function BlogCard({ a }: { a: Article }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:shadow-soft">
      <Link to="/blog/$slug" params={{ slug: a.slug }} className="block aspect-[16/10] overflow-hidden" tabIndex={-1} aria-hidden="true">
        <img src={a.image} alt="" loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs">
          <span className="rounded-full bg-sky px-2.5 py-1 font-bold text-brand">{a.category}</span>
          <span className="text-muted-foreground">{a.minutes} min read</span>
        </div>
        <h3 className="mt-4 text-lg font-bold leading-snug">
          <Link to="/blog/$slug" params={{ slug: a.slug }} className="hover:text-brand">{a.title}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
        <Link to="/blog/$slug" params={{ slug: a.slug }} className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
          Read Article <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export function CtaBand({ title = "Ready to grow your digital presence?", text = "Tell us about your business and goals. We'll talk through what could work for you — no pressure, no jargon." }: { title?: string; text?: string }) {
  return (
    <section className="py-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-2xl bg-navy px-8 py-14 md:px-14">
          <div className="absolute right-0 top-0 h-full w-1.5 bg-primary" aria-hidden="true" />
          <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-3xl font-extrabold text-navy-foreground md:text-4xl">{title}</h2>
              <p className="mt-4 max-w-xl text-navy-foreground/75">{text}</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <PrimaryLink to="/contact">Let's Talk</PrimaryLink>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
