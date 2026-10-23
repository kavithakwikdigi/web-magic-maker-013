import { Link } from "@tanstack/react-router";
import { ArrowRight, Search, MousePointerClick, Target, Share2, Palette, Code2, PenLine, MapPin, LayoutTemplate, Compass, BookOpen, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { contact, type Service } from "@/lib/site";
import type { Article } from "@/lib/blog";
import { WhatsAppIcon } from "./icons";

export const serviceIcons: Record<string, LucideIcon> = {
  seo: Search,
  "google-ads": MousePointerClick,
  "meta-ads": Target,
  "social-media-marketing": Share2,
  "website-designing": Palette,
  "website-development": Code2,
  "content-marketing": PenLine,
  "local-seo": MapPin,
  "landing-page-design": LayoutTemplate,
  "digital-marketing-strategy": Compass,
};

const tones: [string, string, string] = ["bg-sky text-brand", "bg-highlight/10 text-highlight", "bg-success/10 text-success"];

export function ServiceVisual({ slug, name }: { slug: string; name: string }) {
  const Icon = serviceIcons[slug] ?? Compass;
  return (
    <div className="relative grid aspect-[4/3] w-full place-items-center overflow-hidden rounded-2xl border border-border bg-sky fade-up" role="img" aria-label={`${name} illustration`}>
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-highlight/15" aria-hidden="true" />
      <div className="absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-success/10" aria-hidden="true" />
      <span className="relative grid h-28 w-28 place-items-center rounded-3xl bg-background text-brand shadow-soft">
        <Icon className="h-12 w-12" strokeWidth={1.6} />
      </span>
    </div>
  );
}

export function BlogCover({ category, className = "" }: { category: string; className?: string }) {
  const map: Record<string, [LucideIcon, number]> = {
    SEO: [Search, 0], "Local SEO": [MapPin, 2], "Google Ads": [MousePointerClick, 1], "Meta Ads": [Target, 1],
    "Social Media": [Share2, 2], "Content Marketing": [PenLine, 1], "Website Design": [Palette, 0], "Digital Strategy": [Compass, 0],
  };
  const [Icon, t] = map[category] ?? [BookOpen, 0];
  return (
    <div className={`relative grid w-full place-items-center overflow-hidden rounded-2xl ${(tones[t] ?? tones[0]).split(" ")[0]} ${className}`} aria-hidden="true">
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-background/60" />
      <Icon className={`relative h-12 w-12 ${(tones[t] ?? tones[0]).split(" ")[1]}`} strokeWidth={1.6} />
    </div>
  );
}

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
      className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-bold text-navy transition hover:border-success hover:text-whatsapp"
    >
      <WhatsAppIcon className="h-5 w-5 text-success" /> {label}
    </a>
  );
}

export function PrimaryLink({ to, children }: { to: "/contact" | "/services" | "/blog" | "/about"; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/90"
    >
      {children} <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="border-b border-border bg-sky">
      <div className="container-page py-12 md:py-16">
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
      <span className={`grid h-11 w-11 place-items-center rounded-xl ${tones[index % 3]}`}>
        {(() => { const I = serviceIcons[s.slug] ?? Compass; return <I className="h-5 w-5" />; })()}
      </span>
      <h3 className="mt-3 text-lg font-bold">{s.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
        Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function BlogCard({ a }: { a: Article }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:shadow-soft">
      <Link to="/blog/$slug" params={{ slug: a.slug }} className="block p-3 pb-0" tabIndex={-1} aria-hidden="true">
        <BlogCover category={a.category} className="aspect-[16/8] rounded-xl" />
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

export function CtaBand({ title = "Have a project in mind?", text = "Tell us what you sell and who you want to reach. We'll suggest a sensible next step — no pressure, no jargon." }: { title?: string; text?: string }) {
  return (
    <section className="py-12 md:py-16">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-sky px-8 py-10 md:px-14 md:py-12">
          <div className="absolute right-0 top-0 h-full w-1.5 bg-highlight" aria-hidden="true" />
          <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
              <p className="mt-4 max-w-xl text-muted-foreground">{text}</p>
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
