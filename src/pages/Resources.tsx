import React, { useState, useEffect } from 'react';
import ResourceCard from '../components/UI/ResourceCard';
import { resources } from '../data/resources';
import Button from '../components/UI/Button';
import FadeIn from '../components/Animations/FadeIn';
import ReadyToTalk from '../components/UI/ReadyToTalk';

const ResourcesPage: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [filteredResources, setFilteredResources] = useState(resources);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setFilteredResources(
      resources.filter(resource => {
        return selectedTopic === 'all' || resource.topics?.includes(selectedTopic);
      })
    );
  }, [selectedTopic]);

  // Extract all unique topics
  const allTopics = Array.from(new Set(resources.flatMap(r => r.topics || [])));

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-nayaysetu text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="down">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Legal Resources Library</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Expert guides, articles, and videos to help you understand your property rights.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Topics Filter */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex flex-nowrap md:flex-wrap md:justify-center gap-2 pb-2 md:pb-0">
            <button
              onClick={() => setSelectedTopic('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${selectedTopic === 'all'
                ? 'bg-nayaysetu text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              All Topics
            </button>
            {allTopics.map(topic => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${selectedTopic === topic
                  ? 'bg-nayaysetu text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-gray-50 min-h-[60vh]">
        <div className="container mx-auto px-4">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No resources found</h3>
              <p className="text-gray-600 mb-4">
                We couldn't find any resources for this topic.
              </p>
              <Button
                variant="outlined"
                onClick={() => setSelectedTopic('all')}
              >
                View All Resources
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Global CTA */}
      <ReadyToTalk />
    </div>
  );
};

export default ResourcesPage;