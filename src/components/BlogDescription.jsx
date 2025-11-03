import React from 'react';

const BlogDescription = ({
  title,
  description,
  image,
  onReadMore
}) => {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Text Content Section */}
        <div className="lg:w-2/5 p-8 ">
          <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-6 leading-tight">
            {title}
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
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

        {/* Image Section */}
        <div className="lg:w-3/5 relative">
          <div className="h-80 lg:h-full bg-gradient-to-br from-orange-500 via-red-500 to-blue-900 relative overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            {/* Overlay for better text contrast if needed */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-blue-900/20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDescription;
