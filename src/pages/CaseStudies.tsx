import React, { useState, useEffect } from 'react';
import CaseStudyCard from '../components/UI/CaseStudyCard';
import { caseStudies } from '../data/caseStudies';

const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredCaseStudies, setFilteredCaseStudies] = useState(caseStudies);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredCaseStudies(caseStudies);
    } else {
      setFilteredCaseStudies(caseStudies.filter(cs => cs.category === selectedCategory));
    }
  }, [selectedCategory]);
  
  // Get unique categories
  const categories = ['all', ...Array.from(new Set(caseStudies.map(cs => cs.category)))];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Explore some case studies and get to know how they overcome these challenges.
          </p>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="mb-12 flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-indigo-800 text-white'
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
          
          {/* Featured Case Study */}
          <div className="mb-16">
            {filteredCaseStudies.length > 0 && (
              <CaseStudyCard caseStudy={filteredCaseStudies[0]} variant="full" />
            )}
          </div>
          
          {/* Case Study Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.slice(1).map(caseStudy => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
          
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No case studies found</h3>
              <p className="text-gray-600">
                There are no case studies available in this category. Please select another category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;