import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    // Navigate back to the team page
    navigate("/team");
  };

  return (
    <button
      onClick={handleBack}
      className="fixed top-24 left-6 md:left-12 z-50 flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white text-sm font-medium transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(0,102,255,0.3)] hover:shadow-[0_0_25px_rgba(0,102,255,0.6)] group"
    >
      <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
      Back to Team
    </button>
  );
};

export default BackButton;
