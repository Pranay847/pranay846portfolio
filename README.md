# Pranay's Portfolio

Take this image as an example,
# Modern Technical Portfolio Website — Pranay Karakoti
## 1. Personal Profile & Visual Identity

Create a **light-mode, highly technical, clean, modern, and functional portfolio website** for **Pranay Karakoti**, a Computer Science student at the University of Illinois Chicago graduating in May 2027.

Pranay focuses on **backend engineering, AI/ML infrastructure, distributed systems, LLM serving, cloud infrastructure, and developer tooling**. His work is deliberately systems-oriented: schedulers, allocators, provider abstractions, inference loops, reliability mechanisms, and performance optimization.

The portfolio should communicate one central idea:

> **A systems-focused engineer who learns by rebuilding things, measures what he builds, and understands systems by making the naive version break.**

Do not make the site look like a generic student portfolio. It should feel closer to the personal site of an **early-career systems/AI infrastructure engineer**.

### Profile image

Include a professional profile picture of Pranay in the hero/about area. Use a clean circular or subtly rounded portrait treatment with enough whitespace around it. The image should feel professional and understated rather than heavily stylized.

---

# 2. Overall Design Direction

### Visual style

- Light mode by default.
- Technical, clean, modern, and highly functional.
- Minimal visual clutter.
- Strong use of whitespace.
- Thin, subtle borders.
- Rounded code-block-style containers.
- Restrained use of shadows.
- Avoid excessive gradients, glassmorphism, oversized decorative graphics, or generic startup visuals.
- The interface should feel like a polished developer tool rather than a marketing landing page.

### Typography

Use a clean system sans-serif font for primary content, such as:

- Inter
- Roboto
- SF Pro

Pair it heavily with a monospace font such as:

- JetBrains Mono
- Fira Code
- SF Mono

Use monospace typography for:

- Section labels
- Subheadings
- Technology stacks
- Dates
- Metrics
- Project metadata
- Tags
- Key-value information
- Terminal interfaces
- Code snippets
- JSON/YAML blocks

The combination should create a **technical terminal-inspired identity without becoming visually gimmicky**.

### Color direction

Use a predominantly light background with dark text and subtle technical accents.

Suggested palette:

- Warm/off-white or very light gray page background.
- Near-black/dark gray primary text.
- Medium gray secondary text.
- Thin gray borders.
- Dark code/terminal panels for contrast.
- Restrained red, yellow, and green accents for terminal controls.
- One subtle accent color for links, interactive states, and important metrics.

Do not use many competing colors.

---

# 3. Global Navigation

Create a minimal sticky navigation bar.

Navigation:

- `01 / Home`
- `02 / About`
- `03 / Experience`
- `04 / Projects`
- `05 / Skills`
- `06 / Contact`

Include a small `PRANAY.K` or `PK` mark on the left.

On the right, include a compact availability/status indicator such as:

`● OPEN TO 2027 NEW GRAD ROLES`

The navigation should remain unobtrusive and become slightly more compact when scrolling.

---

# 4. Home / Hero Section

The landing page should immediately establish Pranay as a systems-oriented engineer.

Instead of a conventional hero with a giant marketing headline, make the hero feel like an **interactive Unix terminal or initialized Python environment**.

### Terminal-style hero

Create a terminal/code-window container with:

- Three small macOS-style dots in red, yellow, and green.
- A subtle terminal title such as:

`pranay@chicago:~/portfolio`

Inside, display something resembling:

```text
$ whoami

pranay.karakoti
computer_science @ uic
systems + ai infrastructure

$ focus --current

llm-serving
distributed-systems
backend-engineering
developer-tooling

$ status

OPEN_TO_2027_NEW_GRAD_ROLES
```

Use subtle typing or cursor animation, but do not make the animation distracting.

### Hero headline

Include a concise statement such as:

**Building the systems underneath the application layer.**

Supporting copy:

Pranay is a Computer Science student at the University of Illinois Chicago focused on backend engineering, LLM infrastructure, distributed systems, and developer tooling.

Include his profile image alongside or slightly overlapping the terminal interface.

### Hero metrics

Immediately beneath the hero, show several high-impact project metrics in large typography.

Examples:

- `2.06×` batching throughput improvement
- `60%` lower short-request latency
- `236ms` p99 scheduling drift
- `0` lost jobs under worker failure
- `0.876` validation PR-AUC
- `4.3×` retrieval pipeline speedup

These should feel like engineering measurements rather than marketing claims.

---

# 5. About Section

Create an `ABOUT.md`-style section.

Use a split layout:

### Left side

A short narrative about Pranay.

Include:

> I'm Pranay, a computer science student at the University of Illinois Chicago, graduating May 2027 and based in Chicago.

Explain that most of his work sits underneath the application layer: schedulers, allocators, provider seams, inference loops, and infrastructure.

Highlight his learning philosophy:

> I tend to learn things by rebuilding them.

Explain that projects such as microvllm and Chronos started from questions about batching and worker failure and became practical systems after the naive implementations broke.

Emphasize his engineering philosophy:

- Measure instead of making vague claims.
- Benchmark systems.
- Test failure modes.
- Document limitations.
- Include failed experiments.
- Prefer real engineering evidence over inflated metrics.

### Right side

Display a syntax-highlighted JSON or YAML profile object.

Example:

```yaml
name: Pranay Karakoti
location: Chicago, IL
education: University of Illinois Chicago
degree: B.S. Computer Science
graduation: May 2027

focus:
  - LLM serving infrastructure
  - distributed systems
  - backend engineering
  - developer tooling

currently:
  role: Back-End AI Engineering Intern
  company: FlyRank AI

open_to:
  - 2027 new grad roles
```

Make this visually polished with syntax highlighting.

---

# 6. Experience Section

Create an `EXPERIENCE` section using a technical timeline.

## FlyRank AI

**Back-End AI Engineering Intern**  
Remote · July 2026 — Present

Describe the work without turning it into a generic resume dump.

Highlight:

- Designed a provider-agnostic LLM integration layer in Python.
- Supports Groq, Gemini, and Ollama.
- Allows provider switching through configuration rather than application-code changes.
- Added Pydantic schema validation.
- Implemented single-retry fallback behavior.
- Added per-request cost telemetry.
- Maintained zero failures across a 10-case reliability suite covering malformed and empty model responses.
- Migrated storage from in-memory state to PostgreSQL using SQLAlchemy.
- Containerized the service using Docker.
- Preserved behavior across environments.

Show the technology stack as monospace tags:

`Python` `FastAPI` `Pydantic` `SQLAlchemy` `PostgreSQL` `Docker` `Groq` `Gemini` `Ollama`

---

# 7. Projects Section

Make **Projects the centerpiece of the website**.

Use a highly technical project grid with large, clean architecture diagrams rather than screenshots of applications.

Each project card should contain:

- Project name
- One-line description
- Architecture diagram
- Technologies
- Key metric
- Short technical explanation
- GitHub link
- Optional case-study/read-more interaction

Cards should use subtle borders and rounded corners.

Add macOS/terminal-style controls to some cards:

`● ● ●`

or small platform labels such as:

`macOS` `Windows` `Linux`

Do not overuse this visual element.

---

## Project 01 — microvllm

### Title

**microvllm**

### Description

A miniature LLM inference server written in C++20 that implements production-style serving techniques including:

- Continuous batching
- Chunked prefill
- Block-based KV-cache allocation
- Admission control
- Prefix sharing

Llama.cpp handles matrix operations while the queue, scheduler, cache accounting, and serving logic are original.

### Architecture diagram

Create a clean custom architecture diagram showing:

`Requests → Admission Control → Scheduler → Continuous Batching → KV Cache Allocator → Llama.cpp`

Also visualize:

`Prefix Cache → KV Blocks`

Use minimalist SVG/vector lines.

### Highlight metrics

- `2.06×` throughput at batch size 16
- `60%` lower short-request latency under mixed-length load
- `9.9s → 4.4s` repeated-prompt runtime
- `124` tests
- `25×` CI ThreadSanitizer runs

Make these numbers visually prominent.

### Engineering note

Explain that batching improved throughput but total throughput eventually became bandwidth-bound. This is important because it demonstrates honest benchmarking rather than presenting every optimization as universally beneficial.

---

# Project 02 — Chronos

### Title

**Chronos**

Distributed job and webhook scheduler built with Java 21, Spring Boot, and MongoDB.

Architecture:

`API → MongoDB atomic coordination → Worker pool → Job execution`

Explain:

- No leader.
- No per-instance configuration.
- Scaling happens by adding containers.
- Coordination uses one atomic `findAndModify` query.
- Designed specifically around worker failure.

### Highlight metrics

- `2 / 5` workers killed during chaos testing
- `4,000` jobs
- `0` jobs lost
- `236ms` p99 scheduling drift
- `172` tests

Show a small chaos-test visualization where worker nodes disappear while jobs continue being processed.

---

# Project 03 — M.A.C.E.

### Title

**M.A.C.E. — Monolith Analysis and Clustering Engine**

An agentic developer tool that analyzes a legacy Python monolith and proposes microservice boundaries.

Pipeline:

`Python Monolith → Dependency Parser → Neo4j Graph → Graph Clustering → Service Boundaries → FastAPI Scaffolds → Shadow Testing`

Technologies:

`Python` `LangChain` `Neo4j` `FastAPI`

Metrics:

- `30–40%` reduction in codebase analysis time
- `~20%` reduction in deployment-related errors
- `6` shadow-tested features

Show the dependency graph as a major visual component.

---

# Project 04 — Fraud Detection

### Title

**Fraud Detection on Imbalanced Transaction Data**

Explain that the dataset contains only `0.172%` fraudulent transactions.

The project's primary engineering lesson is evaluation methodology.

Explicitly avoid displaying accuracy as a primary metric because a trivial classifier can reach approximately `99.8%` accuracy while detecting no fraud.

Highlight:

- `0.876` validation PR-AUC
- `0.836` held-out test PR-AUC
- `61 / 74` fraud cases detected

Technologies:

`Python` `XGBoost` `PyTorch` `Pandas`

Include a small precision-recall visualization instead of a generic ML stock image.

---

# Project 05 — Generative AI Stock Portfolio Analyzer

Architecture:

`Market Data → XGBoost Signal → Retrieval → FAISS/ChromaDB → RAG Context → Streamlit UI`

Highlight:

`4.8s → 1.1s`

`4.3×` end-to-end latency improvement.

Technologies:

`Python` `XGBoost` `FAISS` `ChromaDB` `Streamlit` `RAG`

Explain that concurrent fetching, batched embeddings, and a single batched vector-store write produced the latency improvement.

---

# Project 06 — Chrome AI Writing & Translation Extension

Chrome extension built for the Google Chrome Built-in AI Challenge.

Features:

- Proofreading
- Rewriting
- Translation
- Automatic language detection
- 50+ languages
- On-device processing

Metrics:

- `200+` active beta users
- `50+` languages
- `18%` average readability improvement

Emphasize privacy:

**Text stays on-device. No server required.**

Technologies:

`TypeScript` `JavaScript` `Manifest V3` `Chrome Built-in AI`

---

# Project 07 — Generative Image Editing Tool

Stable Diffusion-based image editing tool with:

- Style transfer
- Inpainting
- Background replacement
- Restyling
- 17 natural-language transformation types

Technologies:

`Python` `Streamlit` `Stable Diffusion` `Hugging Face Inference API`

Highlight:

`25%` faster repeated runs through hash-based result caching.

---

# Project 08 — JobTracker

Full-stack job application tracker.

Architecture:

`React/Vite → Express → SQLite`

Features:

- JWT authentication
- bcrypt password hashing
- Application tracking
- Real-world personal usage

Highlight:

`50+` applications tracked

and approximately:

`50%` reduction in manual tracking time versus a spreadsheet.

---

# 8. Skills Section

Do not display skills as generic percentage bars.

Instead, create a **technical capability matrix**.

Use monospace labels and categorized groups.

### Languages

`Python` `C` `C++` `Java` `SQL` `JavaScript` `TypeScript` `HTML/CSS`

### Backend

`FastAPI` `SQLAlchemy` `Pydantic` `Node.js` `Express` `REST APIs` `Schema Validation` `Structured Logging`

### Cloud / DevOps

`AWS` `App Runner` `ECR` `RDS` `S3` `CloudFront` `IAM` `OIDC` `Secrets Manager` `VPC` `Docker` `GitHub Actions` `Git`

### Databases

`PostgreSQL` `Neo4j` `SQLite` `FAISS` `ChromaDB` `Vector Stores`

### AI / ML

`LangChain` `LangGraph` `RAG` `Multi-Agent Systems` `LLM APIs` `PyTorch` `Stable Diffusion` `ControlNet` `XGBoost` `Pandas` `OpenCV`

### Systems

`Multithreading` `Memory Allocation` `KV Caches` `Batching` `Distributed Systems` `Performance Optimization`

Use subtle interactive hover states that reveal a short description of what Pranay has actually used each technology for.

---

# 9. Engineering Philosophy / Method Section

Add a section titled:

`HOW I BUILD`

This differentiates the portfolio from a standard resume site.

Present four principles:

### 01 — Rebuild it

> I understand systems by rebuilding the important pieces myself.

### 02 — Measure it

> Benchmarks matter more than claims.

### 03 — Break it

> Chaos tests and failure cases expose what happy-path demos hide.

### 04 — Document the limits

> Every project should explain not only what works, but where it stops working.

Visually represent this as a small pipeline:

`Question → Naive Version → Failure → Measurement → Iteration → System`

Use subtle vector lines resembling a data pipeline or training-loss curve.

---

# 10. Technical Visual Language

Throughout the site, use subtle background graphics inspired by:

- Training-loss curves
- Dependency graphs
- Network nodes
- Data pipelines
- Queue diagrams
- KV-cache blocks
- Distributed worker nodes

These should be **minimal SVG vector lines**, mostly decorative and low contrast.

Do not use generic AI imagery, robots, glowing neural networks, or stock photos.

For project visuals, prioritize **custom architecture diagrams** showing:

- API gateways
- Workers
- Queues
- Databases
- Model providers
- Cache layers
- ML pipelines
- Graph databases
- Retrieval pipelines

The diagrams should be clean enough to feel like technical documentation.

---

# 11. Contact Section

Create a clean terminal-inspired contact area.

Headline:

**Have a systems problem worth building?**

Include:

- Email: `pranay846@outlook.com`
- GitHub: `github.com/Pranay847`
- LinkedIn: `linkedin.com/in/pranay846`
- Location: `Chicago, IL`
- Phone: `+1 (224) 261-5932`

Use clear clickable buttons for GitHub, LinkedIn, and email.

Include a compact JSON-style contact block:

```json
{
  "email": "pranay846@outlook.com",
  "location": "Chicago, IL",
  "availability": "2027 new grad roles"
}
```

Do not expose the phone number prominently in the hero. Keep it inside the contact section.

---

# 12. Footer

Keep the footer minimal.

Example:

`PRANAY KARAKOTI / CHICAGO, IL`

Then:

`B.S. COMPUTER SCIENCE / UIC / 2027`

And:

`BUILT WITH CURIOSITY + TOO MANY BENCHMARKS`

Include GitHub and LinkedIn links.

---

# 13. Interactions & Animation

Use subtle, performance-conscious animations.

Recommended:

- Terminal cursor blinking.
- Terminal command text appearing on initial load.
- Project cards slightly lifting on hover.
- Architecture diagram nodes subtly animating when hovered.
- Metrics counting up when entering the viewport.
- SVG pipeline lines drawing themselves in subtly.
- Smooth section transitions.
- Syntax-highlighted code blocks with restrained animations.

Avoid:

- Excessive parallax.
- Constant motion.
- Full-screen loading animations.
- Loud gradients.
- Particle backgrounds.
- Scroll-jacking.
- Animations that interfere with reading.

The website should remain fast and usable.

---

# 14. Responsive Design

The site must work extremely well on:

- Desktop
- Laptop
- Tablet
- Mobile

On mobile:

- Convert the navigation into a compact menu.
- Stack the hero terminal and profile image.
- Turn project cards into a single-column layout.
- Keep metrics readable without horizontal scrolling.
- Make architecture diagrams responsive.
- Ensure code blocks can scroll horizontally without breaking the page.
- Maintain sufficient spacing around interactive elements.

---

# 15. Accessibility & Functionality

Prioritize functionality over decoration.

Requirements:

- Semantic HTML.
- Keyboard navigable.
- Visible focus states.
- Good color contrast.
- Accessible labels for icons.
- Reduced-motion support.
- Fast loading.
- Responsive images.
- No unnecessary client-side dependencies.
- External links should clearly indicate their destination.
- All interactive elements should have obvious hover/focus states.

---

# 16. Overall Impression

The finished portfolio should feel like **a technical engineer's personal operating environment**, not a traditional college portfolio.

The visual hierarchy should communicate:

**Systems → Evidence → Projects → Experience → Skills → Contact**

The most important content should be the actual engineering work and the measurements behind it.

The site should make a recruiter or engineering manager quickly understand:

1. Pranay is a Computer Science student graduating in May 2027.
2. He already works on backend AI engineering professionally.
3. He builds systems rather than only CRUD applications.
4. He understands distributed systems, LLM infrastructure, cloud deployment, and performance.
5. His projects contain real benchmarks, tests, failure scenarios, and technical tradeoffs.
6. He is interested in **LLM serving infrastructure, distributed systems, backend engineering, and developer tooling**.
7. He is open to **2027 new grad opportunities**.

The final visual language should be **technical, restrained, measurable, and credible** — essentially a polished engineering notebook transformed into a modern portfolio website.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://pranay846portfolio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b4714f7d-8905-4622-b199-e188be53dd0b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
