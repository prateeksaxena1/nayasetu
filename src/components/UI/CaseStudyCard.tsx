import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CaseStudy } from '../../data/caseStudies';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  variant?: 'compact' | 'full';
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  caseStudy,
  variant = 'compact'
}) => {
  const { id, title, category, outcome, challenge, imageUrl } = caseStudy;

  if (variant === 'compact') {
    return (
      <div className="group h-full flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div
          className="h-56 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent flex flex-col justify-end p-6">
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-white bg-nayaysetu/80 backdrop-blur-sm rounded-full">
                {category}
              </span>
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-white bg-green-600/90 backdrop-blur-sm rounded-full">
                {outcome}
              </span>
            </div>
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2 group-hover:text-nayaysetu transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-6 flex-1">
            {challenge}
          </p>
          <div className="mt-auto border-t border-gray-100 dark:border-gray-700 pt-4">
            <Link
              to={`/case-studies/${id}`}
              className="text-nayaysetu dark:text-white font-medium text-sm inline-flex items-center hover:text-nayaysetu-gold transition-colors group-hover:underline"
            >
              Read Full Case Study
              <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="md:flex">
        <div
          className="md:w-2/5 h-64 md:h-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="p-8 md:w-3/5 flex flex-col">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-nayaysetu bg-nayaysetu/10 rounded-full">
              {category}
            </span>
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-green-700 bg-green-100 rounded-full">
              {outcome}
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
          <div className="mb-6 flex-1">
            <h4 className="text-gray-900 dark:text-white font-semibold mb-2">The Challenge:</h4>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{challenge}</p>
          </div>
          <Link
            to={`/case-studies/${id}`}
            className="text-nayaysetu dark:text-white font-medium inline-flex items-center hover:text-nayaysetu-gold transition-colors self-start"
          >
            Read Full Case Study
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;