import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Mail, Phone, MapPin, Clock, ChevronRight
} from 'lucide-react';
import {
  FaLinkedin, FaInstagram
} from 'react-icons/fa';

const Footer = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <footer className="relative bg-[#050505] text-white overflow-hidden pt-24 pb-8 font-sans border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>

        {/* Soft glowing blur circles */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0070cc] rounded-full blur-[120px] opacity-10 mix-blend-screen"
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#9254f5] rounded-full blur-[100px] opacity-10 mix-blend-screen"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">


        {/* Main Footer Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col">
            <Link to="/" className="inline-block mb-6 relative w-max">
              <img
                src="/oqulix%20logo.png"
                alt="OQULIX Logo"
                className="h-10 md:h-12 w-auto brightness-0 invert relative z-10 object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Building the future through immersive technology, AI, AR, VR, and innovative digital experiences.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              {[
                { icon: FaLinkedin, link: "https://www.linkedin.com/company/oqulix/" },
                { icon: FaInstagram, link: "https://www.instagram.com/__oqulix__/" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#0070cc] hover:text-white hover:shadow-[0_0_15px_rgba(0,112,204,0.5)] transition-all duration-300 border border-white/10 hover:border-transparent"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2 lg:pl-8">
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href={item === 'Home' ? '/' : item === 'FAQ' ? '/faq' : `/#${item.toLowerCase()}`} className="group flex items-center text-gray-400 hover:text-[#0070cc] transition-colors duration-300 text-sm">
                    <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-1" />
                    <span className="relative">
                      {item}
                      <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-[#0070cc] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6">Solutions</h4>
            <ul className="space-y-4">
              {['AR Experiences', 'VR Development', 'Digital Products', 'Web Development'].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center text-gray-400 hover:text-[#0070cc] transition-colors duration-300 text-sm">
                    <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-1" />
                    <span className="relative">
                      {item}
                      <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-[#0070cc] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6">Products</h4>
            <ul className="space-y-4">
              {['Happy Moves', 'AR Flash Cards', 'Happy Class', 'GAMEFAKTORY'].map((item) => (
                <li key={item}>
                  <a href={`/#${item.toLowerCase().replace(/ /g, '-')}`} className="group flex items-center text-gray-400 hover:text-[#0070cc] transition-colors duration-300 text-sm">
                    <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-1" />
                    <span className="relative">
                      {item}
                      <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-[#0070cc] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {['Our Team', 'Blog', 'Privacy Policy', 'Terms'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Our Team' ? '/team' : item === 'FAQ' ? '/faq' : '#'} className="group flex items-center text-gray-400 hover:text-[#0070cc] transition-colors duration-300 text-sm">
                    <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-1" />
                    <span className="relative">
                      {item}
                      <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-[#0070cc] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

        </motion.div>

        {/* Contact Information (Below Grid) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-8 mb-12 border-t border-white/10"
        >
          <h4 className="text-white font-semibold mb-8 text-center text-xl">Contact Us</h4>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-4">
            <div className="flex items-start gap-4 text-gray-400 text-sm">
              <MapPin size={20} className="text-[#0070cc] mt-0.5 shrink-0" />
              <span className="leading-relaxed">
                <strong className="text-white block mb-1">Registered Office:</strong>
                14/291 N, Suite 48M, 1st Floor,<br />
                A Square, Edathala, Ernakulam,<br />
                Aluva, Kerala, India, 683561
              </span>
            </div>
            
            <div className="hidden lg:block w-px h-16 bg-white/10"></div>
            
            <div className="flex items-start gap-4 text-gray-400 text-sm">
              <MapPin size={20} className="text-[#0070cc] mt-0.5 shrink-0" />
              <span className="leading-relaxed">
                <strong className="text-white block mb-1">Operations:</strong>
                2nd Floor, Krishna Bhat Tower,<br />
                Thammanam - Pullepady Rd, Pullepady,<br />
                Kochi, Ernakulam, Kerala 682035
              </span>
            </div>
            
            <div className="hidden lg:block w-px h-16 bg-white/10"></div>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <Phone size={20} className="text-[#0070cc] shrink-0" />
                <span className="text-base">70122 62974</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <Mail size={20} className="text-[#0070cc] shrink-0" />
                <a href="mailto:contact@oqulix.com" className="text-base hover:text-white transition-colors">contact@oqulix.com</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500"
        >
          <div>
            © 2026 OQULIX. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1">
            Designed by OQULIX.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
