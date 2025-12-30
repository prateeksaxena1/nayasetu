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
    specialization: "Property Law, Partition Suits & Family Settlements",
    bio: "Jignesh has over 20 years of experience exclusively in property litigation. He has successfully handled over 500 partition suits and is known for his strategic approach in resolving complex ancestral property disputes across Rajasthan.",
    education: [
      "LL.B., National Law University, Jodhpur",
      "Diploma in Land Laws",
      "B.Com, Rajasthan University"
    ],
    imageUrl: "https://i.pinimg.com/736x/46/15/55/4615550ad0b619d57ae2f9b86bc909ff.jpg",
    featured: true
  },
  {
    id: "tm2",
    name: "Radha Krishna Murthi",
    title: "Senior Partner",
    specialization: "Hindu Succession Act, Wills & Probate",
    bio: "Radha is a renowned expert in the Hindu Succession Act. She specializes in obtaining Succession Certificates, Probates, and defending the property rights of women and senior citizens. Her compassionate counsel is highly valued by clients.",
    education: [
      "LL.M., Family Law, Delhi University",
      "LL.B., Campus Law Centre, Delhi",
      "B.A., Political Science"
    ],
    imageUrl: "https://i.pinimg.com/736x/ce/4b/ae/ce4baeff1619e484313d38b32aef5477.jpg",
    featured: true
  },
  {
    id: "tm3",
    name: "Adv. Suman Sharma",
    title: "Partner",
    specialization: "Revenue Courts & Agricultural Land",
    bio: "Suman heads the Revenue Court practice. With deep knowledge of the Tenancy Act and Land Revenue Act, she excels in cases involving mutation, khatedari rights, and illegal dispossession of farmers.",
    education: [
      "LL.B., University of Rajasthan",
      "M.A., Public Administration",
    ],
    imageUrl: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg",
    featured: false
  },
  {
    id: "tm4",
    name: "Vikram Rathore",
    title: "Partner",
    specialization: "NRI Services & Property Management",
    bio: "Vikram handles our NRI desk, assisting clients from abroad with property retention, transfer, and dispute resolution in India. He ensures seamless communication and representation without the client needing to travel.",
    education: [
      "LL.M., International Business Law",
      "LL.B., Symbiosis Law School, Pune"
    ],
    imageUrl: "https://images.pexels.com/photos/5668468/pexels-photo-5668468.jpeg",
    featured: false
  },
  {
    id: "tm5",
    name: "Priya Mehta",
    title: "Senior Associate",
    specialization: "Mediation & Family Counselling",
    bio: "Priya is a trained mediator who believes that most family property disputes can be solved outside court. She has facilitated over 100 successful family settlements, preserving both wealth and relationships.",
    education: [
      "Certified Mediator",
      "LL.B., GLC Mumbai",
      "B.A. Psychology"
    ],
    imageUrl: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg",
    featured: false
  }
];