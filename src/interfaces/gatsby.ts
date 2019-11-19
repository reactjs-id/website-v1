export interface Edge<T> {
  edges: T[];
}

export interface GatsbyContentNode<T> {
  node: T;
}

export interface SiteMetadata {
  title: string;
  tagline: string;
  description: string;
}

export interface LeaningMaterial {
  id: string;
  type: string;
  title: string;
  description: string;
  url: string;
  featured?: boolean;
}
