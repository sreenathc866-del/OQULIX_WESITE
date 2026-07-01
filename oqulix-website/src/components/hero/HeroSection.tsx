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
  }
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden bg-black text-white font-sans">
      <Swiper
        onSwiper={setSwiperInstance}
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        speed={600}
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={{
          prevEl: '.hero-prev',
          nextEl: '.hero-next',
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {/* Background Image with very subtle scale */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out"
              style={{ backgroundImage: `url(${slide.image})`, transform: activeIndex === idx ? 'scale(1.02)' : 'scale(1)' }}
            />

            {/* Low Color Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

            {/* Content */}
            <div className="container mx-auto px-10 md:px-16 h-full flex flex-col justify-center relative z-20 pt-10">
              <div 
                className={`max-w-xl text-left transition-all duration-700 delay-100 ${
                  activeIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
                  {slide.title}
                </h1>

                <h2 className="text-lg md:text-xl font-medium text-gray-100 mb-4 drop-shadow-sm">
                  {slide.subtitle}
                </h2>

                <p className="text-sm md:text-base text-gray-200 mb-8 leading-relaxed font-normal max-w-md drop-shadow-sm">
                  {slide.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={slide.primaryUrl}
                    target={slide.primaryUrl !== "#" && slide.primaryUrl !== "#about" ? "_blank" : "_self"}
                    rel={slide.primaryUrl !== "#" && slide.primaryUrl !== "#about" ? "noopener noreferrer" : ""}
                    className="px-6 py-2.5 bg-white text-black hover:bg-gray-200 font-bold rounded-full transition-colors duration-200 text-sm inline-block shadow-sm"
                  >
                    {slide.primaryBtn}
                  </a>
                  <a
                    href={slide.secondaryBtn === "Contact Us" || slide.secondaryBtn === "Request Demo" ? "#contact" : "#"}
                    className="px-6 py-2.5 bg-black/40 border border-white/50 hover:bg-white/20 text-white font-bold rounded-full transition-colors duration-200 text-sm inline-block backdrop-blur-sm"
                  >
                    {slide.secondaryBtn}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Minimal Navigation Arrows */}
      <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 z-30 flex justify-between pointer-events-none">
        <button className="hero-prev w-12 h-12 flex items-center justify-center text-white/60 hover:text-white hover:scale-110 transition-all cursor-pointer pointer-events-auto drop-shadow-md">
          <FaChevronLeft size={32} />
        </button>
        <button className="hero-next w-12 h-12 flex items-center justify-center text-white/60 hover:text-white hover:scale-110 transition-all cursor-pointer pointer-events-auto drop-shadow-md">
          <FaChevronRight size={32} />
        </button>
      </div>

      {/* Clean Thumbnail Navigation */}
      <div className="absolute bottom-8 left-0 w-full z-30 pointer-events-none">
        <div className="container mx-auto px-10 md:px-16">
          <div className="flex space-x-2 md:space-x-4 pointer-events-auto max-w-4xl">
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                onClick={() => swiperInstance?.slideToLoop(idx)}
                className={`relative flex-1 h-14 md:h-16 rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 ${
                  activeIndex === idx ? 'ring-2 ring-white ring-offset-2 ring-offset-black/20' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
                <div className={`absolute inset-0 transition-colors duration-300 ${activeIndex === idx ? 'bg-black/10' : 'bg-black/50 group-hover:bg-black/30'}`}></div>
                <div className="absolute inset-x-0 bottom-0 p-2 md:p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-white font-bold text-[10px] md:text-[11px] uppercase tracking-wider block truncate drop-shadow-md">
                    {slide.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;