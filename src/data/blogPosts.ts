export interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  summary: string;
  content: string;
  imageUrl: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "bp1",
    title: "The Changing Landscape of Data Privacy Regulations",
    category: "Technology Law",
    author: "Michael R. Chen",
    date: "May 15, 2024",
    summary: "An analysis of recent developments in data privacy laws and their implications for businesses operating across multiple jurisdictions.",
    content: "Data privacy regulations continue to evolve rapidly across the globe, creating complex compliance challenges for businesses. This article examines recent legislative developments and court decisions that are reshaping how companies must approach data collection, processing, and protection...",
    imageUrl: "https://images.pexels.com/photos/5668867/pexels-photo-5668867.jpeg",
    featured: true
  },
  {
    id: "bp2",
    title: "ESG Reporting: Legal Requirements and Best Practices",
    category: "Environmental Law",
    author: "Sophia A. Rodriguez",
    date: "April 28, 2024",
    summary: "A guide to emerging ESG (Environmental, Social, and Governance) reporting requirements and strategies for effective compliance.",
    content: "As investors, regulators, and consumers increasingly focus on corporate sustainability and social responsibility, ESG reporting has transformed from a voluntary practice to a critical compliance issue. This article outlines current regulatory requirements and offers practical guidance...",
    imageUrl: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    featured: true
  },
  {
    id: "bp3",
    title: "Remote Work Policies: Legal Considerations for Employers",
    category: "Employment Law",
    author: "Daniel J. Washington",
    date: "March 12, 2024",
    summary: "Key legal issues and best practices for companies implementing or updating remote work policies post-pandemic.",
    content: "The widespread adoption of remote work arrangements has created numerous legal challenges for employers, from wage and hour compliance to data security concerns. This article addresses critical legal considerations when developing or revising remote work policies...",
    imageUrl: "https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg",
    featured: false
  },
  {
    id: "bp4",
    title: "Artificial Intelligence and IP Protection: New Frontiers",
    category: "Intellectual Property",
    author: "Michael R. Chen",
    date: "February 3, 2024",
    summary: "Exploring the intellectual property challenges presented by AI-generated content and innovations.",
    content: "As artificial intelligence capabilities advance rapidly, they present unprecedented challenges to traditional intellectual property frameworks. This article examines how courts and legislators are addressing questions of ownership, originality, and infringement in the context of AI-generated works...",
    imageUrl: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
    featured: false
  }
];