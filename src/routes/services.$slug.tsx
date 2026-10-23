import { ServiceVisual } from "@/components/site/ui";
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { getService } from "@/lib/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaBand, PrimaryLink, ServiceCard, WhatsAppButton } from "@/components/site/ui";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Service not found — Kwikdigi" }, { name: "robots", content: "noindex" }] };
    const s = loaderData.service;
    return {
      meta: [
        { title: `${s.name} — Kwikdigi Hyderabad` },
        { name: "description", content: s.description },
        { property: "og:title", content: `${s.name} — Kwikdigi` },
        { property: "og:description", content: s.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.name,
            description: s.description,
            areaServed: "Hyderabad, India",
            provider: { "@type": "ProfessionalService", name: "Kwikdigi", telephone: "+91-9849446927" },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
              { "@type": "ListItem", position: 3, name: s.name, item: `/services/${params.slug}` },
            ],
          }),
        },
      ],
    };
  },
  component: ServiceDetail,
});

const process = [
  ["Discover", "We learn about your business, audience, and goals."],
  ["Plan", "We agree on scope, priorities, and timelines."],
  ["Execute", "We deliver the agreed work and keep you updated."],
  ["Improve", "We review results and refine the approach."],
];

function ServiceDetail() {
  const { service: s } = Route.useLoaderData();
  const related = s.related.map((r) => services.find((x) => x.slug === r)!).filter(Boolean);
  return (
    <>
      <section className="border-b border-border bg-sky">
        <div className="container-page grid items-center gap-x-10 gap-y-8 py-12 md:py-16 lg:grid-cols-2">
          <div className="fade-up">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
              <Link to="/services" className="hover:text-brand">Services</Link> <span aria-hidden="true">/</span> {s.name}
            </nav>
            <p className="eyebrow mt-6">{s.name}</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">{s.heading}</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{s.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryLink to="/contact">{s.cta}</PrimaryLink>
              <WhatsAppButton />
            </div>
          </div>
          <ServiceVisual slug={s.slug} name={s.name} />
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-page grid gap-x-10 gap-y-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold md:text-3xl">What's included</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {s.includes.map((i) => (
                <li key={i} className="flex items-start gap-3 rounded-lg border border-border p-4 text-sm font-semibold text-navy">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-cream p-8">
            <h2 className="text-2xl font-extrabold md:text-3xl">How it helps</h2>
            <ul className="mt-6 space-y-4">
              {s.benefits.map((b) => (
                <li key={b} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" /><span>{b}</span></li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              We work from Ameerpet, Hyderabad, with businesses across the city and beyond — meetings can happen in person nearby, by phone, or online.
              Questions? Call or WhatsApp <a href="tel:+919849446927" className="font-bold text-brand hover:underline">+91 9849446927</a> or <Link to="/contact" className="font-bold text-brand hover:underline">send an enquiry</Link>.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">We don't promise guaranteed rankings, leads, or sales — we promise careful work and honest reporting.</p>
          </div>
        </div>
      </section>

      <section className="bg-sky py-12 md:py-16">
        <div className="container-page">
          <h2 className="text-2xl font-extrabold md:text-3xl">Our approach</h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(([t, d], i) => (
              <li key={t} className="rounded-xl bg-card p-6">
                <span className="text-sm font-extrabold text-primary">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-bold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-page grid gap-x-10 gap-y-8 lg:grid-cols-[1fr_1.5fr]">
          <h2 className="text-2xl font-extrabold md:text-3xl">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {s.faqs.map((f, i) => (
              <AccordionItem key={i} value={`f${i}`}>
                <AccordionTrigger className="text-left text-base font-bold text-navy">{f.q}</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="pb-0">
        <div className="container-page">
          <h2 className="text-2xl font-extrabold">Related services</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((r) => <ServiceCard key={r.slug} s={r} index={services.indexOf(r)} />)}
          </div>
        </div>
      </section>
      <CtaBand title={`Let's talk about ${s.name.replace(/ \(.*\)/, "")}`} />
    </>
  );
}
