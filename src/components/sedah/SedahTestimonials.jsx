import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Users, Shield, Home } from "lucide-react";

const SedahTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Bapak Ahmad Wijaya",
      profession: "Pegawai Swasta",
      location: "Sedah Green Residence",
      review: "Alhamdulillah, proses pembelian rumah di TKBM sangat transparan dan sesuai syariah. Tidak ada riba, angsuran flat, dan developer sangat amanah. Lokasi strategis dekat fasilitas umum, anak-anak bisa sekolah dengan mudah.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      year: "2023",
      houseType: "Tipe 45"
    },
    {
      id: 2,
      name: "Ibu Siti Nurhaliza",
      profession: "Guru",
      location: "Sedah Green Residence",
      review: "Sangat senang tinggal di Sedah Green Residence. Lingkungan islami, ada mushola, dan anak-anak bisa bermain dengan aman. Harga terjangkau tapi kualitas tidak murahan. Developer sangat responsif dan membantu.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=80&h=80&fit=crop&crop=face",
      year: "2023",
      houseType: "Tipe 36"
    },
    {
      id: 3,
      name: "Bapak Muhammad Ridwan",
      profession: "Wiraswasta",
      location: "Sedah Green Residence",
      review: "Developer lokal yang terpercaya! Pelayanan excellent, lokasi strategis, dan yang terpenting 100% syariah tanpa riba. Recommended untuk investasi jangka panjang. Proses pembelian sangat mudah dan transparan.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      year: "2024",
      houseType: "Tipe 45"
    },
    {
      id: 4,
      name: "Ibu Fatimah Zahra",
      profession: "Ibu Rumah Tangga",
      location: "Sedah Green Residence",
      review: "Subhanallah, impian punya rumah tanpa riba akhirnya terwujud. Tim TKBM sangat membantu dari awal hingga serah terima. Fasilitas lengkap dan lingkungan nyaman untuk keluarga. Anak-anak senang tinggal di sini.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      year: "2024",
      houseType: "Tipe 36"
    },
    {
      id: 5,
      name: "Bapak Agus Setiawan",
      profession: "PNS",
      location: "Sedah Green Residence",
      review: "Kualitas bangunan sangat bagus, sesuai dengan yang dijanjikan. Developer sangat profesional dan amanah. Lokasi strategis, dekat dengan tempat kerja dan sekolah anak. Sangat puas dengan pelayanan TKBM.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      year: "2024",
      houseType: "Tipe 45"
    },
    {
      id: 6,
      name: "Ibu Dewi Sartika",
      profession: "Perawat",
      location: "Sedah Green Residence",
      review: "Lingkungan yang sangat nyaman dan aman. Tetangga-tetangga baik, ada mushola yang nyaman untuk ibadah. Developer sangat membantu dalam proses pembelian dan serah terima. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
      year: "2024",
      houseType: "Tipe 36"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleWhatsAppClick = () => {
    const message = "Halo TKBM, saya tertarik dengan testimoni pelanggan Sedah Green Residence. Mohon informasi lebih lanjut.";
    const whatsappUrl = `https://wa.me/081331388887?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={`${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">Testimoni</span> Pelanggan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dengarkan pengalaman nyata dari keluarga yang sudah merasakan kenyamanan 
            tinggal di Sedah Green Residence.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-green-600" size={32} />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Keluarga Bahagia</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="text-blue-600" size={32} />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="text-gray-600">Rating Kepuasan</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-purple-600" size={32} />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-gray-600">Syariah & Amanah</div>
          </div>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-green-500">
              <Quote size={32} />
            </div>

            {/* Testimonial Content */}
            <div className="text-center">
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              {/* Review */}
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].review}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].profession}
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    {testimonials[currentTestimonial].houseType} • {testimonials[currentTestimonial].year}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={prevTestimonial}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full transition-all duration-200"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full transition-all duration-200"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.slice(0, 6).map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              {/* Rating */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Review */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                "{testimonial.review.length > 120 
                  ? testimonial.review.substring(0, 120) + '...' 
                  : testimonial.review}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-xs">
                    {testimonial.profession}
                  </div>
                  <div className="text-green-600 text-xs font-semibold">
                    {testimonial.houseType}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Bergabunglah dengan Keluarga Bahagia Kami
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Jadilah bagian dari 500+ keluarga yang sudah merasakan kenyamanan dan keamanan 
            tinggal di hunian syariah berkualitas.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-white text-green-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Home size={20} className="inline mr-2" />
            Konsultasi Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

export default SedahTestimonials;
