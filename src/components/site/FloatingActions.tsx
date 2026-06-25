import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/site-data";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-highlight"
    />
  );
}

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-industrial hover:bg-secondary transition-colors"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      <a
        href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%20Savitri%20Saw%20Mill%2C%20I%20would%20like%20a%20quote.`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-success text-white shadow-industrial hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
