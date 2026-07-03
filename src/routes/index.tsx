import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Cog,
  Truck,
  Award,
  Hammer,
  TreePine,
  Factory,
  Building2,
  Sofa,
  Palette,
  Wrench,
  Landmark,
  Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-sawmill.jpg";
import { Reveal, Counter } from "@/components/site/Reveal";
import {
  COMPANY,
  STATS,
  PRODUCTS,
  SERVICES,
  WHY_US,
  PROCESS,
  INDUSTRIES,
  TESTIMONIALS,
} from "@/lib/site-data";
import facility from "@/assets/facility.jpg";
import worker from "@/assets/worker.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Savitri Saw Mill — Quality Timber. Precision Cutting. Trusted Manufacturing." },
      {
        name: "description",
        content:
          "Premium timber processing solutions for construction, furniture manufacturing and industrial applications. Trusted since 1987.",
      },
      { property: "og:title", content: "Savitri Saw Mill — Precision Timber Manufacturing" },
      {
        property: "og:description",
        content:
          "Bulk timber supply, custom cutting and industrial-grade wood processing. Pan-India delivery.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const serviceIcons = [Hammer, Truck, Cog, Factory, ShieldCheck, Award];
const industryIcons = [Building2, Sofa, Palette, Wrench, Landmark, ShieldCheck];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Industrial sawmill interior"
            width={1920}
            height={1280}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container-x flex min-h-screen flex-col justify-end pb-16 pt-32 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/70">
              <span className="h-px w-10 bg-highlight" />
              Est. {COMPANY.established} · Hyderabad, India
            </div>
            <h1 className="display-xl mt-8 text-white">
              Quality Timber.
              <br />
              Precision Cutting.
              <br />
              <span className="text-highlight">Trusted</span> Manufacturing.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75">
              Premium timber processing solutions for construction, furniture manufacturing and
              industrial applications — built on four decades of craft and modern engineering.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/products" className="btn-primary">
                View Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-ghost-light">
                Request a Quote
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-16 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 md:grid-cols-4 md:gap-10"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl text-white">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/55">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="bg-background py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <div className="eyebrow">01 — About</div>
            <h2 className="display-lg mt-6">
              Four decades of timber, engineered to a higher standard.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              Savitri Saw Mill was founded in {COMPANY.established} as a single-saw operation
              serving local builders. Today, we operate a fully integrated facility with modern band
              mills, kiln dryers and CNC profilers — processing over 120 m³ of timber every day for
              clients across India.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We exist for one reason: to deliver timber that arrives square, stable and on spec —
              every time. No surprises, no rework.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/about" className="btn-ghost-dark">
                Our Story <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="link-arrow">
                Capabilities <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="relative">
              <div className="overflow-hidden rounded-md grain">
                <img
                  src={facility}
                  alt="Savitri Saw Mill facility"
                  width={1920}
                  height={1080}
                  loading="lazy"
                  className="w-full object-cover aspect-[16/10]"
                />
              </div>
              <div className="absolute -bottom-8 -left-4 md:-left-8 max-w-xs bg-primary text-primary-foreground p-6 shadow-industrial">
                <div className="eyebrow text-highlight">Mission</div>
                <p className="mt-3 text-sm leading-relaxed">
                  To set the regional benchmark for precision, reliability and integrity in timber
                  manufacturing.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-muted py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <Reveal>
              <div className="eyebrow">02 — Products</div>
              <h2 className="display-lg mt-6 max-w-2xl">
                Timber, beams and custom profiles — milled with intent.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/products" className="link-arrow">
                All Products <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <article className="group h-full bg-card border border-border overflow-hidden hover:shadow-industrial transition-shadow">
                  <div className="overflow-hidden aspect-[4/3]">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-highlight">
                      {p.category}
                    </div>
                    <h3 className="mt-3 font-display text-2xl uppercase">{p.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.applications.slice(0, 3).map((a) => (
                        <span
                          key={a}
                          className="text-[10px] uppercase tracking-wider px-2 py-1 bg-muted border border-border text-muted-foreground"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                    <Link to="/products" className="link-arrow mt-6">
                      Learn More <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow">03 — Services</div>
            <h2 className="display-lg mt-6 max-w-3xl">
              End-to-end timber services for serious B2B clients.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border">
            {SERVICES.map((s, i) => {
              const Icon = serviceIcons[i % serviceIcons.length];
              return (
                <Reveal key={s.title} delay={i * 0.05}>
                  <div className="group h-full bg-background p-8 md:p-10 hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                    <Icon className="h-9 w-9 text-highlight" strokeWidth={1.5} />
                    <h3 className="mt-8 font-display text-2xl uppercase">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/70">
                      {s.description}
                    </p>
                    <div className="mt-8 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-muted-foreground group-hover:text-primary-foreground/60">
                      <span>0{i + 1}</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-primary text-primary-foreground py-24 md:py-32 grain">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="eyebrow text-highlight">04 — Why Choose Us</div>
            <h2 className="display-lg mt-6 text-white">Built on trust. Backed by craft.</h2>
            <p className="mt-6 text-primary-foreground/70 leading-relaxed">
              We don't compete on price alone. We compete on the quality you can feel, measure, and
              ship with confidence.
            </p>
          </Reveal>
          <div className="lg:col-span-8">
            <div className="space-y-px bg-white/10">
              {WHY_US.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.05}>
                  <div className="bg-primary p-8 md:p-10 grid md:grid-cols-12 gap-6 items-start">
                    <div className="md:col-span-1 font-display text-3xl text-highlight">
                      0{i + 1}
                    </div>
                    <h3 className="md:col-span-4 font-display text-2xl uppercase">{w.title}</h3>
                    <p className="md:col-span-7 text-primary-foreground/70 leading-relaxed">
                      {w.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-muted py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow">05 — Process</div>
            <h2 className="display-lg mt-6 max-w-3xl">
              From log to load — a six-stage manufacturing flow.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.05}>
                <div className="bg-background border border-border p-8 h-full">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-5xl text-highlight">{p.step}</span>
                    <div className="h-px flex-1 ml-4 bg-border" />
                  </div>
                  <h3 className="mt-6 font-display text-xl uppercase">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-background py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <Reveal>
              <div className="eyebrow">06 — Industries</div>
              <h2 className="display-lg mt-6 max-w-2xl">Trusted by industries that demand more.</h2>
            </Reveal>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-px bg-border md:grid-cols-3 border border-border">
            {INDUSTRIES.map((ind, i) => {
              const Icon = industryIcons[i % industryIcons.length];
              return (
                <Reveal key={ind} delay={i * 0.05}>
                  <div className="group bg-background p-8 md:p-10 flex flex-col items-start gap-6 hover:bg-muted transition-colors aspect-[4/3] justify-between">
                    <Icon className="h-10 w-10 text-foreground" strokeWidth={1.4} />
                    <div>
                      <div className="font-display text-xl uppercase">{ind}</div>
                      <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        Sector 0{i + 1}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-muted py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow">07 — Clients</div>
            <h2 className="display-lg mt-6 max-w-3xl">What our B2B partners say.</h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="h-full bg-background border border-border p-8 md:p-10 flex flex-col">
                  <Quote className="h-8 w-8 text-highlight" />
                  <blockquote className="mt-6 text-base leading-relaxed text-foreground flex-1">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-8 pt-6 border-t border-border">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">
                      {t.role}
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-primary text-white">
        <img
          src={worker}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        <div className="relative container-x py-24 md:py-32">
          <Reveal className="max-w-3xl">
            <div className="eyebrow text-highlight">Let's build</div>
            <h2 className="display-xl mt-6 text-white">
              Need high-quality timber for your next project?
            </h2>
            <p className="mt-8 text-lg text-white/75 max-w-xl">
              Send us your requirement. You'll hear back from our sales desk within one business day
              with a quote, lead time and sample availability.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`tel:${COMPANY.phone}`} className="btn-ghost-light">
                Call {COMPANY.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
