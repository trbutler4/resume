import { ResumeConfig } from "../types";
import {
  DefaultPersonalInfo,
  TholosWorkExperience,
  NakamotoWorkExperience,
  StarknetPhoneOpenSourceExperience,
  CairoZedOpenSourceExperience,
  KakarotBridgeProject,
  StarkSproutsProject,
  AISmartContractVulnerabilityProject,
  UIowaEducation,
} from "../experienceData";

export const fullStackConfig: ResumeConfig = {
  resumeType: "full-stack",
  title: "Senior Full-Stack Software Engineer",
  personalInfo: DefaultPersonalInfo,
  workExperience: [TholosWorkExperience, NakamotoWorkExperience],
  openSourceExperience: [
    StarknetPhoneOpenSourceExperience,
    CairoZedOpenSourceExperience,
  ],
  projects: [
    KakarotBridgeProject,
    StarkSproutsProject,
    AISmartContractVulnerabilityProject,
  ],
  education: [UIowaEducation],
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
    "Linux",
  ],
  sectionsOrder: [
    "workExperience",
    "projects",
    "openSourceExperience",
    "education",
  ],
  emphasize: {
    keywords: [],
    metrics: [
      "$35M+ assets secured",
      "entire stack ownership",
      "multi-timezone remote team",
      "15+ contributors",
    ],
  },
};
