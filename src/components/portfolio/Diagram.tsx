import { Fragment } from "react";
import { cn } from "@/lib/utils";

export function Flow({ nodes, className }: { nodes: string[]; className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-2 gap-y-2 rounded-lg border border-border bg-secondary/50 p-4",
        className,
      )}
    >
      {nodes.map((n, i) => (
        <Fragment key={n}>
          <span className="rounded-md border border-border bg-card px-2.5 py-1.5 font-mono text-[11px] transition-colors hover:border-accent hover:text-accent">
            {n}
          </span>
          {i < nodes.length - 1 && (
            <svg width="18" height="8" viewBox="0 0 18 8" aria-hidden="true" className="shrink-0">
              <path
                d="M0 4h13M13 4l-3.5-3M13 4l-3.5 3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-muted-foreground"
              />
            </svg>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export function GraphDiagram() {
  const nodes = [
    [30, 40],
    [110, 22],
    [95, 88],
    [180, 55],
    [255, 30],
    [250, 95],
    [320, 62],
  ] as const;
  const edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [3, 4],
    [3, 5],
    [4, 6],
    [5, 6],
  ] as const;
  return (
    <svg
      viewBox="0 0 350 120"
      className="h-auto w-full rounded-lg border border-border bg-secondary/50 p-2"
      role="img"
      aria-label="Dependency graph clustered into service boundaries"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="currentColor"
          strokeWidth="1"
          className="draw-line text-border"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 6 : 4}
          className={i % 3 === 0 ? "fill-accent" : "fill-muted-foreground"}
        />
      ))}
      <rect
        x="8"
        y="8"
        width="130"
        height="104"
        rx="8"
        fill="none"
        strokeDasharray="4 4"
        stroke="currentColor"
        className="text-border"
      />
      <rect
        x="215"
        y="10"
        width="125"
        height="100"
        rx="8"
        fill="none"
        strokeDasharray="4 4"
        stroke="currentColor"
        className="text-border"
      />
    </svg>
  );
}

export function ChaosDiagram() {
  return (
    <svg
      viewBox="0 0 350 110"
      className="h-auto w-full rounded-lg border border-border bg-secondary/50 p-2"
      role="img"
      aria-label="Chaos test: two of five workers killed, jobs keep draining"
    >
      {[0, 1, 2, 3, 4].map((i) => {
        const dead = i === 1 || i === 3;
        return (
          <g key={i}>
            <rect
              x={20 + i * 64}
              y={20}
              width={48}
              height={34}
              rx="6"
              fill="none"
              stroke="currentColor"
              strokeDasharray={dead ? "3 3" : undefined}
              className={dead ? "text-border" : "text-accent"}
            />
            <text
              x={44 + i * 64}
              y={41}
              textAnchor="middle"
              fontSize="9"
              fontFamily="monospace"
              className={dead ? "fill-muted-foreground" : "fill-foreground"}
            >
              {dead ? "×" : `w${i}`}
            </text>
          </g>
        );
      })}
      <line
        x1="20"
        y1="78"
        x2="330"
        y2="78"
        stroke="currentColor"
        strokeWidth="1"
        className="text-border"
      />
      {Array.from({ length: 14 }).map((_, i) => (
        <rect
          key={i}
          x={22 + i * 22}
          y={70}
          width={14}
          height={16}
          rx="2"
          className={i < 9 ? "fill-accent/25" : "fill-secondary"}
          stroke="currentColor"
          strokeWidth="0.75"
        />
      ))}
      <text x="20" y="102" fontSize="8" fontFamily="monospace" className="fill-muted-foreground">
        4,000 jobs · 0 lost · p99 drift 236ms
      </text>
    </svg>
  );
}

export function PrCurve() {
  return (
    <svg
      viewBox="0 0 350 130"
      className="h-auto w-full rounded-lg border border-border bg-secondary/50 p-2"
      role="img"
      aria-label="Precision-recall curve, validation PR-AUC 0.876"
    >
      <line x1="30" y1="105" x2="335" y2="105" stroke="currentColor" className="text-border" />
      <line x1="30" y1="12" x2="30" y2="105" stroke="currentColor" className="text-border" />
      <path
        d="M30 20 C120 24 190 42 240 66 C280 86 305 98 335 104"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="draw-line text-accent"
      />
      <path
        d="M30 28 C110 36 180 56 235 78 C275 94 305 101 335 105"
        fill="none"
        strokeDasharray="4 3"
        stroke="currentColor"
        strokeWidth="1"
        className="text-muted-foreground"
      />
      <text x="34" y="122" fontSize="8" fontFamily="monospace" className="fill-muted-foreground">
        recall →
      </text>
      <text x="200" y="30" fontSize="8" fontFamily="monospace" className="fill-muted-foreground">
        val PR-AUC 0.876 · test 0.836
      </text>
    </svg>
  );
}

export function KvBlocks() {
  return (
    <svg
      viewBox="0 0 350 60"
      className="h-auto w-full rounded-lg border border-border bg-secondary/50 p-2"
      role="img"
      aria-label="Prefix cache mapped onto KV cache blocks"
    >
      <text x="8" y="16" fontSize="8" fontFamily="monospace" className="fill-muted-foreground">
        prefix cache → kv blocks
      </text>
      {Array.from({ length: 20 }).map((_, i) => (
        <rect
          key={i}
          x={8 + i * 17}
          y={24}
          width={13}
          height={22}
          rx="2"
          stroke="currentColor"
          strokeWidth="0.75"
          className={i < 7 ? "fill-accent/25 text-accent/40" : "fill-card text-border"}
        />
      ))}
    </svg>
  );
}

export function PipelineCurve() {
  return (
    <svg
      viewBox="0 0 640 90"
      className="h-auto w-full"
      role="img"
      aria-label="Question to system iteration curve"
    >
      <path
        d="M0 80 C120 78 180 30 260 44 C330 56 380 18 470 26 C540 32 590 18 640 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        className="draw-line text-accent/50"
      />
      {[0, 128, 256, 384, 512, 636].map((x, i) => (
        <circle key={i} cx={x} cy={[80, 62, 44, 34, 24, 14][i]} r="3" className="fill-accent" />
      ))}
    </svg>
  );
}
