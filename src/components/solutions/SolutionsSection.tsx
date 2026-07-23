import React from 'react';
import { 
  HeartPulse, 
  Glasses, 
  GraduationCap, 
  Gamepad2, 
  Cpu, 
  Building2
} from 'lucide-react';

const solutions = [
  { 
    id: 'healthcare',
    title: 'Healthcare & Rehabilitation', 
    icon: <HeartPulse strokeWidth={2} size={24} className="text-purple-500" />, 
    description: 'Deliver next-generation rehabilitation through immersive VR therapy, real-time tracking, and interactive engagement.',
    borderColor: 'border-t-purple-500',
    iconBg: 'bg-purple-100/50',
  },
  { 
    id: 'ar-vr',
    title: 'Augmented & Virtual Reality', 
    icon: <Glasses strokeWidth={2} size={24} className="text-orange-400" />, 
    description: 'Create immersive digital experiences with advanced AR/VR for virtual training, simulations, and product visualization.',
    borderColor: 'border-t-orange-400',
    iconBg: 'bg-orange-100/50',
  },
  { 
    id: 'education',
    title: 'Education & Smart Learning', 
    icon: <GraduationCap strokeWidth={2} size={24} className="text-emerald-400" />, 
    description: 'Revolutionize classrooms with immersive platforms, virtual labs, and gamified learning for better student engagement.',
    borderColor: 'border-t-emerald-400',
    iconBg: 'bg-emerald-100/50',
  },
  { 
    id: 'gaming',
    title: 'Gaming & Customer Engagement', 
    icon: <Gamepad2 strokeWidth={2} size={24} className="text-pink-400" />, 
    description: 'Transform customer engagement with interactive branded games, loyalty campaigns, and dynamic event activations.',
    borderColor: 'border-t-pink-400',
    iconBg: 'bg-pink-100/50',
  },
  { 
    id: 'iot',
    title: 'IoT & Embedded Intelligence', 
    icon: <Cpu strokeWidth={2} size={24} className="text-blue-400" />, 
    description: 'Build intelligent ecosystems with smart automation, environmental sensors, and remote diagnostic embedded solutions.',
    borderColor: 'border-t-blue-400',
    iconBg: 'bg-blue-100/50',
  },
  { 
    id: 'enterprise',
    title: 'Custom Business Solutions', 
    icon: <Building2 strokeWidth={2} size={24} className="text-amber-400" />, 
    description: 'Digitize your organization with scalable ERP, CRM, and cloud-based applications tailored to your workflow.',
    borderColor: 'border-t-amber-400',
    iconBg: 'bg-amber-100/50',
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 bg-[#f8f9fc] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] tracking-tight mb-6">
            Empowering Industries With Technology
          </h2>
          <p className="text-[#64748b] text-lg">
            We design cutting-edge interactive digital experiences that help organizations improve productivity, training, healthcare, and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className={`bg-white rounded-[32px] p-8 shadow-sm border-t-[8px] ${solution.borderColor} hover:shadow-md transition-shadow duration-300`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${solution.iconBg}`}>
                {solution.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-[#1e293b]">
                {solution.title}
              </h3>
              
              <p className="text-[#64748b] leading-relaxed text-[15px]">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;