import { ResumeConfig, SkillSummary } from "./types";
import {
  DefaultPersonalInfo,
  NakamotoWorkExperience,
  TholosWorkExperience,
  CairoZedOpenSourceExperience,
  AISmartContractVulnerabilityProject,
  KakarotBridgeProject,
  UIowaEducation,
  SuffixLabsWorkExperience,
  StarknetPhoneOpenSourceExperience,
  StarkSproutsProject,
  ETHChiWorkExperience,
  ZkCreditProofsProject,
  StarkfishProject,
  SISCComputerProject,
  CurateProject,
  PeerioProject,
  NFTicketProject,
  DefaultSkillSummary,
} from "./experienceData";


// AI/ML engineer resume
export const aiMlConfig: ResumeConfig = {
  resumeType: "ai-ml",
  title: "Senior AI/ML Engineer",
  personalInfo: DefaultPersonalInfo,
  skillSummary: DefaultSkillSummary,
  workExperience: [NakamotoWorkExperience, TholosWorkExperience],
  openSourceExperience: [CairoZedOpenSourceExperience],
  projects: [AISmartContractVulnerabilityProject],
  education: [UIowaEducation],
  sectionsOrder: [
    "education",
    "skillSummary",
    "workExperience",
    "projects",
    "openSourceExperience",
  ],
  emphasize: {
    keywords: [],
    metrics: ["top 10% performance", "7000+ users"],
  },
};

// blockchain engineer resume
export const blockchainConfig: ResumeConfig = {
  resumeType: "blockchain",
  title: "Blockchain Engineer",
  personalInfo: DefaultPersonalInfo,
  skillSummary: DefaultSkillSummary,
  workExperience: [
    NakamotoWorkExperience,
    TholosWorkExperience,
    ETHChiWorkExperience,
  ],
  openSourceExperience: [
    StarknetPhoneOpenSourceExperience,
    CairoZedOpenSourceExperience,
  ],
  projects: [KakarotBridgeProject, StarkSproutsProject, ZkCreditProofsProject],
  education: [UIowaEducation],
  sectionsOrder: [
    "education",
    "skillSummary",
    "workExperience",
    "openSourceExperience",
    "projects",
  ],
  emphasize: {
    keywords: [],
    metrics: [
      "$35M+ assets secured",
      "top 10% subnet performance",
      "15+ contributors",
      "7000+ users",
    ],
  },
};

// full stack engineer resume
export const fullStackConfig: ResumeConfig = {
  resumeType: "full-stack",
  title: "Senior Full-Stack Software Engineer",
  personalInfo: DefaultPersonalInfo,
  skillSummary: DefaultSkillSummary,
  workExperience: [TholosWorkExperience, NakamotoWorkExperience],
  openSourceExperience: [
    StarknetPhoneOpenSourceExperience,
    CairoZedOpenSourceExperience,
  ],
  projects: [NFTicketProject, CurateProject, PeerioProject],
  education: [UIowaEducation],
  sectionsOrder: [
    "education",
    "skillSummary",
    "workExperience",
    "projects",
    "openSourceExperience",
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

// mobile engineer resume
export const mobileConfig: ResumeConfig = {
  resumeType: "mobile",
  title: "Senior Mobile Software Engineer",
  personalInfo: DefaultPersonalInfo,
  skillSummary: DefaultSkillSummary,
  workExperience: [TholosWorkExperience, NakamotoWorkExperience],
  openSourceExperience: [
    StarknetPhoneOpenSourceExperience,
    CairoZedOpenSourceExperience,
  ],
  projects: [StarkSproutsProject, KakarotBridgeProject],
  education: [UIowaEducation],
  sectionsOrder: [
    "education",
    "skillSummary",
    "workExperience",
    "openSourceExperience",
    "projects",
  ],
  emphasize: {
    keywords: [],
    metrics: ["$35M+ assets secured", "15+ contributors", "7000+ installs"],
  },
};

// Site Reliability Engineer resume
export const sreConfig: ResumeConfig = {
  resumeType: "full-stack",
  title: "Software Engineer - SRE",
  personalInfo: DefaultPersonalInfo,
  skillSummary: DefaultSkillSummary,
  workExperience: [TholosWorkExperience, NakamotoWorkExperience],
  openSourceExperience: [
    StarknetPhoneOpenSourceExperience,
    CairoZedOpenSourceExperience,
  ],
  projects: [],
  education: [UIowaEducation],
  sectionsOrder: [
    "education",
    "skillSummary",
    "workExperience",
    "projects",
    "openSourceExperience",
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

// Suffix Labs / contract work resume
export const suffixLabsConfig: ResumeConfig = {
  resumeType: "suffix-labs",
  title: "Founder & Blockchain Consultant",
  personalInfo: DefaultPersonalInfo,
  skillSummary: DefaultSkillSummary,
  workExperience: [
    SuffixLabsWorkExperience,
    TholosWorkExperience,
    NakamotoWorkExperience,
    ETHChiWorkExperience,
  ],
  openSourceExperience: [
    StarknetPhoneOpenSourceExperience,
    CairoZedOpenSourceExperience,
  ],
  projects: [],
  education: [UIowaEducation],
  sectionsOrder: [
    "education",
    "skillSummary",
    "workExperience",
    "openSourceExperience",
    "projects",
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

export const configs: Record<string, ResumeConfig> = {
  ai: aiMlConfig,
  blockchain: blockchainConfig,
  fullStack: fullStackConfig,
  mobile: mobileConfig,
  suffixLabs: suffixLabsConfig,
  sre: sreConfig,
};

export const getConfig = (configType: string): ResumeConfig => {
  const config = configs[configType];
  if (!config) {
    throw new Error(
      `Config type '${configType}' not found. Available types: ${Object.keys(configs).join(", ")}`,
    );
  }
  return config;
};

export const getAvailableConfigTypes = (): string[] => {
  return Object.keys(configs);
};
