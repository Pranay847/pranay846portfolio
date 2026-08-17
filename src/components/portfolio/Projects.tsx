import { type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Section, Tag } from "./primitives";
import { ChaosDiagram, Flow, GraphDiagram, KvBlocks, PrCurve } from "./Diagram";

type Project = {
  id: string;
  name: string;
  tagline: string;
  platform?: string;
  dots?: boolean;
  visual: ReactNode;
  tech: string[];
  metrics: [string, string][];
  body: string;
  note?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    id: "01",
    name: "microvllm",
    repo: "microvllm",
    tagline: "A miniature LLM inference server in C++20 with production-style serving techniques.",
    dots: true,
    platform: "Linux / macOS",
    visual: (
      <div className="space-y-2">
        <Flow
          nodes={[
            "Requests",
            "Admission Control",
            "Scheduler",
            "Continuous Batching",
            "KV Cache Allocator",
            "Llama.cpp",
          ]}
        />
        <KvBlocks />
      </div>
    ),
    tech: ["C++20", "Llama.cpp", "CMake", "ThreadSanitizer", "GoogleTest"],
    metrics: [
      ["2.06×", "throughput @ batch 16"],
      ["60%", "lower short-req latency"],
      ["9.9s → 4.4s", "repeated-prompt runtime"],
      ["124", "tests"],
      ["25×", "CI TSan runs"],
    ],
    body: "Continuous batching, chunked prefill, block-based KV-cache allocation, admission control, and prefix sharing. Llama.cpp handles matrix operations; the queue, scheduler, cache accounting, and serving loop are original.",
    note: "Batching raised throughput until the workload became bandwidth-bound — past that point larger batches stopped paying. The benchmark suite reports the ceiling instead of hiding it.",
  },
  {
    id: "02",
    name: "Chronos",
    repo: "chronos-scheduler",
    tagline: "Leaderless distributed job and webhook scheduler on Java 21, Spring Boot, MongoDB.",
    dots: true,
    visual: (
      <div className="space-y-2">
        <Flow nodes={["API", "MongoDB atomic coordination", "Worker pool", "Job execution"]} />
        <ChaosDiagram />
      </div>
    ),
    tech: ["Java 21", "Spring Boot", "MongoDB", "Docker", "JUnit"],
    metrics: [
      ["2 / 5", "workers killed in chaos test"],
      ["4,000", "jobs"],
      ["0", "jobs lost"],
      ["236ms", "p99 scheduling drift"],
      ["172", "tests"],
    ],
    body: "No leader and no per-instance configuration: scaling is adding containers. Claiming work is one atomic findAndModify query, so two workers can never take the same job. The design starts from worker failure rather than treating it as an edge case.",
  },
  {
    id: "03",
    name: "M.A.C.E.",
    repo: "legacy_refactoring_agent",
    tagline:
      "Monolith Analysis and Clustering Engine — an agentic tool that proposes service boundaries.",
    visual: (
      <div className="space-y-2">
        <Flow
          nodes={[
            "Python Monolith",
            "Dependency Parser",
            "Neo4j Graph",
            "Graph Clustering",
            "Service Boundaries",
            "FastAPI Scaffolds",
            "Shadow Testing",
          ]}
        />
        <GraphDiagram />
      </div>
    ),
    tech: ["Python", "LangChain", "Neo4j", "FastAPI"],
    metrics: [
      ["30–40%", "less codebase analysis time"],
      ["~20%", "fewer deployment errors"],
      ["6", "shadow-tested features"],
    ],
    body: "Parses a legacy Python monolith into a dependency graph, clusters it in Neo4j, and emits candidate service boundaries with FastAPI scaffolds that are shadow-tested against the original behavior.",
  },
  {
    id: "04",
    name: "Fraud Detection on Imbalanced Data",
    repo: "fraud-anomaly-detector",
    tagline: "0.172% positive rate — a project about evaluation methodology, not accuracy.",
    visual: <PrCurve />,
    tech: ["Python", "XGBoost", "PyTorch", "Pandas"],
    metrics: [
      ["0.876", "validation PR-AUC"],
      ["0.836", "held-out test PR-AUC"],
      ["61 / 74", "fraud cases detected"],
    ],
    body: "Accuracy is deliberately not reported as a headline metric: a classifier that predicts 'not fraud' every time reaches ~99.8% accuracy and catches nothing. Precision-recall area and per-case recall are the metrics that describe the model honestly.",
  },
  {
    id: "05",
    name: "Generative AI Stock Portfolio Analyzer",
    repo: "AI-Stock-Portfolio-Analyzer",
    tagline: "Signal model plus retrieval-augmented context behind a Streamlit interface.",
    visual: (
      <Flow
        nodes={[
          "Market Data",
          "XGBoost Signal",
          "Retrieval",
          "FAISS / ChromaDB",
          "RAG Context",
          "Streamlit UI",
        ]}
      />
    ),
    tech: ["Python", "XGBoost", "FAISS", "ChromaDB", "Streamlit", "RAG"],
    metrics: [
      ["4.8s → 1.1s", "end-to-end latency"],
      ["4.3×", "pipeline speedup"],
    ],
    body: "Concurrent market-data fetching, batched embeddings, and a single batched vector-store write replaced a serial per-document path — the three changes account for the entire latency improvement.",
  },
  {
    id: "06",
    name: "Chrome AI Writing & Translation Extension",
    tagline: "On-device proofreading, rewriting, and translation for the Chrome Built-in AI Challenge.",
    platform: "Chrome",
    visual: (
      <Flow
        nodes={["Selection", "Language Detection", "Built-in AI Model", "On-device Result"]}
      />
    ),
    tech: ["TypeScript", "JavaScript", "Manifest V3", "Chrome Built-in AI"],
    metrics: [
      ["200+", "active beta users"],
      ["50+", "languages"],
      ["18%", "avg readability gain"],
    ],
    body: "Automatic language detection with proofreading, rewriting, and translation across 50+ languages. Text stays on-device — no server required, no request leaves the browser.",
  },
  {
    id: "07",
    name: "Generative Image Editing Tool",
    repo: "Generative-Image-Editing-Tool",
    tagline: "Stable Diffusion editing with 17 natural-language transformation types.",
    visual: (
      <Flow
        nodes={["Prompt + Image", "Hash Cache", "Stable Diffusion", "Inpaint / Restyle", "Output"]}
      />
    ),
    tech: ["Python", "Streamlit", "Stable Diffusion", "Hugging Face Inference API"],
    metrics: [["25%", "faster repeated runs via hash cache"]],
    body: "Style transfer, inpainting, background replacement, and restyling. Hash-based result caching short-circuits repeated prompts against the same source image.",
  },
  {
    id: "08",
    name: "JobTracker",
    repo: "JobTracker",
    tagline: "Full-stack application tracker built because the spreadsheet stopped working.",
    visual: <Flow nodes={["React / Vite", "Express", "SQLite"]} />,
    tech: ["React", "Vite", "Express", "SQLite", "JWT", "bcrypt"],
    metrics: [
      ["50+", "applications tracked"],
      ["~50%", "less manual tracking time"],
    ],
    body: "JWT authentication with bcrypt password hashing and per-stage application tracking. In real personal use, not a demo dataset.",
  },
];

export function Projects() {
  return (
    <Section id="projects" index="04" title="Projects">
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.id}
            className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_16px_40px_-28px_rgba(0,0,0,0.45)] md:p-6"
          >
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
              <div className="min-w-0">
                <span className="label-mono">project {p.id}</span>
                <h3 className="mt-2 font-mono text-lg font-medium tracking-tight">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.tagline}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                {p.dots && (
                  <span className="flex items-center gap-1" aria-hidden="true">
                    <span className="size-2 rounded-full bg-term-red/70" />
                    <span className="size-2 rounded-full bg-term-yellow/70" />
                    <span className="size-2 rounded-full bg-term-green/70" />
                  </span>
                )}
                {p.platform && <span className="label-mono normal-case">{p.platform}</span>}
              </div>
            </div>

            <div className="mt-5 overflow-x-auto">{p.visual}</div>

            <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              {p.metrics.map(([v, l]) => (
                <div key={l}>
                  <dt className="font-mono text-xl font-medium tracking-tight tabular-nums">{v}</dt>
                  <dd className="label-mono mt-1 normal-case">{l}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>

            {p.note && (
              <p className="mt-4 rounded-lg border border-border border-l-2 border-l-accent bg-secondary/60 p-3 text-[13px] leading-relaxed text-muted-foreground">
                <span className="label-mono block">engineering note</span>
                <span className="mt-2 block">{p.note}</span>
              </p>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            {p.repo && (
              <a
                href={`https://github.com/Pranay847/${p.repo}`}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex items-center gap-1.5 self-start font-mono text-xs text-accent hover:underline"
              >
                github.com/Pranay847/{p.repo}
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
