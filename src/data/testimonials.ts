export interface Testimonial {
  id: string;
  client: string;
  position: string;
  company: string;
  content: string;
  imageUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    client: "Bagru Singh",
    position: "Farmer",
    company: "Agricultural Land Dispute",
    content: "My uncles were refusing to give me my share of our ancestral farmland. Nayaysetu helped me prove my rights through old revenue records. They fought with honesty and got me my rightful land without any bribes or dirty tricks.",
    imageUrl: "https://i.pinimg.com/736x/bb/f7/79/bbf7790a9929f04b3c25824125dcdade.jpg"
  },
  {
    id: "t2",
    client: "Sarla Devi",
    position: "School Teacher",
    company: "Daughter's Inheritance Claim",
    content: "My brothers told me that as a married daughter, I had no claim on our father's property. Nayaysetu explained the 2005 Amendment law to me and helped me file a case. Today, I have my equal share and financial security.",
    imageUrl: "https://i.pinimg.com/736x/99/dc/82/99dc820c6ab8d19cf5051a9aa6d911d2.jpg"
  },
  {
    id: "t3",
    client: "Rajesh Kumar",
    position: "Software Engineer (NRI)",
    company: "Property Possession Case",
    content: "Living in the USA, I couldn't manage the illegal encroachment on my parents' house in Jaipur. Nayaysetu handled everything—from police complaints to court orders—while I stayed abroad. They are professional and trustworthy.",
    imageUrl: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg"
  },
  {
    id: "t4",
    client: "Sunita Agarwal",
    position: "Homemaker",
    company: "Family Settlement",
    content: "We were about to go to court over my husband's family business division. Nayaysetu's mediation team sat us down and worked out a fair family settlement deed. We saved lakhs in legal fees and kept our family relationships intact.",
    imageUrl: "https://images.pexels.com/photos/5668492/pexels-photo-5668492.jpeg"
  }
];