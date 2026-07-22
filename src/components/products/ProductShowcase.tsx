import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../../data/content';

const ProductShowcase = () => {
    return (
        <div id="products" className="w-full flex flex-col font-sans">
            {products.map((product, index) => {
                const isDark = index % 2 !== 0; // Alternates: Light, Dark, Light, Dark...
                const isReversed = index % 2 !== 0; // Alternate image left/right

                return (
                    <section
                        key={product.id}
                        id={product.name.toLowerCase().replace(/ /g, '-')}
                        className={`w-full py-16 md:py-24 lg:py-32 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#0f0f0f] text-white' : 'bg-white text-gray-900'
                            }`}
                    >
                        <div className={`container mx-auto px-6 md:px-10 lg:px-12 max-w-[1300px] flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 md:gap-16 lg:gap-20`}>

                            {/* Text Content */}
                            <div className="flex-1 space-y-6 lg:space-y-8 z-10 w-full text-center lg:text-left">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                    <h2 className={`text-4xl md:text-5xl lg:text-[54px] font-light tracking-tight leading-[1.1] mb-4 ${isDark ? 'text-white' : 'text-[#1f1f1f]'}`}>
                                        {product.name}
                                    </h2>
                                    {/* PlayStation style tagline / sub-heading */}
                                    {product.tagline && (
                                        <p className="text-[#0070cc] text-lg md:text-xl font-normal mb-4">
                                            {product.tagline}
                                        </p>
                                    )}
                                </motion.div>

                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                                    className={`card-desc max-w-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                                >
                                    {product.description}
                                </motion.p>

                                {/* Features List */}
                                {product.features && (
                                    <motion.ul
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                                        className={`grid grid-cols-1 md:grid-cols-2 gap-3 max-w-xl card-desc ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                                    >
                                        {product.features.map((feature, i) => (
                                            <li key={i} className="flex items-center space-x-2 font-medium">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#0070cc]"></div>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                    className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4"
                                >
                                    <a
                                        href={product.cta.explore}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center justify-center px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 ${isDark
                                            ? 'bg-white text-black hover:bg-gray-200 hover:scale-105'
                                            : 'bg-[#0070cc] text-white hover:bg-[#005fb3] hover:scale-105'
                                            }`}
                                    >
                                        Find out more
                                    </a>
                                </motion.div>
                            </div>

                            {/* Image/Media Content */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, rotateY: isReversed ? -10 : 10 }}
                                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="flex-1 w-full relative perspective-1000"
                            >
                                <div className={`aspect-video w-full rounded-2xl overflow-hidden shadow-2xl relative group ${isDark ? 'ring-1 ring-white/10 shadow-white/5' : 'ring-1 ring-black/5 shadow-black/10'}`}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    {/* Premium subtle gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </motion.div>

                        </div>
                    </section>
                );
            })}
        </div>
    );
};

export default ProductShowcase;