import { createFileRoute, Link } from "@tanstack/react-router";
import { BarChart3, Compass, Globe2, MessageSquare, Palette, Search, Megaphone, Share2, Monitor } from "lucide-react";
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
  { Icon: Search, title: "SEO", text: "Be found when people search." },
  { Icon: Megaphone, title: "Paid Ads", text: "Reach chosen audiences quickly." },
  { Icon: Share2, title: "Social Media", text: "Stay visible and familiar." },
  { Icon: Monitor, title: "Websites", text: "Turn visits into enquiries." },
];

const why = [
  { Icon: Compass, title: "Strategic Thinking", text: "Start with business goals and audience needs." },
  { Icon: Palette, title: "Creative Communication", text: "Present your brand with consistent, professional content." },
  { Icon: BarChart3, title: "Data-Informed Improvements", text: "Use available performance data to identify opportunities." },
  { Icon: MessageSquare, title: "Clear Communication", text: "Keep deliverables, timelines, and expectations transparent." },
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
      <section className="relative overflow-hidden bg-background">
        <div className="container-page grid items-center gap-x-12 gap-y-8 py-12 md:py-16 lg:grid-cols-[1.05fr_1fr]">
          <div className="fade-up">
            <p className="eyebrow">Digital Marketing Agency | Hyderabad, India</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] md:text-6xl">
              Make Your Brand <span className="relative whitespace-nowrap text-brand">Stand Out<span className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-highlight" aria-hidden="true" /></span> Online.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Smart digital marketing, meaningful content, and high-performing websites to help your business reach the right audience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryLink to="/contact">Let's Discuss Your Project</PrimaryLink>
              <Link to="/services" className="inline-flex items-center rounded-full border border-navy/20 px-6 py-3.5 text-sm font-bold text-navy transition hover:border-brand hover:text-brand">
                Explore Our Services
              </Link>
            </div>
            <p className="mt-8 border-l-2 border-highlight pl-4 text-sm font-medium text-navy/80">
              Creative thinking. Practical strategy. Meaningful digital experiences.
            </p>
          </div>
          <div className="relative fade-up">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-highlight/15" aria-hidden="true" />
            <img
              src={images.heroTeam}
              alt="Marketing team planning a campaign together in a bright office"
              width={1280}
              height={1440}
              className="relative aspect-[4/4.2] w-full rounded-2xl object-cover shadow-soft"
            />
            <div className="absolute -left-4 bottom-8 hidden rounded-xl bg-background p-4 shadow-soft sm:block">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Serving</p>
              <p className="mt-1 text-sm font-bold text-navy">India &amp; international markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works together */}
      <section className="py-12 md:py-16">
        <div className="container-page">
          <SectionHead center eyebrow="Connected marketing" title="Four channels, one clear direction" text="SEO, paid advertising, social media, and your website work best when they support each other." />
          <div className="relative mt-8 grid md:mt-10 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
      <section className="bg-sky py-12 md:py-16">
        <div className="container-page grid items-center gap-x-12 gap-y-8 lg:grid-cols-2">
          <img src={images.planning} alt="Marketing strategist planning a campaign on a glass wall with a colleague" loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft" />
          <div>
            <p className="eyebrow">Our approach</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Marketing That Starts With Your Customers</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Before we touch a keyword or an ad, we learn who you serve and what makes people pick you. That shapes everything else — the search terms we target, the posts we write and the pages we build — so your message feels clear and consistent wherever people meet you.
            </p>
            <div className="mt-8"><PrimaryLink to="/about">More About Kwikdigi</PrimaryLink></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-16">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHead eyebrow="What we do" title="Services built around your growth" />
            <Link to="/services" className="text-sm font-bold text-brand hover:underline">View all services →</Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((s, i) => <ServiceCard key={s.slug} s={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-sky py-12 md:py-16">
        <div className="container-page grid items-center gap-x-12 gap-y-8 lg:grid-cols-[1fr_1.3fr]">
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
      <section className="py-12 md:py-16">
        <div className="container-page">
          <SectionHead center eyebrow="How we work" title="Our Working Process" />
          <ol className="relative mt-8 grid gap-8 md:mt-10 lg:grid-cols-4 lg:gap-6">
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
      <section className="py-12 md:py-16">
        <div className="container-page">
          <SectionHead eyebrow="Industries & markets" title="Digital Solutions for Businesses Across Markets" text="We work from Hyderabad and take on projects remotely for businesses in these markets." />
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
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
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryLink to="/contact">Start a Conversation</PrimaryLink>
            <WhatsAppButton label="Ask on WhatsApp" />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
