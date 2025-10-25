import React from 'react';
import { Link } from 'react-router-dom';

const NewFooter = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Section 1: Company Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">CodeX Solutions</h4>
            <p className="text-gray-400 text-sm">
              Building the future of client-side application design with React and Tailwind CSS.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-indigo-400 transition-colors">Our Team</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-indigo-400 transition-colors">Latest Blog</Link></li>
            </ul>
          </div>
          
          {/* Section 3: Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/feature" className="text-gray-400 hover:text-indigo-400 transition-colors">Features</Link></li>
              <li><Link to="/source" className="text-gray-400 hover:text-indigo-400 transition-colors">Source Code</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-indigo-400 transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Section 4: Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} CodeX Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;