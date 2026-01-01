import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Lightbulb, Leaf, Users, Globe, ArrowRight } from 'lucide-react';
import { PracticeArea } from '../../data/practiceAreas';

interface PracticeAreaCardProps {
    area: PracticeArea;
    onClick?: () => void;
}

const getIconComponent = (iconName: string) => {
    switch (iconName) {
        case 'Briefcase':
            return <Briefcase className="w-6 h-6" />;
        case 'Lightbulb':
            return <Lightbulb className="w-6 h-6" />;
        case 'Leaf':
            return <Leaf className="w-6 h-6" />;
        case 'Users':
            return <Users className="w-6 h-6" />;
        case 'Globe':
            return <Globe className="w-6 h-6" />;
        default:
            return <Briefcase className="w-6 h-6" />;
    }
};

const PracticeAreaCard: React.FC<PracticeAreaCardProps> = ({ area, onClick }) => {
    return (
        <div className="h-full flex flex-col bg-white dark:bg-gray-700 rounded-lg shadow-md p-8 transition duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-nayaysetu/10 dark:bg-gray-600 text-nayaysetu dark:text-white">
                    {getIconComponent(area.icon)}
                </div>
                <h3 className="text-xl font-semibold ml-4 text-gray-900 dark:text-white line-clamp-2">
                    {area.title}
                </h3>
            </div>

            {area.typicalClients && (
                <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-nayaysetu-gold dark:text-yellow-500 bg-nayaysetu-gold/10 dark:bg-yellow-500/10 rounded-full">
                        For: {area.typicalClients}
                    </span>
                </div>
            )}

            <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                {area.description}
            </p>

            <ul className="mb-6 space-y-2">
                {area.services.slice(0, 3).map((service, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                        <svg
                            className="w-4 h-4 mr-2 mt-1 text-nayaysetu-gold flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="line-clamp-1">{service}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-600">
                {onClick ? (
                    <button
                        onClick={onClick}
                        className="text-nayaysetu dark:text-white font-medium inline-flex items-center hover:text-nayaysetu-gold transition-colors group"
                    >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                ) : (
                    <Link
                        to={`/practice-areas/${area.id}`}
                        className="text-nayaysetu dark:text-white font-medium inline-flex items-center hover:text-nayaysetu-gold transition-colors group"
                    >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default PracticeAreaCard;
