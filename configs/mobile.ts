import { ResumeConfig } from '../types';

export const mobileConfig: ResumeConfig = {
  resumeType: "mobile",
  title: "Senior Mobile Software Engineer",
  workExperience: {
    include: ["tholos-mobile", "nakamoto-senior"],
    order: ["tholos-mobile", "nakamoto-senior"]
  },
  openSourceExperience: {
    include: ["starknet-phone", "cairo-zed"],
    order: ["starknet-phone", "cairo-zed"]
  },
  projects: {
    include: ["starksprouts", "kakarot-bridge"],
    order: ["starksprouts", "kakarot-bridge"],
    limit: 2
  },
  education: {
    include: ["university-iowa"]
  },
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