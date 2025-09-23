import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, MessageCircle, Phone } from 'lucide-react';
import { HeroAnimatedText, SubtitleAnimatedText } from './AnimatedText';

const HeroVideo = ({ 
  videoSrc, 
  posterImage, 
  fallbackImage,
  title,
  subtitle,
  description,
  onWhatsAppClick,
  onContactClick 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('ended', handleVideoEnd);
      return () => video.removeEventListener('ended', handleVideoEnd);
    }
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-[#020617]">
      {/* Dark Radial Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)`,
        }}
      />
      
      {/* Video Background */}
      <div className="absolute inset-0 z-10">
        {videoSrc ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster={posterImage}
            muted={isMuted}
            loop
            playsInline
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
            onClick={handleVideoClick}
          >
            <source src={videoSrc} type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <img
              src={fallbackImage}
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
          </video>
        ) : (
          <img
            src={fallbackImage}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-700/60" />
      </div>

      {/* Video Controls */}
      {videoSrc && (
        <div 
          className={`absolute top-4 right-4 z-20 transition-opacity duration-300 ${
            showControls ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex gap-2">
            <button
              onClick={togglePlay}
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 rounded-full p-3"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button
              onClick={toggleMute}
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 rounded-full p-3"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-4 sm:mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
                Narraya
              </h1>
              <HeroAnimatedText 
                texts={[
                  "Hunian Syariah Premium",
                  "Lingkungan Islami & Harmonis", 
                  "Investasi Masa Depan",
                  "Keluarga Bahagia & Berkah"
                ]}
                interval={4000}
                className="text-emerald-300"
              />
            </div>
            <div className="mb-6 sm:mb-8">
              <SubtitleAnimatedText 
                texts={[
                  "di Jantung Ponorogo",
                  "dengan Fasilitas Lengkap",
                  "untuk Keluarga Muslim",
                  "dengan Akad Syariah"
                ]}
                interval={3500}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
              />
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 leading-relaxed px-2">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button 
                onClick={onWhatsAppClick}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto"
              >
                <MessageCircle size={20} className="sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">Konsultasi Sekarang</span>
              </button>
              <button 
                onClick={onContactClick}
                className="bg-white/20 backdrop-blur-md text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:bg-white/30 border border-white/30 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto"
              >
                <Phone size={20} className="sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">Hubungi Kami</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Play Button Overlay (when video is paused) */}
      {videoSrc && !isPlaying && (
        <div 
          className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer"
          onClick={handleVideoClick}
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all duration-300">
            <Play size={48} className="text-white" />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroVideo;
