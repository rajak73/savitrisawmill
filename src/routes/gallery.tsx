import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { GALLERY } from "@/lib/site-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Savitri Saw Mill Facility & Machinery" },
      { name: "description", content: "A visual tour of our facility, machinery, timber yard and finished products." },
      { property: "og:title", content: "Gallery — Savitri Saw Mill" },
      { property: "og:description", content: "Inside Savitri Saw Mill — facility, machinery and finished timber." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <section className="bg-primary text-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow text-highlight">Gallery</div>
            <h1 className="display-xl mt-6 text-white max-w-4xl">
              Inside the mill.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-white/70">
              The machinery, the timber, the people. A look inside the operation that turns
              raw logs into the components our clients build with.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {GALLERY.map((g, i) => (
              <Reveal key={i} delay={(i % 6) * 0.05}>
                <button
                  onClick={() => setActive(i)}
                  className="mb-4 block w-full overflow-hidden group cursor-zoom-in"
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ aspectRatio: `4 / ${g.h / 200}` }}
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/90 grid place-items-center p-4"
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              key={active}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={GALLERY[active].src}
              alt={GALLERY[active].alt}
              className="max-h-[90vh] max-w-[95vw] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
