export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  linkedin?: string;
  github?: string;
}

export interface JobExperience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  achievements?: string[];
}

export interface Education {
  institution: string;
  course: string;
  period: string;
  degree?: string;
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  tools: string[];
  methodologies?: string[];
}

export interface CVData {
  personal: PersonalInfo;
  summary: string;
  experience: JobExperience[];
  education: Education[];
  skills: Skills;
  certifications?: string[];
  projects?: {
    name: string;
    description: string;
    technologies: string[];
  }[];
}