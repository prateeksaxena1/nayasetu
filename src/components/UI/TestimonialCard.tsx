
import React from 'react';
import { Quote, CheckCircle } from 'lucide-react';
import { Testimonial } from '../../data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { client, position, company, content, imageUrl } = testimonial;

  return (
    <div className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-8 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center space-x-2 mb-6">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
          <CheckCircle className="w-3 h-3 mr-1" />
          Verified Client Story
        </span>
      </div>

      <div className="relative mb-6 flex-1">
        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-nayaysetu/10 dark:text-gray-700 transform -scale-x-100" />
        <p className="relative z-10 text-gray-700 dark:text-gray-300 leading-relaxed italic pl-4 text-lg">
          "{content}"
        </p>
      </div>

      <div className="flex items-center pt-6 border-t border-gray-100 dark:border-gray-700">
        <div className="flex-shrink-0 mr-4">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={client}
              className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-600 shadow-sm"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-nayaysetu-gold/20 flex items-center justify-center text-nayaysetu-gold font-bold text-xl">
              {client.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white text-base">{client}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{position}</p>
          <p className="text-xs text-nayaysetu dark:text-nayaysetu-gold mt-0.5 uppercase tracking-wide opacity-80">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;