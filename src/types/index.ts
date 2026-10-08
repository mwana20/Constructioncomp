export type PageId = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'projects' 
  | 'progress' 
  | 'team' 
  | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  image: string;
  iconName: string;
}

export type ProjectStage = 'Foundation Stage' | 'Foundation' | 'Under Construction' | 'Completed';
export type ProjectCategory = 'Residential' | 'Commercial' | 'Renovation';

export interface ProjectTimelineStage {
  stage: string;
  description: string;
  status: 'completed' | 'in-progress' | 'pending';
  progressPercentage: number;
}

export interface Project {
  id: string;
  name: string;
  location: string;
  category: ProjectCategory;
  stage: ProjectStage;
  progress: number;
  duration: string;
  description: string;
  keyFeatures: string[];
  image: string;
  timeline: ProjectTimelineStage[];
  clientType: string;
  isFeatured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'management' | 'engineers' | 'supervisors' | 'foremen' | 'skilled' | 'support';
  categoryLabel: string;
  experience: string;
  bio: string;
  avatarSeed: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientType: string;
  project: string;
  location: string;
}

export interface QuoteFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  projectType: string;
  projectLocation: string;
  estimatedBudget: string;
  expectedStartDate: string;
  projectDescription: string;
  files: { name: string; size: string }[];
}
