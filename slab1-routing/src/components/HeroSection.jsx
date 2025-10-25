import React from 'react';
import { Link } from 'react-router-dom';

const NewHeroSection = () => {
  return (
    <div className="bg-gray-50 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content Column */}
          <div className="lg:pr-12">
            <p className="text-base font-semibold text-indigo-600 uppercase tracking-wider">
              Modern Web Development
            </p>
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Build Faster. Deploy Smoother.
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-lg">
              Unlock the power of React and Tailwind CSS for seamless client-side routing and cutting-edge user interfaces.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/feature"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                Explore Features
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          
          {/* Image/Illustration Column */}
          <div className="hidden lg:block">
            {/* Replace this with a suitable image or illustration */}
            <div className="bg-white p-6 rounded-xl shadow-2xl">
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHeroSection;