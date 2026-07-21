export interface ExperienceProps {
  company: string,
  role: string
  period: string,
  location: string,
  bullets: string[]
}

export const EXPERIENCE: ExperienceProps[] = [
  {
    company: "Society of Asian Scientists and Engineers (SASE ASU)",
    role: "Junior Web Designer",
    period: "Jan 2026 – May 2026",
    location: "Phoenix, AZ",
    bullets: [
      "Implemented a web UI layout for society activities and events, highlighting the contributions of Asian heritage scientists and engineers",
      "Developed backend functionality with Python and Django, integrating SQLite databases to manage event and organization content",
    ],
  },
  {
    company: "Irenic Therapeutic Services PLLC",
    role: "Software Engineer Intern",
    period: "Sep 2025 – Dec 2025",
    location: "Remote",
    bullets: [
      "Executed continuous delivery pipelines within two-week Agile sprints, launching iterative updates and features for a healthtech therapeutic application",
      "Partnered with clinical and product teams to define scope for a new patient feature, delivering the minimum viable product",
      "Optimized SQL queries for data retrieval, filtering, aggregation, and reporting, improving application responsiveness and supporting analytics dashboards",
    ],
  },
  {
    company: "Opportunity Hack",
    role: "Software Engineer Intern",
    period: "Jun 2025 – Aug 2025",
    location: "Remote",
    bullets: [
      "Spearheaded an end-to-end AI platform that leverages intelligent recommendation systems to analyze user preferences and deliver high-compatibility animal matches",
      "Processed datasets to CSV for model evaluation and experiment tracking while storing production data in MongoDB",
      "Implemented recommendation models with scikit-learn, utilizing Random Forest and Logistic Regression to improve pet-user compatibility by 80%",
    ],
  },
];