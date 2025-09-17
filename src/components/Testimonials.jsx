import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, MessageCircle } from 'lucide-react';
import { testimonialsData, companyInfo } from './mockData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const handleWhatsAppClick = () => {
    const message = "Halo TKBM, saya tertarik dengan testimoni positif dari customer Anda. Mohon informasi lengkap tentang hunian syariah yang tersedia.";
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Apa Kata Mereka?</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Kepuasan dan kebahagiaan keluarga yang telah mempercayakan 
            hunian impian mereka kepada TKBM
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonialsData.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Customer Photo */}
                    <div className="flex-shrink-0">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-emerald-100"
                      />
                    </div>

                    {/* Testimonial Content */}
                    <div className="flex-1 text-center md:text-left">
                      {/* Stars Rating */}
                      <div className="flex justify-center md:justify-start gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      {/* Review Text */}
                      <blockquote className="body-large text-gray-700 mb-6 italic">
                        "{testimonial.review}"
                      </blockquote>

                      {/* Customer Info */}
                      <div>
                        <h4 className="font-semibold text-gray-800 text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600 mb-1">{testimonial.profession}</p>
                        <p className="text-emerald-600 font-medium">{testimonial.location}</p>
                        <p className="text-gray-500 text-sm mt-1">Customer sejak {testimonial.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-emerald-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="heading-3 text-emerald-600">500+</div>
            <p className="body-small text-gray-600">Keluarga Bahagia</p>
          </div>
          <div className="text-center">
            <div className="heading-3 text-emerald-600">4.9/5</div>
            <p className="body-small text-gray-600">Rating Kepuasan</p>
          </div>
          <div className="text-center">
            <div className="heading-3 text-emerald-600">15+</div>
            <p className="body-small text-gray-600">Proyek Sukses</p>
          </div>
          <div className="text-center">
            <div className="heading-3 text-emerald-600">8</div>
            <p className="body-small text-gray-600">Tahun Pengalaman</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="body-medium text-gray-600 mb-6">
            Bergabunglah dengan ratusan keluarga yang telah merasakan kepuasan tinggal di hunian syariah TKBM
          </p>
          <button 
            onClick={handleWhatsAppClick}
            className="btn-primary"
          >
            <MessageCircle size={16} />
            Jadilah Bagian dari Mereka
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;