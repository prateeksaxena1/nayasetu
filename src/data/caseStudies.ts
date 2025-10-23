export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  outcome: string;
  challenge: string;
  solution: string;
  result: string;
  clientType: string;
  imageUrl: string;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs1",
    title: "Munni Devi v/s Rajendra (Lallu) Lal",
    category: "Inheritance Law",
    challenge: "Munni Devi is struggling with a legal dispute over property rights and inheritance due to a lack of legal representation, awareness of her rights, and emotional support, leading to a prolonged and stressful legal battle.",
    solution: "Munni Devi is struggling with a legal dispute over property rights and inheritance due to a lack of legal representation, awareness of her rights, and emotional support, leading to a prolonged and stressful legal battle.",
    result: "Successfully completed the merger with minimal divestitures, secured regulatory approval across three jurisdictions, and maintained 92% of the projected synergy value.",
    clientType: "Inheritance Law",
    imageUrl: "https://i.pinimg.com/736x/f6/30/07/f63007089ebc4374541438320d97801d.jpg",
    featured: true
  },
  {
    id: "cs2",
    title: "Jai Narain v. Narain Singh",
    category: "Agricultural Land Matter",
    outcome: "Inheritance Case",
    challenge: "In Jai Narain v. Narain Singh, the Rajasthan High Court (decision dated July 29, 1955) dealt with a mutation dispute relating to agricultural land. After Narain Singh's father, a recorded khatedar (tenant), died, Narain Singh applied to have his name mutated in the revenue records. Jai Narain objected, claiming that the land originally belonged to his father and had been fraudulently taken by Narain Singh’s father",
    solution: "We conducted extensive prior art research, challenged the validity of the plaintiff's patent claims, and demonstrated the unique aspects of our client's innovation through technical expert testimony.",
    result: "Case dismissed with prejudice, securing our client's right to continue production without licensing fees or royalties, saving an estimated $75M in potential damages.",
    clientType: "Pharmaceutical Company",
    imageUrl: "https://i.pinimg.com/736x/2c/da/e0/2cdae0a3e3aff447dd5beb7519d557ff.jpg",
    featured: true
  },
  {
    id: "cs3",
    title: "Arunachala Gounder (Dead) By Lrs vs Ponnusamy",
    category: "Inheritance Case",
    outcome: "Delayed in Verdict",
    challenge: "An energy company faced multiple regulatory hurdles and community opposition for a proposed expansion project due to environmental concerns and historical compliance issues.",
    solution: "Our environmental law team conducted a comprehensive impact assessment, engaged with community stakeholders, and developed an innovative compliance framework that exceeded regulatory requirements.",
    result: "Project received full regulatory approval with community support, implemented sustainable practices that reduced emissions by 35%, and established a community benefits program.",
    clientType: "Energy Corporation",
    imageUrl: "https://i.pinimg.com/736x/49/3d/a1/493da18165853a00d32c8bbe71b1fe2f.jpg",
    featured: true
  },
  
  
];