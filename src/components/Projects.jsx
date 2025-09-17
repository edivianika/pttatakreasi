import React from 'react';
import { MapPin, DollarSign, Home, MessageCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData, companyInfo } from './mockData';

const Projects = () => {
  const handleProjectInquiry = (projectName) => {
    const message = `Halo TKBM, saya tertarik dengan proyek ${projectName}. Mohon informasi detail tentang harga, cicilan, dan cara pembelian.`;
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Proyek Kami</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Pilihan hunian syariah berkualitas dengan lokasi strategis 
            dan fasilitas lengkap untuk keluarga Indonesia
          </p>
        </div>

        <div className="grid-3">
          {projectsData.map((project) => (
            <div key={project.id} className="property-card group">
              {/* Project Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img 
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">
                    {project.price}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="heading-3 mb-2">{project.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPin size={16} />
                    <span className="body-small">{project.location}</span>
                  </div>
                  <p className="body-medium text-gray-600">{project.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                      <span className="body-small text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4">
                  {project.name === "Narraya" ? (
                    <Link 
                      to="/narraya"
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Lihat Detail
                    </Link>
                  ) : (
                    <button 
                      onClick={() => handleProjectInquiry(project.name)}
                      className="btn-primary w-full"
                    >
                      <MessageCircle size={16} />
                      Info Detail
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-2xl">
          <h3 className="heading-3 mb-4 text-emerald-700">
            Tidak Menemukan yang Cocok?
          </h3>
          <p className="body-medium text-gray-600 mb-6">
            Konsultasikan kebutuhan hunian Anda dengan tim ahli kami. 
            Kami akan bantu carikan yang terbaik sesuai budget dan lokasi
          </p>
          <button 
            onClick={() => handleProjectInquiry("konsultasi umum")}
            className="btn-primary"
          >
            <MessageCircle size={16} />
            Konsultasi Gratis
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;