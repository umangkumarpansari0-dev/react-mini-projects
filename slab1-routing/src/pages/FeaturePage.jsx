import React from 'react';

const FeaturePage = () => {
  const features = [
    { name: "Seamless Routing", description: "Utilize React Router DOM for instant, client-side navigation without page reloads.", icon: "⚡" },
    { name: "Responsive Design", description: "Tailwind CSS utility-first approach ensures your UI looks perfect on every screen size.", icon: "📱" },
    { name: "Modular Components", description: "Reusable JSX blocks improve maintainability and speed up feature development.", icon: "🧩" },
    { name: "State Management", description: "Efficient use of React Hooks for predictable and scalable application state.", icon: "⚙️" },
  ];

  return (
    <div className="py-16 bg-white min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Core Strengths</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why CodeX Solutions Works
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full shadow-lg">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturePage;