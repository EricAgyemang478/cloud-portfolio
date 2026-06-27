export type ProjectStatus = "live" | "building" | "planned";

export interface Project {
  title: string;
  blurb: string;
  /** Short, scannable proof points — what the project actually demonstrates. */
  highlights: string[];
  tags: string[];
  status: ProjectStatus;
  /** Omit when there is nothing real to link yet — the card stays honest. */
  repo?: string;
  demo?: string;
}

/**
 * Each public repo is a sanitized, from-scratch showcase of a pattern — never a
 * copy of a private project. The edge stays private; the craft goes public.
 *
 * Statuses are honest by design:
 *   live     -> shipped, has a real link
 *   building -> in progress, link appears when it's real
 *   planned  -> scoped, not started
 */
export const projects: Project[] = [
  {
    title: "This Portfolio",
    blurb:
      "The site you're reading. A static Astro build shipped to Cloudflare Pages by an explicit GitHub Actions pipeline — preview deploys on every PR, production on merge to main.",
    highlights: [
      "Infrastructure-as-pipeline: build, type-check, deploy in CI",
      "Per-PR preview environments via Wrangler",
      "Zero secrets in the repo; pinned Node; reproducible builds",
    ],
    tags: ["Astro", "Tailwind", "GitHub Actions", "Cloudflare Pages"],
    status: "live",
    repo: "https://github.com/your-handle/cloud-portfolio",
    demo: "https://cloud-portfolio.pages.dev",
  },
  {
    title: "MCP Server Template",
    blurb:
      "A production-ready Model Context Protocol server starter: typed tools, structured errors, tests, a multi-stage Docker image, and a CI pipeline — the boring parts done right so the next MCP server starts at mile 10.",
    highlights: [
      "Typed tool definitions with schema-validated inputs",
      "Multi-stage Docker build, runs as non-root",
      "Test + lint + build gates in CI before publish",
    ],
    tags: ["TypeScript", "MCP", "Docker", "Vitest", "GitHub Actions"],
    status: "building",
  },
  {
    title: "Multi-Provider AI Router",
    blurb:
      "A resilient LLM gateway: route across providers with automatic fallback, retries with backoff, and per-call cost tracking — so one provider outage or price spike never takes the app down.",
    highlights: [
      "Provider-agnostic interface with health-aware fallback",
      "Token + cost accounting per request",
      "Timeouts, retries, and circuit-breaking built in",
    ],
    tags: ["TypeScript", "Node.js", "OpenRouter", "Observability"],
    status: "planned",
  },
  {
    title: "Video to Social Cuts Pipeline",
    blurb:
      "An FFmpeg-driven engine that turns one long recording into platform-ready vertical and horizontal cuts with burned-in captions and branded overlays — containerized and reproducible.",
    highlights: [
      "Deterministic FFmpeg graph, yuv420p / H.264 outputs",
      "Caption burn-in and overlay compositing",
      "Runs the same on a laptop or in a container",
    ],
    tags: ["FFmpeg", "Node.js", "Docker", "Media"],
    status: "planned",
  },
  {
    title: "Browser Automation Framework",
    blurb:
      "A reusable Playwright harness for driving real web apps headlessly: typed actions, retry on flake, structured output, and screenshots as evidence — the backbone behind several automations.",
    highlights: [
      "Typed page-object actions with retry/backoff",
      "Structured JSON results + screenshot artifacts",
      "Headless or headed, CI-friendly",
    ],
    tags: ["Playwright", "TypeScript", "Automation"],
    status: "planned",
  },
  {
    title: "Scheduled Serverless Jobs",
    blurb:
      "Infrastructure-as-code for reliable scheduled work on the edge: Cloudflare Cron Triggers wired to Workers, with logging and alerting, defined entirely in version control.",
    highlights: [
      "Cron + Worker pattern defined in IaC",
      "Structured logs and failure alerting",
      "One command to reproduce the whole stack",
    ],
    tags: ["Cloudflare Workers", "Cron", "Terraform", "TypeScript"],
    status: "planned",
  },
];
