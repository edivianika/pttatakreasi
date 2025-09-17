import React from 'react';
import { MessageCircle, Clock, Star } from 'lucide-react';

const SedahPromo = ({ onWhatsAppClick }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#A3B18A] to-[#8FA375]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Promo Banner */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-6 h-6 text-[#BFA87B]" />
              <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                Limited Promo
              </h2>
              <Star className="w-6 h-6 text-[#BFA87B]" />
            </div>
            <p className="text-xl sm:text-2xl mb-6" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Promo hingga <span className="font-bold text-[#BFA87B]">Rp 60 juta</span> — 
              hanya untuk <span className="font-bold text-[#BFA87B]">10 unit pertama</span>
            </p>
            
            {/* Price Comparison */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-center">
                <p className="text-sm opacity-80" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Harga Normal
                </p>
                <p className="text-2xl line-through opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Rp 233 juta
                </p>
              </div>
              <div className="text-2xl">→</div>
              <div className="text-center">
                <p className="text-sm opacity-80" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Harga Promo
                </p>
                <p className="text-3xl font-bold text-[#BFA87B]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Rp 173 juta
                </p>
              </div>
            </div>

            {/* Savings */}
            <div className="bg-[#BFA87B]/20 rounded-xl p-4 mb-6">
              <p className="text-lg font-semibold" style={{ fontFamily: 'Nunito, sans-serif' }}>
                💰 Hemat hingga Rp 60 juta per unit!
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => onWhatsAppClick("Limited Promo - Rp 60 juta")}
            className="bg-white text-[#A3B18A] px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-3 mx-auto mb-6"
          >
            <MessageCircle size={24} />
            Ambil Promonya Sekarang
          </button>

          {/* Urgency */}
          <div className="flex items-center justify-center gap-2 text-white/90">
            <Clock size={20} />
            <p className="text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Promo terbatas - Segera hubungi kami!
            </p>
          </div>

          {/* Terms */}
          <div className="mt-8 text-white/80 text-sm max-w-2xl mx-auto" style={{ fontFamily: 'Nunito, sans-serif' }}>
            <p>
              * Syarat dan ketentuan berlaku. Promo berlaku untuk 10 unit pertama dengan pembayaran DP minimal 30%. 
              Harga belum termasuk PPN dan biaya notaris.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SedahPromo;
