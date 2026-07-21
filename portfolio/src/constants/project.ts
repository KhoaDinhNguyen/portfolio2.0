import animalChessImage from "@assets/animal-chess.jpg";
import aiChatImage from "@assets/ai-chat.jpg";
import messager from "@assets/messager.jpg"

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
      "Built a modern online implementation of Animal Chess using Next.js, React, and Supabase, featuring real-time multiplayer gameplay, responsive UI, and an AI opponent powered by the Minimax algorithm.",
    image: animalChessImage,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Socket.IO", "Supabase", "PostgreSQL"],
    highlights: [
      "Minimax AI with alpha-beta pruning",
      "Real-time sync via Socket.IO rooms",
      "Responsive and modern UI",
      "Supabase integration",
    ],
    github: "https://github.com/KhoaDinhNguyen/animal-chess",
    demo: "https://animal-chess-6osp.vercel.app/",
    color: "#22C55E",
  },
  {
    title: "AI Assistant",
    subtitle: "LM-Powered Chat Application",
    description:
      "A full-stack AI chatbot application using React frontend and Flask backend services. Integrated Google's Gemini API with RESTful endpoints, optimized LLM interactions through prompt engineering and context caching, and managed structured JSON request/response workflows.",
    image: aiChatImage,
    tags: ["React", "Flask", "Gemini API", "REST API", "Python", "JSON"],
    highlights: [
      "Built full-stack conversational AI architecture",
      "Integrated Gemini API with optimized API workflows",
      "Implemented prompt engineering techniques",
      "Added context caching to improve AI performance",
    ],
    github: "https://github.com/KhoaDinhNguyen/ai-chatbox",
    demo: "https://ai-chatbox-app-six.vercel.app/",
    color: "#3B82F6",
  },
  {
    title: "MessApp",
    subtitle: "Real-Time Messaging Platform",
    description:
      "A full-stack messaging application built with React and Express, featuring real-time communication through Socket.io and a scalable GraphQL API layer. Designed MongoDB data models to manage user profiles, conversations, notifications, and social content while optimizing data retrieval and reducing unnecessary client payloads.",
    image: messager,
    tags: ["React", "Redux", "Express", "MongoDB", "GraphQL", "Socket.io"],
    highlights: [
      "Built real-time messaging with WebSocket communication",
      "Designed MongoDB schemas for users, messages, and notifications",
      "Implemented GraphQL API layer to optimize data fetching",
      "Reduced client-side data over-fetching by 40%",
    ],
    github: "https://github.com/KhoaDinhNguyen/messenger",
    demo: "",
    color: "#a78bfa",
  },
];
