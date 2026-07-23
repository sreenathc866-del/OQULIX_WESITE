import React from 'react';
import { motion } from 'framer-motion';

export const HealthcareMockup = () => (
  <div className="relative w-full h-full bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-pink-50/50" />
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 w-3/5 aspect-square rounded-full border border-rose-100 flex items-center justify-center bg-white/50 backdrop-blur-sm"
    >
      <div className="w-3/4 aspect-square rounded-full border border-rose-200 flex items-center justify-center bg-white/80 backdrop-blur-md shadow-lg shadow-rose-100/50">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#rose-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="rose-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop stopColor="#f43f5e" offset="0%" />
              <stop stopColor="#ec4899" offset="100%" />
            </linearGradient>
          </defs>
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
          <path d="m18 15-2-2" />
          <path d="m15 18-2-2" />
        </svg>
      </div>
    </motion.div>
    {/* Floating elements */}
    <motion.div 
      animate={{ y: [-10, 10, -10] }} 
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/4 right-1/4 w-12 h-12 bg-rose-200/40 rounded-full blur-xl"
    />
  </div>
);

export const ARVRMockup = () => (
  <div className="relative w-full h-full bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-purple-50/50" />
    <motion.div 
      initial={{ rotateY: -20, opacity: 0 }}
      whileInView={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative z-10 w-2/3 aspect-video bg-white/60 backdrop-blur-md rounded-2xl border border-violet-100 shadow-xl shadow-violet-100/50 flex flex-col overflow-hidden"
    >
      <div className="h-8 border-b border-violet-50 flex items-center px-4 space-x-1.5 bg-white/40">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
      </div>
      <div className="flex-1 relative p-6 flex items-center justify-center">
        <div className="w-full h-full border border-dashed border-violet-200 rounded-xl relative overflow-hidden flex items-center justify-center">
           <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#violet-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <defs>
              <linearGradient id="violet-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop stopColor="#8b5cf6" offset="0%" />
                <stop stopColor="#a855f7" offset="100%" />
              </linearGradient>
            </defs>
            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
            <circle cx="12" cy="12" r="3" />
          </svg>
           <motion.div 
             animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} 
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             className="absolute w-32 h-32 bg-violet-400/20 rounded-full blur-2xl"
           />
        </div>
      </div>
    </motion.div>
  </div>
);

export const EdTechMockup = () => (
  <div className="relative w-full h-full bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50/50" />
    <motion.div 
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 w-3/5 h-4/5 bg-white/80 backdrop-blur-md rounded-2xl border border-blue-100 shadow-xl shadow-blue-100/50 flex flex-col p-6"
    >
      <div className="w-1/3 h-4 bg-blue-100 rounded-full mb-6" />
      <div className="flex-1 flex gap-4">
        <div className="w-1/3 h-full flex flex-col gap-3">
          {[1,2,3,4].map(i => (
            <motion.div 
              key={i}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="h-12 w-full bg-slate-50 rounded-lg border border-slate-100" 
            />
          ))}
        </div>
        <div className="w-2/3 h-full bg-blue-50/50 rounded-xl border border-blue-100 flex items-center justify-center">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#blue-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <defs>
              <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop stopColor="#3b82f6" offset="0%" />
                <stop stopColor="#06b6d4" offset="100%" />
              </linearGradient>
            </defs>
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
          </svg>
        </div>
      </div>
    </motion.div>
  </div>
);

export const GameDevMockup = () => (
  <div className="relative w-full h-full bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50/50" />
    <motion.div 
      initial={{ scale: 1.1, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 w-2/3 h-1/2 bg-slate-900 rounded-[2rem] shadow-2xl shadow-amber-900/10 flex items-center justify-between px-8 border border-slate-800"
    >
       <div className="flex flex-col gap-4">
         <div className="w-12 h-12 rounded-full border-2 border-slate-700 flex items-center justify-center relative overflow-hidden">
           <div className="absolute top-1 right-2 w-3 h-3 bg-amber-500 rounded-full" />
           <div className="absolute bottom-1 left-2 w-3 h-3 bg-slate-600 rounded-full" />
         </div>
       </div>
       <div className="w-1/3 aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center border border-slate-700/50 shadow-inner">
         <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#amber-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <defs>
              <linearGradient id="amber-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop stopColor="#f59e0b" offset="0%" />
                <stop stopColor="#f97316" offset="100%" />
              </linearGradient>
            </defs>
            <line x1="6" x2="10" y1="12" y2="12" />
            <line x1="8" x2="8" y1="10" y2="14" />
            <line x1="15" x2="15.01" y1="13" y2="13" />
            <line x1="18" x2="18.01" y1="11" y2="11" />
            <rect width="20" height="12" x="2" y="6" rx="2" />
          </svg>
       </div>
       <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700"><span className="w-3 h-3 rounded-full bg-rose-500" /></div>
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700"><span className="w-3 h-3 rounded-full bg-blue-500" /></div>
       </div>
    </motion.div>
  </div>
);

export const IoTMockup = () => (
  <div className="relative w-full h-full bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50/50" />
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative z-10 w-3/5 h-3/5 flex flex-col items-center justify-center gap-6"
    >
      <div className="w-24 h-24 bg-white rounded-2xl shadow-lg border border-emerald-100 flex items-center justify-center relative z-20">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#emerald-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="emerald-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop stopColor="#10b981" offset="0%" />
              <stop stopColor="#14b8a6" offset="100%" />
            </linearGradient>
          </defs>
          <rect width="16" height="16" x="4" y="4" rx="2" />
          <rect width="6" height="6" x="9" y="9" rx="1" />
          <path d="M15 2v2" />
          <path d="M15 20v2" />
          <path d="M2 15h2" />
          <path d="M2 9h2" />
          <path d="M20 15h2" />
          <path d="M20 9h2" />
          <path d="M9 2v2" />
          <path d="M9 20v2" />
        </svg>
      </div>
      
      <div className="w-full flex justify-between px-8 relative">
        <svg className="absolute top-1/2 left-0 w-full -translate-y-1/2 -z-10" height="2" viewBox="0 0 100 2" preserveAspectRatio="none">
           <line x1="0" y1="1" x2="100" y2="1" stroke="#d1fae5" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          className="w-12 h-12 bg-white rounded-lg shadow-md border border-emerald-50" 
        />
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          className="w-12 h-12 bg-white rounded-lg shadow-md border border-emerald-50" 
        />
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="w-12 h-12 bg-white rounded-lg shadow-md border border-emerald-50" 
        />
      </div>
    </motion.div>
  </div>
);

export const SoftwareMockup = () => (
  <div className="relative w-full h-full bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex items-center justify-center p-8">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-gray-50/80" />
    <motion.div 
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative z-10 w-full h-full bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/50 flex flex-col overflow-hidden"
    >
      <div className="h-10 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50/50">
        <div className="flex space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="w-1/3 h-4 bg-white rounded-md border border-slate-200" />
        <div className="w-4 h-4 rounded bg-slate-200" />
      </div>
      <div className="flex-1 flex">
        <div className="w-16 border-r border-slate-100 bg-slate-50/30 flex flex-col items-center py-4 gap-4">
          <div className="w-8 h-8 rounded bg-slate-200/50" />
          <div className="w-8 h-8 rounded bg-slate-100" />
          <div className="w-8 h-8 rounded bg-slate-100" />
        </div>
        <div className="flex-1 p-6 flex flex-col gap-6">
          <div className="flex justify-between items-end">
            <div className="w-1/3 h-8 bg-slate-100 rounded-md" />
            <div className="w-24 h-8 bg-blue-600 rounded-md" />
          </div>
          <div className="flex gap-4">
            <div className="flex-1 h-24 bg-blue-50 border border-blue-100 rounded-xl p-4 flex flex-col justify-end">
              <div className="w-1/2 h-2 bg-blue-200 rounded-full mb-2" />
              <div className="w-3/4 h-4 bg-blue-300 rounded-full" />
            </div>
            <div className="flex-1 h-24 bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex flex-col justify-end">
              <div className="w-1/2 h-2 bg-emerald-200 rounded-full mb-2" />
              <div className="w-3/4 h-4 bg-emerald-300 rounded-full" />
            </div>
            <div className="flex-1 h-24 bg-purple-50 border border-purple-100 rounded-xl p-4 flex flex-col justify-end">
              <div className="w-1/2 h-2 bg-purple-200 rounded-full mb-2" />
              <div className="w-3/4 h-4 bg-purple-300 rounded-full" />
            </div>
          </div>
          <div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl" />
        </div>
      </div>
    </motion.div>
  </div>
);
