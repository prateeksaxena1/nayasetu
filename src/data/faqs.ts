
export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: 'widow' | 'daughter' | 'nri' | 'farmer';
}

export const faqs: FAQ[] = [
    // Daughter / Women
    {
        id: 'd1',
        question: "Do married daughters have rights in father's property?",
        answer: "Yes. Since the 2005 amendment to the Hindu Succession Act, daughters (married or unmarried) are 'coparceners' by birth, meaning they have the exact same rights and liabilities as sons in ancestral property.",
        category: 'daughter'
    },
    {
        id: 'd2',
        question: "Can my brother deny my share if I am married?",
        answer: "No. Your marital status does not affect your right to inheritance. You can claim partition at any time, and your share is equal to that of your brothers.",
        category: 'daughter'
    },
    {
        id: 'd3',
        question: "What if my father left a Will excluding me?",
        answer: "If the property is self-acquired by your father, he can Will it to anyone. However, for ancestral property, he cannot exclude you from your birthright share through a Will.",
        category: 'daughter'
    },

    // Widow / Wife
    {
        id: 'w1',
        question: "What are a widow's rights in her husband's property?",
        answer: "A widow is a 'Class I heir'. If your husband died without a Will (intestate), you are entitled to an equal share of his property along with his children and his mother.",
        category: 'widow'
    },
    {
        id: 'w2',
        question: "Can my in-laws evict me from the house?",
        answer: "Generally, no. You have a right to residence in the shared household. If the property belonged to your husband, you are a legal heir and partial owner.",
        category: 'widow'
    },
    {
        id: 'w3',
        question: "What happens to the property if there is no Will?",
        answer: "Ideally, it is divided equally among Class I heirs (Widow, Children, Mother). If no Class I heirs exist, it goes to Class II heirs (Father, Siblings, etc.).",
        category: 'widow'
    },

    // NRI
    {
        id: 'n1',
        question: "Can NRIs inherit agricultural land in India?",
        answer: "Yes, NRIs can inherit agricultural land and farmhouse property. However, there are restrictions on purchasing agricultural land unless you are an agriculturist.",
        category: 'nri'
    },
    {
        id: 'n2',
        question: "How can I manage property disputes remotely?",
        answer: "You can execute a Special Power of Attorney (POA) to someone you trust to handle court appearances. However, for property transfer, the POA must be registered.",
        category: 'nri'
    },
    {
        id: 'n3',
        question: "Is a foreign Will valid in India?",
        answer: "Yes, but it often needs to go through a 'probate' or 'letters of administration' process in Indian courts to be legally recognized for property transfer.",
        category: 'nri'
    },

    // Farmer
    {
        id: 'f1',
        question: "How do I divide agricultural land among brothers?",
        answer: "You need to file a suit for partition. Once the court decrees shares, you must apply to the local Tehsildar for 'mutation' of revenue records to reflect separate ownership.",
        category: 'farmer'
    },
    {
        id: 'f2',
        question: "What if the land is still in my grandfather's name?",
        answer: "You must first get the death certificates of your grandfather and father (if deceased) and apply for a Warisan (legal heir) certificate or mutation to update the land records.",
        category: 'farmer'
    }
];
