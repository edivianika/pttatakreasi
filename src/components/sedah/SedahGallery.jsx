import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X, Play, Home, Users, Star } from "lucide-react";

const SedahGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      alt: "Tampak Depan Sedah Green Residence",
      category: "Exterior",
      title: "Tampak Depan Perumahan",
      description: "Desain modern dengan nuansa hijau yang menyejukkan"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
      alt: "Rumah Tipe 36",
      category: "Rumah",
      title: "Rumah Tipe 36",
      description: "2 kamar tidur, 1 kamar mandi, carport 1 mobil"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop",
      alt: "Rumah Tipe 45",
      category: "Rumah",
      title: "Rumah Tipe 45",
      description: "3 kamar tidur, 2 kamar mandi, carport 2 mobil"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      alt: "Interior Ruang Tamu",
      category: "Interior",
      title: "Ruang Tamu Modern",
      description: "Desain interior yang nyaman dan fungsional"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      alt: "Kamar Tidur Utama",
      category: "Interior",
      title: "Kamar Tidur Utama",
      description: "Kamar tidur yang luas dengan pencahayaan alami"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      alt: "Dapur Modern",
      category: "Interior",
      title: "Dapur Modern",
      description: "Dapur lengkap dengan peralatan berkualitas"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      alt: "Taman Depan",
      category: "Exterior",
      title: "Taman Depan",
      description: "Taman hijau yang menambah keindahan rumah"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      alt: "Mushola",
      category: "Fasilitas",
      title: "Mushola Terintegrasi",
      description: "Mushola yang nyaman untuk ibadah keluarga"
    }
  ];

  const categories = ["All", "Exterior", "Rumah", "Interior", "Fasilitas"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (index) => {
    setSelectedImage(galleryImages[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const handleWhatsAppClick = () => {
    const message = "Halo TKBM, saya tertarik melihat lebih detail tentang Sedah Green Residence. Mohon informasi lebih lanjut.";
    const whatsappUrl = `https://wa.me/081331388887?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">Galeri</span> & Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lihat keindahan dan kualitas hunian di Sedah Green Residence. 
            Setiap detail dirancang dengan cermat untuk kenyamanan keluarga Anda.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => openModal(index)}
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="text-white" size={48} />
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {image.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">
                  {image.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ingin Melihat Langsung?
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Jadwalkan kunjungan langsung ke lokasi untuk melihat dan merasakan kualitas hunian yang sesungguhnya.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-white text-green-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Home size={20} className="inline mr-2" />
            Jadwalkan Kunjungan
          </button>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all duration-200"
              >
                <X size={24} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all duration-200"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all duration-200"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-200">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SedahGallery;
