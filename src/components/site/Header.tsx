import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/kwik_logo.png.asset.json";
import { services } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <img src={logo.url} alt="" width={40} height={36} className="h-9 w-auto shrink-0" />
      <span className={`text-xl font-extrabold tracking-tight ${light ? "text-navy-foreground" : "text-navy"}`}>
        Kwik<span className="text-brand">digi</span>
      </span>
    </span>
  );
}

const navLink = "rounded-md px-3 py-2 text-[15px] font-semibold text-foreground/80 transition-colors hover:text-brand";
const active = { className: "text-brand" };

export function Header() {
  const [open, setOpen] = useState(false);
  const [dd, setDd] = useState(false);
  const [mobileSvc, setMobileSvc] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDd(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && (setDd(false), setOpen(false));
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const close = () => {
    setOpen(false);
    setDd(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <Link to="/" aria-label="Kwikdigi home" onClick={close}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          <Link to="/" className={navLink} activeProps={active} activeOptions={{ exact: true }}>Home</Link>
          <Link to="/about" className={navLink} activeProps={active}>About Us</Link>
          <div ref={ddRef} className="relative" onMouseEnter={() => setDd(true)} onMouseLeave={() => setDd(false)}>
            <button
              type="button"
              className={`${navLink} inline-flex items-center gap-1`}
              aria-expanded={dd}
              aria-haspopup="true"
              onClick={() => setDd((v) => !v)}
            >
              Services <ChevronDown className={`h-4 w-4 transition-transform ${dd ? "rotate-180" : ""}`} />
            </button>
            {dd && (
              <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-2">
                <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-popover p-3 shadow-soft fade-up">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      onClick={close}
                      className="rounded-lg px-3 py-2.5 transition-colors hover:bg-sky focus-visible:bg-sky"
                    >
                      <span className="block text-sm font-bold text-navy">{s.name}</span>
                      <span className="block text-xs text-muted-foreground">{s.short}</span>
                    </Link>
                  ))}
                  <Link to="/services" onClick={close} className="col-span-2 mt-1 rounded-lg bg-sky px-3 py-2 text-center text-sm font-bold text-brand">
                    View all services →
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link to="/blog" className={navLink} activeProps={active}>Blog</Link>
          <Link to="/contact" className={navLink} activeProps={active}>Contact Us</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-soft sm:inline-flex"
          >
            Let's Talk
          </Link>
          <button
            type="button"
            className="rounded-md p-2 text-navy lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-border bg-background lg:hidden">
          <div className="container-page flex flex-col py-3">
            <Link to="/" onClick={close} className="py-3 font-semibold text-navy">Home</Link>
            <Link to="/about" onClick={close} className="py-3 font-semibold text-navy">About Us</Link>
            <button
              type="button"
              className="flex items-center justify-between py-3 text-left font-semibold text-navy"
              aria-expanded={mobileSvc}
              onClick={() => setMobileSvc((v) => !v)}
            >
              Services <ChevronDown className={`h-4 w-4 transition-transform ${mobileSvc ? "rotate-180" : ""}`} />
            </button>
            {mobileSvc && (
              <div className="mb-2 flex flex-col border-l-2 border-brand/30 pl-4">
                <Link to="/services" onClick={close} className="py-2 text-sm font-bold text-brand">All services</Link>
                {services.map((s) => (
                  <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} onClick={close} className="py-2 text-sm text-foreground/80">
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
            <Link to="/blog" onClick={close} className="py-3 font-semibold text-navy">Blog</Link>
            <Link to="/contact" onClick={close} className="py-3 font-semibold text-navy">Contact Us</Link>
            <Link to="/contact" onClick={close} className="mt-2 rounded-full bg-primary py-3 text-center font-bold text-primary-foreground">
              Let's Talk
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
