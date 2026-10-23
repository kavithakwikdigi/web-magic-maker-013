import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/lib/site";
import { CtaBand, PageHero, PrimaryLink, ServiceCard, WhatsAppButton } from "@/components/site/ui";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Digital Marketing Services — Kwikdigi" },
      { name: "description", content: "SEO, Google Ads, Meta Ads, social media, website design and development, content marketing, local SEO, landing pages and strategy." },
      { property: "og:title", content: "Digital Marketing Services — Kwikdigi" },
      { property: "og:description", content: "Ten connected services to help your business get found, get chosen, and grow online." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our services" title="Everything you need to grow online, planned around your goals" text="Choose a single service or combine several. Every engagement starts with understanding your business." />
      <section className="py-12 md:py-16">
        <div className="container-page">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => <ServiceCard key={s.slug} s={s} index={i} />)}
          </div>
          <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl bg-sky p-8 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-extrabold">Not sure which service fits?</h2>
              <p className="mt-2 text-muted-foreground">Send us a quick message and we'll help you figure out where to start.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <PrimaryLink to="/contact">Contact Us</PrimaryLink>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
