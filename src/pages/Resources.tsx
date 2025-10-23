import React, { useState, useEffect } from 'react';
import ResourceCard from '../components/UI/ResourceCard';
import { resources } from '../data/resources';
import Button from '../components/UI/Button';

const ResourcesPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredResources, setFilteredResources] = useState(resources);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    setFilteredResources(
      resources.filter(resource => {
        const typeMatch = selectedType === 'all' || resource.type === selectedType;
        const categoryMatch = selectedCategory === 'all' || resource.category === selectedCategory;
        return typeMatch && categoryMatch;
      })
    );
  }, [selectedType, selectedCategory]);
  
  // Get unique types and categories
  const types = ['all', ...Array.from(new Set(resources.map(r => r.type)))];
  const categories = ['all', ...Array.from(new Set(resources.map(r => r.category)))];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Legal Resources</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Access guides, templates, and articles designed to help you navigate legal challenges.
          </p>
        </div>
      </section>
      
      {/* Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-xl font-semibold mb-4">Filter Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resource Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {types.map(type => (
                    <button
                      key={type}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedType === type
                          ? 'bg-indigo-800 text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                      onClick={() => setSelectedType(type)}
                    >
                      {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Practice Area
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedCategory === category
                          ? 'bg-indigo-800 text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category === 'all' ? 'All Areas' : category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Resources Newsletter */}
          <div className="bg-indigo-50 rounded-lg p-8 mb-12">
            <div className="md:flex items-center justify-between">
              <div className="mb-4 md:mb-0 md:mr-8">
                <h3 className="text-xl font-semibold text-indigo-900 mb-2">Subscribe to Our Legal Updates</h3>
                <p className="text-indigo-800">
                  Receive new resources, legal insights, and industry updates directly to your inbox.
                </p>
              </div>
              <div className="flex-1 max-w-md">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-l-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <Button className="rounded-l-none">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Resource Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
          
          {filteredResources.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No resources found</h3>
              <p className="text-gray-600 mb-4">
                We couldn't find any resources matching your current filters. Please try different filters.
              </p>
              <Button 
                variant="outlined"
                onClick={() => {
                  setSelectedType('all');
                  setSelectedCategory('all');
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;