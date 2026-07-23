import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface SolutionBlockProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  mockup: React.ReactNode;
  orientation?: 'left' | 'right';
}

const SolutionBlock: React.FC<SolutionBlockProps> = ({
  id,
  title,
  subtitle,
  description,
  features,
  mockup,
  orientation = 'left',
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yMockup = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yText = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isLeft = orientation === 'left';

  return (
    <section 
      id={id} 
      ref={containerRef}
      className="min-h-screen w-full flex items-center justify-center py-24 relative snap-center overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full">
        <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 h-full ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
          
          {/* Text Content */}
          <motion.div 
            style={{ y: yText, opacity }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className="mb-4">
              <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold tracking-widest uppercase shadow-sm border border-slate-200">
                {subtitle}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              {title}
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 font-light">
              {description}
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="flex items-center text-slate-700"
                >
                  <CheckCircle2 className="w-5 h-5 mr-3 text-slate-400" />
                  <span className="text-base md:text-lg">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Mockup Graphic */}
          <motion.div 
            style={{ y: yMockup }}
            className="w-full lg:w-1/2 aspect-square md:aspect-video lg:aspect-square"
          >
            {mockup}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SolutionBlock;
