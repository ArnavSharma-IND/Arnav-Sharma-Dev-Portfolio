export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  category: 'ai' | 'cyber' | 'dev' | 'data';
  liveLink?: string;
  gitLink?: string;
  image?: string;
  features?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: number;
  score?: string;
  badge?: string;
  category: 'nptel' | 'corporate' | 'simulation';
  description?: string;
}

export interface Skill {
  name: string;
  proficiency: number;
  category: 'programming' | 'ai' | 'web' | 'data' | 'tools' | 'concepts';
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  year: string;
  score: string;
  details?: string[];
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  organization: string;
  description: string;
  type: 'hackathon' | 'workshop' | 'activity' | 'certification';
  badge?: string;
}
