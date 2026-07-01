import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Sreenivas',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop',
    description: 'Visionary leader with a passion for transformative tech.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Co-founder & CTO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop',
    description: 'Expert in XR technologies and scalable systems.',
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-light text-gray-900 mb-4">Meet Our <span className="font-bold">Team</span></h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto">The brilliant minds driving OQULIX's mission to transform healthcare and education through immersive experiences.</p>
        
        <div className="flex flex-col md:flex-row justify-center gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-3xl shadow-sm p-10 w-full md:w-1/3 flex flex-col items-center hover:shadow-lg hover:border-blue-100 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;