export type ProjectStatus = "live" | "building" | "planned";

export interface Project {
  title: string;
  /** One line: what it is. */
  tagline: string;
  /** The use case — the problem it solves and why it matters. */
  problem: string;
  /** How it's built — the decisions that show depth. */
  architecture: string[];
  tags: string[];
  status: ProjectStatus;
  /** Real links only — omitted until there's something behind them. */
  repo?: string;
  demo?: string;
}

/**
 * Each public repo is a sanitized, from-scratch showcase of a production pattern —
 * the transferable engineering, never proprietary logic. Live projects link to
 * real repos; planned ones state the intended use case + architecture honestly.
 */
export const projects: Project[] = [
  {
    title: "This Portfolio",
    tagline:
      "The site you're reading — and a working demo of a real deploy pipeline.",
    problem:
      "A portfolio should prove the craft, not just list it. So this site ships itself the way a production frontend ships — no manual uploads, no click-ops.",
    architecture: [
      "Static Astro build (zero client JS by default) + Tailwind v4 design tokens.",
      "GitHub Actions pipeline: install → type-check → build → deploy on every push; a unique preview URL per pull request.",
      "Served from Cloudflare Pages' global edge with automatic HTTPS and cache invalidation.",
      "Motion (Framer Motion) islands for scroll-linked animation — reduced-motion and no-JS safe.",
    ],
    tags: [
      "Astro",
      "Tailwind",
      "TypeScript",
      "GitHub Actions",
      "Cloudflare Pages",
    ],
    status: "live",
    repo: "https://github.com/EricAgyemang478/cloud-portfolio",
    demo: "https://cloud-portfolio.pages.dev",
  },
  {
    title: "MCP Server Template",
    tagline:
      "A production-ready starting point for Model Context Protocol (MCP) servers.",
    problem:
      "MCP is becoming the standard way AI clients call external tools, and every new server rewrites the same scaffolding. This is the boring-but-critical 80% done right, so the next one starts at mile 10.",
    architecture: [
      "High-level MCP SDK with zod-validated tool schemas — one definition drives validation, typing, and tool discovery.",
      "Construction is separated from transport, so the same server is tested over an in-memory transport with no mocks.",
      "Errors contained per call; stdout reserved for the protocol, logs to stderr.",
      "Multi-stage, non-root Docker image + CI (lint, type-check, test, build).",
    ],
    tags: ["TypeScript", "MCP", "zod", "Docker", "node:test", "GitHub Actions"],
    status: "live",
    repo: "https://github.com/EricAgyemang478/mcp-server-template",
  },
  {
    title: "leakguard",
    tagline:
      "A zero-dependency secret scanner that stops credentials before they go public.",
    problem:
      "A leaked key in git history is irreversible — public commits are scraped within minutes and the only fix is rotation. leakguard catches secrets at commit time, when they're still cheap to fix.",
    architecture: [
      "Three detection layers: 90 provider rules + Shannon-entropy detection for unknown secrets + sensitive-filename rules.",
      "Runs as a CLI, a git pre-commit/pre-push hook, and a GitHub Action — defense at every stage.",
      "Entropy false positives tamed with guards (hashes, integrity sums, PEM/public keys, base64-decode check).",
      "Ruleset built via a generate → adversarial-corpus → gap-audit loop; verified by per-rule + corpus tests (43 real secrets flag, 39 decoys stay clean). Zero runtime dependencies.",
    ],
    tags: ["TypeScript", "Security", "DevSecOps", "CLI", "GitHub Actions"],
    status: "live",
    repo: "https://github.com/EricAgyemang478/leakguard",
  },
  {
    title: "Multi-Provider AI Router",
    tagline: "A resilient gateway that routes across multiple LLM providers.",
    problem:
      "Apps that depend on a single AI provider break when it has an outage, rate-limits, or a price spike. This routes across providers so the app stays up and costs stay visible.",
    architecture: [
      "Redundancy: provider-agnostic adapters (OpenAI / Anthropic / OpenRouter over fetch) in an ordered fallback chain — no single provider is a point of failure.",
      "Resilience: retries (backoff + jitter), per-provider circuit breaking, and per-attempt + terminal overall deadlines.",
      "Idempotency: an idempotency key coalesces concurrent identical calls into one upstream request — a retry never double-charges.",
      "Observability: lifecycle events, a pull-based metrics() snapshot, and a per-call audit trail. Adversarially audited; 24-test failure-mode matrix; zero runtime deps.",
    ],
    tags: ["TypeScript", "Resilience", "Idempotency", "Observability", "Zero-deps"],
    status: "live",
    repo: "https://github.com/EricAgyemang478/llm-router",
  },
  {
    title: "Video → Social Cuts Pipeline",
    tagline:
      "Turns one long recording into platform-ready social cuts, automatically.",
    problem:
      "Manually editing a long video into vertical Reels/Shorts with captions is hours of repetitive work. This automates the reframe, format, and caption burn-in.",
    architecture: [
      "Deterministic FFmpeg graph: reframe, overlay, and burn captions; H.264 / yuv420p outputs every platform accepts.",
      "Containerized so it runs identically on a laptop or in CI.",
      "Config-driven cut list and branded overlay templates.",
    ],
    tags: ["FFmpeg", "Node.js", "Docker", "Media"],
    status: "planned",
  },
  {
    title: "Browser Automation Framework",
    tagline:
      "A reusable Playwright harness for driving real web apps headlessly.",
    problem:
      "One-off scraping and automation scripts rot fast. This is the durable backbone: typed actions, retries on flake, structured output, and evidence for every run.",
    architecture: [
      "Typed page-object actions with retry/backoff on flake.",
      "Structured JSON results plus screenshot artifacts for every run.",
      "Headless or headed, and CI-friendly.",
    ],
    tags: ["Playwright", "TypeScript", "Automation"],
    status: "planned",
  },
];
