export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  tags: string[];
  cover: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  highlight?: string;
}

export interface ProjectDetail extends Project {
  longDescription: string;
  problem: string;
  solution: string;
  outcomes: string[];
  insights: string[];
}
