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
    position: "Young Boy",
    company: "Land Ownership Case",
    content: "I had no idea how to fight for my rights. My own relatives were taking advantage of my silence. Thanks to NayaySetu, I now have what is legally mine. They guided me step-by-step and treated me with respect. I’ll always be grateful.",
    imageUrl: "https://i.pinimg.com/736x/bb/f7/79/bbf7790a9929f04b3c25824125dcdade.jpg"
  },
  {
    id: "t2",
    client: "Shrimati Sarla Devi",
    position: "Divorced Lady",
    company: "Land as Alimony Case",
    content: "As a divorced woman in my 40s, I was hesitant to seek help for my alimony-related land case. NayaySetu’s free consultation changed everything—they listened without judgment and explained my rights clearly. Their team stood by me, helped retrieve legal documents, and guided me through the process with compassion. Today, I legally own what I deserve. I’m truly grateful to NayaySetu for their support and strength.",
    imageUrl: "https://i.pinimg.com/736x/99/dc/82/99dc820c6ab8d19cf5051a9aa6d911d2.jpg"
  },
  {
    id: "t3",
    client: "Richard Thompkins",
    position: "Director of Operations",
    company: "GreenPath Energy",
    content: "Navigating complex environmental regulations seemed impossible until we engaged this firm. Their proactive approach to compliance and stakeholder engagement transformed potential obstacles into opportunities. Our project not only received approval but garnered community support.",
    imageUrl: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg"
  },
  {
    id: "t4",
    client: "Laura Martinez",
    position: "CHRO",
    company: "Global Innovations Corp",
    content: "The employment law team provided invaluable guidance during a particularly sensitive executive termination. Their discrete handling of the matter and strategic approach to negotiation resulted in a resolution that protected our company's reputation and finances.",
    imageUrl: "https://images.pexels.com/photos/5668492/pexels-photo-5668492.jpeg"
  }
];