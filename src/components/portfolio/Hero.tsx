import { useEffect, useState } from "react";
import portrait from "@/assets/pranay.jpg";
import { Metric, TerminalWindow } from "./primitives";

const SCRIPT: { cmd: string; out: string[] }[] = [
  {
    cmd: "whoami",
    out: ["pranay.karakoti", "computer_science @ uic", "systems + ai infrastructure"],
  },
  {
    cmd: "focus --current",
    out: ["llm-serving", "distributed-systems", "backend-engineering", "developer-tooling"],
  },
  { cmd: "status", out: ["OPEN_TO_2027_NEW_GRAD_ROLES"] },
];

export function Hero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStep(SCRIPT.length);
      return;
    }
    const timers = SCRIPT.map((_, i) => window.setTimeout(() => setStep(i + 1), 450 + i * 700));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pt-16 pb-14 md:px-8 md:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="min-w-0">
            <p className="label-mono">Chicago, IL · B.S. Computer Science · UIC 2027</p>
            <h1 className="mt-4 max-w-xl text-4xl leading-[1.08] font-semibold tracking-tight text-balance md:text-5xl">
              Building the systems underneath the application layer.
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Pranay is a Computer Science student at the University of Illinois Chicago focused on
              backend engineering, LLM infrastructure, distributed systems, and developer tooling.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-md bg-primary px-4 py-2.5 font-mono text-xs tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
              >
                view_projects
              </a>
              <a
                href="#contact"
                className="rounded-md border border-border px-4 py-2.5 font-mono text-xs tracking-wide transition-colors hover:border-accent hover:text-accent"
              >
                get_in_touch
              </a>
            </div>
          </div>

          <div className="relative min-w-0">
            <TerminalWindow title="pranay@chicago:~/portfolio">
              <pre className="font-mono text-[12.5px] leading-6 text-terminal-foreground md:text-[13px]">
                {SCRIPT.slice(0, step).map((b, i) => (
                  <span key={b.cmd} className="rise-in block">
                    <span className="text-term-green">$ </span>
                    <span>{b.cmd}</span>
                    {"\n"}
                    {b.out.map((line) => (
                      <span key={line} className="block text-terminal-muted">
                        {line}
                      </span>
                    ))}
                    {i < SCRIPT.length - 1 && "\n"}
                  </span>
                ))}
                <span className="text-term-green">$ </span>
                <span className="caret" aria-hidden="true" />
              </pre>
            </TerminalWindow>

            <div className="mt-5 flex items-center gap-5 rounded-xl border border-border bg-card p-4 shadow-sm md:gap-6 md:p-5">
              <img
                src={portrait}
                alt="Portrait of Pranay Karakoti"
                width={816}
                height={816}
                className="size-32 rounded-full border border-border object-cover md:size-48"
              />
              <div className="min-w-0">
                <p className="font-mono text-sm md:text-base">Pranay Karakoti</p>
                <p className="label-mono mt-1 normal-case">
                  Back-End AI Engineering Intern @ FlyRank AI
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
          <Metric value="2.06×" label="batching throughput" />
          <Metric value="60%" label="lower short-req latency" />
          <Metric value="236ms" label="p99 scheduling drift" />
          <Metric value="0" label="lost jobs under failure" animate={false} />
          <Metric value="0.876" label="validation PR-AUC" />
          <Metric value="4.3×" label="retrieval speedup" />
        </div>
      </div>
    </section>
  );
}
