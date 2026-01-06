import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ } from '../../data/faqs';

interface FAQAccordionProps {
    faqs: FAQ[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
    const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

    const toggleFAQ = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    // Generate FAQPage Schema for SEO
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <div className="space-y-4 max-w-3xl mx-auto">
            {/* Inject Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            {faqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                    <div
                        key={faq.id}
                        className={`border rounded-lg overflow-hidden transition-all duration-300 ${isOpen
                            ? 'bg-white border-nayaysetu/30 shadow-md ring-1 ring-nayaysetu/5'
                            : 'bg-white border-gray-200 hover:border-nayaysetu/20'
                            }`}
                    >
                        <button
                            onClick={() => toggleFAQ(faq.id)}
                            className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none group"
                            aria-expanded={isOpen}
                        >
                            <span className={`font-semibold text-lg pr-4 transition-colors duration-200 ${isOpen ? 'text-nayaysetu' : 'text-gray-800 group-hover:text-nayaysetu/80'}`}>
                                {faq.question}
                            </span>
                            <ChevronDown
                                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ease-in-out flex-shrink-0 ${isOpen ? 'rotate-180 text-nayaysetu' : ''}`}
                            />
                        </button>

                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-3 mt-1">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default FAQAccordion;
