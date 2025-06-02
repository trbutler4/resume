import { ResumeConfig } from "../types";
import {
  DefaultPersonalInfo,
  SuffixLabsWorkExperience,
  TholosWorkExperience,
  NakamotoWorkExperience,
  StarknetPhoneOpenSourceExperience,
  CairoZedOpenSourceExperience,
  KakarotBridgeProject,
  StarkSproutsProject,
  AISmartContractVulnerabilityProject,
  UIowaEducation,
} from "../experienceData";

export const suffixLabsConfig: ResumeConfig = {
  resumeType: "suffix-labs",
  title: "Founder & Blockchain Consultant",
  personalInfo: DefaultPersonalInfo,
  workExperience: [
    SuffixLabsWorkExperience,
    TholosWorkExperience,
    NakamotoWorkExperience,
  ],
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
    "Solidity",
    "React",
    "TypeScript",
    "Python",
    "Rust",
    "Golang",
    "Web3",
    "Smart Contracts",
    "Foundry",
    "Hardhat",
    "Ethereum",
    "Starknet",
    "Consulting",
    "Project Management",
    "AWS",
    "Docker",
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
      "Founded LLC",
      "blockchain validator",
      "multi-client consulting",
      "$35M+ assets secured",
      "15+ contributors",
    ],
  },
};
