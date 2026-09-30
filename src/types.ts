export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  subTitle?: string;
  industry: string;
  industryCategory: 'ict' | 'consultancy' | 'hospitality' | 'all';
  location?: string;
  summary?: string;
  categories: {
    title: string;
    items: string[];
  }[];
  keyAchievements?: string[];
  skillsUsed: string[];
}

export interface MetricHighlight {
  id: string;
  title: string;
  stat?: string;
  description: string;
  detail: string;
  badge: string;
  iconName: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}

export interface ToolCategory {
  category: string;
  description: string;
  items: {
    name: string;
    category: string;
    proficiency: string;
    useCase: string;
    icon?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  type: 'degree' | 'diploma' | 'certification';
  details: string;
  topics?: string[];
}

export interface ReferenceItem {
  name: string;
  title: string;
  company: string;
  phone: string;
  email: string;
  relationship: string;
}

export interface AwardItem {
  title: string;
  organization: string;
  year: string;
  description: string;
}
