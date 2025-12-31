export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  services: string[];
  imageUrl: string;
  typicalClients?: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    id: "pa1",
    title: "Inheritance Law",
    description: "Expert guidance on distributing assets, liabilities, and titles to legal heirs according to personal laws and the Indian Succession Act.",
    icon: "Briefcase",
    services: [
      "Will Drafting & Registration",
      "Probate & Letters of Administration",
      "Succession Certificates",
      "Guardianship Certificates",
      "Legal Heir Certificates",
      "Family Settlement Deeds"
    ],
    imageUrl: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
    typicalClients: "Daughters, Widows, Siblings"
  },
  {
    id: "pa2",
    title: "Ancestral Property Disputes",
    description: "Resolving complex disputes related to partition, coparcenary rights, and alienation of joint family property under Hindu Law.",
    icon: "Users",
    services: [
      "Partition Suits",
      "Rights of Coparceners",
      "Challenge to Sale Deeds",
      "Stay Orders on Property",
      "Mutation of Land Records",
      "Possession Recovery"
    ],
    imageUrl: "https://images.pexels.com/photos/814544/pexels-photo-814544.jpeg",
    typicalClients: "Joint Families, Farmers"
  },
  {
    id: "pa3",
    title: "Hindu Succession Law",
    description: "Specialized advice on the Hindu Succession Act, 1956 and its 2005 Amendment, covering intestate succession for both men and women.",
    icon: "Leaf",
    services: [
      "Women's Property Rights",
      "Daughter's Coparcenary Rights",
      "Class I & Class II Heirs",
      "Succession for Jains/Sikhs/Buddhists",
      "HUF Property Issues",
      "Disqualification of Heirs"
    ],
    imageUrl: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg",
    typicalClients: "Women, Legal Heirs"
  },
  {
    id: "pa4",
    title: "Document Registration",
    description: "Assistance with the drafting and registration of crucial property documents to prevent future disputes.",
    icon: "FileText",
    services: [
      "Gift Deeds",
      "Relinquishment Deeds",
      "Partition Deeds",
      "Will Registration",
      "Power of Attorney",
      "Trust Deeds"
    ],
    imageUrl: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
    typicalClients: "Property Buyers, Families"
  },
  {
    id: "pa5",
    title: "NRI Property Services",
    description: "Helping Non-Resident Indians manage, inherit, and protect their ancestral or self-acquired property in India remotely.",
    icon: "Globe",
    services: [
      "Property Title Search",
      "Illegal Possession disputes",
      "Transfer of Property",
      "Tenant Eviction",
      "Power of Attorney Management",
      "Repatriation of Sale Proceeds"
    ],
    imageUrl: "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg",
    typicalClients: "NRIs, Overseas Investors"
  },
  {
    id: "pa6",
    title: "Family Mediation",
    description: "Amicable out-of-court settlement of family property disputes to save time, money, and relationships.",
    icon: "Handshake",
    services: [
      "Family Settlement Agreements",
      "Mediation & Conciliation",
      "Arbitration in Family Feuds",
      "Negotiation Representation",
      "Drafting MoU (Memorandum of Understanding)",
      "Counselling for Heirs"
    ],
    imageUrl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    typicalClients: "Disputing Relatives"
  }
];