import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChevronDown, Hammer, Truck, Cog, Factory, ShieldCheck, Award } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES, FAQS } from "@/lib/site-data";
import sawblade from "@/assets/sawblade.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Custom Cutting, Bulk Supply & Industrial Processing" },
      { name: "description", content: "End-to-end timber services: custom cutting, bulk supply, precision milling, kiln drying, export-grade packaging and logistics." },
      { property: "og:title", content: "Services — Savitri Saw Mill" },
      { property: "og:description", content: "Custom wood cutting, bulk timber supply, precision milling and industrial processing." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const icons = [Hammer, Truck, Cog, Factory, ShieldCheck, Award];

function Services() {
  return (
    <>
      <section className="relative bg-primary text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <img src={sawblade} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/50" />
        <div className="relative container-x">
          <Reveal>
            <div className="eyebrow text-highlight">Services</div>
            <h1 className="display-xl mt-6 text-white max-w-4xl">
              Six capabilities. One reliable partner.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-white/75">
              Whether you need 50 m³ of structural beams or a precision-cut batch of furniture
              parts, our service offering covers the full timber lifecycle.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-px bg-border border border-border md:grid-cols-2">
          {SERVICES.map((s, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="bg-background p-10 md:p-14 h-full group hover:bg-muted transition-colors">
                  <div className="flex items-start justify-between">
                    <Icon className="h-10 w-10 text-highlight" strokeWidth={1.4} />
                    <span className="font-display text-3xl text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="display-md mt-10">{s.title}</h3>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <ul className="mt-8 space-y-2 text-sm text-foreground">
                    {[
                      "Dedicated account manager",
                      "Quality-checked output",
                      "Documented lead times",
                    ].map((x) => (
                      <li key={x} className="flex items-center gap-2">
                        <span className="h-1 w-4 bg-highlight" /> {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-muted py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="eyebrow">FAQ</div>
            <h2 className="display-lg mt-6">Common questions, straight answers.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Can't find your answer? Our sales desk replies within one business day.
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              Ask a Question <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="lg:col-span-7">
            {FAQS.map((f, i) => (
              <Faq key={f.q} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Faq({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-display text-lg md:text-xl uppercase">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-highlight transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-6" : "max-h-0"}`}>
        <p className="text-muted-foreground leading-relaxed">{a}</p>
      </div>
    </div>
  );
}
