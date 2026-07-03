import React, { useState } from 'react';
import { team } from '../../data/content';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="contact" className="relative py-24 bg-black text-white overflow-hidden min-h-screen flex items-center">

      {/* Decorative vertical dots from screenshot removed as per user request */}

      <div className="container mx-auto px-6 w-full flex flex-col items-center justify-center">

        <div className="relative w-full max-w-5xl h-[400px] lg:h-[500px] flex items-center justify-center mt-12 perspective-1000">
          {team.map((member, idx) => {
            const distance = (idx - activeIndex + team.length) % team.length;

            let positionClass = '';
            let zIndexClass = 'z-0';
            let displayClass = 'opacity-0 scale-50 pointer-events-none';

            if (distance === 0) {
              positionClass = 'translate-x-0';
              zIndexClass = 'z-20';
              displayClass = 'opacity-100 scale-[1.05] md:scale-[1.15] shadow-2xl pointer-events-auto';
            } else if (distance === 1) {
              positionClass = 'translate-x-[85%] sm:translate-x-[100%] md:translate-x-[120%] lg:translate-x-[130%]';
              zIndexClass = 'z-10';
              displayClass = 'opacity-50 md:opacity-60 scale-75 md:scale-90 pointer-events-auto hover:opacity-80 cursor-pointer';
            } else if (distance === team.length - 1) {
              positionClass = '-translate-x-[85%] sm:-translate-x-[100%] md:-translate-x-[120%] lg:-translate-x-[130%]';
              zIndexClass = 'z-10';
              displayClass = 'opacity-50 md:opacity-60 scale-75 md:scale-90 pointer-events-auto hover:opacity-80 cursor-pointer';
            }

            return (
              <div
                key={member.id}
                onClick={() => setActiveIndex(idx)}
                className={`absolute w-[220px] md:w-[260px] lg:w-[280px] h-[300px] md:h-[340px] lg:h-[360px] bg-white transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col ${positionClass} ${zIndexClass} ${displayClass} shadow-black/50`}
              >
                {/* Image Container - Square Aspect */}
                <div className="w-full h-[220px] md:h-[260px] lg:h-[280px] bg-[#a8c392] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback in case actual images don't exist yet
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&size=300`;
                    }}
                  />
                </div>

                {/* Text Content Container */}
                <div className="w-full bg-white flex-1 flex flex-col items-center justify-start pt-3 lg:pt-4 px-2 lg:px-4 text-gray-900 text-center overflow-hidden">
                  <h3 className="text-[15px] lg:text-[17px] font-medium tracking-wide text-[#333] truncate w-full px-1">{member.name}</h3>

                  {/* Expandable Role and Socials */}
                  <div className={`transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col items-center w-full ${distance === 0 ? 'max-h-24 opacity-100 mt-1' : 'max-h-0 opacity-0 mt-0'}`}>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">{member.role}</p>
                    <div className="flex space-x-5 text-gray-700">
                      <a href={member.socials?.linkedin} className="hover:text-black transition-colors"><FaLinkedin size={15} /></a>
                      <a href={member.socials?.instagram} className="hover:text-black transition-colors"><FaInstagram size={15} /></a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;