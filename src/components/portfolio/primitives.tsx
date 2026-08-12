import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  index,
  title,
  children,
  className,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("border-t border-border py-20 md:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <header className="mb-10 flex items-center gap-3">
          <span className="label-mono">{index}</span>
          <h2 className="font-mono text-sm font-medium tracking-[0.14em] uppercase">{title}</h2>
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
        </header>
        {children}
      </div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-border bg-secondary px-2 py-1 font-mono text-[11px] text-muted-foreground">
      {children}
    </span>
  );
}

export function TerminalWindow({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-terminal shadow-[0_1px_2px_rgba(0,0,0,0.06),0_12px_32px_-16px_rgba(0,0,0,0.35)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-term-red" />
        <span className="size-2.5 rounded-full bg-term-yellow" />
        <span className="size-2.5 rounded-full bg-term-green" />
        <span className="ml-2 font-mono text-[11px] text-terminal-muted">{title}</span>
      </div>
      <div className="overflow-x-auto p-4 md:p-5">{children}</div>
    </div>
  );
}

export function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setSeen(true);
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);
  return { ref, seen };
}

export function Metric({
  value,
  label,
  animate = true,
}: {
  value: string;
  label: string;
  animate?: boolean;
}) {
  const { ref, seen } = useInView<HTMLDivElement>();
  const [display, setDisplay] = useState(animate ? null : value);

  useEffect(() => {
    if (!seen || !animate) return;
    const num = parseFloat(value.replace(/[^\d.]/g, ""));
    if (!isFinite(num) || num === 0) {
      setDisplay(value);
      return;
    }
    const decimals = (value.split(".")[1] ?? "").replace(/[^\d]/g, "").length;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 900);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value.replace(/[\d.]+/, (num * eased).toFixed(decimals)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, value, animate]);

  return (
    <div ref={ref} className="border-l border-border pl-4">
      <div className="font-mono text-3xl font-medium tracking-tight tabular-nums md:text-4xl">
        {display ?? value}
      </div>
      <div className="label-mono mt-2 leading-relaxed normal-case">{label}</div>
    </div>
  );
}
