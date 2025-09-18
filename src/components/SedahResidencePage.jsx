"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { 
  Circle, 
  ArrowRight, 
  Check, 
  Star, 
  Shield, 
  Home, 
  MapPin, 
  Phone, 
  MessageCircle,
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "../lib/utils";

// Logo Component
function SedahGreenLogo({ size = 40, className = "" }) {
  return (
    <img
      src="/sedah-logo.png"
      alt="Sedah Green Residence Logo"
      className={`${className}`}
      style={{ 
        width: size, 
        height: size, 
        objectFit: 'contain',
        borderRadius: '8px' // Optional: adds slight rounded corners
      }}
    />
  );
}

// Elegant Shape Component
function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-emerald-500/[0.08]",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Main Component
function SedahGreenResidence() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const whatsappNumber = "628133138887";
  const whatsappMessage = "Halo, saya tertarik dengan Sedah Green Residence. Mohon info lebih lanjut.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 ${scrollY > 50 ? "shadow-md" : ""}`}
      >
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <SedahGreenLogo size={40} />
            </motion.div>
            <span className="font-bold text-xl text-slate-800">Sedah Green Residence</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-sm font-medium transition-colors hover:text-emerald-600">
              Beranda
            </a>
            <a href="#features" className="text-sm font-medium transition-colors hover:text-emerald-600">
              Keunggulan
            </a>
            <a href="#pricing" className="text-sm font-medium transition-colors hover:text-emerald-600">
              Harga
            </a>
            <a href="#gallery" className="text-sm font-medium transition-colors hover:text-emerald-600">
              Galeri
            </a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-emerald-600">
              Kontak
            </a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button 
              size="sm" 
              className="rounded-full bg-emerald-600 hover:bg-emerald-700"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>
          <button className="flex md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-white md:hidden"
        >
          <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <SedahGreenLogo size={40} />
              <span className="font-bold text-xl text-slate-800">Sedah Green Residence</span>
            </div>
            <button onClick={toggleMenu}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <motion.nav
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="container grid gap-3 pb-8 pt-6 px-4"
          >
            {["Beranda", "Keunggulan", "Harga", "Galeri", "Kontak"].map((item, index) => (
              <motion.div key={index} variants={itemFadeIn}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="flex items-center justify-between rounded-full px-4 py-3 text-lg font-medium hover:bg-emerald-50"
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              </motion.div>
            ))}
            <motion.div variants={itemFadeIn} className="pt-4">
              <Button 
                className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Hubungi WhatsApp
              </Button>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] via-transparent to-slate-500/[0.03] blur-3xl" />

          <div className="absolute inset-0 overflow-hidden">
            <ElegantShape
              delay={0.3}
              width={600}
              height={140}
              rotate={12}
              gradient="from-emerald-500/[0.12]"
              className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
            />
            <ElegantShape
              delay={0.5}
              width={500}
              height={120}
              rotate={-15}
              gradient="from-slate-500/[0.12]"
              className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
            />
            <ElegantShape
              delay={0.4}
              width={300}
              height={80}
              rotate={-8}
              gradient="from-emerald-400/[0.12]"
              className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
            />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex flex-col justify-center space-y-6"
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700"
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    100% Syariah - Tanpa Riba
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none text-slate-800"
                  >
                    Hunian Syariah Idaman di{" "}
                    <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                      Ponorogo
                    </span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-xl text-slate-600 font-medium"
                  >
                    57 Unit Rumah – Harga Promo 177 Juta dari 233 Juta
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 rounded-xl p-4"
                  >
                    <p className="text-amber-800 font-semibold text-lg">
                      🔥 Diskon hingga 60 Juta untuk 10 unit pertama!
                    </p>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex flex-col gap-4 sm:flex-row"
                >
                  <Button 
                    size="lg" 
                    className="rounded-full group bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6"
                    onClick={() => window.open(whatsappUrl, '_blank')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Amankan Unit Sekarang
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </motion.span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="rounded-full text-lg px-8 py-6 border-emerald-200 hover:bg-emerald-50"
                  >
                    Lihat Galeri
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center"
              >
                <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px] xl:h-[550px] overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/hero-sedah.png"
                    alt="Sedah Green Residence - Modern Minimalist Houses"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 mb-4"
              >
                Terbukti Dipercaya
              </motion.div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-800">
                Mengapa Memilih Sedah Green Residence?
              </h2>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <Shield className="h-8 w-8 text-emerald-600" />,
                  title: "100% Syariah",
                  description: "Tanpa riba, tanpa denda, tanpa sita. Sesuai prinsip syariah Islam."
                },
                {
                  icon: <MapPin className="h-8 w-8 text-emerald-600" />,
                  title: "Lokasi Strategis",
                  description: "Terletak di Sedah, Jenangan, Ponorogo dengan akses mudah ke fasilitas umum."
                },
                {
                  icon: <Home className="h-8 w-8 text-emerald-600" />,
                  title: "Kualitas Premium",
                  description: "Bangunan berkualitas tinggi dengan harga tetap terjangkau untuk keluarga."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-emerald-50 transition-colors"
                >
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-emerald-50/50 to-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6"
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 mb-4"
              >
                Kemudahan Pembayaran
              </motion.div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-800">
                Cara Bayar yang Mudah & Fleksibel
              </h2>
              <p className="mx-auto max-w-3xl text-slate-600 md:text-xl mt-4">
                Kami menyediakan berbagai opsi pembayaran yang sesuai dengan kemampuan Anda
              </p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "DP Fleksibel",
                  description: "DP bisa diangsur 3x",
                  features: ["DP Flexsibel", "Tanpa bunga"]
                },
                {
                  title: "Cicilan Ringan",
                  description: "Cicilan bulanan yang terjangkau sesuai kemampuan",
                  features: ["Mulai 2 jutaan/bulan", "Tenor hingga 7 tahun", "Fixed rate"]
                },
                {
                  title: "Tanpa Bank",
                  description: "Proses mudah tanpa melalui bank konvensional",
                  features: ["Tanpa BI checking", "Proses cepat", "Syarat mudah"]
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all"
                >
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">{item.title}</h3>
                  <p className="text-slate-600 mb-6">{item.description}</p>
                  <ul className="space-y-3">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6"
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 mb-4"
              >
                Harga Spesial
              </motion.div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-800">
                Hunian Terbaik untuk Keluarga
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <motion.div
                variants={itemFadeIn}
                className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 md:p-12 rounded-3xl border-2 border-emerald-200 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-amber-400 text-amber-900 px-6 py-2 rounded-bl-2xl font-bold">
                  PROMO TERBATAS!
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-4">Rumah Type 36/66</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-slate-600 line-through text-xl">Harga Normal: Rp 233.000.000</p>
                        <p className="text-4xl font-bold text-emerald-600">Rp 173.000.000</p>
                        <p className="text-amber-600 font-semibold">Hemat Rp 60.000.000!</p>
                      </div>
                      <div className="space-y-2">
                        <p className="flex items-center"><Check className="h-5 w-5 text-emerald-600 mr-2" />Luas Tanah: 66 m²</p>
                        <p className="flex items-center"><Check className="h-5 w-5 text-emerald-600 mr-2" />Luas Bangunan: 36 m²</p>
                        <p className="flex items-center"><Check className="h-5 w-5 text-emerald-600 mr-2" />2 Kamar Tidur</p>
                        <p className="flex items-center"><Check className="h-5 w-5 text-emerald-600 mr-2" />1 Kamar Mandi</p>
                        <p className="flex items-center"><Check className="h-5 w-5 text-emerald-600 mr-2" />Ruang Tamu & Dapur</p>
                      </div>
                    </div>
                  </div>
{/*                   
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h4 className="text-xl font-bold text-slate-800 mb-4">Simulasi Pembayaran</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>DP Minimal:</span>
                        <span className="font-semibold">Rp 5.000.000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cicilan/Bulan:</span>
                        <span className="font-semibold">Rp 1.500.000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tenor:</span>
                        <span className="font-semibold">15 Tahun</span>
                      </div>
                      <hr />
                      <div className="flex justify-between text-lg font-bold text-emerald-600">
                        <span>Total Investasi:</span>
                        <span>Rp 177 Juta</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 rounded-full"
                      onClick={() => window.open(whatsappUrl, '_blank')}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Konsultasi Sekarang
                    </Button>
                  </div> */}


                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6"
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 mb-4"
              >
                Galeri
              </motion.div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-800">
                Lingkungan Hijau & Asri
              </h2>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  src: "/sedah/sedah green residence-perumahan syariah ponorogo.png",
                  title: "Rumah Modern Minimalis",
                  description: "Desain tropis modern dengan ventilasi optimal"
                },
                {
                  src: "/sedah/sedah green residence-perumahan syariah ponorogo2.png",
                  title: "Lingkungan Hijau",
                  description: "Taman dan area hijau yang asri dan sejuk"
                },
                {
                  src: "/sedah/sedah green residence-perumahan syariah ponorogo3.png",
                  title: "Lingkungan Asri",
                  description: "Lingkungan asri tertata rapi"
                },
                {
                  src: "/sedah/sedah green residence-perumahan syariah ponorogo4.png",
                  title: "Nyaman",
                  description: "Area Nyaman dekat masjid , dekat pesantren"
                },
                {
                  src: "/sedah/sedah green residence-perumahan syariah ponorogo5.png",
                  title: "Jalan Lingkungan",
                  description: "Akses jalan yang lebar dan terawat"
                },
                {
                  src: "/sedah/sedah green residence-perumahan syariah ponorogo6.png",
                  title: "Rumah tipe 36",
                  description: "Rumah Tipe 36"
                },
                {
                  src: "/sedah/sedah green residence-perumahan syariah ponorogo7.png",
                  title: "Rumah tipe 45",
                  description: "Rumah Tipe 45"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6"
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 mb-4"
              >
                Testimoni
              </motion.div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-800">
                Mereka yang sudah beli rumah di PT Tata Kreasi
              </h2>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  quote: "Alhamdulillah, proses pembelian sangat mudah dan sesuai syariah. Cicilan ringan dan tidak memberatkan keluarga.",
                  author: "Bapak Adi",
                  role: "Warga Grand Sezha",
                  rating: 5
                },
                {
                  quote: "Lingkungannya asri dan aman untuk anak-anak. Fasilitas lengkap, terutama mushola yang sangat membantu.",
                  author: "Ibu Siti",
                  role: "Penghuni Blok A",
                  rating: 5
                },
                {
                  quote: "Investasi terbaik untuk keluarga. Lokasinya strategis dan akses ke mana-mana mudah. Recommended!",
                  author: "Bapak Winno",
                  role: "Penghuni Blok B",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  whileHover={{ y: -10 }}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all"
                >
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <span className="text-emerald-600 font-bold text-lg">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-slate-800">{testimonial.author}</p>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6"
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 mb-4"
              >
                FAQ
              </motion.div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-800">
                Pertanyaan yang Sering Diajukan
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  {
                    question: "Apakah benar 100% syariah?",
                    answer: "Ya, Sedah Green Residence menerapkan sistem jual beli syariah tanpa riba, tanpa denda keterlambatan, dan tanpa sita. Semua sesuai dengan prinsip syariah Islam."
                  },
                  {
                    question: "Apakah ada fasilitas umum?",
                    answer: "Ya, tersedia mushola, taman keluarga, area bermain anak, security 24 jam, dan akses jalan yang lebar serta terawat."
                  },
                  {
                    question: "Bagaimana dengan legalitas tanah?",
                    answer: "Anda akan mendapatkan sertifikat SHM (Sertifikat Hak Milik)"
                  },
                  {
                    question: "Apakah bisa survey lokasi dulu?",
                    answer: "Tentu saja! Kami menyediakan layanan antar jemput gratis untuk survey lokasi. Hubungi kami untuk jadwal kunjungan."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={itemFadeIn}
                    className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-all"
                  >
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">{faq.question}</h3>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600 px-6 md:px-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container md:px-6"
          >
            <div className="text-center text-white px-4 sm:px-0">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6"
              >
                Jangan Sampai Kehabisan!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl mb-8 max-w-2xl mx-auto"
              >
                Promo hanya 10 unit pertama. Amankan hunian syariah impian keluarga Anda sekarang juga!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0"
              >
                <Button 
                  size="lg" 
                  className="bg-white text-emerald-600 hover:bg-slate-100 rounded-full text-lg px-8 py-6 font-semibold w-auto max-w-xs"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Hubungi Sekarang via WhatsApp
                </Button>
                <div className="flex items-center text-white/90">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>0813-3138-887</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4 sm:px-0"
              >
                <div>
                  <MapPin className="h-8 w-8 mx-auto mb-4 text-emerald-200" />
                  <h3 className="font-semibold mb-2">Lokasi</h3>
                  <p className="text-emerald-100">Sedah, Jenangan, Ponorogo, Jawa Timur</p>
                </div>
                <div>
                  <MessageCircle className="h-8 w-8 mx-auto mb-4 text-emerald-200" />
                  <h3 className="font-semibold mb-2">WhatsApp</h3>
                  <p className="text-emerald-100">0813-3138-887</p>
                </div>
                <div>
                  <Home className="h-8 w-8 mx-auto mb-4 text-emerald-200" />
                  <h3 className="font-semibold mb-2">Marketing Office</h3>
                  <p className="text-emerald-100">Buka Setiap Hari 08:00 - 17:00</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-slate-800 text-white px-6 md:px-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="container py-12 md:px-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 sm:px-0">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <SedahGreenLogo size={40} />
                <span className="font-bold text-xl">Sedah Green Residence</span>
              </div>
              <p className="text-slate-300">
                Hunian syariah berkualitas dengan lingkungan asri dan fasilitas lengkap di Ponorogo.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Navigasi</h3>
              <nav className="space-y-2">
                <a href="#home" className="block text-slate-300 hover:text-white transition-colors">Beranda</a>
                <a href="#features" className="block text-slate-300 hover:text-white transition-colors">Keunggulan</a>
                <a href="#pricing" className="block text-slate-300 hover:text-white transition-colors">Harga</a>
                <a href="#gallery" className="block text-slate-300 hover:text-white transition-colors">Galeri</a>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Kontak</h3>
              <div className="space-y-2 text-slate-300">
                <p className="flex items-center"><MapPin className="h-4 w-4 mr-2" />Sedah, Jenangan, Ponorogo</p>
                <p className="flex items-center"><Phone className="h-4 w-4 mr-2" />0813-3138-887</p>
                <p className="flex items-center"><MessageCircle className="h-4 w-4 mr-2" />WhatsApp 24 Jam</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Ikuti Kami</h3>
              <Button 
                className="w-auto bg-emerald-600 hover:bg-emerald-700 rounded-full px-6 py-2"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat WhatsApp
              </Button>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 px-4 sm:px-0">
            <p>&copy; 2024 Sedah Green Residence. Semua hak dilindungi undang-undang.</p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

export default SedahGreenResidence;
