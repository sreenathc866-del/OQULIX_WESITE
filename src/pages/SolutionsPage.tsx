import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import SolutionBlock from './solutions/SolutionBlock';
import { 
  HealthcareMockup, 
  ARVRMockup, 
  EdTechMockup, 
  GameDevMockup, 
  IoTMockup, 
  SoftwareMockup 
} from './solutions/MockupGraphics';

const solutionsData = [
  {
    id: 'healthcare',
    title: 'Healthcare & Rehabilitation',
    subtitle: 'Digital Health',
    description: 'Deliver next-generation rehabilitation through immersive Virtual Reality therapy. We help physiotherapists and rehabilitation centers improve motor recovery, cognitive rehabilitation, and patient engagement.',
    features: ['VR Therapy Games', 'Real-time Progress Tracking', 'Personalized Sessions', 'Evidence-based Programs'],
    mockup: <HealthcareMockup />,
    orientation: 'left' as const,
  },
  {
    id: 'arvr',
    title: 'Augmented & Virtual Reality',
    subtitle: 'Immersive XR',
    description: 'Create immersive digital experiences using advanced AR and VR technologies. From virtual training and product visualization to interactive simulations and digital twins.',
    features: ['Virtual Training Simulators', 'Product Visualization', 'Interactive Digital Twins', 'Immersive Customer Engagement'],
    mockup: <ARVRMockup />,
    orientation: 'right' as const,
  },
  {
    id: 'gamedev',
    title: 'Game Development & Gamification',
    subtitle: 'Interactive Media',
    description: 'Transform customer engagement with branded interactive games, reward-based campaigns, and fully customized games designed to increase participation and brand awareness.',
    features: ['Custom Branded Games', 'Loyalty Programs', 'Event Activations & Leaderboards', 'Multiplayer Experiences'],
    mockup: <GameDevMockup />,
    orientation: 'left' as const,
  },
  {
    id: 'edtech',
    title: 'Education & Smart Learning',
    subtitle: 'EdTech',
    description: 'Revolutionize classrooms with immersive education platforms, AR flash cards, virtual laboratories, and interactive smart classrooms that improve knowledge retention.',
    features: ['Immersive Education Platforms', 'Virtual Laboratories', 'Skill Development Modules', 'AR Learning Materials'],
    mockup: <EdTechMockup />,
    orientation: 'right' as const,
  },
  {
    id: 'iot',
    title: 'IoT & Embedded Systems',
    subtitle: 'Connected Devices',
    description: 'Build intelligent connected ecosystems using IoT devices and embedded technologies. We develop smart automation systems, remote diagnostics, and predictive maintenance solutions.',
    features: ['Smart Automation Systems', 'Industrial Monitoring', 'Environmental Sensors', 'Cloud-connected Embedded Solutions'],
    mockup: <IoTMockup />,
    orientation: 'left' as const,
  },
  {
    id: 'software',
    title: 'Custom Software Solutions',
    subtitle: 'Enterprise Software',
    description: 'Digitize your organization with scalable business software tailored to your workflow. We build ERP systems, CRM platforms, and cloud-based enterprise platforms.',
    features: ['ERP & CRM Systems', 'Web & Mobile Applications', 'AI Automation & Analytics', 'Cloud Architecture'],
    mockup: <SoftwareMockup />,
    orientation: 'right' as const,
  },
];

const SolutionsPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState('healthcare');

  useEffect(() => {
    const handleScroll = () => {
      const sections = solutionsData.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(solutionsData[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-slate-200">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-slate-900 z-50 transform origin-left"
        style={{ scaleX }}
      />

      {/* Sticky Section Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        {solutionsData.map((solution) => (
          <a
            key={solution.id}
            href={`#${solution.id}`}
            className="group flex items-center justify-end gap-4"
          >
            <span 
              className={`text-xs font-medium tracking-wide transition-all duration-300 ${
                activeSection === solution.id 
                  ? 'text-slate-900 opacity-100 translate-x-0' 
                  : 'text-slate-400 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0'
              }`}
            >
              {solution.subtitle}
            </span>
            <div 
              className={`h-[2px] transition-all duration-300 rounded-full ${
                activeSection === solution.id 
                  ? 'w-6 bg-slate-900' 
                  : 'w-2 bg-slate-300 group-hover:bg-slate-400 group-hover:w-4'
              }`}
            />
          </a>
        ))}
      </div>

      {/* Hero Intro */}
      <section className="min-h-[80vh] flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center z-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 mb-6"
          >
            Capabilities
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed"
          >
            We partner with visionary organizations to build transformative digital experiences.
          </motion.p>
        </div>
      </section>

      {/* Solution Blocks */}
      <div className="relative">
        {solutionsData.map((solution) => (
          <SolutionBlock
            key={solution.id}
            id={solution.id}
            title={solution.title}
            subtitle={solution.subtitle}
            description={solution.description}
            features={solution.features}
            mockup={solution.mockup}
            orientation={solution.orientation}
          />
        ))}
      </div>

      {/* Premium CTA */}
      <section className="py-32 bg-slate-900 text-white flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen" style={{ backgroundImage: 'radial-gradient(circle at center, #3b82f6 0%, transparent 70%)' }}></div>
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 text-center z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Ready to shape the future?
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light">
            Let's discuss how our deep-tech expertise can solve your most complex challenges and drive unparalleled growth.
          </p>
          <a 
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-full font-medium text-lg hover:bg-slate-100 transition-colors duration-300 shadow-xl shadow-white/10"
          >
            Start a project
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default SolutionsPage;
