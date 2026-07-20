export interface ExperienceProps {
  company: string,
  role: string
  period: string,
  location: string,
  bullets: string[]
}

export const EXPERIENCE: ExperienceProps[] = [
  {
    company: "Acme Corp",
    role: "Software Engineering Intern",
    period: "May 2024 – Aug 2024",
    location: "San Francisco, CA",
    bullets: [
      "Implemented responsive React interfaces for 12+ internal HR tools, reducing manual workflow time by ~30% for 200+ staff.",
      "Built a REST API with Node.js and PostgreSQL to replace a brittle spreadsheet pipeline, eliminating weekly data-import failures.",
      "Wrote integration tests with Jest covering 90% of new API endpoints; caught 4 critical edge-case bugs before production.",
      "Collaborated with the DevOps team to containerize the service with Docker and deploy via GitHub Actions CI/CD.",
    ],
  },
  {
    company: "University Robotics Lab",
    role: "Undergraduate Research Assistant",
    period: "Sep 2023 – May 2024",
    location: "Remote",
    bullets: [
      "Developed a Python data-pipeline to preprocess and label 50K+ sensor readings for a reinforcement-learning model.",
      "Visualized training metrics with matplotlib and TensorBoard, surfacing a reward-shaping bug that cut convergence time by 40%.",
      "Co-authored a 12-page workshop paper on sim-to-real transfer techniques, submitted to ICRA 2024.",
    ],
  },
];