import { ResumeConfig } from '../types';

export const fullStackConfig: ResumeConfig = {
  resumeType: "full-stack",
  title: "Senior Full-Stack Software Engineer",
  workExperience: {
    include: ["tholos-mobile", "nakamoto-senior"],
    order: ["tholos-mobile", "nakamoto-senior"]
  },
  openSourceExperience: {
    include: ["starknet-phone", "cairo-zed"],
    order: ["starknet-phone", "cairo-zed"]
  },
  projects: {
    include: ["kakarot-bridge", "starksprouts", "ai-smart-contract-vuln"],
    order: ["kakarot-bridge", "starksprouts", "ai-smart-contract-vuln"],
    limit: 3
  },
  education: {
    include: ["university-iowa"]
  },
  skillsToHighlight: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Golang",
    "React",
    "React Native",
    "Node.js",
    "Postgres",
    "Redis",
    "AWS",
    "Docker",
    "Kubernetes",
    "Git/Github",
    "REST APIs",
    "Microservices",
    "Linux"
  ],
  sectionsOrder: [
    "workExperience",
    "projects",
    "openSourceExperience",
    "education"
  ],
  emphasize: {
    keywords: [],
    metrics: [
      "$35M+ assets secured",
      "entire stack ownership",
      "multi-timezone remote team",
      "15+ contributors"
    ]
  }
};