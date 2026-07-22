import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, MessageCircle, Copy, Check } from 'lucide-react';
import { faqData, faqCategories, FAQCategory } from '../../data/faq';

const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('All');
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [allExpanded, setAllExpanded] = useState(false);
  const [copiedLink, setCopiedLink] = useState<number | null>(null);

  // Filter FAQs based on search query and active category
  const filteredFAQs = useMemo(() => {
    return faqData.filter((faq) => {
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const toggleItem = (id: number) => {
    if (allExpanded) setAllExpanded(false);
    setOpenItem(openItem === id ? null : id);
  };

  const toggleAll = () => {
    setAllExpanded(!allExpanded);
    if (!allExpanded) {
      setOpenItem(null); // Clear individual open state when expanding all
    }
  };

  const copyToClipboard = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}#faq-${id}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  // Generate SEO structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#050505]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0070cc] rounded-full blur-[120px] opacity-[0.05] mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#9254f5] rounded-full blur-[100px] opacity-[0.05] mix-blend-screen"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0070cc] to-[#9254f5]">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Everything you need to know about OQULIX and our services.
          </motion.p>
        </div>

        {/* Search and Controls */}
        <div className="mb-10 space-y-6">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search questions..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#0070cc] focus:ring-1 focus:ring-[#0070cc] transition-all duration-300"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {faqCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category 
                      ? 'bg-[#0070cc] text-white shadow-[0_0_15px_rgba(0,112,204,0.4)]' 
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <button 
              onClick={toggleAll}
              className="text-sm text-[#0070cc] hover:text-white transition-colors duration-300 font-medium"
            >
              {allExpanded ? 'Collapse All' : 'Expand All'}
            </button>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => {
                const isOpen = allExpanded || openItem === faq.id;
                
                return (
                  <motion.div 
                    key={faq.id}
                    id={`faq-${faq.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen 
                        ? 'bg-white/10 border-[#0070cc]/50 shadow-[0_4px_30px_rgba(0,112,204,0.1)]' 
                        : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
                    }`}
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <span className={`text-lg font-medium pr-8 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-200'}`}>
                        {faq.question}
                      </span>
                      <motion.div 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[#0070cc] text-white' : 'bg-white/10 text-gray-400'}`}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-0">
                            <p className="text-gray-400 leading-relaxed">
                              {faq.answer}
                            </p>
                            <div className="mt-4 pt-4 border-t border-white/10 flex justify-end">
                              <button 
                                onClick={(e) => copyToClipboard(faq.id, e)}
                                className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#0070cc] transition-colors"
                              >
                                {copiedLink === faq.id ? (
                                  <><Check size={14} className="text-green-500"/> Copied!</>
                                ) : (
                                  <><Copy size={14} /> Copy Link</>
                                )}
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-400">No questions found matching your search.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Still have questions CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center justify-center p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 w-full max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#0070cc]/20 flex items-center justify-center mb-6 text-[#0070cc]">
              <MessageCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Still have questions?</h3>
            <p className="text-gray-400 mb-8 max-w-md">
              Can't find the answer you're looking for? Please chat to our friendly team.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#0070cc] hover:bg-[#005bb5] text-white font-medium transition-all duration-300 shadow-[0_0_20px_rgba(0,112,204,0.4)] hover:shadow-[0_0_30px_rgba(0,112,204,0.6)] hover:-translate-y-1"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
