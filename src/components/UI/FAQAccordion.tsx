import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ } from '../../data/faqs';

interface FAQAccordionProps {
    faqs: FAQ[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
    const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

    const toggleFAQ = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq) => (
                <div
                    key={faq.id}
                    className={`border rounded-lg overflow-hidden transition-all duration-200 ${openId === faq.id
                            ? 'bg-white border-nayaysetu/30 shadow-md ring-1 ring-nayaysetu/5'
                            : 'bg-white border-gray-200 hover:border-nayaysetu/20'
                        }`}
                >
                    <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
                        aria-expanded={openId === faq.id}
                    >
                        <span className={`font-semibold text-lg pr-4 ${openId === faq.id ? 'text-nayaysetu' : 'text-gray-800'}`}>
                            {faq.question}
                        </span>
                        {openId === faq.id ? (
                            <ChevronUp className="w-5 h-5 text-nayaysetu flex-shrink-0" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                    </button>

                    <div
                        className={`transition-all duration-300 ease-in-out ${openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-3 mt-1">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
