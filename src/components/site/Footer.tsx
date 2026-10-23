import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, services } from "@/lib/site";
import { Logo } from "./Header";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-page grid gap-x-10 gap-y-8 py-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.2fr_1fr]">
        <div>
          <Link to="/" aria-label="Kwikdigi home" className="inline-flex rounded-lg bg-background px-3 py-2">
            <Logo />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-foreground/75">
            A digital marketing agency in Hyderabad, India, helping businesses grow through SEO, advertising, social media, and websites.
          </p>
          <SocialLinks variant="dark" className="mt-6" />
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-highlight">Company</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/" className="text-navy-foreground/80 hover:text-highlight">Home</Link></li>
            <li><Link to="/about" className="text-navy-foreground/80 hover:text-highlight">About Us</Link></li>
            <li><Link to="/services" className="text-navy-foreground/80 hover:text-highlight">Services</Link></li>
            <li><Link to="/blog" className="text-navy-foreground/80 hover:text-highlight">Blog</Link></li>
            <li><Link to="/contact" className="text-navy-foreground/80 hover:text-highlight">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-highlight">Services</h2>
          <ul className="mt-4 grid gap-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="text-navy-foreground/80 hover:text-highlight">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-highlight">Get in touch</h2>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-highlight" /><a href={contact.tel} className="hover:text-highlight">{contact.phone}</a></li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-highlight" /><a href={`mailto:${contact.email}`} className="break-all hover:text-highlight">{contact.email}</a></li>
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-highlight" /><span className="text-navy-foreground/80">Hyderabad, India</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Kwikdigi. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-highlight">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-highlight">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
