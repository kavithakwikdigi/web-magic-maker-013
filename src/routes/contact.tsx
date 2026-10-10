import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { contact, services } from "@/lib/site";
import { PageHero, WhatsAppButton } from "@/components/site/ui";
import { SocialLinks } from "@/components/site/SocialLinks";
import { WhatsAppIcon } from "@/components/site/icons";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Kwikdigi — Let's Talk About Your Project" },
      { name: "description", content: "Contact Kwikdigi in Ameerpet, Hyderabad. Call or WhatsApp +91 9849446927 or email kavitham6574@gmail.com." },
      { property: "og:title", content: "Contact Kwikdigi" },
      { property: "og:description", content: "Tell us about your business and digital goals. Call, WhatsApp, or email Kwikdigi." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const countries = ["India", "United States", "United Kingdom", "Canada", "Australia", "United Arab Emirates", "Other"];
type Fields = { name: string; business: string; email: string; phone: string; country: string; service: string; budget: string; details: string };
const empty: Fields = { name: "", business: "", email: "", phone: "", country: "India", service: "", budget: "", details: "" };

const field = "mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

function Contact() {
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [ready, setReady] = useState(false);
  const set = (k: keyof Fields) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });

  const message = () =>
    [
      "Hello Kwikdigi, I'd like to discuss a project.",
      `Name: ${f.name}`,
      f.business && `Business: ${f.business}`,
      `Email: ${f.email}`,
      `Phone: ${f.phone}`,
      `Country: ${f.country}`,
      `Service: ${f.service}`,
      f.budget && `Budget: ${f.budget}`,
      `Details: ${f.details}`,
    ].filter(Boolean).join("\n");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const er: typeof errors = {};
    if (!f.name.trim()) er.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) er.email = "Please enter a valid email address.";
    if (f.phone.replace(/\D/g, "").length < 7) er.phone = "Please enter a valid phone or WhatsApp number.";
    if (!f.service) er.service = "Please choose a service.";
    if (f.details.trim().length < 10) er.details = "Please share a few details about your project.";
    setErrors(er);
    setReady(Object.keys(er).length === 0);
  };

  const err = (k: keyof Fields) => errors[k] && <p id={`${k}-err`} className="mt-1 text-xs font-semibold text-destructive">{errors[k]}</p>;

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's Talk About Your Next Digital Project"
        text="Tell us about your business, your goals, and the digital challenges you want to solve. We'll use your enquiry to understand how we may be able to help."
      />
      <section className="py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <aside className="space-y-6">
            <div className="rounded-2xl bg-navy p-8 text-navy-foreground">
              <p className="text-xl font-extrabold">Kwikdigi</p>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-primary" />{contact.location}</li>
                <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-primary" /><span>Phone / WhatsApp: <a href={contact.tel} className="font-bold hover:text-primary">{contact.phone}</a></span></li>
                <li className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-primary" /><a href={`mailto:${contact.email}`} className="break-all font-bold hover:text-primary">{contact.email}</a></li>
              </ul>
              <SocialLinks variant="dark" className="mt-8" />
            </div>
            <div className="rounded-2xl border border-border p-6">
              <p className="font-bold text-navy">Prefer a quick chat?</p>
              <p className="mt-1 text-sm text-muted-foreground">Message us directly on WhatsApp.</p>
              <div className="mt-4"><WhatsAppButton /></div>
            </div>
          </aside>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-10">
            {ready ? (
              <div className="fade-up" role="status">
                <h2 className="text-2xl font-extrabold">Your enquiry is ready to send</h2>
                <p className="mt-3 text-muted-foreground">
                  Choose how you'd like to send it. Your details are pre-filled — just press send in WhatsApp or your email app.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={`${contact.whatsapp}?text=${encodeURIComponent(message())}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-bold text-navy-foreground">
                    <WhatsAppIcon className="h-5 w-5" /> Send via WhatsApp
                  </a>
                  <a href={`mailto:${contact.email}?subject=${encodeURIComponent(`Enquiry from ${f.name}`)}&body=${encodeURIComponent(message())}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground">
                    <Send className="h-4 w-4" /> Send via Email
                  </a>
                </div>
                <button type="button" onClick={() => setReady(false)} className="mt-6 text-sm font-semibold text-brand hover:underline">← Edit my details</button>
              </div>
            ) : (
              <form noValidate onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold text-navy">Full Name *
                  <input className={field} value={f.name} onChange={set("name")} autoComplete="name" aria-invalid={!!errors.name} aria-describedby="name-err" />{err("name")}
                </label>
                <label className="text-sm font-semibold text-navy">Business Name <span className="font-normal text-muted-foreground">(optional)</span>
                  <input className={field} value={f.business} onChange={set("business")} autoComplete="organization" />
                </label>
                <label className="text-sm font-semibold text-navy">Email Address *
                  <input type="email" className={field} value={f.email} onChange={set("email")} autoComplete="email" aria-invalid={!!errors.email} aria-describedby="email-err" />{err("email")}
                </label>
                <label className="text-sm font-semibold text-navy">WhatsApp or Phone Number *
                  <input type="tel" className={field} value={f.phone} onChange={set("phone")} autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby="phone-err" />{err("phone")}
                </label>
                <label className="text-sm font-semibold text-navy">Country *
                  <select className={field} value={f.country} onChange={set("country")}>
                    {countries.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </label>
                <label className="text-sm font-semibold text-navy">Service Required *
                  <select className={field} value={f.service} onChange={set("service")} aria-invalid={!!errors.service} aria-describedby="service-err">
                    <option value="">Select a service</option>
                    {services.map((s) => <option key={s.slug}>{s.name}</option>)}
                    <option>Not sure yet</option>
                  </select>{err("service")}
                </label>
                <label className="text-sm font-semibold text-navy sm:col-span-2">Estimated Budget <span className="font-normal text-muted-foreground">(optional)</span>
                  <input className={field} value={f.budget} onChange={set("budget")} placeholder="e.g. ₹25,000 per month" />
                </label>
                <label className="text-sm font-semibold text-navy sm:col-span-2">Project Details *
                  <textarea rows={5} className={field} value={f.details} onChange={set("details")} aria-invalid={!!errors.details} aria-describedby="details-err" />{err("details")}
                </label>
                <div className="sm:col-span-2">
                  <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-soft">
                    Continue <Send className="h-4 w-4" />
                  </button>
                  <p className="mt-3 text-xs text-muted-foreground">After checking your details, you'll send your enquiry through WhatsApp or email.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
