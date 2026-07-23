import React, { useEffect } from 'react';
import { valuableMembers } from '../../data/content';
import { foundersData } from '../../data/foundersData';
import FounderCard from './FounderCard';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const TeamCard = ({ member }: { member: any }) => (
  <div className="w-[260px] lg:w-[280px] h-[360px] lg:h-[380px] bg-white transition-all duration-300 ease-out flex flex-col hover:scale-105 shadow-xl shadow-black/50 mx-auto group">
    {/* Image Container - Square Aspect */}
    <div className="w-full h-[260px] lg:h-[280px] bg-[#a8c392] overflow-hidden relative">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        onError={(e) => {
          // Fallback in case actual images don't exist yet
          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&size=300`;
        }}
      />
    </div>

    {/* Text Content Container */}
    <div className="w-full bg-white flex-1 flex flex-col items-center justify-start pt-4 px-2 lg:px-4 text-gray-900 text-center overflow-hidden">
      <h3 className="text-[17px] lg:text-[18px] font-semibold tracking-wide text-[#333] truncate w-full px-1">{member.name}</h3>

      {/* Role and Socials */}
      <div className="flex flex-col items-center w-full mt-1">
        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">{member.role}</p>
        <div className="flex space-x-5 text-gray-700">
          {member.socials?.linkedin && member.socials.linkedin !== "#" && (
            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
              <FaLinkedin size={16} />
            </a>
          )}
          {member.socials?.instagram && member.socials.instagram !== "#" && (
            <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
              <FaInstagram size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const TeamSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="contact" className="py-24 bg-black text-white overflow-hidden min-h-screen pt-32">
      <div className="container mx-auto px-6 w-full flex flex-col items-center">

        {/* Main Heading */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Our <span className="font-bold">Team</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The visionary minds and dedicated creators behind Oqulix's immersive experiences.
          </p>
        </div>

        {/* Founders Section */}
        <div className="w-full max-w-[1000px] mb-20 md:mb-32">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#0070cc] tracking-wide uppercase">Founders</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {foundersData.map((member) => (
              <FounderCard key={member.id} member={member} founderId={member.id} />
            ))}
          </div>
        </div>

        {/* Valuable Members Section */}
        <div className="w-full max-w-[1200px]">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-300 tracking-wide uppercase">Valuable Members</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
            {valuableMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;