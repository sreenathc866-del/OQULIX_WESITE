import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const slides = [
  {
    id: 1,
    title: "OQULIX",
    subtitle: "Where Innovation Meets Excellence",
    description: "We enable both businesses and individuals by providing state-of-the-art virtual reality software solutions that foster growth, innovation, and triumph.",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2078&auto=format&fit=crop",
    primaryUrl: "#about",
    primaryBtn: "Learn More",
    secondaryBtn: "Contact Us",
    alignmentClass: "justify-end items-start text-left pb-16 md:pb-24",
    btnClass: "justify-start",
    sizeClass: "max-w-lg"
  },
  {
    id: 2,
    title: "HAPPY MOVES",
    subtitle: "Transforming Healthcare with Virtual Reality",
    description: "Enhance patient recovery through immersive virtual rehabilitation experiences. Deliver personalized physiotherapy sessions, neuro recovery exercises, and cognitive engagement tools powered by advanced VR technology.",
    image: "/happymoves.png",
    primaryUrl: "https://www.happymovesrehab.com/",
    primaryBtn: "Visit Happy Moves",
    secondaryBtn: "Request Demo",
    alignmentClass: "justify-end items-start text-left pb-16 md:pb-24",
    btnClass: "justify-start",
    sizeClass: "max-w-lg"
  },
  {
    id: 3,
    title: "GAMEFAKTORY",
    subtitle: "Turning Engagement Into Game Play",
    description: "Launch custom interactive games designed for brands, events, and marketing campaigns. Boost user engagement through reward-based gamification experiences that drive real results.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
    primaryUrl: "https://www.gamefaktory.com/",
    primaryBtn: "Visit GameFaktory",
    secondaryBtn: "Book a Demo",
    alignmentClass: "justify-end items-start text-left pb-16 md:pb-24",
    btnClass: "justify-start",
    sizeClass: "max-w-lg"
  },
  {
    id: 4,
    title: "AR FLASH CARDS",
    subtitle: "Revolutionizing Learning Processes",
    description: "Unlock interactive learning with AR-powered flashcards that transform traditional education into immersive 3D experiences with animals, sounds, and animated educational visuals.",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2070&auto=format&fit=crop",
    primaryUrl: "https://arcards.oqulix.com/",
    primaryBtn: "View AR Cards",
    secondaryBtn: "Get Product Sheet",
    alignmentClass: "justify-end items-start text-left pb-16 md:pb-24",
    btnClass: "justify-start",
    sizeClass: "max-w-lg"
  },
  {
    id: 5,
    title: "HAPPY CLASS",
    subtitle: "Smart Board Optimized Classroom Play",
    description: "Inject gamified learning content directly into classrooms with smart board compatible educational games that improve collaboration, participation, and curriculum-based engagement.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
    primaryUrl: "#",
    primaryBtn: "Explore Happy Class",
    secondaryBtn: "View Features",
    alignmentClass: "justify-end items-start text-left pb-16 md:pb-24",
    btnClass: "justify-start",
    sizeClass: "max-w-lg"
  }
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <div id="home" className="relative w-full overflow-hidden bg-white text-white font-sans flex flex-col min-h-screen">
      {/* 
        BANNER HEIGHT ADJUSTMENT:
        Adjust the heights here (h-[400px] md:h-[600px] lg:h-[800px]) to change how tall the top image section is.
      */}
      <div className="w-full relative h-[400px] md:h-[600px] lg:h-[603px]">
        <Swiper
          onSwiper={setSwiperInstance}
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={600}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          navigation={{
            prevEl: '.hero-prev-invisible',
            nextEl: '.hero-next-invisible',
          }}
          loop={true}
          className="w-full h-full"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={slide.id} className="relative w-full h-full overflow-hidden">
              {/* Background Image with very subtle scale */}
              <div className="absolute inset-0 z-0">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out"
                  style={{ backgroundImage: `url(${slide.image})`, transform: activeIndex === idx ? 'scale(1.02)' : 'scale(1)' }}
                />
              </div>

              {/* Low Color Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-10 pointer-events-none" />

              {/* Content */}
              <div className={`container mx-auto px-6 sm:px-10 md:px-16 h-full flex flex-col relative z-20 pointer-events-none ${slide.alignmentClass || 'justify-center items-start text-left'}`}>
                <div
                  className={`transition-all duration-700 delay-100 pointer-events-auto ${slide.sizeClass || 'max-w-xl'} ${activeIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4 tracking-tight drop-shadow-md">
                    {slide.title}
                  </h1>

                  <h2 className="text-base sm:text-lg md:text-xl font-medium text-gray-100 mb-3 md:mb-4 drop-shadow-sm">
                    {slide.subtitle}
                  </h2>

                  <p className={`text-sm md:text-base text-gray-200 mb-6 md:mb-8 leading-relaxed font-normal max-w-md drop-shadow-sm ${slide.alignmentClass?.includes('text-right') ? 'ml-auto' : slide.alignmentClass?.includes('text-center') ? 'mx-auto' : ''}`}>
                    {slide.description}
                  </p>

                  <div className={`flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 ${slide.btnClass || 'justify-start'}`}>
                    <a
                      href={slide.primaryUrl}
                      target={slide.primaryUrl !== "#" && slide.primaryUrl !== "#about" ? "_blank" : "_self"}
                      rel={slide.primaryUrl !== "#" && slide.primaryUrl !== "#about" ? "noopener noreferrer" : ""}
                      className="px-6 py-2.5 sm:py-2.5 text-center bg-white text-black hover:bg-gray-200 font-bold rounded-full transition-colors duration-200 text-sm inline-block shadow-sm"
                    >
                      {slide.primaryBtn}
                    </a>
                    <a
                      href={slide.secondaryBtn === "Contact Us" || slide.secondaryBtn === "Request Demo" ? "#contact" : "#"}
                      className="px-6 py-2.5 sm:py-2.5 text-center bg-black/40 border border-white/50 hover:bg-white/20 text-white font-bold rounded-full transition-colors duration-200 text-sm inline-block backdrop-blur-sm"
                    >
                      {slide.secondaryBtn}
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Invisible Clickable Navigation Areas on Left and Right edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-20 hero-prev-invisible cursor-pointer" title="Previous Slide"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-20 hero-next-invisible cursor-pointer" title="Next Slide"></div>

      {/* PlayStation Style Clean White Thumbnail Section */}
      <div className="w-full bg-white relative flex justify-center z-30 py-6 md:py-10 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 max-w-[1200px] pointer-events-auto group/strip">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              onClick={() => swiperInstance?.slideToLoop(idx)}
              className={`relative flex-none w-[90px] h-[50px] sm:w-[120px] sm:h-[68px] md:w-[160px] md:h-[90px] rounded-xl md:rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ease-out ${activeIndex === idx
                ? 'ring-[2px] md:ring-[3px] ring-[#0070cc] ring-offset-2 ring-offset-white shadow-[0_4px_15px_rgba(0,112,204,0.3)] z-10 opacity-100 scale-105'
                : 'opacity-60 ring-1 ring-gray-200 hover:opacity-100 hover:scale-105 hover:ring-[#0070cc]/50 hover:shadow-md'
                }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;