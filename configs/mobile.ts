import { ResumeConfig } from '../types';
import {
  DefaultPersonalInfo,
  TholosWorkExperience,
  NakamotoWorkExperience,
  StarknetPhoneOpenSourceExperience,
  CairoZedOpenSourceExperience,
  StarkSproutsProject,
  KakarotBridgeProject,
  UIowaEducation
} from '../experience-data';

export const mobileConfig: ResumeConfig = {
  resumeType: "mobile",
  title: "Senior Mobile Software Engineer",
  personalInfo: DefaultPersonalInfo,
  workExperience: [
    TholosWorkExperience,
    NakamotoWorkExperience
  ],
  openSourceExperience: [
    StarknetPhoneOpenSourceExperience,
    CairoZedOpenSourceExperience
  ],
  projects: [
    StarkSproutsProject,
    KakarotBridgeProject
  ],
  education: [
    UIowaEducation
  ],
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
    "React"
  ],
  sectionsOrder: [
    "workExperience",
    "openSourceExperience",
    "projects",
    "education"
  ],
  emphasize: {
    keywords: [],
    metrics: ["$35M+ assets secured", "15+ contributors", "7000+ installs"]
  }
};