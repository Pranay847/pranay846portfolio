import { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import resumeAsset from "@/assets/resume.pdf.asset.json";


const links = [
  { n: "01", id: "home", label: "Home" },
  { n: "02", id: "about", label: "About" },
  { n: "03", id: "experience", label: "Experience" },
  { n: "04", id: "projects", label: "Projects" },
  { n: "05", id: "skills", label: "Skills" },
  { n: "06", id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur transition-all",
        scrolled ? "py-2" : "py-3.5",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 md:px-8"
      >
        <a href="#home" className="min-w-0 font-mono text-sm font-medium tracking-tight">
          PRANAY<span className="text-accent">.K</span>
        </a>

        <ul className="col-start-2 hidden items-center gap-5 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="group font-mono text-[12px] text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="text-accent/70">{l.n}</span> / {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="col-start-2 flex shrink-0 items-center gap-3 lg:col-start-3">
          <span className="hidden items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 font-mono text-[10px] tracking-[0.1em] text-muted-foreground sm:inline-flex">
            <span className="size-1.5 rounded-full bg-term-green" aria-hidden="true" />
            OPEN TO 2027 NEW GRAD ROLES
          </span>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-md border border-border p-2 lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="mx-auto mt-3 grid w-full max-w-6xl gap-1 border-t border-border px-5 pt-3 lg:hidden">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2 font-mono text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                <span className="text-accent/70">{l.n}</span> / {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
