import React, { useEffect, useState } from 'react';
import { testimonialsData } from '../../data/content';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonialsLength = testimonialsData.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsLength);
        }, 6000);

        return () => clearInterval(interval);
    }, [testimonialsLength]);

    return (
        <section className="relative py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-light text-gray-900 mb-4">What Our <span className="font-bold">Clients Say</span></h2>
                </div>

                <div className="max-w-4xl mx-auto overflow-hidden relative">
                    <motion.div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {testimonialsData.map((testimonial, index) => (
                            <div key={index} className="min-w-full px-4">
                                <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center min-h-[300px] h-auto lg:h-[300px]">
                                    <svg className="w-10 h-10 text-blue-100 mb-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                    <p className="text-xl md:text-2xl font-light text-gray-700 mb-8 italic">"{testimonial.quote}"</p>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">{testimonial.author}</h3>
                                        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonialsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;