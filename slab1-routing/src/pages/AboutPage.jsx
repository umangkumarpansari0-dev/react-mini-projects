import React from 'react';

const AboutPage = () => {
  return (
    <div className="py-16 bg-white min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Our Mission</h2>
        
        <div className="space-y-6 text-lg text-gray-600">
          <p>
            This project, CodeX Solutions, was built as a demonstration of modern frontend development principles. Our mission is to prove that complex features, like **client-side routing**, can be implemented seamlessly using frameworks like React and styled efficiently using utility libraries like Tailwind CSS.
          </p>
          <p>
            We focus on **performance and maintainability**. By breaking the UI into small, reusable components (like Header and Footer), we ensure that updates are quick, and the application remains scalable as features grow. This entire structure embodies best practices for a scalable single-page application (SPA).
          </p>
          <p className="text-indigo-600 font-semibold mt-8">
            Built with ❤️ using React, React Router, and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;