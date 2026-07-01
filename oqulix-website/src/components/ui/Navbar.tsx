import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaChevronDown, FaRegEnvelope } from 'react-icons/fa';
import { FaVrCardboard } from 'react-icons/fa6';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Products', href: '#products' },
        { name: 'Services', href: '#services' },
        { name: 'Company', href: '#company' }
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 flex flex-col transition-all duration-300 ${
                scrolled ? 'shadow-md' : ''
            }`}
        >
            {/* Top Black Corporate Bar */}
            <div className="bg-black w-full flex justify-end items-center px-6 md:px-8 h-8">
                <span className="text-white font-bold tracking-widest text-[13px] uppercase">
                    OQULIX
                </span>
            </div>

            {/* Main White Navbar */}
            <div className={`w-full bg-white transition-all duration-300 ${scrolled ? 'py-2' : 'py-2 md:py-3'}`}>
                <div className="container mx-auto px-6 md:px-8 flex justify-between items-center max-w-[1400px]">
                <div className="flex items-center space-x-8 md:space-x-12">
                    {/* Brand Logo */}
                    <a href="/" className="flex flex-col items-start">
                        <div className="flex items-center">
                            <FaVrCardboard className="text-2xl md:text-3xl mr-2 text-black" />
                            <span className="font-bold text-xl md:text-2xl tracking-tighter text-black">
                                OQULIX
                            </span>
                        </div>
                        <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest ml-8 md:ml-10 -mt-1 whitespace-nowrap">WHERE TECH CARES</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="flex items-center text-[15px] font-bold text-gray-800 hover:text-blue-600 transition-colors"
                            >
                                {link.name}
                                <FaChevronDown className="ml-1 text-[10px] text-gray-500" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex items-center space-x-4 md:space-x-6">
                    {/* Search Bar */}
                    <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-1.5 border border-gray-200">
                        <FaSearch className="text-gray-400 text-sm" />
                        <input 
                            type="text" 
                            placeholder="Search Solutions..." 
                            className="bg-transparent border-none outline-none text-sm text-gray-700 ml-2 w-32 md:w-40 placeholder-gray-400"
                        />
                    </div>

                    <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">
                        <FaRegEnvelope size={20} />
                    </a>
                </div>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;
