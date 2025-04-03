export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  imageUrl?: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
