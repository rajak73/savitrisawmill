import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PRODUCTS } from "@/lib/site-data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Timber, Beams & Custom Cuts | Savitri Saw Mill" },
      { name: "description", content: "Explore our full range — premium hardwood, softwood, structural beams, planks and custom-milled industrial timber." },
      { property: "og:title", content: "Timber Products — Savitri Saw Mill" },
      { property: "og:description", content: "Premium timber, beams, planks and custom-cut profiles for B2B clients." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

const CATEGORIES = ["All", "Timber", "Beams", "Planks", "Custom", "Industrial"] as const;

function Products() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCat = cat === "All" || p.category === cat;
      const matchQ = !q || (p.name + p.description).toLowerCase().includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [cat, q]);

  return (
    <>
      <section className="bg-primary text-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow text-highlight">Products</div>
            <h1 className="display-xl mt-6 text-white max-w-4xl">
              Timber engineered for every application.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-white/70">
              From structural beams to fine furniture-grade hardwood — every product
              graded, dried and milled to spec.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 sticky top-16 md:top-20 z-30 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container-x flex flex-col md:flex-row md:items-center gap-4 justify-between">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] border transition-colors ${
                  cat === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products"
              className="w-full pl-10 pr-3 py-2.5 text-sm border border-border bg-background focus:outline-none focus:border-highlight"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">No products match your search.</p>
          ) : (
            <div className="grid gap-12">
              {filtered.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.05}>
                  <article className={`grid gap-8 lg:grid-cols-12 lg:gap-12 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                    <div className="lg:col-span-7 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="lg:col-span-5">
                      <div className="eyebrow">{p.category}</div>
                      <h2 className="display-lg mt-4">{p.name}</h2>
                      <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                        {p.description}
                      </p>

                      <div className="mt-8">
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground mb-3">
                          Applications
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {p.applications.map((a) => (
                            <span key={a} className="text-[11px] uppercase tracking-wider px-2.5 py-1 bg-muted border border-border">
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>

                      <dl className="mt-8 grid grid-cols-2 gap-px bg-border border border-border">
                        {p.specs.map((s) => (
                          <div key={s.label} className="bg-background p-4">
                            <dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                              {s.label}
                            </dt>
                            <dd className="mt-1 font-semibold text-sm">{s.value}</dd>
                          </div>
                        ))}
                      </dl>

                      <Link to="/contact" className="btn-primary mt-8">
                        Enquire Now <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="display-lg max-w-3xl mx-auto">
              Can't find what you need? We probably mill it.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              Custom species, sizes and treatments on request. Tell us your specification.
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              Request Custom Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
