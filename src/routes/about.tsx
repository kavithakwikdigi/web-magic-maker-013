import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, Eye, BookOpen, Target, HeartHandshake, MessagesSquare, Route as RouteIcon, PenTool, TrendingUp, Store, Rocket, GraduationCap, Stethoscope, Briefcase } from "lucide-react";
import { images } from "@/lib/site";
import { CtaBand, PageHero, SectionHead } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kwikdigi — Digital Marketing Agency, Hyderabad" },
      { name: "description", content: "Meet Kwikdigi, a Hyderabad digital marketing agency combining creative thinking and practical execution to help businesses grow online." },
      { property: "og:title", content: "About Kwikdigi — Your Partner in Digital Growth" },
      { property: "og:description", content: "Our mission, approach and values as a digital marketing agency in Hyderabad, India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { Icon: Lightbulb, t: "Creativity" },
  { Icon: Eye, t: "Transparency" },
  { Icon: BookOpen, t: "Continuous learning" },
  { Icon: Target, t: "Thoughtful execution" },
  { Icon: HeartHandshake, t: "Customer-focused communication" },
];

const steps = [
  { Icon: MessagesSquare, t: "Listen first", d: "We learn about your business, your customers and what a good result looks like for you." },
  { Icon: RouteIcon, t: "Plan the strategy", d: "We choose the channels that fit your goals and budget, and agree on a clear plan before any work begins." },
  { Icon: PenTool, t: "Create and launch", d: "We design, write and build — pages, ads, content — and keep you involved at every step." },
  { Icon: TrendingUp, t: "Measure and improve", d: "We watch what the data says, explain it in plain language, and keep improving what works." },
];

const audiences = [
  { Icon: Store, t: "Small businesses", d: "Local shops and services that want to be easier to find and easier to choose." },
  { Icon: Rocket, t: "Startups", d: "New brands that need a clear online presence without wasting budget." },
  { Icon: GraduationCap, t: "Training institutes", d: "Coaching centres and institutes that want a steady flow of genuine enquiries." },
  { Icon: Stethoscope, t: "Clinics", d: "Healthcare practices that need trust-building content and local visibility." },
  { Icon: Briefcase, t: "Service brands", d: "Consultants and professional services that win work through credibility." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="A Hyderabad marketing studio that keeps things clear and practical" text="We plan, create and manage marketing for businesses that want to be easier to find and easier to choose." />
      <section className="py-12 md:py-16">
        <div className="container-page grid items-start gap-x-12 gap-y-8 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-navy">Kwikdigi is a digital marketing agency in Ameerpet, Hyderabad.</strong> We work with small businesses, startups, training institutes, clinics and service brands on SEO, Google and Meta ads, social media and websites.
            </p>
            <p>
              We start by listening — who your customers are, what they ask before buying, and what a good result looks like for you. Then we pick the few channels that fit, do the work well, and explain what we see in plain language.
            </p>
          </div>
          <img src={images.meeting} alt="Professionals discussing a marketing plan around a meeting table" width={1280} height={960} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft" />
        </div>
      </section>

      <section className="bg-sky py-12 md:py-16">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-card p-9 shadow-soft">
            <p className="eyebrow">Our mission</p>
            <p className="mt-4 text-2xl font-bold leading-snug text-navy">
              To help businesses build a meaningful and effective digital presence through creative and practical marketing solutions.
            </p>
          </div>
          <div className="rounded-2xl bg-primary p-9">
            <p className="eyebrow text-highlight">Our approach</p>
            <p className="mt-4 text-2xl font-bold leading-snug text-primary-foreground">
              Understand the audience, plan the strategy, create the experience, and improve based on performance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-page ">
          <div className="max-w-4xl">
            <p className="eyebrow">Our values</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">What guides our work</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {values.map(({ Icon, t }) => (
                <li key={t} className="flex items-center gap-3 rounded-xl border border-border p-4 font-semibold text-navy">
                  <Icon className="h-5 w-5 shrink-0 text-primary" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-sky py-12 md:py-16">
        <div className="container-page">
          <SectionHead eyebrow="How we work" title="A simple, honest process" text="No jargon, no surprises. Every project follows the same four steps." />
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ Icon, t, d }, i) => (
              <li key={t} className="relative rounded-2xl bg-card p-6 shadow-soft">
                <span className="absolute right-5 top-5 text-3xl font-extrabold text-highlight/40">{String(i + 1).padStart(2, "0")}</span>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-page">
          <SectionHead eyebrow="Who we work with" title="Businesses we understand well" text="We focus on the kinds of businesses we know how to help — mostly in Hyderabad and across India, and also in the US, UK, Canada, Australia and the UAE." />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map(({ Icon, t, d }) => (
              <li key={t} className="flex items-start gap-4 rounded-2xl border border-border p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-highlight/10 text-highlight">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-navy">{t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
