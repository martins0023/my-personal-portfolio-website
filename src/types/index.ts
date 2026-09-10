export type ProjectCategory =
  | 'All'
  | 'HealthTech'
  | 'Mentorship / EdTech'
  | 'FoodTech'
  | 'Brand & Systems';

export interface ProjectMetric {
  value: string;
  label: string;
  change?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  type: 'live' | 'github' | 'case-study' | 'preview';
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  category: Exclude<ProjectCategory, 'All'>;
  clientOrOrg?: string;
  role: string;
  period: string;
  featured: boolean;
  tags: string[];
  problem: string;
  solution: string;
  outcome: string;
  metrics: ProjectMetric[];
  architectureHighlights: string[];
  links: ProjectLink[];
  badgeColor?: {
    lightBg: string;
    lightText: string;
    darkBg: string;
    darkText: string;
    border: string;
  };
}

export interface ImpactMetric {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: 'zap' | 'users' | 'activity' | 'shield' | 'trending-up' | 'layers';
  highlightColor?: string;
}

export interface NowStatus {
  statusText: string;
  currentRole: string;
  location: string;
  lastUpdated: string;
  building: {
    title: string;
    description: string;
  }[];
  education: {
    title: string;
    description: string;
  }[];
  exploring: {
    title: string;
    description: string;
  }[];
}

export type ShelfCategory =
  | 'Books'
  | 'Audiobooks'
  | 'Podcasts'
  | 'Key Talks'
  | 'Core Tools';

export interface ShelfItem {
  id: string;
  title: string;
  creator: string;
  category: ShelfCategory;
  tag: string;
  takeaway: string;
  url?: string;
}
