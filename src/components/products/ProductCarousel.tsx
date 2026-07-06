import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { products } from '../../data/content';
import 'swiper/css';
import 'swiper/css/navigation';

const ProductCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="bg-white pt-6 pb-16 md:pt-12 md:pb-24 font-sans overflow-hidden">
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
                        className="py-12 px-6 -mx-6 !overflow-visible"
                    >
                        {products.map((product, idx) => {
                            return (
                                <SwiperSlide key={product.id} className="!overflow-visible">
                                    <a
                                        href={product.cta?.explore || `#${product.id}`}
                                        target={product.cta?.explore && product.cta.explore.startsWith('http') ? '_blank' : '_self'}
                                        rel={product.cta?.explore && product.cta.explore.startsWith('http') ? 'noopener noreferrer' : ''}
                                        className="block outline-none cursor-pointer relative z-10"
                                        style={{ zIndex: hoveredIndex === idx ? 50 : 10 }}
                                        onMouseEnter={() => setHoveredIndex(idx)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        onTouchStart={() => setHoveredIndex(idx)}
                                    >
                                        <div className={`relative flex flex-col h-[360px] md:h-[440px] rounded-[24px] overflow-hidden transition-all duration-500 ease-in-out border border-transparent shadow-lg ${hoveredIndex === idx ? 'shadow-[0_12px_40px_rgba(0,112,204,0.4)] scale-[1.04] -translate-y-2 border-[#0070cc]/30' : ''}`}>
                                            
                                            {/* Full Background Image */}
                                            <div className="absolute inset-0 bg-black overflow-hidden">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${hoveredIndex === idx ? 'scale-105 brightness-100 saturate-[1.15]' : 'scale-100 brightness-[0.55] saturate-100'}`}
                                                />
                                            </div>

                                            {/* Dark Overlay (Default State) */}
                                            <div className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ease-in-out ${hoveredIndex === idx ? 'opacity-0' : 'opacity-100'}`}></div>

                                            {/* Subtle Background Gradient for Text Readability */}
                                            <div className={`absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 ${hoveredIndex === idx ? 'opacity-100' : 'opacity-0'}`}></div>

                                            {/* Content Layer */}
                                            <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 pointer-events-none">
                                                
                                                {/* Centered Title (Moves up on hover) */}
                                                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${hoveredIndex === idx ? '-translate-y-8 md:-translate-y-10' : 'translate-y-0'}`}>
                                                    <h3 className={`font-bold text-2xl md:text-3xl lg:text-4xl text-center px-4 tracking-wide transition-all duration-500 ease-in-out text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] ${hoveredIndex === idx ? 'scale-105 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]' : 'scale-100'}`}>
                                                        {product.name}
                                                    </h3>
                                                </div>

                                                {/* Description (Fades in and slides up) */}
                                                <div className={`relative transition-all duration-500 ease-in-out transform ${hoveredIndex === idx ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-8'}`}>
                                                    <p className="text-gray-100 text-sm md:text-base text-center line-clamp-3 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-relaxed">
                                                        {product.description || product.tagline}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* Invisible Clickable Navigation Areas on Left and Right edges */}
                    <div className="product-prev absolute left-0 top-0 bottom-0 w-16 md:w-24 z-[100] cursor-pointer" title="Previous"></div>
                    <div className="product-next absolute right-0 top-0 bottom-0 w-16 md:w-24 z-[100] cursor-pointer" title="Next"></div>
                </div>
            </div>
        </section>
    );
};

export default ProductCarousel;
