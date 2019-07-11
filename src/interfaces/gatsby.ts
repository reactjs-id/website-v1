export interface Edge<T> {
  edges: T[];
}

export interface GatsbyNode<T> {
  node: T;
}

export interface SiteMetadata {
  title: string;
  description: string;
}
