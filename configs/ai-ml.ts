import { ResumeConfig } from '../types';

export const aiMlConfig: ResumeConfig = {
  resumeType: "ai-ml",
  title: "Senior AI/ML Engineer",
  workExperience: {
    include: ["nakamoto-senior", "tholos-mobile"],
    order: ["nakamoto-senior", "tholos-mobile"]
  },
  openSourceExperience: {
    include: ["cairo-zed"],
    order: ["cairo-zed"],
    limit: 1
  },
  projects: {
    include: ["ai-smart-contract-vuln", "kakarot-bridge"],
    order: ["ai-smart-contract-vuln", "kakarot-bridge"],
    limit: 2
  },
  education: {
    include: ["university-iowa"]
  },
  skillsToHighlight: [
    "Python",
    "PyTorch",
    "NumPy",
    "Rust",
    "Golang",
    "Machine Learning",
    "Deep Learning",
    "Kubernetes",
    "AWS",
    "Docker",
    "Git/Github",
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
    metrics: ["top 10% performance"]
  }
};