export interface SkillGroup {
  title: string;
  items: string[];
}

/**
 * Group skills by what a hiring manager scans for. Keep each list honest —
 * "things I actually use," not a buzzword dump. Reorder freely.
 */
export const skillGroups: SkillGroup[] = [
  {
    title: "Cloud & Infrastructure",
    items: [
      "Cloudflare (Pages, Workers)",
      "AWS (S3, CloudFront, Lambda)",
      "Netlify",
      "Docker",
      "Terraform",
      "Linux",
    ],
  },
  {
    title: "CI/CD & Automation",
    items: [
      "GitHub Actions",
      "Wrangler",
      "Scheduled / cron jobs",
      "Webhooks",
      "Playwright automation",
      "Build & release pipelines",
    ],
  },
  {
    title: "Languages & Runtimes",
    items: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Python",
      "Bash",
      "PowerShell",
    ],
  },
  {
    title: "AI, Data & APIs",
    items: [
      "MCP (Model Context Protocol)",
      "Multi-provider LLM routing",
      "Prisma",
      "PostgreSQL",
      "REST & streaming APIs",
      "FFmpeg pipelines",
    ],
  },
];
