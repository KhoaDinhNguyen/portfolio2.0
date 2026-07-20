export interface ProjectProps {
  title: string,
  subtitle: string,
  description: string,
  image: string,
  tags: string[],
  highlights: string[]
  github: string,
  demo: string,
  color: string
}

export const PROJECTS: ProjectProps[] = [
  {
    title: "Animal Chess",
    subtitle: "Multiplayer Strategy Game",
    description:
      "Built a real-time multiplayer Animal Chess game with full authentication and single-player AI mode. Implemented Minimax with alpha-beta pruning for competitive AI difficulty, Socket.IO rooms for low-latency game synchronization, and Supabase for persistent game state and user sessions.",
    image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=800&h=450&fit=crop&auto=format",
    tags: ["Next.js", "TypeScript", "Socket.IO", "Supabase", "PostgreSQL"],
    highlights: [
      "Minimax AI with alpha-beta pruning",
      "Real-time sync via Socket.IO rooms",
      "JWT auth + persistent game history",
      "Optimistic UI for move latency",
    ],
    github: "https://github.com/khoanguyen",
    demo: "https://animal-chess.vercel.app",
    color: "#3B82F6",
  },
  {
    title: "DevFlow",
    subtitle: "Developer Q&A Platform",
    description:
      "A Stack Overflow-inspired platform with AI-assisted answers using the Claude API. Built a full text-search engine with PostgreSQL tsvector, implemented voting and reputation systems, and deployed on Vercel with a serverless architecture. CI/CD via GitHub Actions with automated Playwright e2e tests.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop&auto=format",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Claude API", "Playwright", "GitHub Actions"],
    highlights: [
      "Full-text search with tsvector indexes",
      "AI-powered answer suggestions",
      "Reputation + voting system",
      "Automated e2e CI pipeline",
    ],
    github: "https://github.com/khoanguyen",
    demo: "https://devflow.vercel.app",
    color: "#22C55E",
  },
  {
    title: "Pulse Analytics",
    subtitle: "Real-Time Dashboard",
    description:
      "A real-time analytics dashboard for monitoring server metrics and user behavior. WebSocket-driven live charts, configurable alert thresholds, and a role-based access control system. Built a custom caching layer with Redis to reduce database queries by 80% under load.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&auto=format",
    tags: ["React", "Node.js", "Express", "Redis", "WebSocket", "Docker"],
    highlights: [
      "Live metric streaming over WebSocket",
      "Redis caching — 80% query reduction",
      "Role-based access control",
      "Dockerized microservice deployment",
    ],
    github: "https://github.com/khoanguyen",
    demo: "https://pulse-analytics.vercel.app",
    color: "#a78bfa",
  },
];
