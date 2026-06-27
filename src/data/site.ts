/**
 * Single source of truth for everything personal on the site.
 * Edit this file to make the portfolio yours — nothing else hard-codes these.
 *
 * NOTE: every value below ships PUBLICLY. Do not put anything here you would not
 * post on a billboard. Use a dedicated contact address, not a primary inbox.
 */
export const site = {
  name: "Eric Opoku",
  role: "DevOps & Platform Engineer",
  // The one-liner under your name. Keep it concrete.
  tagline:
    "I build AI agents, automation systems, and the infrastructure that ships and runs them.",
  // 2-3 sentences. Honest, specific, recruiter-readable.
  bio: [
    "I design and operate production systems where software, automation, and AI meet: agent platforms, MCP servers, data pipelines, and the CI/CD and cloud infrastructure that keeps them running.",
    "My day-to-day is TypeScript and Python services, containerized and deployed through Git-driven pipelines. I care about reproducible builds, no-secrets-in-the-repo hygiene, and shipping small, verifiable changes.",
  ],

  // Where to reach you. Replace placeholders before going live.
  // Tip: use a dedicated address (e.g. a +portfolio alias) rather than your main inbox.
  email: "you@example.com",
  location: "United States",

  // Social / proof links. Set to "" to hide a link entirely.
  links: {
    github: "https://github.com/your-handle",
    linkedin: "https://www.linkedin.com/in/your-handle",
    // Drop a PDF in /public (e.g. public/eric-opoku-resume.pdf) and set the path
    // here (e.g. "/eric-opoku-resume.pdf") to light up the Résumé section and the
    // hero/footer résumé buttons. Leave "" to show the "coming soon" placeholder.
    resume: "",
  },

  // Optional label on the résumé card, e.g. "June 2026". Leave "" to hide.
  resumeUpdated: "",

  // Shown in the footer + meta tags.
  siteUrl: "https://cloud-portfolio.pages.dev",
} as const;

export type Site = typeof site;
