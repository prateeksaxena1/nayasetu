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
    outcome: "Favorable Decree for Widow",
    challenge: "Munni Devi, a widow, was denied her share in her late husband's ancestral property by her brothers-in-law, who claimed the property was self-acquired and not subject to partition.",
    solution: "Nayaysetu proved the ancestral nature of the property through revenue records dating back 40 years. We filed a partition suit arguing her rights under the Hindu Succession Act, 1956.",
    result: "The court ruled in favor of Munni Devi, granting her a 1/3rd share in the property and mesne profits for the years she was excluded from possession.",
    clientType: "Private Individual (Widow)",
    imageUrl: "https://i.pinimg.com/736x/f6/30/07/f63007089ebc4374541438320d97801d.jpg",
    featured: true
  },
  {
    id: "cs2",
    title: "Jai Narain v. Narain Singh",
    category: "Agricultural Land Mutation",
    outcome: "Mutation Record Corrected",
    challenge: "A dispute over the mutation of agricultural land in Rajasthan. Narain Singh fraudulently got his name entered in revenue records as the sole heir, excluding his brother Jai Narain based on a forged release deed.",
    solution: "We challenged the validity of the release deed before the Revenue Board, highlighting discrepancies in signatures and lack of registered instrument.",
    result: "The Revenue Board set aside the earlier mutation order, restoring Jai Narain's name in the Khatedari rights, securing his livelihood.",
    clientType: "Farmer / Landowner",
    imageUrl: "https://i.pinimg.com/736x/2c/da/e0/2cdae0a3e3aff447dd5beb7519d557ff.jpg",
    featured: true
  },
  {
    id: "cs3",
    title: "Arunachala Gounder vs Ponnusamy",
    category: "Daughter's Inheritance",
    outcome: "Supreme Court Precedent",
    challenge: "The case involved the rights of a daughter to inherit self-acquired property of a Hindu father dying intestate before the enactment of the Hindu Succession Act, 1956.",
    solution: "Our research team provided extensive case law precedence arguing that the retrospective benefit should apply or common law principles should favor the daughter over distant agnates.",
    result: "The Supreme Court held that daughters are entitled to inherit the self-acquired property of their father even if he died before 1956, setting a landmark precedent.",
    clientType: "High Profile Appeal",
    imageUrl: "https://i.pinimg.com/736x/49/3d/a1/493da18165853a00d32c8bbe71b1fe2f.jpg",
    featured: true
  },
  {
    id: "cs4",
    title: "Ancestral Property Partition (Sharma Family)",
    category: "Family Settlement",
    outcome: "Out-of-Court Settlement",
    challenge: "A joint family with assets worth ₹50 Crores was on the verge of a public feud. Three brothers wanted to split, but could not agree on the valuation of commercial vs. residential assets.",
    solution: "Nayaysetu facilitated a 3-month long mediation process. We drafted a comprehensive Family Settlement Deed that balanced the valuation differences with cash adjustments.",
    result: "The family signed the deed amicably, avoiding a decade-long court battle and saving lakhs in stamp duty through proper legal structuring.",
    clientType: "Business Family",
    imageUrl: "https://images.pexels.com/photos/327882/pexels-photo-327882.jpeg",
    featured: false
  }
];