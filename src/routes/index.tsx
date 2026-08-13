import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Flow, PipelineCurve } from "@/components/portfolio/Diagram";
import { Section, Tag, TerminalWindow } from "@/components/portfolio/primitives";

const TITLE = "Pranay Karakoti — Backend & AI Infrastructure Engineer";
const DESC =
  "Portfolio of Pranay Karakoti, CS student at UIC (2027) building LLM serving infrastructure, distributed systems, and developer tooling — with benchmarks.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function K({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <span className="text-syntax-key">{k}</span>
      <span className="text-terminal-muted">: </span>
      <span className="text-syntax-string">{v}</span>
    </div>
  );
}

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <Section id="about" index="02" title="ABOUT.md">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
              <p className="text-foreground">
                I&apos;m Pranay, a computer science student at the University of Illinois Chicago,
                graduating May 2027 and based in Chicago.
              </p>
              <p>
                Most of my work sits underneath the application layer: schedulers, allocators,
                provider seams, inference loops, and the infrastructure that keeps them honest. I
                care more about what happens at the queue and the cache than at the button.
              </p>
              <p className="border-l-2 border-accent pl-4 font-mono text-sm text-foreground">
                I tend to learn things by rebuilding them.
              </p>
              <p>
                microvllm started as a question about how batching actually works. Chronos started
                as a question about what happens when a worker dies mid-job. Both became real
                systems only after the naive versions broke in ways I could measure.
              </p>
              <p>
                So the rule I hold myself to is simple: measure instead of claiming, benchmark the
                system, test the failure modes, document the limitations, and keep the failed
                experiments in the repo. Real engineering evidence beats an inflated number.
              </p>
            </div>

            <TerminalWindow title="profile.yaml" className="self-start">
              <pre className="font-mono text-[12.5px] leading-6 text-terminal-foreground">
                <K k="name" v="Pranay Karakoti" />
                <K k="location" v="Chicago, IL" />
                <K k="education" v="University of Illinois Chicago" />
                <K k="degree" v="B.S. Computer Science" />
                <K k="graduation" v="May 2027" />
                {"\n"}
                <span className="text-syntax-key">focus</span>
                <span className="text-terminal-muted">:</span>
                {["LLM serving infrastructure", "distributed systems", "backend engineering", "developer tooling"].map(
                  (f) => (
                    <div key={f} className="text-syntax-string">
                      <span className="text-terminal-muted">{"  - "}</span>
                      {f}
                    </div>
                  ),
                )}
                {"\n"}
                <span className="text-syntax-key">currently</span>
                <span className="text-terminal-muted">:</span>
                <div className="pl-4">
                  <K k="role" v="Back-End AI Engineering Intern" />
                  <K k="company" v="FlyRank AI" />
                </div>
                {"\n"}
                <span className="text-syntax-key">open_to</span>
                <span className="text-terminal-muted">:</span>
                <div className="text-syntax-num">
                  <span className="text-terminal-muted">{"  - "}</span>2027 new grad roles
                </div>
              </pre>
            </TerminalWindow>
          </div>
        </Section>

        <Section id="experience" index="03" title="Experience">
          <div className="relative border-l border-border pl-6 md:pl-10">
            <span
              className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-baseline">
              <div className="min-w-0">
                <h3 className="text-xl font-medium tracking-tight">FlyRank AI</h3>
                <p className="mt-1 font-mono text-sm text-muted-foreground">
                  Back-End AI Engineering Intern
                </p>
              </div>
              <p className="label-mono md:text-right">Remote · Jul 2026 — Present</p>
            </div>

            <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-muted-foreground">
              {[
                "Designed a provider-agnostic LLM integration layer in Python supporting Groq, Gemini, and Ollama, where switching providers is a configuration change rather than an application-code change.",
                "Added Pydantic schema validation with single-retry fallback behavior, plus per-request cost telemetry on every call.",
                "Held zero failures across a 10-case reliability suite covering malformed and empty model responses.",
                "Migrated storage from in-memory state to PostgreSQL with SQLAlchemy without changing external behavior.",
                "Containerized the service with Docker so behavior is preserved across environments.",
              ].map((line) => (
                <li key={line} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Python", "FastAPI", "Pydantic", "SQLAlchemy", "PostgreSQL", "Docker", "Groq", "Gemini", "Ollama"].map(
                (t) => (
                  <Tag key={t}>{t}</Tag>
                ),
              )}
            </div>
          </div>
        </Section>

        <Projects />
        <Skills />

        <Section id="method" index="06" title="How I Build">
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Rebuild it", "I understand systems by rebuilding the important pieces myself."],
              ["02", "Measure it", "Benchmarks matter more than claims."],
              ["03", "Break it", "Chaos tests and failure cases expose what happy-path demos hide."],
              [
                "04",
                "Document the limits",
                "Every project should explain not only what works, but where it stops working.",
              ],
            ].map(([n, t, d]) => (
              <div key={n} className="bg-card p-5">
                <span className="label-mono text-accent">{n}</span>
                <h3 className="mt-3 font-mono text-base">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            <Flow
              nodes={["Question", "Naive Version", "Failure", "Measurement", "Iteration", "System"]}
            />
            <PipelineCurve />
          </div>
        </Section>

        <Section id="contact" index="07" title="Contact">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h3 className="max-w-md text-3xl font-semibold tracking-tight text-balance">
                Have a systems problem worth building?
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                Open to 2027 new grad roles in LLM serving infrastructure, distributed systems,
                backend engineering, and developer tooling.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="mailto:pranay846@outlook.com"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 font-mono text-xs text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Mail className="size-4" aria-hidden="true" /> pranay846@outlook.com
                </a>
                <a
                  href="https://github.com/Pranay847"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 font-mono text-xs transition-colors hover:border-accent hover:text-accent"
                >
                  <Github className="size-4" aria-hidden="true" /> GitHub
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
                <a
                  href="https://linkedin.com/in/pranay846"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 font-mono text-xs transition-colors hover:border-accent hover:text-accent"
                >
                  <Linkedin className="size-4" aria-hidden="true" /> LinkedIn
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>

              <dl className="mt-8 space-y-2 font-mono text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="size-3.5" aria-hidden="true" />
                  <dt className="sr-only">Location</dt>
                  <dd>Chicago, IL</dd>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="size-3.5" aria-hidden="true" />
                  <dt className="sr-only">Phone</dt>
                  <dd>
                    <a className="hover:text-accent" href="tel:+12242615932">
                      +1 (224) 261-5932
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <ContactForm />

          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:px-8">
          <div className="min-w-0 space-y-1 font-mono text-[11px] tracking-[0.12em] text-muted-foreground uppercase">
            <p className="text-foreground">Pranay Karakoti / Chicago, IL</p>
            <p>B.S. Computer Science / UIC / 2027</p>
            <p>Built with curiosity + too many benchmarks</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/Pranay847"
              target="_blank"
              rel="noreferrer noopener"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <Github className="size-4" />
            </a>
            <a
              href="https://linkedin.com/in/pranay846"
              target="_blank"
              rel="noreferrer noopener"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
