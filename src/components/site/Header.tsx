import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV, COMPANY } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="grid h-9 w-9 place-items-center bg-primary text-primary-foreground font-display text-lg leading-none">
            S
          </span>
          <span className="flex flex-col leading-tight">
            <span
              className={`font-display text-base uppercase tracking-wider transition-colors ${
                scrolled
                  ? "text-foreground"
                  : "bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent"
              }`}
            >
              {COMPANY.short}
            </span>
            <span
              className={`text-[10px] uppercase tracking-[0.22em] transition-colors ${
                scrolled ? "text-foreground/70" : "text-amber-200/70"
              }`}
            >
              Saw Mill · Est. {COMPANY.established}
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors data-[status=active]:text-foreground relative py-1"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="btn-primary hidden md:inline-flex">
            Request Quote <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden grid h-10 w-10 place-items-center border border-border rounded-md"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <div className="container-x py-6 flex flex-col gap-1">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  className="py-3 text-sm font-semibold uppercase tracking-[0.18em] border-b border-border data-[status=active]:text-highlight"
                >
                  {n.label}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary mt-4 w-full">
                Request Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
