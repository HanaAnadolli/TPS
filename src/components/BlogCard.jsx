import React from 'react';

const BlogCard = ({ 
  image, 
  title, 
  author, 
  date, 
  description, 
  onReadMore 
}) => {
  return (
    <div className="overflow-hidden transition-shadow duration-500 hover:bg-white hover:shadow-lg ease-in-out flex flex-col p-[20px]">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-[250px] "
        />
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex flex-col h-full">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
          {title}
        </h3>
        
        {/* Author and Date */}
        <div className="text-sm text-gray-500 mb-3">
          {author} • {date}
        </div>
        
        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>
        
        {/* Read More Link */}
        <button 
          onClick={onReadMore}
          className="group inline-flex items-center text-gray-800 font-semibold text-sm hover:text-[var(--primary-color)] transition-colors duration-200 whitespace-nowrap mt-auto"
        >
          Read More
          <svg 
            className="ml-2 w-4 h-4 text-[var(--primary-color)] transition-transform duration-300 delay-100 group-hover:translate-x-3" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
