import { ResumeConfig } from "./types";
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
} from "./experienceData";

export const aiMlConfig: ResumeConfig = {
  resumeType: "ai-ml",
  title: "Senior AI/ML Engineer",
  personalInfo: DefaultPersonalInfo,
  workExperience: [NakamotoWorkExperience, TholosWorkExperience],
  openSourceExperience: [CairoZedOpenSourceExperience],
  projects: [AISmartContractVulnerabilityProject, KakarotBridgeProject],
  education: [UIowaEducation],
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
    metrics: ["top 10% performance"],
  },
};

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

export const mobileConfig: ResumeConfig = {
  resumeType: "mobile",
  title: "Senior Mobile Software Engineer",
  personalInfo: DefaultPersonalInfo,
  workExperience: [TholosWorkExperience, NakamotoWorkExperience],
  openSourceExperience: [
    StarknetPhoneOpenSourceExperience,
    CairoZedOpenSourceExperience,
  ],
  projects: [StarkSproutsProject, KakarotBridgeProject],
  education: [UIowaEducation],
  skillsToHighlight: [
    "React Native",
    "JavaScript",
    "TypeScript",
    "Java",
    "Kotlin",
    "Android Studio",
    "Expo",
    "iOS",
    "Android",
    "NDK",
    "JNI",
    "Git/Github",
    "AWS",
    "ThreeJS",
    "React",
  ],
  sectionsOrder: [
    "workExperience",
    "openSourceExperience",
    "projects",
    "education",
  ],
  emphasize: {
    keywords: [],
    metrics: ["$35M+ assets secured", "15+ contributors", "7000+ installs"],
  },
};

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
