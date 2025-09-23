import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, MessageCircle, Phone } from 'lucide-react';
import { HeroAnimatedText, SubtitleAnimatedText } from './AnimatedText';

const YouTubeVideo = ({ 
  youtubeUrl, 
  posterImage, 
  fallbackImage,
  title,
  subtitle,
  description,
  onWhatsAppClick,
  onContactClick 
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const iframeRef = useRef(null);

  // Extract video ID from YouTube URL
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(youtubeUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&cc_load_policy=0&start=0&end=0`;

  const togglePlay = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      if (isPlaying) {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      } else {
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      if (isMuted) {
        iframe.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
      } else {
        iframe.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
      }
      setIsMuted(!isMuted);
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const handleIframeLoad = () => {
    setIsVideoLoaded(true);
  };

  useEffect(() => {
    // Set initial mute state and ensure video is playing
    if (iframeRef.current && isVideoLoaded) {
      const iframe = iframeRef.current;
      iframe.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
      // Ensure video is playing on load
      setTimeout(() => {
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      }, 1000);
    }
  }, [isVideoLoaded]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {youtubeUrl && videoId ? (
          <div className="relative w-full h-full">
            <iframe
              ref={iframeRef}
              className="w-full h-full object-cover"
              src={embedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={handleIframeLoad}
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
              onClick={handleVideoClick}
            />
            {/* Fallback image if video fails to load */}
            {!isVideoLoaded && (
              <img
                src={fallbackImage}
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </div>
        ) : (
          <img
            src={fallbackImage}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
      </div>

      {/* Video Controls */}
      {youtubeUrl && videoId && (
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
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Text Background Overlay */}
            <div className="absolute inset-0 bg-black/30 rounded-2xl -m-4 sm:-m-6 lg:-m-8"></div>
            <div className="relative z-10">
            <div className="mb-4 sm:mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 text-white drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                {title}
              </h1>
              <HeroAnimatedText 
                texts={[
                  "Hunian Syariah Premium",
                  "Lingkungan Islami & Harmonis", 
                  "Investasi Masa Depan",
                  "Keluarga Bahagia & Berkah"
                ]}
                interval={4000}
                className="text-emerald-200 drop-shadow-xl"
                style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}
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
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-xl"
                style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}
              />
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white leading-relaxed px-2 drop-shadow-lg" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>
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
      </div>

      {/* Play Button Overlay (when video is paused) */}
      {youtubeUrl && videoId && !isPlaying && (
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

export default YouTubeVideo;
