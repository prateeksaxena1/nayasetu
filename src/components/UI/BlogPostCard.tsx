import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { BlogPost } from '../../data/blogPosts';

interface BlogPostCardProps {
  post: BlogPost;
  variant?: 'compact' | 'featured';
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  post,
  variant = 'compact'
}) => {
  const { id, title, category, author, date, summary, imageUrl } = post;
  
  if (variant === 'featured') {
    return (
      <Card className="overflow-hidden">
        <div className="md:flex">
          <div 
            className="md:w-2/5 h-60 md:h-auto bg-cover bg-center" 
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="p-6 md:w-3/5 flex flex-col">
            <div className="mb-2">
              <span className="text-xs font-semibold bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded mr-2">
                {category}
              </span>
              <span className="text-sm text-gray-500">{date}</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm mb-4 flex-1">
              {summary}
            </p>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-700">By {author}</p>
              <Link 
                to={`/blog/${id}`}
                className="text-indigo-800 font-medium inline-flex items-center hover:text-indigo-600"
              >
                Read More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    );
  }
  
  return (
    <Card hoverEffect className="h-full flex flex-col">
      <div 
        className="h-48 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-2 flex flex-wrap gap-2">
          <span className="text-xs font-semibold bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded">
            {category}
          </span>
          <span className="text-xs text-gray-500 inline-flex items-center">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            {date}
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-2">
          {summary}
        </p>
        <div className="mt-auto flex justify-between items-center">
          <p className="text-xs text-gray-700">By {author}</p>
          <Link 
            to={`/blog/${id}`}
            className="text-indigo-800 font-medium text-sm inline-flex items-center hover:text-indigo-600"
          >
            Read More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default BlogPostCard;