# Vercel Deployment Guide untuk Keypano Virtual Tour

## Overview
Solusi ini memungkinkan Keypano virtual tour berfungsi di Vercel dengan menggunakan API route sebagai proxy.

## Struktur File
```
├── api/
│   └── keypano/
│       └── [...path].js          # Vercel API route untuk proxy Keypano
├── src/
│   └── utils/
│       └── keypanoUrl.js         # Utility untuk URL environment detection
├── vercel.json                   # Konfigurasi Vercel
└── proxy-server.js              # Local development proxy (tidak digunakan di Vercel)
```

## Cara Kerja

### Development (Local)
- Menggunakan `proxy-server.js` yang berjalan di port 3001
- URL: `http://localhost:3001/keypano/v/3fc8am5j63d7y8-1759128200.html`

### Production (Vercel)
- Menggunakan Vercel API route: `/api/keypano/[...path].js`
- URL: `https://yourdomain.vercel.app/api/keypano/v/3fc8am5j63d7y8-1759128200.html`

## Environment Detection
Utility `keypanoUrl.js` secara otomatis mendeteksi environment:
- **Development**: Menggunakan localhost proxy
- **Production**: Menggunakan Vercel API route

## Deployment Steps

1. **Push ke GitHub:**
```bash
git add .
git commit -m "feat: Add Vercel-compatible Keypano proxy"
git push origin main
```

2. **Deploy ke Vercel:**
- Connect repository ke Vercel
- Vercel akan otomatis detect dan deploy
- API route akan tersedia di `/api/keypano/*`

3. **Test Deployment:**
- Visit: `https://yourdomain.vercel.app/api/keypano/v/3fc8am5j63d7y8-1759128200.html`
- Should return Keypano content without CORS issues

## Konfigurasi Vercel

### vercel.json
- **functions**: Set maxDuration untuk API route
- **headers**: CORS headers untuk iframe embedding
- **rewrites**: URL rewrite untuk cleaner URLs

### Environment Variables
Tidak diperlukan environment variables khusus untuk solusi ini.

## Troubleshooting

### 1. Keypano tidak load di Vercel
- Check Vercel function logs
- Verify API route URL: `/api/keypano/v/3fc8am5j63d7y8-1759128200.html`
- Check CORS headers

### 2. CORS Error
- Vercel API route sudah mengatur CORS headers
- Check `vercel.json` configuration

### 3. Timeout Error
- API route maxDuration sudah di-set ke 30 detik
- Keypano content seharusnya load dalam waktu tersebut

## Fallback Behavior
Jika Keypano tidak tersedia:
- Menampilkan loading spinner
- Menampilkan fallback UI dengan pesan dan tombol WhatsApp
- User tetap bisa menghubungi untuk informasi

## Performance
- **Lazy Loading**: Iframe hanya load saat diperlukan
- **Error Handling**: Graceful fallback jika Keypano down
- **Caching**: Vercel akan cache API responses

## Monitoring
- Check Vercel function logs untuk error
- Monitor API route performance di Vercel dashboard
- Test Keypano availability secara berkala
