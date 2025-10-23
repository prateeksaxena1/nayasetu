import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { Resource } from '../../data/resources';
import Button from './Button';
import { X } from 'lucide-react';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const { id, title, category, description, type, downloadUrl, imageUrl, content } = resource;
  const [showArticle, setShowArticle] = useState(false);

  const getTypeIcon = () => {
    switch (type) {
      case 'guide':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        );
      case 'article':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
          </svg>
        );
      case 'video':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        );
      case 'template':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Card hoverEffect className="h-full flex flex-col">
        <div 
          className="h-40 bg-cover bg-center" 
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center mb-2">
            <span className="text-indigo-800 mr-2">
              {getTypeIcon()}
            </span>
            <span className="text-xs font-semibold bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded">
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
            <span className="ml-2 text-xs text-gray-500">{category}</span>
          </div>
          
          <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
            {description}
          </p>
          
          <div className="mt-auto flex flex-wrap gap-2">
            {downloadUrl && (
              <Button 
                variant="outlined" 
                size="small"
                className="text-xs"
                onClick={() => window.open(downloadUrl, '_blank')}
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Watch Video
              </Button>
            )}
            {content && (
              <Button 
                variant="text" 
                size="small"
                className="text-xs"
                onClick={() => setShowArticle(true)}
              >
                View Resource
              </Button>
            )}
          </div>
        </div>
      </Card>

      {showArticle && content && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b z-10">
              <div className="flex justify-between items-center p-6">
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                <button
                  onClick={() => setShowArticle(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            <div className="p-6 prose prose-lg max-w-none">
              {content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResourceCard;