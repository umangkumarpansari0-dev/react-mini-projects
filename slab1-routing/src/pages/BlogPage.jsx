import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const posts = [
    { id: 1, title: "Client-Side Routing with React Router 6", date: "Oct 24, 2025", summary: "A deep dive into setting up clean, fast routing in your modern React apps." },
    { id: 2, title: "Mastering Tailwind's Utility-First Approach", date: "Oct 15, 2025", summary: "Tips and tricks for styling complex components quickly using Tailwind CSS." },
    { id: 3, title: "Why Modular Components Boost Productivity", date: "Oct 10, 2025", summary: "How a component-based architecture speeds up development and maintenance." },
  ];

  return (
    <div className="py-16 bg-white min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Latest Insights</h2>
        
        <div className="space-y-10">
          {posts.map((post) => (
            <div key={post.id} className="border-b pb-8">
              <p className="text-sm text-indigo-600 font-semibold">{post.date}</p>
              <h3 className="mt-1 text-2xl font-bold text-gray-900 hover:text-indigo-600 transition-colors">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h3>
              <p className="mt-2 text-gray-600">{post.summary}</p>
              <Link to={`/blog/${post.id}`} className="mt-3 inline-block text-indigo-600 font-medium hover:underline">
                Read More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;