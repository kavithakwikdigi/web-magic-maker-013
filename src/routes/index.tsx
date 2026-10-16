import { createFileRoute, Link } from "@tanstack/react-router";
import { BarChart3, CheckCircle2, Compass, Globe2, MessageSquare, Palette, Search, Megaphone, Share2, Monitor } from "lucide-react";
import { images, services } from "@/lib/site";
import { CtaBand, PrimaryLink, SectionHead, ServiceCard, WhatsAppButton } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kwikdigi — Digital Marketing Agency in Hyderabad, India" },
      { name: "description", content: "Kwikdigi helps businesses build a stronger online presence through SEO, performance advertising, social media and beautiful websites." },
      { property: "og:title", content: "Kwikdigi — Digital Marketing Agency in Hyderabad" },
      { property: "og:description", content: "SEO, Google Ads, Meta Ads, social media marketing and websites for businesses in India and beyond." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Kwikdigi",
          telephone: "+91 9849446927",
          email: "kavitham6574@gmail.com",
          address: { "@type": "PostalAddress", addressLocality: "Ameerpet, Hyderabad", addressRegion: "Telangana", addressCountry: "IN" },
          sameAs: [
            "https://www.instagram.com/kwikdigiofficial/",
            "https://www.facebook.com/profile.php?id=61593538270069",
            "https://www.linkedin.com/in/kavitha-m-33a181430/",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const pillars = [
  { Icon: Search, title: "SEO", text: "Help people find you when they search." },
  { Icon: Megaphone, title: "Paid Ads", text: "Reach the right audience with a clear offer." },
  { Icon: Share2, title: "Social Media", text: "Keep your brand visible and familiar." },
  { Icon: Monitor, title: "Websites", text: "Make it easy for visitors to enquire." },
];

const why = [
  { Icon: Compass, title: "Clear priorities", text: "We focus on the work most likely to matter for your goals." },
  { Icon: Palette, title: "Polished creative", text: "Your website, ads and posts look and sound consistent." },
  { Icon: BarChart3, title: "Practical reporting", text: "We explain what changed, what we learned and what comes next." },
  { Icon: MessageSquare, title: "Direct contact", text: "You can speak with the people planning and doing the work." },
];

const steps = [
  { n: "01", t: "Discover", d: "Understand the business, audience, and goals." },
  { n: "02", t: "Plan", d: "Select suitable channels, messaging, and priorities." },
  { n: "03", t: "Execute", d: "Deliver the agreed campaigns, content, or website work." },
  { n: "04", t: "Improve", d: "Review available results and refine the strategy." },
];

const industries = ["Education and Training", "Healthcare and Professional Services", "IT and Technology", "E-commerce and Retail", "Startups and Small Businesses", "Real Estate and Local Businesses"];
const markets = ["India", "United States", "United Kingdom", "Canada", "Australia", "United Arab Emirates"];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream">
        <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1fr_1.05fr]">
          <div className="fade-up">
            <p className="eyebrow">Hyderabad-based · Serving India and international clients</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] md:text-6xl">
              Digital marketing that helps your business <span className="relative whitespace-nowrap text-brand">get noticed<span className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-highlight" aria-hidden="true" /></span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              SEO, ads, social media and websites planned around your customers, your budget and the enquiries you want to receive.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryLink to="/contact">Discuss Your Project</PrimaryLink>
              <Link to="/services" className="inline-flex items-center rounded-full border border-navy/20 bg-background px-6 py-3.5 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:border-brand hover:text-brand">
                Explore Our Services
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-navy/80">
              {["No inflated promises", "Clear reporting", "Remote-friendly"].map((x) => <li key={x} className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-success" />{x}</li>)}
            </ul>
          </div>
          <div className="relative fade-up">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-success/15" aria-hidden="true" />
            <img
              src={images.heroWorkspace}
              alt="Bright workspace with a laptop showing a website layout, brand colour swatches and a notebook"
              width={1536}
              height={1024}
              fetchPriority="high"
              className="relative aspect-[4/3] w-full rounded-2xl object-cover object-right shadow-soft"
            />
            <div className="absolute -left-4 bottom-8 hidden rounded-xl bg-background p-4 shadow-soft sm:block">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Serving</p>
              <p className="mt-1 text-sm font-bold text-navy">India &amp; international markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works together */}
      <section className="py-20">
        <div className="container-page">
          <SectionHead center eyebrow="Connected marketing" title="Four channels, one clear direction" text="SEO, paid advertising, social media, and your website work best when they support each other." />
          <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-brand/0 via-brand/40 to-brand/0 lg:block" aria-hidden="true" />
            {pillars.map(({ Icon, title, text }) => (
              <div key={title} className="relative rounded-xl border border-border bg-card p-6 text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-sky text-brand ring-8 ring-background">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-sky py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow">Our approach</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">We start with your customers, not a channel.</h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              First, we learn who you serve, what they need to know and why they choose you. Then we choose the right mix of search, ads, content and website improvements.
            </p>
            <div className="mt-8"><PrimaryLink to="/about">More About Kwikdigi</PrimaryLink></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHead eyebrow="What we do" title="Services built around your growth" />
            <Link to="/services" className="text-sm font-bold text-brand hover:underline">View all services →</Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((s, i) => <ServiceCard key={s.slug} s={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-sky py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHead eyebrow="Why Kwikdigi" title="Thoughtful Strategy. Creative Execution." />
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">A small, focused team means you talk to the people doing the work — and every decision has a reason behind it.</p>
          </div>
          <div className="grid content-center gap-4 sm:grid-cols-2">
            {why.map(({ Icon, title, text }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-7">
                <Icon className="h-6 w-6 text-highlight" />
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container-page">
          <SectionHead center eyebrow="How we work" title="Our Working Process" />
          <ol className="relative mt-14 grid gap-10 lg:grid-cols-4 lg:gap-6">
            <div className="absolute left-6 top-0 h-full w-px bg-border lg:left-0 lg:top-6 lg:h-px lg:w-full" aria-hidden="true" />
            {steps.map((s) => (
              <li key={s.n} className="relative flex gap-5 lg:block">
                <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground ring-8 ring-background">{s.n}</span>
                <div className="lg:mt-6">
                  <h3 className="text-xl font-bold">{s.t}</h3>
                  <p className="mt-2 text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Markets */}
      <section className="py-20">
        <div className="container-page">
          <SectionHead eyebrow="Industries & markets" title="Digital Solutions for Businesses Across Markets" text="We work from Hyderabad and take on projects remotely for businesses in these markets." />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl bg-card p-7 shadow-soft">
              <h3 className="flex items-center gap-2 font-bold"><BarChart3 className="h-5 w-5 text-brand" /> Industries we can support</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {industries.map((i) => <li key={i} className="flex gap-2 text-sm"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />{i}</li>)}
              </ul>
            </div>
            <div className="rounded-xl bg-card p-7 shadow-soft">
              <h3 className="flex items-center gap-2 font-bold"><Globe2 className="h-5 w-5 text-brand" /> Markets we work with</h3>
              <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {markets.map((m) => <li key={m} className="rounded-lg border border-border px-3 py-2.5 text-center text-sm font-semibold text-navy">{m}</li>)}
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <PrimaryLink to="/contact">Start a Conversation</PrimaryLink>
            <WhatsAppButton label="Ask on WhatsApp" />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
