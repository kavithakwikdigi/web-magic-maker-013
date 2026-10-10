import { contact } from "@/lib/site";
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from "./icons";

const items = [
  { href: contact.instagram, label: "Kwikdigi on Instagram", Icon: InstagramIcon },
  { href: contact.facebook, label: "Kwikdigi on Facebook", Icon: FacebookIcon },
  { href: contact.linkedin, label: "Kwikdigi on LinkedIn", Icon: LinkedInIcon },
  { href: contact.whatsappDefault, label: "Chat with Kwikdigi on WhatsApp", Icon: WhatsAppIcon },
];

export function SocialLinks({ variant = "light", className = "" }: { variant?: "light" | "dark"; className?: string }) {
  const style =
    variant === "dark"
      ? "bg-navy-foreground/10 text-navy-foreground hover:bg-primary hover:text-primary-foreground"
      : "bg-sky text-navy hover:bg-brand hover:text-navy-foreground";
  return (
    <ul className={`flex gap-2.5 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`grid h-10 w-10 place-items-center rounded-full transition-colors ${style}`}
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
