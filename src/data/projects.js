/**
 * projects.js — Your portfolio project data
 *
 * To add a new project, copy one of the objects below and fill in your details.
 *
 * Fields:
 *   id          — unique string, e.g. "07"
 *   title       — project name
 *   category    — primary category shown on card badge: "Web Apps" | "AI" | "Automation"
 *   tags        — array of categories this project belongs to (for filtering)
 *                 e.g. ["AI", "Automation"] means it shows under both filters
 *   description — one or two sentences about what it does
 *   tech        — array of tech/tool names shown as chips
 *   image       — URL to a cover image (Unsplash, your own hosted image, etc.)
 *   github      — link to the GitHub repo (use "" to hide the button)
 *   live        — link to the live demo  (use "" to hide the button)
 */

export const PROJECTS = [
  {
    id:          "01",
    title:       "AutoFlow AI",
    category:    "Automation",
    tags:        ["AI", "Automation"],
    description: "An intelligent automation platform that connects APIs and triggers workflows using natural language commands powered by GPT-4.",
    tech:        ["React", "Node.js", "OpenAI", "PostgreSQL"],
    image:       "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    github:      "https://github.com",
    live:        "https://example.com",
  },
  {
    id:          "02",
    title:       "DevDash",
    category:    "Web Apps",
    tags:        ["Web Apps"],
    description: "A developer productivity dashboard that aggregates GitHub activity, deploys, and alerts into a single real-time view.",
    tech:        ["Next.js", "Tailwind", "GitHub API", "Redis"],
    image:       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    github:      "https://github.com",
    live:        "https://example.com",
  },
  {
    id:          "03",
    title:       "ScrapeMate",
    category:    "Automation",
    tags:        ["Automation"],
    description: "A headless scraping tool with a visual rule builder. Schedule runs, export to CSV or JSON, and get notified on change.",
    tech:        ["Python", "Playwright", "FastAPI", "SQLite"],
    image:       "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    github:      "https://github.com",
    live:        "https://example.com",
  },
  {
    id:          "04",
    title:       "FormCraft",
    category:    "Web Apps",
    tags:        ["Web Apps"],
    description: "A drag-and-drop form builder with conditional logic, webhook integrations, and beautiful embeddable output.",
    tech:        ["Vue.js", "Pinia", "Supabase", "Tailwind"],
    image:       "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80",
    github:      "https://github.com",
    live:        "https://example.com",
  },
  {
    id:          "05",
    title:       "PulseBot",
    category:    "Automation",
    tags:        ["Automation"],
    description: "A Slack bot that monitors uptime, sends smart digests, and escalates incidents based on configurable alert rules.",
    tech:        ["TypeScript", "Bolt.js", "Upstash", "Vercel"],
    image:       "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    github:      "https://github.com",
    live:        "https://example.com",
  },
  {
    id:          "06",
    title:       "NoteStack",
    category:    "AI",
    tags:        ["AI", "Web Apps"],
    description: "A minimal note-taking app with markdown support, AI summarization, and end-to-end encryption.",
    tech:        ["React", "tRPC", "Prisma", "OpenAI"],
    image:       "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    github:      "https://github.com",
    live:        "https://example.com",
  },
];

/**
 * Valid category values — used for the filter tabs.
 * Add a new string here if you create a new category.
 */
export const CATEGORIES_LIST = ["Web Apps", "AI", "Automation"];
