import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaGraduationCap, FaBuilding, FaShoppingCart, FaChalkboardTeacher } from 'react-icons/fa';

const solutions = [
  { title: 'Healthcare', icon: <FaHeartbeat size={40} className="text-blue-600 mb-4" />, description: 'Immersive VR tools for patient rehabilitation and advanced surgical planning.' },
  { title: 'Education', icon: <FaGraduationCap size={40} className="text-blue-600 mb-4" />, description: 'Augmented reality learning tools that bring classrooms to life.' },
  { title: 'Real Estate', icon: <FaBuilding size={40} className="text-blue-600 mb-4" />, description: 'Virtual property tours and architectural visualization.' },
  { title: 'Retail', icon: <FaShoppingCart size={40} className="text-blue-600 mb-4" />, description: 'Interactive AR shopping experiences and virtual try-ons.' },
  { title: 'Enterprise Training', icon: <FaChalkboardTeacher size={40} className="text-blue-600 mb-4" />, description: 'Risk-free, scalable VR training simulations for corporate teams.' },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Empowering <span className="font-bold">Industries</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our cutting-edge VR and AR technologies are designed to solve real-world challenges across multiple sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 group cursor-default"
              whileHover={{ y: -5 }}
            >
              {solution.icon}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{solution.title}</h3>
              <p className="text-gray-600 leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;