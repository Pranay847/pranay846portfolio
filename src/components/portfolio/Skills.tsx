import { Section } from "./primitives";

const groups: { name: string; items: [string, string][] }[] = [
  {
    name: "languages",
    items: [
      ["Python", "Primary language: inference services, agents, ML pipelines."],
      ["C", "Low-level memory and pointer work in coursework and allocators."],
      ["C++", "microvllm: C++20 scheduler, KV allocator, batching loop."],
      ["Java", "Chronos: Java 21 + Spring Boot distributed scheduler."],
      ["SQL", "Schema design and query tuning on PostgreSQL and SQLite."],
      ["JavaScript", "JobTracker frontend and Chrome extension logic."],
      ["TypeScript", "Manifest V3 Chrome extension with typed messaging."],
      ["HTML/CSS", "Accessible, responsive interfaces without frameworks."],
    ],
  },
  {
    name: "backend",
    items: [
      ["FastAPI", "Provider-agnostic LLM API layer at FlyRank AI."],
      ["SQLAlchemy", "Migrated in-memory state to PostgreSQL models."],
      ["Pydantic", "Schema validation for malformed model responses."],
      ["Node.js", "Express API for JobTracker."],
      ["Express", "JWT auth, bcrypt hashing, REST routes."],
      ["REST APIs", "Versioned endpoints with explicit error contracts."],
      ["Schema Validation", "Rejecting bad LLM output before it reaches storage."],
      ["Structured Logging", "Per-request cost and latency telemetry."],
    ],
  },
  {
    name: "cloud / devops",
    items: [
      ["AWS", "Deployment of containerized backend services."],
      ["App Runner", "Managed container hosting for the API layer."],
      ["ECR", "Image registry wired into CI builds."],
      ["RDS", "Managed PostgreSQL for persistent job state."],
      ["S3", "Artifact and asset storage."],
      ["CloudFront", "Static distribution and caching."],
      ["IAM", "Least-privilege roles for deploy pipelines."],
      ["OIDC", "Keyless GitHub Actions to AWS auth."],
      ["Secrets Manager", "Provider API keys outside the image."],
      ["VPC", "Private networking for database access."],
      ["Docker", "Containerized services with parity across environments."],
      ["GitHub Actions", "CI incl. 25× ThreadSanitizer runs for microvllm."],
      ["Git", "Trunk-based workflow with reviewed PRs."],
    ],
  },
  {
    name: "databases",
    items: [
      ["PostgreSQL", "Primary store after migrating off in-memory state."],
      ["Neo4j", "Dependency graph storage and clustering for M.A.C.E."],
      ["SQLite", "Embedded store for JobTracker."],
      ["MongoDB", "Atomic findAndModify coordination in Chronos."],
      ["FAISS", "Vector retrieval in the portfolio analyzer."],
      ["ChromaDB", "Batched embedding writes for RAG context."],
      ["Vector Stores", "Batched writes to cut end-to-end latency 4.3×."],
    ],
  },
  {
    name: "ai / ml",
    items: [
      ["LangChain", "Agentic analysis pipeline in M.A.C.E."],
      ["LangGraph", "Stateful multi-step agent orchestration."],
      ["RAG", "Retrieval context for market analysis answers."],
      ["Multi-Agent Systems", "Specialized agents over a shared code graph."],
      ["LLM APIs", "Groq, Gemini, and Ollama behind one interface."],
      ["PyTorch", "Baseline models for imbalanced fraud detection."],
      ["Stable Diffusion", "Inpainting and restyling image tool."],
      ["ControlNet", "Structure-preserving image transformations."],
      ["XGBoost", "0.876 val PR-AUC on 0.172% positive-rate data."],
      ["Pandas", "Feature engineering and evaluation splits."],
      ["OpenCV", "Image preprocessing and masking."],
    ],
  },
  {
    name: "systems",
    items: [
      ["Multithreading", "Worker pools verified under ThreadSanitizer."],
      ["Memory Allocation", "Block-based KV cache allocator."],
      ["KV Caches", "Prefix sharing: 9.9s → 4.4s repeated prompts."],
      ["Batching", "Continuous batching with chunked prefill."],
      ["Distributed Systems", "Leaderless coordination, chaos-tested."],
      ["Performance Optimization", "Profile, benchmark, then document the ceiling."],
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" index="05" title="Capability Matrix">
      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
        {groups.map((g) => (
          <div key={g.name} className="bg-card p-5">
            <h3 className="label-mono">{g.name}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map(([label, desc]) => (
                <li key={label} className="group relative">
                  <button
                    type="button"
                    className="cursor-default rounded-md border border-border bg-secondary px-2.5 py-1.5 font-mono text-[11px] transition-colors hover:border-accent hover:text-accent focus-visible:border-accent"
                    aria-describedby={`d-${label}`}
                  >
                    {label}
                  </button>
                  <span
                    id={`d-${label}`}
                    role="tooltip"
                    className="pointer-events-none absolute bottom-full left-0 z-20 mb-2 w-60 rounded-md border border-border bg-terminal p-2.5 font-mono text-[11px] leading-relaxed text-terminal-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
                  >
                    {desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
