export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  tags: string[];
  cover?: string;
  readingTime: string;
}

export interface PostDetail extends Post {
  content: string;
  heroImage?: string;
}
