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

export const sreConfig: ResumeConfig = {
  resumeType: "full-stack",
  title: "Software Engineer - SRE",
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
    "Bash",
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
