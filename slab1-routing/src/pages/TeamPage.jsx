import React from 'react';

const TeamPage = () => {
  const teamMembers = [
    { name: "Umang Kumar", title: "Lead Architect", image: "https://readymadeui.com/team-1.webp" },
    { name: "Priya Sharma", title: "Design Specialist", image: "https://readymadeui.com/team-2.webp" },
    { name: "Rahul Verma", title: "Frontend Developer", image: "https://readymadeui.com/team-3.webp" },
  ];

  return (
    <div className="py-16 bg-gray-50 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Meet the Builders</h2>
          <p className="mt-4 text-xl text-gray-600">
            A small team dedicated to clean code and exceptional user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center bg-white p-8 rounded-lg shadow-xl transition transform hover:scale-[1.02]">
              <img 
                className="mx-auto h-32 w-32 rounded-full object-cover" 
                src={member.image} 
                alt={member.name} 
              />
              <h3 className="mt-6 text-xl font-medium text-gray-900">{member.name}</h3>
              <p className="mt-1 text-sm text-indigo-600 font-semibold">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;