import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const FounderCard = ({ member, founderId }: { member: any, founderId: string }) => {
  return (
    <div 
      className="block w-[260px] lg:w-[280px] h-auto bg-[#0a0a0a] border border-white/10 rounded-[20px] transition-all duration-300 ease-out flex flex-col hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,102,255,0.2)] hover:border-[#0066FF]/50 mx-auto group overflow-hidden cursor-default backdrop-blur-sm relative pb-6"
    >
      {/* Image Container */}
      <div className="w-full h-[260px] lg:h-[280px] overflow-hidden relative rounded-t-[20px]">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0066FF&color=fff&size=300`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-80" />
      </div>

      {/* Text Content */}
      <div className="w-full p-6 flex flex-col items-center justify-start text-white text-center relative z-10 -mt-10">
        <h3 className="text-xl lg:text-2xl font-bold tracking-wide text-white truncate w-full group-hover:text-[#0066FF] transition-colors duration-300">{member.name}</h3>
        <p className="text-[#0066FF] text-xs lg:text-sm font-semibold uppercase tracking-wider mt-1 mb-3">{member.role}</p>
        
        {/* Short description */}
        <p className="text-gray-400 text-sm line-clamp-3 mb-6 transition-opacity duration-300">
          {member.shortDescription || "Visionary leader driving innovation at OQULIX."}
        </p>

        {/* Social Links */}
        <div className="mt-auto flex items-center justify-center gap-4 text-white/80 w-full">
          {member.socialLinks?.linkedin && member.socialLinks.linkedin !== "#" && (
            <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/20 hover:bg-[#0066FF] hover:border-[#0066FF] hover:text-white transition-all duration-300 z-20">
              <FaLinkedin size={18} />
            </a>
          )}
          {member.socialLinks?.instagram && member.socialLinks.instagram !== "#" && (
            <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/20 hover:bg-[#E1306C] hover:border-[#E1306C] hover:text-white transition-all duration-300 z-20">
              <FaInstagram size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default FounderCard;
