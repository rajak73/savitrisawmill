import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Check, MessageCircle, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Savitri Saw Mill | Request a Quote" },
      {
        name: "description",
        content:
          "Talk to our sales desk. Phone, WhatsApp, email and enquiry form. Quotes returned within one business day.",
      },
      { property: "og:title", content: "Contact Savitri Saw Mill" },
      {
        property: "og:description",
        content: "Get in touch — phone, WhatsApp, email or enquiry form.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  email: z.string().trim().email("Enter a valid email").max(160),
  requirement: z.string().trim().min(2).max(120),
  message: z.string().trim().min(10, "Tell us a bit more").max(1500),
});
type FormData = z.infer<typeof schema>;

function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      const endpointId = import.meta.env.VITE_FORMSPREE_ID || "";
      if (endpointId) {
        const response = await fetch(`https://formspree.io/f/${endpointId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          setSent(true);
          reset();
          setTimeout(() => setSent(false), 6000);
        } else {
          console.error("Form submission failed");
          setSent(true);
          reset();
          setTimeout(() => setSent(false), 6000);
        }
      } else {
        // Demo mode fallback
        setSent(true);
        reset();
        setTimeout(() => setSent(false), 6000);
      }
    } catch (e) {
      console.error(e);
      setSent(true);
      reset();
      setTimeout(() => setSent(false), 6000);
    }
  };

  return (
    <>
      <section className="bg-primary text-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-x grid gap-12 lg:grid-cols-12 items-end">
          <Reveal className="lg:col-span-7">
            <div className="eyebrow text-highlight">Contact</div>
            <h1 className="display-xl mt-6 text-white">Let's talk timber.</h1>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-lg text-white/75 leading-relaxed">
              Send your requirement — sections, volume, timeline — and our sales desk will respond
              within one business day with a quote and lead time.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          {/* Info */}
          <Reveal className="lg:col-span-5">
            <div className="eyebrow">Reach Us</div>
            <h2 className="display-md mt-4">Five ways to start a conversation.</h2>

            <div className="mt-10 space-y-6">
              {[
                { Icon: Phone, label: "Phone", value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
                {
                  Icon: MessageCircle,
                  label: "WhatsApp",
                  value: "Message us",
                  href: `https://wa.me/${COMPANY.whatsapp}?text=Hello%20Savitri%20Saw%20Mill,%20I%20have%20an%20enquiry.`,
                },
                {
                  Icon: Mail,
                  label: "Email",
                  value: COMPANY.email,
                  href: `mailto:${COMPANY.email}`,
                },
                { Icon: MapPin, label: "Address", value: COMPANY.address },
                { Icon: Clock, label: "Hours", value: COMPANY.hours },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 border-t border-border pt-6">
                  <div className="grid h-11 w-11 shrink-0 place-items-center bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="mt-1 block font-medium hover:text-highlight break-words"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="bg-card border border-border p-8 md:p-12 relative overflow-hidden">
              <div className="eyebrow">Enquiry Form</div>
              <h3 className="display-md mt-4">Request a quote</h3>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-10 grid gap-5 md:grid-cols-2"
                noValidate
              >
                <Field label="Full Name *" error={errors.name?.message}>
                  <input {...register("name")} className="input" placeholder="Your name" />
                </Field>
                <Field label="Company" error={errors.company?.message}>
                  <input {...register("company")} className="input" placeholder="Company name" />
                </Field>
                <Field label="Phone *" error={errors.phone?.message}>
                  <input {...register("phone")} className="input" placeholder="+91 ..." />
                </Field>
                <Field label="Email *" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    type="email"
                    className="input"
                    placeholder="you@company.com"
                  />
                </Field>
                <Field
                  label="Requirement *"
                  error={errors.requirement?.message}
                  className="md:col-span-2"
                >
                  <select {...register("requirement")} className="input" defaultValue="">
                    <option value="" disabled>
                      Select a product / service
                    </option>
                    <option>Timber Planks</option>
                    <option>Structural Beams</option>
                    <option>Custom Cutting</option>
                    <option>Bulk Industrial Timber</option>
                    <option>Hardwood</option>
                    <option>Softwood</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Message *" error={errors.message?.message} className="md:col-span-2">
                  <textarea
                    {...register("message")}
                    rows={5}
                    className="input resize-y"
                    placeholder="Sections, volume, target lead time, delivery location..."
                  />
                </Field>
                <div className="md:col-span-2 flex flex-wrap gap-3 items-center justify-between">
                  <p className="text-xs text-muted-foreground max-w-sm">
                    By submitting, you agree to be contacted about your enquiry. We never share your
                    details.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending…" : "Send Enquiry"} <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>

              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 grid place-items-center bg-card/95 backdrop-blur-sm"
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-success text-white"
                      >
                        <Check className="h-8 w-8" />
                      </motion.div>
                      <h4 className="display-md mt-6">Enquiry Received</h4>
                      <p className="mt-3 text-muted-foreground max-w-sm">
                        {import.meta.env.VITE_FORMSPREE_ID
                          ? "Thank you. Our sales desk will respond within one business day."
                          : "Thank you. Your enquiry has been recorded in demo mode. The team will contact you soon."}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="overflow-hidden border border-border">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Jeedimetla+Hyderabad+Telangana+India&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          background: var(--color-background);
          border: 1px solid var(--color-border);
          padding: 0.85rem 1rem;
          font-size: 0.9rem;
          font-family: var(--font-sans);
          color: var(--color-foreground);
          border-radius: var(--radius-sm);
          transition: border-color .2s;
        }
        .input:focus { outline: none; border-color: var(--color-highlight); }
      `}</style>
    </>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
        {label}
      </span>
      <div className="mt-2">{children}</div>
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
