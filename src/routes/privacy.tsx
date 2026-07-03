import { createFileRoute } from "@tanstack/react-router";
import { COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Savitri Saw Mill" },
      {
        name: "description",
        content:
          "How Savitri Saw Mill collects, uses and protects information submitted through this website.",
      },
      { property: "og:title", content: "Privacy Policy — Savitri Saw Mill" },
      { property: "og:url", content: "/privacy" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <section className="bg-primary text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-x">
          <div className="eyebrow text-highlight">Legal</div>
          <h1 className="display-xl mt-6 text-white">Privacy Policy</h1>
          <p className="mt-6 max-w-2xl text-white/70">
            This page explains what information we collect through this website, how it is used, and
            the choices you have. This page is maintained by {COMPANY.name}.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x max-w-3xl prose-content">
          {SECTIONS.map((s) => (
            <div key={s.t} className="mb-12">
              <h2 className="display-md">{s.t}</h2>
              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                {s.p.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
          <p className="text-xs text-muted-foreground mt-16">
            Last updated: June 2026. For privacy questions, write to {COMPANY.email}.
          </p>
        </div>
      </section>
    </>
  );
}

const SECTIONS = [
  {
    t: "Information We Collect",
    p: [
      "We collect the information you choose to share with us through our enquiry form — typically your name, company, phone, email, requirement and message.",
      "We do not use third-party advertising or behavioural tracking cookies on this website.",
    ],
  },
  {
    t: "How We Use Information",
    p: [
      "Enquiry information is used exclusively to respond to your request, prepare a quote, and follow up on the conversation you initiated.",
      "We retain enquiry records for a reasonable period for business, accounting and reference purposes.",
    ],
  },
  {
    t: "Sharing",
    p: [
      "We do not sell or rent your information. We may share it with internal team members responsible for responding to your enquiry, and with logistics partners only when needed to fulfil an order.",
    ],
  },
  {
    t: "Security",
    p: [
      "We take reasonable technical and organisational measures to protect the information you share with us. No method of transmission is perfectly secure, but we work to keep risk to a minimum.",
    ],
  },
  {
    t: "Your Choices",
    p: [
      "You may request access, correction or deletion of the personal information we hold about you by writing to our email address above. We will respond within a reasonable timeframe.",
    ],
  },
];
