import React, { useState, useEffect } from 'react';

const AnimatedText = ({ 
  texts = [], 
  interval = 3000, 
  className = "",
  animationType = "fade", // fade, slide, typewriter, bounce
  delay = 0
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (texts.length <= 1) return;

    const timer = setTimeout(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 300); // Half of transition duration
    }, interval);

    return () => clearTimeout(timer);
  }, [currentIndex, texts.length, interval]);

  if (texts.length === 0) return null;

  const getAnimationClasses = () => {
    switch (animationType) {
      case 'fade':
        return `transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`;
      case 'slide':
        return `transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`;
      case 'typewriter':
        return `transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`;
      case 'bounce':
        return `transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-2 opacity-0 scale-95'}`;
      default:
        return `transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`;
    }
  };

  return (
    <div className={`relative ${className}`} style={{ minHeight: '1.2em' }}>
      <div className={`${getAnimationClasses()}`}>
        {texts[currentIndex]}
      </div>
      
      {/* Typewriter effect cursor */}
      {animationType === 'typewriter' && isVisible && (
        <span className="animate-pulse">|</span>
      )}
    </div>
  );
};

// Specialized component for hero text rotation
export const HeroAnimatedText = ({ 
  texts = [
    "Hunian Syariah Premium",
    "Lingkungan Islami & Harmonis", 
    "Investasi Masa Depan",
    "Keluarga Bahagia & Berkah"
  ],
  interval = 4000,
  className = ""
}) => {
  return (
    <AnimatedText
      texts={texts}
      interval={interval}
      animationType="fade"
      className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${className}`}
    />
  );
};

// Specialized component for subtitle rotation
export const SubtitleAnimatedText = ({ 
  texts = [
    "di Jantung Ponorogo",
    "dengan Fasilitas Lengkap",
    "untuk Keluarga Muslim",
    "dengan Akad Syariah"
  ],
  interval = 3500,
  className = ""
}) => {
  return (
    <AnimatedText
      texts={texts}
      interval={interval}
      animationType="slide"
      className={`text-emerald-600 ${className}`}
    />
  );
};

export default AnimatedText;
