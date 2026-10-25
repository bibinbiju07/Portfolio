import {
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Flame,
  Film,
  Globe2,
  Server,
  ShieldCheck,
} from "lucide-react";

export type ProjectCategory =
  | "Web Development"
  | "Machine Learning"
  | "Backend";

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  icon: typeof ShieldCheck;
  overview: string;
  role: string;
  challenges: string;
  results: string;
  confidential?: boolean;
}

export const projects: PortfolioProject[] = [
  {
    id: "freight-platform",
    title: "Confidential Freight Quotation Platform",
    description: "A web application for secure, real-time freight quotations.",
    category: "Web Development",
    technologies: ["Next.js", "React", "TypeScript"],
    icon: ShieldCheck,
    overview:
      "A confidential platform concept for managing freight quotations through a modern web interface.",
    role: "Specific responsibilities are not included in this public project summary.",
    challenges:
      "The implementation details are confidential, so internal workflows and technical specifics are intentionally omitted.",
    results:
      "No client details, internal screenshots, metrics, or proprietary implementation details are published.",
    confidential: true,
  },
  {
    id: "auditing-tool",
    title: "Internal Auditing Tool",
    description: "A tool to streamline internal audit processes and reporting.",
    category: "Web Development",
    technologies: ["ASP.NET Core MVC", "C#", "JavaScript", "Bootstrap", "DevExpress"],
    icon: BriefcaseBusiness,
    overview:
      "An internal web tool focused on organizing audit processes and reporting.",
    role: "Specific responsibilities are not included in this public project summary.",
    challenges:
      "Internal workflows and implementation details are not shared to protect company information.",
    results:
      "No internal screenshots, company data, metrics, or proprietary details are published.",
    confidential: true,
  },
  {
    id: "fire-detection",
    title: "Fire Detection System",
    description: "AI-powered fire detection using computer vision.",
    category: "Machine Learning",
    technologies: ["Python", "YOLOv5", "OpenCV", "Flask"],
    icon: Flame,
    overview:
      "A computer-vision project exploring fire detection using an object detection model.",
    role: "A project summary is available; individual contributions are not specified.",
    challenges:
      "The supplied project summary does not include implementation or evaluation specifics.",
    results:
      "No performance metrics or unverified detection claims are presented.",
  },
  {
    id: "movie-recommendation",
    title: "Movie Recommendation System",
    description: "A movie recommender based on content and user preferences.",
    category: "Machine Learning",
    technologies: ["Python", "TF-IDF", "Cosine Similarity", "Flask"],
    icon: Film,
    overview:
      "A recommendation project using text features and similarity to surface related movies.",
    role: "A project summary is available; individual contributions are not specified.",
    challenges:
      "The supplied project summary does not include implementation or evaluation specifics.",
    results:
      "No performance metrics or unverified recommendation claims are presented.",
  },
  {
    id: "real-estate",
    title: "Real Estate Management System",
    description: "A platform to manage properties, clients, and transactions.",
    category: "Backend",
    technologies: ["Flask", "MySQL"],
    icon: Globe2,
    overview:
      "A web application concept for organizing property, client, and transaction information.",
    role: "A project summary is available; individual contributions are not specified.",
    challenges:
      "The supplied project summary does not include implementation specifics.",
    results:
      "No performance metrics or unverified outcomes are presented.",
  },
];

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Databases and Tools"
  | "AI and Machine Learning";

export interface PortfolioSkill {
  name: string;
  description: string;
  projectIds: string[];
}

export interface SkillGroup {
  title: SkillCategory;
  icon: typeof Code2;
  skills: PortfolioSkill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "HTML", description: "Markup for structuring web content.", projectIds: ["auditing-tool"] },
      { name: "CSS", description: "Styles and layouts for web interfaces.", projectIds: ["auditing-tool"] },
      { name: "JavaScript", description: "Programming language used to add behavior to web applications.", projectIds: ["auditing-tool"] },
      { name: "React", description: "Component-based library for building user interfaces.", projectIds: ["freight-platform"] },
      { name: "Next.js", description: "React framework used for full-stack web applications.", projectIds: ["freight-platform"] },
      { name: "TypeScript", description: "Typed JavaScript used to improve code clarity and maintainability.", projectIds: ["freight-platform"] },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "C#", description: "Programming language used with the .NET ecosystem.", projectIds: ["auditing-tool"] },
      { name: ".NET Core MVC", description: "Framework for building server-rendered web applications.", projectIds: ["auditing-tool"] },
      { name: "Python", description: "Programming language used in web and machine-learning projects.", projectIds: ["fire-detection", "movie-recommendation"] },
      { name: "Flask", description: "Python web framework used to build lightweight web applications.", projectIds: ["fire-detection", "movie-recommendation", "real-estate"] },
    ],
  },
  {
    title: "Databases and Tools",
    icon: Database,
    skills: [
      { name: "MySQL", description: "Relational database used to store structured application data.", projectIds: ["real-estate"] },
      { name: "PostgreSQL", description: "Relational database technology.", projectIds: [] },
      { name: "MongoDB", description: "Document-oriented database technology.", projectIds: [] },
      { name: "Git", description: "Version control system for tracking code changes.", projectIds: [] },
    ],
  },
  {
    title: "AI and Machine Learning",
    icon: BrainCircuit,
    skills: [
      { name: "YOLOv5", description: "Object detection model used in the fire detection project.", projectIds: ["fire-detection"] },
      { name: "OpenCV", description: "Computer-vision library used in the fire detection project.", projectIds: ["fire-detection"] },
      { name: "TF-IDF", description: "Text representation method used in the movie recommendation project.", projectIds: ["movie-recommendation"] },
      { name: "Cosine Similarity", description: "Similarity measure used to compare movie representations.", projectIds: ["movie-recommendation"] },
    ],
  },
];
