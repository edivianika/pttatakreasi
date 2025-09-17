import React, { useEffect, useState } from 'react';

const ParallaxSection = ({ 
  children, 
  backgroundImage, 
  className = '', 
  speed = 0.5,
  overlay = true,
  overlayColor = 'rgba(4, 106, 56, 0.8)' 
}) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setOffsetY(scrollTop * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <section className={`parallax-section ${className}`}>
      {/* Parallax Background */}
      {backgroundImage && (
        <div 
          className="parallax-layer"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: `translateY(${offsetY}px)`,
          }}
        />
      )}
      
      {/* Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 z-10"
          style={{ background: overlayColor }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;