import { createFileRoute } from "@tanstack/react-router";
import { contact } from "@/lib/site";
import { PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Kwikdigi" },
      { name: "description", content: "How Kwikdigi collects, uses and protects information shared through this website." },
      { property: "og:title", content: "Privacy Policy — Kwikdigi" },
      { property: "og:description", content: "How Kwikdigi handles information shared through this website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="container-page prose-article max-w-3xl py-12 md:py-16 [&>h2:first-child]:mt-0">
        <h2>Information you share</h2>
        <p>When you contact Kwikdigi by phone, WhatsApp, email, or through our enquiry form, you may share details such as your name, business name, email address, phone number, country, and project information.</p>
        <h2>How we use it</h2>
        <p>We use this information only to respond to your enquiry, discuss potential services, and communicate about agreed work. We do not sell your personal information.</p>
        <h2>Third-party services</h2>
        <p>Our enquiry form passes your details to WhatsApp or your email app, which are governed by their own privacy policies. Links to social platforms such as Instagram, Facebook, and LinkedIn are also subject to those platforms' policies.</p>
        <h2>Your choices</h2>
        <p>You can ask us to update or delete information you've shared by contacting us at <a className="font-bold text-brand" href={`mailto:${contact.email}`}>{contact.email}</a>.</p>
        <p className="text-sm text-muted-foreground">This starter policy should be reviewed before final publication.</p>
      </section>
    </>
  ),
});
