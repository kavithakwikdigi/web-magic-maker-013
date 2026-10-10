import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { articles, categories } from "@/lib/blog";
import { BlogCard, CtaBand, PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Digital Marketing Insights | Kwikdigi" },
      { name: "description", content: "Practical ideas and beginner-friendly guides on SEO, Google Ads, Meta Ads, social media, website design and digital strategy." },
      { property: "og:title", content: "Digital Insights for Smarter Growth — Kwikdigi Blog" },
      { property: "og:description", content: "Beginner-friendly digital marketing guides from Kwikdigi." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  const [cat, setCat] = useState<string>("All");
  const list = cat === "All" ? articles : articles.filter((a) => a.category === cat);
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Digital Insights for Smarter Growth"
        text="Explore practical ideas, beginner-friendly guides, and useful digital marketing insights to help your business make better online decisions."
      />
      <section className="py-16">
        <div className="container-page">
          <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
            {["All", ...categories].map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={cat === c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  cat === c ? "border-navy bg-navy text-navy-foreground" : "border-border text-navy hover:border-brand hover:text-brand"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          {list.length ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((a) => <BlogCard key={a.slug} a={a} />)}
            </div>
          ) : (
            <p className="mt-10 rounded-xl bg-sky p-8 text-center text-muted-foreground">New articles in this category are coming soon.</p>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
