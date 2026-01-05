import React from 'react';
import { ShieldCheck, Users, Scale, Award } from 'lucide-react';
import FadeIn from '../Animations/FadeIn';

const TrustStrip: React.FC = () => {
    const trustItems = [
        {
            icon: <Scale className="w-5 h-5 md:w-6 md:h-6" />,
            text: "Focused only on inheritance & property disputes"
        },
        {
            icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
            text: "Serving Clients across India & NRIs"
        },
        {
            icon: <Award className="w-5 h-5 md:w-6 md:h-6" />,
            text: "Decades of combined legal experience"
        },
        {
            icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />,
            text: "Landmark judgments in inheritance cases"
        }
    ];

    return (
        <div className="bg-nayaysetu-gold/10 border-b border-nayaysetu-gold/20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 md:py-8">
                    {trustItems.map((item, index) => (
                        <FadeIn key={index} delay={index * 0.1} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3">
                            <div className="text-nayaysetu p-2 bg-white rounded-full shadow-sm flex-shrink-0">
                                {item.icon}
                            </div>
                            <p className="text-sm md:text-base font-medium text-gray-800 leading-tight">
                                {item.text}
                            </p>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustStrip;
