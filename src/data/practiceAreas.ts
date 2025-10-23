export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  services: string[];
  imageUrl: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    id: "pa1",
    title: "Inheritance Law",
    description: "Inheritance law is the practice of distributing a person's property to their legal heirs after they die. It also covers the distribution of debts, titles, and other rights and obligations.",
    icon: "Briefcase",
    services: [
      "Mergers & Acquisitions",
      "Proper Governance",
      "Securities Compliance",
      "Business Formation",
      "Commercial Contracts",
      "Corporate Restructuring"
    ],
    imageUrl: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg"
  },
  {
    id: "pa2",
    title: "Intellectual Property",
    description: "Protection and enforcement of valuable intellectual assets, including patents, trademarks, copyrights, and trade secrets in domestic and international markets.",
    icon: "Lightbulb",
    services: [
      "Patent Prosecution & Litigation",
      "Trademark Registration & Defense",
      "Copyright Protection",
      "IP Portfolio Management",
      "Technology Licensing",
      "Trade Secret Protection"
    ],
    imageUrl: "https://images.pexels.com/photos/3760810/pexels-photo-3760810.jpeg"
  },
  {
    id: "pa3",
    title: "Hindu Succession Law",
    description: "The Hindu Succession Act, 1956 is a key piece of Indian legislation that governs the intestate (without a will) succession and inheritance of property among Hindus the religion it includes:-",
    icon: "Leaf",
    services: [
      "Jains",
      "Buddhists",
      "Sikhs",
      "Permitting & Approvals",
      "Environmental Litigation",
      "Sustainable Development"
    ],
    imageUrl: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg"
  },
];