import { ResumeConfig } from '../types';

export const blockchainConfig: ResumeConfig = {
  resumeType: "blockchain",
  title: "Blockchain Engineer",
  workExperience: {
    include: ["nakamoto-senior", "tholos-mobile", "ethchi-cofounder"],
    order: ["nakamoto-senior", "tholos-mobile", "ethchi-cofounder"]
  },
  openSourceExperience: {
    include: ["starknet-phone", "cairo-zed"],
    order: ["starknet-phone", "cairo-zed"]
  },
  projects: {
    include: ["kakarot-bridge", "starksprouts"],
    order: ["kakarot-bridge", "starksprouts"]
  },
  education: {
    include: ["university-iowa"]
  },
  skillsToHighlight: [
    "Solidity",
    "Cairo",
    "Rust",
    "Python",
    "Golang",
    "Ethereum",
    "Starknet",
    "React",
    "TypeScript",
    "AWS",
    "Docker",
    "Kubernetes"
  ],
  sectionsOrder: [
    "workExperience",
    "openSourceExperience",
    "projects",
    "education"
  ],
  emphasize: {
    keywords: [],
    metrics: [
      "$35M+ assets secured",
      "top 10% subnet performance",
      "15+ contributors"
    ]
  }
};