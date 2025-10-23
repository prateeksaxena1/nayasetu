export interface TeamMember {
  id: string;
  name: string;
  title: string;
  specialization: string;
  bio: string;
  education: string[];
  imageUrl: string;
  featured: boolean;
}

export const team: TeamMember[] = [
  {
    id: "tm1",
    name: "Jignesh Propertywala",
    title: "Managing Partner",
    specialization: "Propert Law, Inheritance & Alimony Cases",
    bio: "Katherine brings over 25 years of experience in complex corporate transactions and has led some of the firm's most significant merger cases. She is recognized as a leading authority in corporate restructuring and regulatory compliance.",
    education: [
      "J.D., Harvard Law School",
      "M.B.A., Wharton School of Business",
      "B.A., Yale University"
    ],
    imageUrl: "https://i.pinimg.com/736x/46/15/55/4615550ad0b619d57ae2f9b86bc909ff.jpg",
    featured: true
  },
  {
    id: "tm2",
    name: "Radha Krishna Murthi",
    title: "Senior Partner",
    specialization: "Intellectual Property, Settelment Law",
    bio: "Michael specializes in intellectual property litigation and technology law. His background in computer science gives him unique insight into complex patent cases, particularly in the software and telecommunications sectors.",
    education: [
      "J.D., Stanford Law School",
      "B.S., Computer Science, MIT",
      "LL.M., Intellectual Property, New York University"
    ],
    imageUrl: "https://i.pinimg.com/736x/ce/4b/ae/ce4baeff1619e484313d38b32aef5477.jpg",
    featured: true
  },
  {
    id: "tm3",
    name: "Sophia A. Rodriguez",
    title: "Partner",
    specialization: "Environmental Law, Regulatory Compliance",
    bio: "Sophia has established herself as a leading environmental lawyer, representing clients in regulatory negotiations, compliance matters, and litigation. She has successfully defended clients in some of the most complex environmental cases in recent years.",
    education: [
      "J.D., University of California, Berkeley",
      "M.S., Environmental Science, Stanford University",
      "B.A., Political Science, UCLA"
    ],
    imageUrl: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg",
    featured: false
  },
  {
    id: "tm4",
    name: "Daniel J. Washington",
    title: "Partner",
    specialization: "Employment Law, Labor Relations",
    bio: "Daniel focuses on employment law, labor relations, and workplace compliance. He has represented clients in significant class action suits and has extensive experience in negotiating employment agreements for executives.",
    education: [
      "J.D., Columbia Law School",
      "B.A., Industrial and Labor Relations, Cornell University"
    ],
    imageUrl: "https://images.pexels.com/photos/5668468/pexels-photo-5668468.jpeg",
    featured: false
  },
  {
    id: "tm5",
    name: "Elizabeth H. Nguyen",
    title: "Senior Associate",
    specialization: "International Law, Cross-Border Transactions",
    bio: "Elizabeth specializes in international business law and cross-border transactions. Her multilingual capabilities and experience working in Asia and Europe make her invaluable for clients with global operations.",
    education: [
      "J.D., Georgetown University",
      "M.A., International Relations, Johns Hopkins SAIS",
      "B.A., Economics, Wellesley College"
    ],
    imageUrl: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg",
    featured: false
  }
];