import { createFileRoute } from "@tanstack/react-router";
import { contact } from "@/lib/site";
import { PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Kwikdigi" },
      { name: "description", content: "Basic terms for using the Kwikdigi website and engaging our digital marketing services." },
      { property: "og:title", content: "Terms of Service — Kwikdigi" },
      { property: "og:description", content: "Basic terms for using the Kwikdigi website." },
    ],
    links: [{ rel: "canonical", href: "/terms-of-service" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <section className="container-page prose-article max-w-3xl py-16">
        <h2>Use of this website</h2>
        <p>The content on this website is provided for general information about Kwikdigi and its services. It may be updated at any time without notice.</p>
        <h2>Services</h2>
        <p>Specific services, deliverables, timelines, and fees are agreed separately with each client before work begins. Nothing on this website forms a binding offer.</p>
        <h2>No guarantees</h2>
        <p>Digital marketing outcomes depend on many factors outside our control. We do not guarantee search rankings, leads, sales, or specific advertising results.</p>
        <h2>Intellectual property</h2>
        <p>Website text, design, and branding belong to Kwikdigi unless stated otherwise and may not be reused without permission.</p>
        <h2>Contact</h2>
        <p>Questions about these terms can be sent to <a className="font-bold text-brand" href={`mailto:${contact.email}`}>{contact.email}</a>.</p>
        <p className="text-sm text-muted-foreground">These starter terms should be reviewed before final publication.</p>
      </section>
    </>
  ),
});
