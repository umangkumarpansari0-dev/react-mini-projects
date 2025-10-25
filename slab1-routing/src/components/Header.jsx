import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NewHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // NavLink is used to apply an 'active' style to the current page link
  const navLinkClass = ({ isActive }) => 
    `text-sm font-medium transition-colors hover:text-indigo-600 ${isActive ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'}`;

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center text-xl font-bold text-gray-800">
            
            <span className="ml-2">CodeX Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/feature" className={navLinkClass}>Features</NavLink>
            <NavLink to="/team" className={navLinkClass}>Team</NavLink>
            <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200" onClick={() => setIsMenuOpen(false)}>
          <div className="pt-2 pb-3 space-y-1">
            <NavLink to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Home</NavLink>
            <NavLink to="/feature" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Features</NavLink>
            {/* ... Add other mobile links here ... */}
            <NavLink to="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default NewHeader;