# Keypano Proxy Server Setup

## Masalah
Keypano.com menolak koneksi langsung dari iframe karena kebijakan CORS/X-Frame-Options.

## Solusi
Proxy server Node.js yang akan meneruskan request ke Keypano dan menghapus header yang memblokir iframe.

## Instalasi

1. **Install dependencies:**
```bash
npm install
```

2. **Jalankan proxy server:**
```bash
npm run proxy
```

3. **Jalankan aplikasi React dan proxy bersamaan:**
```bash
npm run dev
```

## Cara Kerja

- Proxy server berjalan di port 3001
- React app berjalan di port 3000 (default)
- Iframe menggunakan URL: `http://localhost:3001/keypano/v/3fc8am5j63d7y8-1759128200.html`
- Proxy meneruskan request ke `https://www.keypano.com` dan menghapus header yang memblokir

## Endpoints

- **Proxy Keypano:** `http://localhost:3001/keypano/*`
- **Health Check:** `http://localhost:3001/health`

## Troubleshooting

1. **Port sudah digunakan:**
   - Ubah PORT di proxy-server.js atau kill process yang menggunakan port 3001

2. **Keypano masih tidak load:**
   - Pastikan proxy server berjalan
   - Check console untuk error
   - Pastikan URL iframe benar

3. **CORS error:**
   - Proxy server sudah mengatur CORS headers
   - Pastikan domain React app ada di whitelist CORS

## Production Deployment

Untuk production, ganti URL iframe dari localhost ke domain proxy server Anda:

```javascript
src="https://yourdomain.com/keypano/v/3fc8am5j63d7y8-1759128200.html"
```



