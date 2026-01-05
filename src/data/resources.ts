export interface Resource {
  id: string;
  title: string;
  category: string;
  description: string;
  type: 'guide' | 'article' | 'video' | 'template';
  downloadUrl?: string;
  imageUrl: string;
  featured: boolean;
  content?: string;
  topics: string[];
}

export const resources: Resource[] = [
  {
    id: "r1",
    title: "Inheritance Law: Rights of Legal Heirs",
    category: "Video Guide",
    description: "A comprehensive video guide explaining the rights of Class I and Class II heirs under the Hindu Succession Act.",
    type: "video",
    downloadUrl: "https://youtu.be/YoCyEl3kd5s?si=VioxUTEZKyt0CfY7",
    imageUrl: "https://i.pinimg.com/736x/ba/83/8e/ba838e75fdbbc06d5a9201b91e572e99.jpg",
    featured: true,
    topics: ["No Will / Intestate", "General"]
  },
  {
    id: "r2",
    title: "New Law on Ancestral Property: Supreme Court Verdict",
    category: "Hindi Video",
    description: "Understand the landmark judgment on whether ownership of ancestral property can be transferred via Will, explained in simple Hindi.",
    type: "video",
    downloadUrl: "https://www.youtube.com/watch?v=_ocPjJ5FYEg",
    imageUrl: "https://i.pinimg.com/736x/a6/81/27/a6812795365734d0076b58a1fbb9f5d7.jpg",
    featured: true,
    topics: ["Court Judgments", "Ancestral Property"]
  },
  {
    id: "r3",
    title: "How to Make a Valid Will in India",
    category: "Legal Guide",
    description: "Step-by-step guide to drafting a Will, registration requirements, and common mistakes to avoid.",
    type: "article",
    imageUrl: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
    featured: true,
    topics: ["Wills", "Estate Planning"],
    content: `# How to Make a Valid Will in India

Creating a Will is one of the most important things you can do for your family. It ensures your assets are distributed according to your wishes and prevents future disputes.

## What is a Will?
A Will is a legal declaration of a person's intention regarding their property, which they desire to take effect after their death.

## Key Requirements for a Valid Will
1. **Sound Mind**: The testator (person making the Will) must be of sound mind.
2. **Writing**: Ideally, it should be in writing.
3. **Signature**: Must be signed by the testator.
4. **Witnesses**: Must be attested by two or more witnesses who saw the testator sign it.

## Registration
While not mandatory, registering a Will at the Sub-Registrar's office is highly recommended to prove its authenticity in court.

## Common Mistakes
- Not appointing an Executor.
- Forgetting to update the Will after major life events.
- Being vague about asset details.
`
  },
  {
    id: "r4",
    title: "Rules of Intestate Succession - Hindu Law",
    category: "Hindi Video",
    description: "What happens if someone dies without a Will? Learn about the rules of division among heirs.",
    type: "video",
    downloadUrl: "https://www.youtube.com/watch?v=_ocPjJ5FYEg",
    imageUrl: "https://i.pinimg.com/736x/49/3d/a1/493da18165853a00d32c8bbe71b1fe2f.jpg",
    featured: false,
    topics: ["No Will / Intestate", "Class I Heirs"]
  },
  {
    id: "r5",
    title: "The Hindu Succession Amendment Act, 2005",
    category: "Legal Update",
    description: "Detailed analysis of how the 2005 amendment granted equal coparcenary rights to daughters.",
    type: "article",
    imageUrl: "https://media.istockphoto.com/id/1186875361/photo/property-law-concept-key-from-real-estate-and-gavel.jpg",
    featured: true,
    topics: ["Women's Rights", "Daughters"],
    content: `# The Hindu Succession Amendment Act, 2005

This landmark legislation changed the landscape of women's property rights in India.

## Key Changes
- **Daughters as Coparceners**: Daughters now have the same rights in ancestral property as sons by birth.
- **Equal Liability**: Along with rights, daughters also have the same liabilities in the coparcenary property.
- **Effect**: A daughter can demand partition of ancestral property just like a son.

## Impact
This amendment overrides conflicting customs and previous laws, ensuring gender equality in inheritance.`
  },
  {
    id: "r6",
    title: "Understanding Legal Heir Certificates",
    category: "Documentation",
    description: "When do you need a Legal Heir Certificate vs. a Succession Certificate? A practical guide.",
    type: "article",
    imageUrl: "https://media.istockphoto.com/id/1211971898/photo/old-couple-make-agreement-sign-insurance-contract.jpg",
    featured: false,
    topics: ["Documentation", "No Will / Intestate"],
    content: `# Legal Heir Certificate vs. Succession Certificate

## Legal Heir Certificate
- **Purpose**: To identify the living heirs of a deceased person.
- **Usage**: Transfer of electricity connection, house tax, telephone connection, etc.
- **Authority**: Issued by the Tehsildar or Taluk office.

## Succession Certificate
- **Purpose**: To inherit movable assets (bank deposits, shares, mutual funds).
- **Usage**: Required by banks and financial institutions for asset transfer.
- **Authority**: Issued by a Civil Court.

Knowing the difference saves time and legal costs.`
  },
  {
    id: "r7",
    title: "Agricultural Land Inheritance for NRIs",
    category: "Guide",
    description: "Specific rules and FEMA regulations governing inheritance of farmland by NRIs.",
    type: "guide",
    imageUrl: "https://images.pexels.com/photos/236730/pexels-photo-236730.jpeg",
    featured: false,
    topics: ["NRIs", "Agricultural Land"]
  }
];