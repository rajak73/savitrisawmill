import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { COMPANY, NAV, PRODUCTS, SERVICES } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center bg-highlight text-white font-display text-xl">
                S
              </span>
              <div>
                <div className="font-display text-xl uppercase tracking-wider">{COMPANY.name}</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-primary-foreground/60">
                  Precision Timber Manufacturing
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/70">
              A trusted name in timber processing since {COMPANY.established}. Serving construction,
              furniture, interior design and industrial clients with precision-cut wood products and
              reliable bulk supply.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-white"
              >
                <Phone className="h-4 w-4 text-highlight" /> {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-white"
              >
                <Mail className="h-4 w-4 text-highlight" /> {COMPANY.email}
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 text-highlight shrink-0" />
                <span>{COMPANY.address}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-highlight">Navigate</div>
            <ul className="mt-5 space-y-2.5 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-primary-foreground/70 hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-highlight">Products</div>
            <ul className="mt-5 space-y-2.5 text-sm">
              {PRODUCTS.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link to="/products" className="text-primary-foreground/70 hover:text-white">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-highlight">Services</div>
            <ul className="mt-5 space-y-2.5 text-sm">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.title} className="text-primary-foreground/70">
                  {s.title}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="link-arrow mt-8 text-primary-foreground hover:text-highlight"
            >
              Request a Quote <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="hairline mt-16 opacity-30" />
        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-primary-foreground/60">
          <div>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span>GST · 27ABCDE1234F1Z5</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
