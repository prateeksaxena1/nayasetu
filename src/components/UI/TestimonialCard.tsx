

import React from 'react';
import Card from './Card';
import { Testimonial } from '../../data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { client, position, company, content, imageUrl } = testimonial;

  return (
    <Card className="h-full flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-6">
          <svg className="w-10 h-10 text-indigo-200" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1 italic">"{content}"</p>
        <div className="flex items-center">
          {imageUrl && (
            <div className="mr-4">
              <img
                src={imageUrl}
                alt="Client"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          )}
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">{client}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{position}, {company}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;