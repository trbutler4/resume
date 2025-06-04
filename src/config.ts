import { ResumeConfig, SectionName } from "./types";
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
  DefaultProfessionalSummary,
} from "./experienceData";

const baseMetrics = ["$35M+ Million", "15+ contributors", "7000+ users"];
const baseSectionOrder: SectionName[] = [
  "professionalSummary",
  "workExperience",
  "projects",
  "openSourceExperience",
  "education",
];

// AI/ML engineer resume
export const aiMlConfig: ResumeConfig = {
  resumeType: "ai-ml",
  title: "Senior AI/ML Engineer",
  personalInfo: DefaultPersonalInfo,
  professionalSummary: DefaultProfessionalSummary,
  workExperience: [NakamotoWorkExperience, TholosWorkExperience],
  openSourceExperience: [CairoZedOpenSourceExperience],
  projects: [AISmartContractVulnerabilityProject],
  education: [UIowaEducation],
  sectionsOrder: baseSectionOrder,
  emphasize: {
    keywords: [],
    metrics: baseMetrics,
  },
};

// blockchain engineer resume
export const blockchainConfig: ResumeConfig = {
  resumeType: "blockchain",
  title: "Blockchain Engineer",
  personalInfo: DefaultPersonalInfo,
  professionalSummary: DefaultProfessionalSummary,
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
  sectionsOrder: baseSectionOrder,
  emphasize: {
    keywords: [],
    metrics: baseMetrics,
  },
};

// full stack engineer resume
export const fullStackConfig: ResumeConfig = {
  resumeType: "full-stack",
  title: "Senior Full-Stack Software Engineer",
  personalInfo: DefaultPersonalInfo,
  professionalSummary: DefaultProfessionalSummary,
  workExperience: [TholosWorkExperience, NakamotoWorkExperience],
  openSourceExperience: [
    StarknetPhoneOpenSourceExperience,
    CairoZedOpenSourceExperience,
  ],
  projects: [NFTicketProject, CurateProject, PeerioProject],
  education: [UIowaEducation],
  sectionsOrder: baseSectionOrder,
  emphasize: {
    keywords: [],
    metrics: baseMetrics,
  },
};

// mobile engineer resume
export const mobileConfig: ResumeConfig = {
  resumeType: "mobile",
  title: "Senior Mobile Software Engineer",
  personalInfo: DefaultPersonalInfo,
  professionalSummary: DefaultProfessionalSummary,
  workExperience: [TholosWorkExperience, NakamotoWorkExperience],
  openSourceExperience: [
    StarknetPhoneOpenSourceExperience,
    CairoZedOpenSourceExperience,
  ],
  projects: [StarkSproutsProject, KakarotBridgeProject],
  education: [UIowaEducation],
  sectionsOrder: baseSectionOrder,
  emphasize: {
    keywords: [],
    metrics: baseMetrics,
  },
};

// Site Reliability Engineer resume
export const sreConfig: ResumeConfig = {
  resumeType: "full-stack",
  title: "Software Engineer - SRE",
  personalInfo: DefaultPersonalInfo,
  professionalSummary: DefaultProfessionalSummary,
  workExperience: [TholosWorkExperience, NakamotoWorkExperience],
  openSourceExperience: [
    StarknetPhoneOpenSourceExperience,
    CairoZedOpenSourceExperience,
  ],
  projects: [],
  education: [UIowaEducation],
  sectionsOrder: baseSectionOrder,
  emphasize: {
    keywords: [],
    metrics: baseMetrics,
  },
};

// Suffix Labs / contract work resume
export const suffixLabsConfig: ResumeConfig = {
  resumeType: "suffix-labs",
  title: "Founder & Blockchain Consultant",
  personalInfo: DefaultPersonalInfo,
  professionalSummary: DefaultProfessionalSummary,
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
  sectionsOrder: baseSectionOrder,
  emphasize: {
    keywords: [],
    metrics: baseMetrics,
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
