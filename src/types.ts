export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
  onlydust: string;
}

export interface WorkExperience {
  id: string;
  position: string;
  company: string;
  duration: string;
  responsibilities: string[];
  tools: string[];
  status?: "optional";
}

export interface OpenSourceExperience {
  id: string;
  position: string;
  project: string;
  duration: string;
  link: string;
  responsibilities: string[];
  tools: string[];
}

export interface Project {
  id: string;
  name: string;
  link: string;
  description: string;
  achievements?: string[];
  hackathonLink?: string;
  additionalInfo?: string;
  tools: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
}

export interface ExperienceData {
  personalInfo: PersonalInfo;
  workExperience: WorkExperience[];
  openSourceExperience: OpenSourceExperience[];
  projects: Project[];
  education: Education[];
}

export interface EmphasizeConfig {
  keywords: string[];
  metrics: string[];
}

export type SectionName =
  | "workExperience"
  | "openSourceExperience"
  | "projects"
  | "education";

export interface ResumeConfig {
  resumeType: string;
  title: string;
  personalInfo: PersonalInfo;
  workExperience: WorkExperience[];
  openSourceExperience: OpenSourceExperience[];
  projects: Project[];
  education: Education[];
  sectionsOrder: SectionName[];
  emphasize: EmphasizeConfig;
}
