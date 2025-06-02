import { ResumeConfig } from '../types';
import {
  DefaultPersonalInfo,
  NakamotoWorkExperience,
  TholosWorkExperience,
  CairoZedOpenSourceExperience,
  AISmartContractVulnerabilityProject,
  KakarotBridgeProject,
  UIowaEducation
} from '../experience-data';

export const aiMlConfig: ResumeConfig = {
  resumeType: "ai-ml",
  title: "Senior AI/ML Engineer",
  personalInfo: DefaultPersonalInfo,
  workExperience: [
    NakamotoWorkExperience,
    TholosWorkExperience
  ],
  openSourceExperience: [
    CairoZedOpenSourceExperience
  ],
  projects: [
    AISmartContractVulnerabilityProject,
    KakarotBridgeProject
  ],
  education: [
    UIowaEducation
  ],
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