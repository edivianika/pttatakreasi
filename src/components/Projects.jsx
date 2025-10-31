import React from 'react';
import { MapPin, DollarSign, Home, MessageCircle, ExternalLink, CheckCircle2, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData, companyInfo } from './mockData';
import { trackWhatsAppClick } from '../utils/facebookPixel';

const Projects = () => {
  const handleProjectInquiry = (projectName) => {
    trackWhatsAppClick('Projects Section', projectName);
    const message = `Halo TKBM, saya tertarik dengan proyek ${projectName}. Mohon informasi detail tentang harga, cicilan, dan cara pembelian.`;
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Get project route helper
  const getProjectRoute = (projectName) => {
    if (projectName === "Narraya Green Residence") return "/narraya";
    if (projectName === "Sedah Green Residence") return "/sedahresidence";
    if (projectName === "Grand Sezha") return "https://grandsezha.com";
    return null;
  };

  // Comparison data for projects
  const comparisonData = [
    { label: "Harga", narraya: "Mulai 800 Jt", sedah: "Mulai 180 Jt", grandsezha: "Mulai 500 Jt" },
    { label: "Target Market", narraya: "Premium", sedah: "Terjangkau", grandsezha: "Eksklusif" },
    { label: "Lokasi", narraya: "Jantung Kota", sedah: "Perkotaan", grandsezha: "Tengah Kota" },
    { label: "Konsep", narraya: "Modern Premium", sedah: "Cluster Islami", grandsezha: "Eksklusif" },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
              3 Proyek Premium
            </span>
          </div>
          <h2 className="heading-2 mb-4">Proyek Kami</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Pilihan hunian syariah berkualitas dengan lokasi strategis 
            dan fasilitas lengkap untuk keluarga Indonesia
          </p>
        </div>

        {/* Projects Grid - Equal Exposure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {projectsData.map((project, index) => {
            const route = getProjectRoute(project.name);
            return (
              <div key={project.id} className="property-card group h-full flex flex-col">
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
                  {/* Badge untuk highlight equal exposure */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium">
                      Proyek #{index + 1}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4 flex-grow">
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
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0" />
                        <span className="body-small text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons - Multiple CTAs */}
                <div className="pt-4 space-y-2 sm:space-y-3">
                  {route ? (
                    route.startsWith('http') ? (
                      <a 
                        href={route}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full flex items-center justify-center gap-2 text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2.5 min-h-[42px] sm:min-h-[48px]"
                      >
                        <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                        Info Detail
                      </a>
                    ) : (
                      <Link 
                        to={route}
                        className="btn-primary w-full flex items-center justify-center gap-2 text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2.5 min-h-[42px] sm:min-h-[48px]"
                      >
                        <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                        Info Detail
                      </Link>
                    )
                  ) : (
                    <button 
                      onClick={() => handleProjectInquiry(project.name)}
                      className="btn-primary w-full flex items-center justify-center gap-2 text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2.5 min-h-[42px] sm:min-h-[48px]"
                    >
                      <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                      Info Detail
                    </button>
                  )}
                  <button 
                    onClick={() => handleProjectInquiry(project.name)}
                    className="btn-secondary w-full flex items-center justify-center gap-2 text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2.5 min-h-[42px] sm:min-h-[48px]"
                  >
                    <MessageCircle size={14} className="sm:w-4 sm:h-4" />
                    Konsultasi Gratis
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Comparison Section */}
        <div className="mb-12 bg-gradient-to-br from-emerald-50 via-white to-amber-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="heading-3 mb-3 text-emerald-700">
              Bandingkan Pilihan Hunian
            </h3>
            <p className="body-medium text-gray-600 max-w-2xl mx-auto">
              Pilih hunian yang sesuai dengan kebutuhan dan budget Anda
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-emerald-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Perbandingan</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-800">Narraya</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-800">Sedah</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-800">Grand Sezha</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-white/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-gray-700">{row.label}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.narraya}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.sedah}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.grandsezha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Comparison CTA */}
          <div className="mt-8 text-center">
            <p className="body-medium text-gray-600 mb-4">
              Masih bingung memilih? Tim ahli kami siap membantu Anda menemukan hunian terbaik
            </p>
            <button 
              onClick={() => handleProjectInquiry("konsultasi perbandingan proyek")}
              className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 min-h-[42px] sm:min-h-[48px]"
            >
              <MessageCircle size={14} className="sm:w-4 sm:h-4" />
              Konsultasi Gratis untuk Rekomendasi
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-8 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-2xl">
          <TrendingUp className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h3 className="heading-3 mb-4 text-emerald-700">
            Tidak Menemukan yang Cocok?
          </h3>
          <p className="body-medium text-gray-600 mb-6 max-w-2xl mx-auto">
            Konsultasikan kebutuhan hunian Anda dengan tim ahli kami. 
            Kami akan bantu carikan yang terbaik sesuai budget dan lokasi
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button 
              onClick={() => handleProjectInquiry("konsultasi umum")}
              className="btn-primary inline-flex items-center justify-center gap-2 text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 min-h-[42px] sm:min-h-[48px]"
            >
              <MessageCircle size={14} className="sm:w-4 sm:h-4" />
              Konsultasi Gratis
            </button>
            <a
              href={`https://wa.me/${companyInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2 text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 min-h-[42px] sm:min-h-[48px]"
            >
              <MessageCircle size={14} className="sm:w-4 sm:h-4" />
              Chat WhatsApp Langsung
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

