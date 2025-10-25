import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Placeholder data (In a real app, this would be fetched from an API)
const postsData = {
  1: { title: "Client-Side Routing with React Router 6", content: "This is the full, detailed content about setting up React Router, including hooks like useParams..." },
  2: { title: "Mastering Tailwind's Utility-First Approach", content: "This article explains how to efficiently use utility classes to build responsive designs quickly..." },
  3: { title: "Why Modular Components Boost Productivity", content: "Read about the benefits of a component-based architecture for scalability and maintenance..." },
};

const SinglePostPage = () => {
  // useParams hook extracts the dynamic part of the URL (the :id)
  const { postId } = useParams(); 
  
  // Use the extracted ID to find the post data
  const post = postsData[postId];

  if (!post) {
    return (
      <div className="py-20 text-center min-h-[70vh] bg-white">
        <h1 className="text-4xl font-extrabold text-red-600">Post Not Found</h1>
        <p className="mt-3 text-lg text-gray-600">The article you are looking for does not exist.</p>
        <Link to="/blog" className="mt-5 inline-block text-indigo-600 hover:underline">
            ← Back to Blog List
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 bg-white min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{post.title}</h1>
        <p className="text-sm text-indigo-600 font-semibold mb-8">Published on Oct 24, 2025</p>
        
        <div className="prose prose-lg text-gray-700">
          <p>{post.content}</p>
          {/* Add more paragraphs of content here... */}
          <p className="mt-10">Thanks for reading!</p>
        </div>
        
        <Link to="/blog" className="mt-12 inline-block text-indigo-600 font-medium hover:underline">
            ← Back to Blog List
        </Link>
      </div>
    </div>
  );
};

export default SinglePostPage;