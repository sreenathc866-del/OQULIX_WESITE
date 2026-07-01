import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { products } from '../../data/content';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProductShowcase = () => {
    const [selectedProduct, setSelectedProduct] = useState(products[0]);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleProductClick = (product: typeof products[0]) => {
        setSelectedProduct(product);
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = direction === 'left' ? -300 : 300;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="products" className="relative py-24 bg-white">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900">
                        Discover all <br/> <span className="font-bold">Products and Accessories</span>
                    </h2>
                </div>

                {/* Slider Container */}
                <div className="relative flex items-center">
                    <button 
                        onClick={() => scroll('left')}
                        className="absolute -left-4 z-10 p-3 bg-white rounded-full shadow-md text-blue-600 hover:bg-gray-50 transition hidden md:block"
                    >
                        <FaChevronLeft />
                    </button>
                    
                    <div 
                        ref={scrollContainerRef}
                        className="flex space-x-6 overflow-x-auto pb-8 pt-4 px-2 snap-x hide-scrollbar w-full"
                    >
                        {products.map((product) => {
                            const isSelected = selectedProduct.id === product.id;
                            return (
                                <motion.div
                                    key={product.id}
                                    className={`min-w-[280px] h-[300px] flex flex-col items-center justify-between bg-white rounded-2xl cursor-pointer snap-start transition-all duration-300 ${
                                        isSelected 
                                            ? 'border-[3px] border-blue-600 shadow-lg scale-105' 
                                            : 'border border-gray-100 shadow-sm hover:shadow-md'
                                    }`}
                                    onClick={() => handleProductClick(product)}
                                >
                                    <div className="flex-1 flex items-center justify-center p-0 w-full rounded-t-xl overflow-hidden relative">
                                        <img 
                                            src={product.image || "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=2070&auto=format&fit=crop"} 
                                            alt={product.name} 
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Optional gradient overlay */}
                                        <div className="absolute inset-0 bg-black/10"></div>
                                    </div>
                                    <div className="w-full text-center py-4 border-t border-gray-100 bg-white rounded-b-xl z-10">
                                        <h3 className={`text-sm font-bold ${isSelected ? 'text-blue-600' : 'text-gray-800'}`}>
                                            {product.name}
                                        </h3>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <button 
                        onClick={() => scroll('right')}
                        className="absolute -right-4 z-10 p-3 bg-white rounded-full shadow-md text-blue-600 hover:bg-gray-50 transition hidden md:block"
                    >
                        <FaChevronRight />
                    </button>
                </div>

                {/* Selected Product Details */}
                <div className="mt-12 md:w-1/2">
                    <h3 className="text-3xl text-gray-900 font-bold mb-3">{selectedProduct.name}</h3>
                    <p className="text-gray-600 mb-8">{selectedProduct.description}</p>
                    <div className="flex space-x-4">
                        <a href="#about" className="bg-[#003399] text-white font-bold px-6 py-2.5 rounded-full hover:bg-blue-800 transition shadow-md">
                            Find out more
                        </a>
                        <a href="#contact" className="bg-white border-2 border-gray-200 text-gray-800 font-bold px-6 py-2.5 rounded-full hover:bg-gray-50 transition shadow-sm">
                            Book Demo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;