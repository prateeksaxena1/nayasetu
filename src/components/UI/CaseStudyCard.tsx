import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
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
      <Card hoverEffect className="h-full flex flex-col">
        <div
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="w-full h-full bg-gradient-to-t from-indigo-900/80 to-transparent flex items-end p-4">
            <span className="bg-amber-600 text-white text-xs font-semibold px-2 py-1 rounded">
              {outcome}
            </span>
          </div>
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-2">{category}</div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4 flex-1">
            {challenge}
          </p>
          <Link
            to={`/case-studies/${id}`}
            className="text-indigo-800 font-medium text-sm inline-flex items-center hover:text-indigo-600"
          >
            Read Full Case Study
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <div className="md:flex">
        <div
          className="md:w-2/5 h-64 md:h-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="p-6 md:w-3/5">
          <div className="flex justify-between items-start mb-4">
            <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">{category}</div>
            <span className="bg-amber-600 text-white text-xs font-semibold px-2 py-1 rounded">
              {outcome}
            </span>
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
          <div className="mb-6">
            <h4 className="text-gray-800 dark:text-gray-200 font-medium mb-1">Challenge:</h4>
            <p className="text-gray-600 dark:text-gray-300">{challenge}</p>
          </div>
          <Link
            to={`/case-studies/${id}`}
            className="text-indigo-800 font-medium inline-flex items-center hover:text-indigo-600"
          >
            Read Full Case Study
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default CaseStudyCard;