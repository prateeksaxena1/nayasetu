
export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: 'widow' | 'daughter' | 'nri' | 'farmer';
}

export const faqs: FAQ[] = [
    // Daughter (Women's Rights, Brother's Name, No Will)
    {
        id: 'd1',
        question: "My father passed away without a Will. Do I get a share?",
        answer: "Yes. Under the Hindu Succession Act, daughters are 'Class I heirs' equal to sons. If there is no Will (intestate), the property is divided equally among all children and the widow.",
        category: 'daughter'
    },
    {
        id: 'd2',
        question: "Can my brother deny my share because I am married?",
        answer: "No. Marriage does not change your rights. Since the 2005 amendment, daughters remain coparceners (joint owners) for life. Your brother cannot exclude you.",
        category: 'daughter'
    },
    {
        id: 'd3',
        question: "The property is in my uncle's or brother's name, but it's ancestral. Can I claim it?",
        answer: "Yes, if it is ancestral (undivided) property, you have a birthright share regardless of whose name appears on the revenue records. You can file a suit for partition.",
        category: 'daughter'
    },
    {
        id: 'd4',
        question: "My father left a Will giving everything to my brother. Can I challenge it?",
        answer: "It depends. If the property was self-acquired by your father, the Will is valid. If it was ancestral family property, he cannot Will away your share. You can also challenge a Will if it was made under pressure.",
        category: 'daughter'
    },

    // Widow (Women's Rights, No Will, In-laws)
    {
        id: 'w1',
        question: "My husband died without a Will. What are my rights?",
        answer: "As a widow, you are a 'Class I heir'. You inherit an equal share of your husband's property along with his children and his mother. You cannot be excluded.",
        category: 'widow'
    },
    {
        id: 'w2',
        question: "Can my in-laws evict me from our shared home?",
        answer: "No. Under the Domestic Violence Act and senior citizen judgments, a widow has a 'right to residence' in the shared household, regardless of whether she owns it.",
        category: 'widow'
    },
    {
        id: 'w3',
        question: "Does my husband's share in his family property come to me?",
        answer: "Yes. If your husband had a share in ancestral property, that share devolves upon you and his children after his death, not back to his brothers/parents.",
        category: 'widow'
    },

    // NRI (POA, Remote Management)
    {
        id: 'n1',
        question: "I live abroad. Can I claim my share in family property without travelling?",
        answer: "Yes. You can manage the entire partition suit through a 'Special Power of Attorney' (POA) given to a trusted relative or lawyer in India. You only need to be present for evidence if strictly required.",
        category: 'nri'
    },
    {
        id: 'n2',
        question: "My siblings are selling the property while I am away. How do I stop them?",
        answer: "You can file a suit for 'Permanent Injunction' to seek a stay order from the court, preventing any sale or transfer until your share is partitioned.",
        category: 'nri'
    },
    {
        id: 'n3',
        question: "Is a Will made in the USA/UK valid in India?",
        answer: "Yes, but it may need to be 'probated' (certified) by an Indian court to be legally effective for transferring immovable property titles here.",
        category: 'nri'
    },

    // Farmer (Land, Revenue Records)
    {
        id: 'f1',
        question: "The land is still in my grandfather's name. How do I divide it?",
        answer: "You must first apply for a 'Warisan' (legal heir) certificate. Then, all legal heirs become joint owners. Any heir can then file for partition to separate their specific share.",
        category: 'farmer'
    },
    {
        id: 'f2',
        question: "Can I sell my share of agricultural land without my brothers' consent?",
        answer: "Legally yes, you can sell your undivided share. However, the buyer cannot take specific possession until the land is formally partitioned by metes and bounds.",
        category: 'farmer'
    }
];
