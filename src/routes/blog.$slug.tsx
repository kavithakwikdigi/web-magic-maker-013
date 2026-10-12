import { BlogCover } from "@/components/site/ui";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { articles, getArticle } from "@/lib/blog";
import { getService } from "@/lib/site";
import { BlogCard, CtaBand } from "@/components/site/ui";
import { FacebookIcon, LinkedInIcon, WhatsAppIcon } from "@/components/site/icons";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Article not found — Kwikdigi" }, { name: "robots", content: "noindex" }] };
    const a = loaderData.article;
    return {
      meta: [
        { title: `${a.title} — Kwikdigi Blog` },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: a.title, author: { "@type": "Organization", name: "Kwikdigi" } }) }],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article: a } = Route.useLoaderData();
  const svc = getService(a.service);
  const related = articles.filter((x) => x.slug !== a.slug && x.category === a.category).concat(articles.filter((x) => x.slug !== a.slug && x.category !== a.category)).slice(0, 3);
  const url = typeof window !== "undefined" ? window.location.href : `https://www.kwikdigi.com/blog/${a.slug}`;
  const share = [
    { label: "Share on WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(`${a.title} ${url}`)}`, Icon: WhatsAppIcon },
    { label: "Share on LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, Icon: LinkedInIcon },
    { label: "Share on Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, Icon: FacebookIcon },
  ];
  return (
    <>
      <article>
        <header className="bg-sky">
          <div className="container-page max-w-3xl py-14 md:py-20">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
              <Link to="/blog" className="hover:text-brand">Blog</Link> <span aria-hidden="true">/</span> {a.category}
            </nav>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">{a.title}</h1>
            <p className="mt-4 text-sm text-muted-foreground">By the Kwikdigi team · {a.minutes} min read</p>
          </div>
        </header>
        <div className="container-page max-w-3xl">
          <BlogCover category={a.category} className="-mt-2 aspect-[16/7] md:mt-10" />
          <div className="prose-article mt-10">
            <p className="text-lg text-muted-foreground">{a.excerpt}</p>
            {a.sections.map((s) => (
              <section key={s.h}>
                <h2>{s.h}</h2>
                {s.p.filter(Boolean).map((p, i) => <p key={i}>{p}</p>)}
                {s.list && <ul>{s.list.map((l) => <li key={l}>{l}</li>)}</ul>}
              </section>
            ))}
          </div>
          {svc && (
            <aside className="mt-10 rounded-xl border-l-4 border-primary bg-cream p-6">
              <p className="font-bold text-navy">Want help with this?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Learn about our <Link to="/services/$slug" params={{ slug: svc.slug }} className="font-bold text-brand hover:underline">{svc.name}</Link> service or <Link to="/contact" className="font-bold text-brand hover:underline">get in touch</Link>.
              </p>
            </aside>
          )}
          <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
            <span className="text-sm font-bold text-navy">Share:</span>
            {share.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid h-9 w-9 place-items-center rounded-full bg-sky text-navy hover:bg-brand hover:text-navy-foreground">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </article>
      <section className="pt-16">
        <div className="container-page">
          <h2 className="text-2xl font-extrabold">Related articles</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">{related.map((r) => <BlogCard key={r.slug} a={r} />)}</div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
