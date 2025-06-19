import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900">
              App
            </Link>
          </div>
          <div className="flex items-center space-x-8">
          <Link to="/product-input" className="hover:text-blue-600 transition-colors">Product Input</Link>
          <Link to="/review-results" className="hover:text-blue-600 transition-colors">Review Results</Link>
          <Link to="/product-data" className="hover:text-blue-600 transition-colors">Product Data</Link>
          <Link to="/processing" className="hover:text-blue-600 transition-colors">Processing</Link>
          <Link to="/home" className="hover:text-blue-600 transition-colors">Home</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;