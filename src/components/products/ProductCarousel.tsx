import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { products } from '../../data/content';
import 'swiper/css';
import 'swiper/css/navigation';

const ProductCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-white py-16 md:py-24 font-sans">
            <div className="container mx-auto pl-6 md:pl-10 lg:pl-12 max-w-[1400px]">
                {/* Title Section */}
                <div className="mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-gray-900 leading-[1.1]">
                        Discover all<br />Products and Accessories
                    </h2>
                </div>

                {/* Carousel Section */}
                <div className="relative group">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: '.product-prev',
                            nextEl: '.product-next',
                        }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        spaceBetween={16}
                        slidesPerView={1.2}
                        breakpoints={{
                            640: {
                                slidesPerView: 2.2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3.5,
                                spaceBetween: 24,
                            },
                        }}
                        className="pb-6"
                    >
                        {products.map((product, idx) => {
                            return (
                                <SwiperSlide key={product.id}>
                                    <a
                                        href={`#${product.id}`}
                                        className="block outline-none"
                                        onMouseEnter={() => setActiveIndex(idx)}
                                    >
                                        <div className={`relative flex flex-col h-[320px] md:h-[400px] rounded-[24px] overflow-hidden transition-all duration-300 border-2 ${
                                            activeIndex === idx 
                                                ? 'border-[#0070cc] shadow-[0_4px_20px_rgba(0,112,204,0.15)] scale-[1.02] z-10' 
                                                : 'border-gray-200 hover:border-gray-300'
                                        }`}>
                                            {/* Image Half */}
                                            <div className="h-[75%] md:h-[80%] w-full bg-gray-100 overflow-hidden">
                                                <img 
                                                    src={product.image} 
                                                    alt={product.name} 
                                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                                />
                                            </div>
                                            
                                            {/* Text Half */}
                                            <div className="h-[25%] md:h-[20%] w-full bg-white flex items-center justify-center px-4">
                                                <h3 className={`font-bold text-sm md:text-base tracking-wide transition-colors duration-300 ${
                                                    activeIndex === idx ? 'text-[#0070cc]' : 'text-gray-900'
                                                }`}>
                                                    {product.name}
                                                </h3>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button className="product-prev absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.15)] text-[#0070cc] hover:bg-gray-50 hover:scale-110 transition-all disabled:opacity-0 disabled:cursor-not-allowed">
                        <FaChevronLeft size={16} className="md:w-5 md:h-5 mr-1" />
                    </button>
                    <button className="product-next absolute right-6 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.15)] text-[#0070cc] hover:bg-gray-50 hover:scale-110 transition-all disabled:opacity-0 disabled:cursor-not-allowed">
                        <FaChevronRight size={16} className="md:w-5 md:h-5 ml-1" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductCarousel;
