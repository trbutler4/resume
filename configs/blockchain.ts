import { ResumeConfig } from "../types";
import {
  DefaultPersonalInfo,
  NakamotoWorkExperience,
  TholosWorkExperience,
  ETHChiWorkExperience,
  StarknetPhoneOpenSourceExperience,
  CairoZedOpenSourceExperience,
  KakarotBridgeProject,
  StarkSproutsProject,
  UIowaEducation,
} from "../experienceData";

export const blockchainConfig: ResumeConfig = {
  resumeType: "blockchain",
  title: "Blockchain Engineer",
  personalInfo: DefaultPersonalInfo,
  workExperience: [
    NakamotoWorkExperience,
    TholosWorkExperience,
    ETHChiWorkExperience,
  ],
  openSourceExperience: [
    StarknetPhoneOpenSourceExperience,
    CairoZedOpenSourceExperience,
  ],
  projects: [KakarotBridgeProject, StarkSproutsProject],
  education: [UIowaEducation],
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
    "Kubernetes",
  ],
  sectionsOrder: [
    "workExperience",
    "openSourceExperience",
    "projects",
    "education",
  ],
  emphasize: {
    keywords: [],
    metrics: [
      "$35M+ assets secured",
      "top 10% subnet performance",
      "15+ contributors",
    ],
  },
};
