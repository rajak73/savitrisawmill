import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import facility from "@/assets/facility.jpg";
import worker from "@/assets/worker.jpg";
import logs from "@/assets/logs.jpg";
import { COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Savitri Saw Mill" },
      { name: "description", content: "Four decades of timber craft. Our story, mission, values and the people behind Savitri Saw Mill." },
      { property: "og:title", content: "About Savitri Saw Mill" },
      { property: "og:description", content: "Our story, mission and manufacturing philosophy." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const VALUES = [
  { t: "Integrity", b: "We quote what we can deliver. Every cubic meter is traceable from log to dispatch." },
  { t: "Craft", b: "Our master sawyers have logged 20+ years on the floor. Tools change. Judgement compounds." },
  { t: "Precision", b: "Calibrated daily. Inspected at three stages. ±0.5 mm tolerance on custom cuts." },
  { t: "Reliability", b: "Lead times we honour. Dispatch slots we keep. Paperwork that's ready when you are." },
];

const TIMELINE = [
  { y: "1987", t: "Founded", b: "Single saw, two-person operation serving Nagpur builders." },
  { y: "1998", t: "First Kiln", b: "Installed our first kiln dryer — moisture-controlled stock becomes a regional differentiator." },
  { y: "2008", t: "Twin Band Mill", b: "Upgraded to twin band mills, tripling daily output capacity." },
  { y: "2016", t: "CNC Profiling", b: "Added CNC-assisted profiling for custom industrial contracts." },
  { y: "2021", t: "Export Grade", b: "ISPM-15 certification for heat-treated export packaging." },
  { y: "2025", t: "Today", b: "120 m³ daily output. 650+ active B2B accounts. Pan-India delivery." },
];

function About() {
  return (
    <>
      <section className="bg-primary text-white pt-32 pb-20 md:pt-40 md:pb-28 grain">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="eyebrow text-highlight">About</div>
            <h1 className="display-xl mt-6 text-white">
              Timber is a material.<br />
              Trust is the product.
            </h1>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5 lg:pt-8">
            <p className="text-lg leading-relaxed text-white/75">
              For nearly four decades, Savitri Saw Mill has supplied the contractors, architects
              and manufacturers who can't afford a wrong cut. This is who we are, what we
              believe, and how we got here.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="overflow-hidden">
              <img src={facility} alt="Facility" loading="lazy" className="w-full aspect-[4/5] object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:pt-8">
            <div className="eyebrow">Our Story</div>
            <h2 className="display-lg mt-6">From a single saw to a regional benchmark.</h2>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Savitri Saw Mill was started in 1987 by Mr. Rameshwar Saw — a master sawyer with
                a stubborn belief that timber should arrive ready to install. No warps. No
                rework. No excuses.
              </p>
              <p>
                That principle drove every upgrade since: the first kiln dryer in 1998, twin band
                mills in 2008, CNC profilers in 2016, and export-grade packaging in 2021.
              </p>
              <p>
                Today the company is run by the next generation, but the standard hasn't moved.
                We still measure twice. We still grade every log. And we still answer the phone.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted py-24 md:py-32">
        <div className="container-x grid gap-12 md:grid-cols-3">
          {[
            { t: "Vision", b: "To be the most trusted timber manufacturer in central India — known for precision, reliability and ethical sourcing." },
            { t: "Mission", b: "Engineer timber products that arrive square, stable and on spec — so our clients can build without compromise." },
            { t: "Philosophy", b: "Industry-grade machinery, generation-deep craft, and zero tolerance for shortcuts." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.08}>
              <div className="border-t-2 border-highlight pt-6">
                <div className="eyebrow">0{i + 1}</div>
                <h3 className="display-md mt-4">{c.t}</h3>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{c.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow">Core Values</div>
            <h2 className="display-lg mt-6 max-w-2xl">Four words we test ourselves against, every day.</h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 border border-border">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.05}>
                <div className="bg-background p-10">
                  <div className="font-display text-4xl text-highlight">0{i + 1}</div>
                  <h3 className="display-md mt-6">{v.t}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{v.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow text-highlight">Timeline</div>
            <h2 className="display-lg mt-6 text-white max-w-2xl">38 years. Six milestones.</h2>
          </Reveal>
          <div className="mt-16 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/15" />
            <div className="space-y-12">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.y} delay={i * 0.05}>
                  <div className={`grid md:grid-cols-2 gap-6 items-start ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                    <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"} relative`}>
                      <span className="absolute left-0 md:left-auto md:right-[-9px] top-1 grid h-4 w-4 md:right-auto place-items-center"
                            style={i % 2 ? { left: "-9px" } : undefined}>
                        <span className="h-3 w-3 rounded-full bg-highlight" />
                      </span>
                      <div className="font-display text-5xl text-highlight">{t.y}</div>
                      <h3 className="display-md mt-3 text-white">{t.t}</h3>
                    </div>
                    <div className={`pl-12 md:pl-12 ${i % 2 ? "md:pl-0 md:pr-12 md:text-right" : ""}`}>
                      <p className="text-white/70 leading-relaxed max-w-md">{t.b}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7 order-2 lg:order-1">
            <div className="eyebrow">Founder Message</div>
            <h2 className="display-lg mt-6">"We sell timber. But really, we sell trust."</h2>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                A builder who orders 50 cubic meters from us is not just buying wood. They're
                betting their schedule, their margin and their reputation on it arriving right.
              </p>
              <p>
                That's the responsibility we take seriously. It's why we calibrate machines daily,
                grade every log, and refuse to ship anything we wouldn't accept ourselves.
              </p>
              <p className="text-foreground font-semibold">— Vikram Saw, Managing Director</p>
            </div>
            <Link to="/contact" className="btn-primary mt-10">
              Talk to Our Team <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 order-1 lg:order-2">
            <img src={worker} alt="Founder" loading="lazy" className="w-full aspect-[4/5] object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container-x grid gap-8 md:grid-cols-3 items-center">
          <div className="md:col-span-2">
            <div className="eyebrow">Service Area</div>
            <h3 className="display-md mt-4">Pan-India delivery, headquartered in Nagpur.</h3>
          </div>
          <div className="text-sm text-muted-foreground">
            Primary catchment: Maharashtra, Madhya Pradesh, Chhattisgarh, Telangana.
            Bulk orders shipped nationwide via in-house fleet and verified logistics partners.
            Export packaging available on request from {COMPANY.address.split(",").slice(-3).join(", ")}.
          </div>
        </div>
        <div className="container-x mt-12">
          <img src={logs} alt="Timber yard" loading="lazy" className="w-full aspect-[21/9] object-cover" />
        </div>
      </section>
    </>
  );
}
