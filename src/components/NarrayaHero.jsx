import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from 'lucide-react';
import { ElegantBackground } from './ui/elegant-background.tsx';

function AnimatedTextCycle({ words, interval = 3000, className = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, words.length]);

  const containerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { y: 20, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={currentIndex}
        className={`inline-block font-bold ${className}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {words[currentIndex]}
      </motion.span>
    </AnimatePresence>
  );
}

const PROPERTY_SLIDES = [
  {
    id: "slide-1",
    title: "Narraya Green Residence - Smart Investment",
    description: "Hunian modern dengan konsep investasi cerdas menuju rumah impian",
    imageUrl: "/narraya/slideshow/perumahan narraya green residence ponorogo 4.png"
  },
  {
    id: "slide-2", 
    title: "Narraya Green Residence - Modern Design",
    description: "Desain kontemporer dengan fasilitas lengkap dan lingkungan hijau",
    imageUrl: "/narraya/slideshow/perumahan narraya green residence ponorogo.png"
  },
  {
    id: "slide-3",
    title: "Narraya Green Residence - Premium Quality",
    description: "Kualitas premium dengan arsitektur modern dan material terbaik",
    imageUrl: "/narraya/slideshow/narraya green residence ponorogo 3.png"
  },
  {
    id: "slide-4",
    title: "Narraya Green Residence - Exclusive Living",
    description: "Hunian eksklusif dengan konsep green residence yang nyaman",
    imageUrl: "/narraya/slideshow/narraya green residence ponorogo 2.png"
  }
];

function NarrayaHero({ onWhatsAppClick, onContactClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PROPERTY_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    // Set initial mobile state
    handleResize();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const slideVariants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Elegant Background */}
      <ElegantBackground />
      
      {/* Header */}
      <motion.header
        initial={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
        animate={{
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.95)",
          boxShadow: isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-emerald-100 backdrop-blur-lg"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="/narraya-logo.jpeg" 
                alt="Narraya Logo" 
                className="w-10 h-10 object-contain rounded-lg"
              />
              <div>
                <h1 className="text-lg font-bold text-emerald-800">NARRAYA</h1>
                <p className="text-xs text-emerald-600">Green Residence</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#overview" className="text-emerald-700 hover:text-emerald-800 font-medium transition-colors">Tentang</a>
              <a href="#details" className="text-emerald-700 hover:text-emerald-800 font-medium transition-colors">Detail Proyek</a>
              <a href="#gallery" className="text-emerald-700 hover:text-emerald-800 font-medium transition-colors">Galeri</a>
              <a href="#amenities" className="text-emerald-700 hover:text-emerald-800 font-medium transition-colors">Fasilitas</a>
            </div>

            <button 
              onClick={onWhatsAppClick} 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium transition-colors flex items-center gap-2"
            >
              <MessageCircle size={16} />
              Konsultasi
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="pt-16 min-h-screen flex items-center relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content - Left Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8 text-center lg:text-left order-2 lg:order-1"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
              >
                ✨ Properti Syariah Terpercaya
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-900 leading-tight">
                Hunian Modern, Investasi <span className="text-emerald-600">
                    <AnimatedTextCycle
                      words={["Bernilai", "Berkah", "Halal"]}
                      interval={3000}
                      className="text-emerald-600"
                    />
                  </span>

                  {/* Wujudkan Hunian{" "}
                  <span className="text-emerald-600">
                    <AnimatedTextCycle
                      words={["Impian", "Syariah", "Berkah", "Halal"]}
                      interval={3000}
                      className="text-emerald-600"
                    />
                  </span>
                  {" "}Keluarga */}
                </h1>
                
                <p className="text-lg md:text-xl text-emerald-700 max-w-2xl">
                Narraya Residence menghadirkan hunian eksklusif dengan desain modern elegan dan kualitas bangunan terbaik. Setiap unit dirancang untuk memberikan kenyamanan maksimal bagi keluarga sekaligus menjadi pilihan investasi yang terus meningkat nilainya.
                </p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button 
                  onClick={onWhatsAppClick}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Download Brosur
                </button>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8"
              >
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-emerald-800">12</div>
                  <div className="text-sm text-emerald-600">Unit - Limited</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-emerald-800">100%</div>
                  <div className="text-sm text-emerald-600">Syariah Compliant</div>
                </div>
                <div className="text-center lg:text-left col-span-2 md:col-span-1">
                  <div className="text-2xl font-bold text-emerald-800">0%</div>
                  <div className="text-sm text-emerald-600">Bunga Bank</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Image Slideshow - Right Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <img
                      src={PROPERTY_SLIDES[currentSlide].imageUrl}
                      alt={PROPERTY_SLIDES[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-xl md:text-2xl font-bold mb-2"
                        >
                          {PROPERTY_SLIDES[currentSlide].title}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="text-sm md:text-base opacity-90"
                        >
                          {PROPERTY_SLIDES[currentSlide].description}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Slide Indicators */}
                <div className={`absolute flex ${isMobile ? 'bottom-2 right-2 gap-1' : 'bottom-4 right-4 gap-2'}`}>
                  {PROPERTY_SLIDES.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      style={{
                        width: isMobile ? '10px' : '8px',
                        height: isMobile ? '10px' : '8px',
                        minWidth: isMobile ? '10px' : '8px',
                        minHeight: isMobile ? '10px' : '8px',
                      }}
                      className={`
                        rounded-full transition-all duration-300 
                        ${index === currentSlide 
                          ? `bg-white ${isMobile ? 'opacity-90 scale-110' : 'opacity-100 scale-125'}` 
                          : `bg-white hover:opacity-60 ${isMobile ? 'opacity-50' : 'opacity-60'}`
                        }
                      `}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -top-4 -right-4 hidden lg:block"
              >
                <div className="p-4 bg-white/90 backdrop-blur-sm shadow-lg border border-emerald-100 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">0%</div>
                    <div className="text-xs text-emerald-700">Bunga Bank</div>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-100 to-transparent rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-100 to-transparent rounded-full blur-3xl opacity-50 -z-10" />
    </div>
  );
}

export default NarrayaHero;
