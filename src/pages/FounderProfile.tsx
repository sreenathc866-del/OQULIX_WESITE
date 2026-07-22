import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { foundersData } from "../data/foundersData";
import BackButton from "../components/ui/BackButton";
import { FaLinkedin, FaInstagram, FaGithub, FaGlobe, FaTrophy, FaBriefcase, FaCode } from "react-icons/fa";

const FounderProfile = () => {
  const { id } = useParams();
  const founder = foundersData.find((f) => f.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!founder) {
    return <Navigate to="/" replace />;
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, duration: 0.5 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans overflow-x-hidden pt-20">
      <BackButton />
      
      {/* Hero Section */}
      <section className="relative w-full py-20 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 max-w-md relative"
        >
          <div className="absolute -inset-4 bg-[#0066FF]/20 blur-3xl rounded-full z-0" />
          <img 
            src={founder.image} 
            alt={founder.name} 
            className="w-full aspect-square object-cover rounded-[30px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-10"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(founder.name)}&background=0066FF&color=fff&size=500`;
            }}
          />
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 flex flex-col items-start text-left"
        >
          <motion.p variants={itemVariants} className="text-[#0066FF] font-medium tracking-widest uppercase mb-2">
            {founder.role} • OQULIX
          </motion.p>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            {founder.name}
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-300 leading-relaxed mb-8">
            {founder.shortDescription}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex gap-4">
            {founder.socialLinks.linkedin && founder.socialLinks.linkedin !== "#" && (
              <a href={founder.socialLinks.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#0066FF] hover:border-[#0066FF] transition-all duration-300 hover:scale-110">
                <FaLinkedin size={20} />
              </a>
            )}
            {founder.socialLinks.instagram && founder.socialLinks.instagram !== "#" && (
              <a href={founder.socialLinks.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#E1306C] hover:border-[#E1306C] transition-all duration-300 hover:scale-110">
                <FaInstagram size={20} />
              </a>
            )}
            {founder.socialLinks.github && founder.socialLinks.github !== "#" && (
              <a href={founder.socialLinks.github} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-gray-700 hover:border-gray-700 transition-all duration-300 hover:scale-110">
                <FaGithub size={20} />
              </a>
            )}
            {founder.socialLinks.portfolio && founder.socialLinks.portfolio !== "#" && (
              <a href={founder.socialLinks.portfolio} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 hover:scale-110">
                <FaGlobe size={20} />
              </a>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* Left Column (About & Experience) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-2/3 flex flex-col gap-12"
        >
          {/* About */}
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[24px] backdrop-blur-md">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#0066FF] rounded-full inline-block" />
              About
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              {founder.biography}
            </p>
          </div>

          {/* Experience */}
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[24px] backdrop-blur-md">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#0066FF] rounded-full inline-block" />
              Experience
            </h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
              {founder.experience.map((exp, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-[#0a0a0a] group-hover:border-[#0066FF] group-hover:bg-[#0066FF]/20 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300 shadow-[0_0_10px_rgba(0,102,255,0)] group-hover:shadow-[0_0_15px_rgba(0,102,255,0.4)] z-10 ml-0 md:ml-auto">
                    <FaBriefcase className="w-3 h-3 group-hover:text-[#0066FF]" />
                  </div>
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm group-hover:border-[#0066FF]/30 transition-colors ml-4 md:ml-0">
                    <div className="flex flex-col mb-1">
                      <span className="text-[#0066FF] font-medium text-sm">{exp.year}</span>
                      <h4 className="font-bold text-lg text-white">{exp.role}</h4>
                      <span className="text-gray-400 text-sm">{exp.company}</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column (Skills & Achievements) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/3 flex flex-col gap-8"
        >
          {/* Skills */}
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[24px] backdrop-blur-md">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
              <FaCode className="text-[#0066FF]" />
              Core Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {founder.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-[#0066FF]/20 hover:border-[#0066FF]/50 hover:text-[#0066FF] transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[24px] backdrop-blur-md">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
              <FaTrophy className="text-[#0066FF]" />
              Achievements
            </h2>
            <div className="space-y-4">
              {founder.achievements.map((achievement, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center shrink-0">
                    <FaTrophy size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{achievement.title}</h4>
                    <p className="text-gray-400 text-xs mt-1 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3"
        >
          Key Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founder.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative h-64 md:h-80 rounded-[24px] overflow-hidden cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#0066FF] transition-colors">{project.name}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FounderProfile;
