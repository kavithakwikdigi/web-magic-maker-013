import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, Eye, BookOpen, Target, HeartHandshake } from "lucide-react";
import { images } from "@/lib/site";
import { CtaBand, PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kwikdigi — Digital Marketing Agency, Hyderabad" },
      { name: "description", content: "Meet Kwikdigi, a Hyderabad digital marketing agency combining creative thinking and practical execution to help businesses grow online." },
      { property: "og:title", content: "About Kwikdigi — Your Partner in Digital Growth" },
      { property: "og:description", content: "Our mission, approach and values as a digital marketing agency in Hyderabad, India." },
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

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="Meet Kwikdigi — Your Partner in Digital Growth" />
      <section className="py-20">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-navy">Kwikdigi is a digital marketing agency based in Hyderabad, India.</strong> We help businesses strengthen their digital presence through search engine optimization, paid advertising, social media marketing, and website design.
            </p>
            <p>
              Our approach combines creative thinking, practical execution, and a focus on business objectives. We believe good digital marketing should be clear, relevant, measurable, and aligned with the needs of each business.
            </p>
          </div>
          <img src={images.meeting} alt="Professionals discussing a marketing plan around a meeting table" width={1280} height={960} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft" />
        </div>
      </section>

      <section className="bg-sky py-20">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-card p-9 shadow-soft">
            <p className="eyebrow">Our mission</p>
            <p className="mt-4 text-2xl font-bold leading-snug text-navy">
              To help businesses build a meaningful and effective digital presence through creative and practical marketing solutions.
            </p>
          </div>
          <div className="rounded-2xl bg-navy p-9">
            <p className="eyebrow text-primary">Our approach</p>
            <p className="mt-4 text-2xl font-bold leading-snug text-navy-foreground">
              Understand the audience, plan the strategy, create the experience, and improve based on performance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">Our values</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">What guides our work</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {values.map(({ Icon, t }) => (
                <li key={t} className="flex items-center gap-3 rounded-xl border border-border p-4 font-semibold text-navy">
                  <Icon className="h-5 w-5 shrink-0 text-primary" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
