// Comprehensive project knowledge base for AI agent learning
// This data structure contains all TKBM project information in a structured format

export const projectKnowledge = {
  company: {
    name: "Tata Kreasi Bumi Madani",
    shortName: "TKBM",
    tagline: "Developer Properti Syariah Terpercaya",
    established: "2015",
    location: "Ponorogo, Jawa Timur",
    contact: {
      whatsapp: "628133138887",
      whatsappFormatted: "+628133138887",
      address: "Ponorogo, Jawa Timur"
    },
    achievements: {
      projects: "15+ Proyek Sukses",
      clients: "500+ Keluarga Bahagia"
    },
    compliance: {
      syariah: "100% Syariah",
      description: "Tanpa riba, gharar, dan maysir",
      halal: "100% Halal",
      noRiba: "Tanpa Riba"
    }
  },
  
  projects: [
    {
      id: "narraya",
      name: "Narraya Green Residence",
      type: "Perumahan Premium",
      category: "Premium",
      pricing: {
        startingPrice: "800 Jutaan",
        priceRange: "800-1200 Juta",
        currency: "IDR",
        paymentOptions: ["KPR Syariah", "Cash", "Angsuran Syariah"],
        promo: {
          available: true,
          description: "Diskon 75 juta untuk 2 pembeli pertama",
          discount: "75000000",
          currency: "IDR"
        }
      },
      location: {
        address: "Jl. Noroyono Brotonegaran, Ponorogo",
        coordinates: {
          lat: -7.8688,
          lng: 111.4620
        },
        proximity: {
          alunAlun: "5 langkah ke Alun-alun Ponorogo",
          strategic: true
        }
      },
      features: [
        "5 langkah ke Alun-alun Ponorogo",
        "Lokasi super strategis",
        "Hunian modern tropis",
        "Fasilitas lengkap",
        "100% Syariah",
        "Tanpa riba",
        "Kualitas premium"
      ],
      specifications: {
        unitTypes: ["Type 45", "Type 60", "Type 70"],
        facilities: [
          "Mushola",
          "Area bermain anak",
          "Jogging track",
          "Taman hijau",
          "Security 24/7",
          "Parking area"
        ],
        building: {
          floors: "2 lantai",
          rooms: "3-4 kamar tidur",
          bathrooms: "2-3 kamar mandi"
        }
      },
      virtualTour: {
        available: true,
        url: "/narraya-virtual",
        keypanoId: "3fc8am5j63d7y8-1759128200",
        description: "Virtual tour 360° untuk menjelajahi lingkungan Narraya"
      },
      calculator: {
        available: true,
        url: "/kalkulator/narraya",
        features: ["KPR Syariah", "Angsuran flat", "Simulasi cicilan"]
      },
      images: {
        hero: "/tatakreasi/perumahan-ponorogo-narraya-green-residence.png",
        gallery: [
          "/narraya/gallery/perumahan-syariah-ponorogo-narraya-green-residence-1.png",
          "/narraya/gallery/perumahan-syariah-ponorogo-narraya-green-residence-2.png"
        ]
      },
      description: "Hunian premium dengan lokasi strategis di jantung kota Ponorogo",
      status: "Available",
      launchYear: "2023"
    },
    
    {
      id: "grandsezha",
      name: "Grand Sezha",
      type: "Perumahan Eksklusif",
      category: "Exclusive",
      pricing: {
        startingPrice: "500 Jutaan",
        priceRange: "500-800 Juta",
        currency: "IDR",
        paymentOptions: ["KPR Syariah", "Cash", "Angsuran Syariah"],
        promo: {
          available: true,
          description: "Promo terbatas untuk unit Grand Sezha",
          discount: "Tersedia",
          currency: "IDR"
        }
      },
      location: {
        address: "Tengah Kota Ponorogo",
        coordinates: {
          lat: -7.8667,
          lng: 111.4500
        },
        proximity: {
          cityCenter: "Di tengah kota",
          strategic: true
        }
      },
      features: [
        "Lokasi premium eksklusif",
        "Dekat fasilitas kota",
        "Desain arsitektur modern",
        "Akses mudah kemana-mana",
        "100% Syariah",
        "Kualitas premium"
      ],
      specifications: {
        unitTypes: ["Type 60", "Type 80", "Type 100"],
        facilities: [
          "Mushola",
          "Club house",
          "Swimming pool",
          "Fitness center",
          "Security 24/7",
          "Landscaped garden"
        ],
        building: {
          floors: "2-3 lantai",
          rooms: "4-5 kamar tidur",
          bathrooms: "3-4 kamar mandi"
        }
      },
      virtualTour: {
        available: true,
        url: "/gs-virtual",
        keypanoId: "4l2764dd2vc4b3-1735052461",
        description: "Virtual tour 360° untuk menjelajahi lingkungan Grand Sezha"
      },
      calculator: {
        available: true,
        url: "/kalkulator/grandsezha",
        features: ["KPR Syariah", "Angsuran flat", "Simulasi cicilan"]
      },
      images: {
        hero: "/tatakreasi/perumahan-ponorogo-grand-sezha.png",
        gallery: []
      },
      description: "Hunian eksklusif di tengah kota dengan kemudahan akses terbaik",
      status: "Available",
      launchYear: "2024"
    },
    
    {
      id: "sedah",
      name: "Sedah Green Residence",
      type: "Cluster Islami",
      category: "Affordable",
      pricing: {
        startingPrice: "180 Jutaan",
        priceRange: "180-250 Juta",
        currency: "IDR",
        paymentOptions: ["KPR Syariah", "Cash", "Angsuran Syariah"],
        promo: {
          available: true,
          description: "Diskon 40 juta untuk hunian syariah berkualitas",
          discount: "40000000",
          currency: "IDR"
        }
      },
      location: {
        address: "Desa Sedah, Jenangan, Ponorogo",
        coordinates: {
          lat: -7.8500,
          lng: 111.4800
        },
        proximity: {
          nature: "Lingkungan hijau dan asri",
          strategic: false
        }
      },
      features: [
        "Harga terjangkau berkualitas",
        "Cluster bernuansa islami",
        "Mushola terintegrasi",
        "Area bermain anak",
        "100% Syariah",
        "Kualitas terbaik"
      ],
      specifications: {
        unitTypes: ["Type 36", "Type 45", "Type 54"],
        facilities: [
          "Mushola terintegrasi",
          "Area bermain anak",
          "Taman hijau",
          "Jogging track",
          "Security 24/7",
          "Parking area"
        ],
        building: {
          floors: "1-2 lantai",
          rooms: "2-3 kamar tidur",
          bathrooms: "1-2 kamar mandi"
        }
      },
      virtualTour: {
        available: true,
        url: "/sedah-virtual",
        keypanoId: "823e632el9r7t6-1761019544",
        description: "Virtual tour 360° untuk menjelajahi lingkungan Sedah Green Residence"
      },
      calculator: {
        available: true,
        url: "/kalkulator/sedah",
        features: ["KPR Syariah", "Angsuran flat", "Simulasi cicilan"]
      },
      images: {
        hero: "/tatakreasi/perumahan-ponorogo-sedah-green-residence.png",
        gallery: []
      },
      description: "Cluster islami yang nyaman dengan fasilitas lengkap untuk keluarga",
      status: "Available",
      launchYear: "2022"
    }
  ],
  
  testimonials: [
    {
      id: 1,
      name: "Bapak Ahmad Wijaya",
      profession: "Pegawai Swasta",
      project: "Narraya Green Residence",
      review: "Alhamdulillah, proses pembelian rumah di TKBM sangat transparan dan sesuai syariah. Tidak ada riba, angsuran flat, dan developer sangat amanah. Lokasi strategis dekat alun-alun.",
      rating: 5,
      year: "2023"
    },
    {
      id: 2,
      name: "Ibu Siti Nurhaliza",
      profession: "Guru",
      project: "Sedah Green Residence",
      review: "Sangat senang tinggal di Sedah Green Residence. Lingkungan islami, ada mushola, dan anak-anak bisa bermain dengan aman. Harga terjangkau tapi kualitas tidak murahan.",
      rating: 5,
      year: "2023"
    },
    {
      id: 3,
      name: "Bapak Muhammad Ridwan",
      profession: "Wiraswasta",
      project: "Grand Sezha",
      review: "Developer lokal yang terpercaya! Pelayanan excellent, lokasi premium di tengah kota, dan yang terpenting 100% syariah tanpa riba. Recommended untuk investasi jangka panjang.",
      rating: 5,
      year: "2024"
    },
    {
      id: 4,
      name: "Ibu Fatimah Zahra",
      profession: "Ibu Rumah Tangga",
      project: "Narraya Green Residence",
      review: "Subhanallah, impian punya rumah tanpa riba akhirnya terwujud. Tim TKBM sangat membantu dari awal hingga serah terima. Fasilitas lengkap dan lingkungan nyaman untuk keluarga.",
      rating: 5,
      year: "2024"
    }
  ],
  
  trustBadges: [
    {
      icon: "Shield",
      title: "100% Syariah",
      description: "Tanpa riba, gharar, dan maysir"
    },
    {
      icon: "DollarSign",
      title: "Harga Transparan",
      description: "Tidak ada biaya tersembunyi"
    },
    {
      icon: "Home",
      title: "Developer Lokal",
      description: "Terpercaya sejak 2015"
    },
    {
      icon: "Star",
      title: "Fasilitas Islami",
      description: "Mushola dan lingkungan kondusif"
    }
  ],
  
  tools: {
    calculator: {
      available: true,
      url: "/kalkulator",
      projects: ["narraya", "grandsezha", "sedah"],
      features: ["KPR Syariah", "Simulasi cicilan", "Angsuran flat"]
    },
    virtualTour: {
      available: true,
      projects: [
        {
          id: "narraya",
          url: "/narraya-virtual",
          shareUrl: "/sharevirtual"
        },
        {
          id: "grandsezha", 
          url: "/gs-virtual",
          shareUrl: "/sharevirtual"
        },
        {
          id: "sedah",
          url: "/sedah-virtual", 
          shareUrl: "/sharevirtual"
        }
      ]
    },
    shareTools: {
      available: true,
      url: "/sharevirtual",
      features: ["WhatsApp integration", "Dynamic phone numbers", "Copy links"]
    },
    marketing: {
      available: true,
      url: "/tools",
      driveUrl: "https://drive.google.com/drive/folders/1AJFikVlbN1mab_1N__iJbQJLWW2p3Fw1",
      materials: ["Brosur", "Flyer", "Template presentasi"]
    },
    csHandling: {
      available: true,
      url: "/cshandling",
      features: ["Customer service tools", "Response templates"]
    }
  },
  
  pages: {
    main: {
      home: "/",
      about: "/#about",
      projects: "/#projects",
      testimonials: "/#testimonials"
    },
    projects: {
      narraya: "/narraya",
      grandsezha: "/gs-virtual",
      sedah: "/sedah",
      sedahResidence: "/sedahresidence"
    },
    tools: {
      calculator: "/kalkulator",
      shareVirtual: "/sharevirtual",
      marketing: "/tools",
      csHandling: "/cshandling",
      tutorial: "/tutorial",
      freelance: "/freelance"
    }
  },
  
  seo: {
    title: "TKBM - Developer Properti Syariah Terpercaya | Hunian Halal di Ponorogo",
    description: "Tata Kreasi Bumi Madani (TKBM) adalah developer properti syariah terpercaya di Ponorogo. Hunian halal tanpa riba dengan fasilitas lengkap.",
    keywords: [
      "developer properti syariah",
      "hunian halal ponorogo",
      "rumah syariah",
      "kpr syariah",
      "narraya green residence",
      "grand sezha",
      "sedah green residence",
      "tanpa riba",
      "developer ponorogo"
    ]
  },
  
  lastUpdated: new Date().toISOString(),
  version: "1.0.0"
};
