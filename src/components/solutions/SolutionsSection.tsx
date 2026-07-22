import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaGraduationCap, FaGamepad } from 'react-icons/fa';

const solutions = [
  { title: 'Healthcare', icon: <FaHeartbeat size={40} className="text-blue-600 mb-4" />, description: 'Transforming physiotherapy and patient rehabilitation through immersive virtual reality experiences and advanced recovery tools.' },
  { title: 'Education', icon: <FaGraduationCap size={40} className="text-blue-600 mb-4" />, description: 'Bringing classrooms to life with interactive smart boards and augmented reality flash cards for engaging student learning.' },
  { title: 'Entertainment', icon: <FaGamepad size={40} className="text-blue-600 mb-4" />, description: 'Creating unforgettable custom interactive games and gamified experiences that drive user engagement and fun.' },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900 mb-4">
            Empowering <span>Industries</span>
          </h2>
          <p className="card-desc text-gray-600 max-w-2xl mx-auto">
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
              <h3 className="card-title text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{solution.title}</h3>
              <p className="card-desc text-gray-600">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;