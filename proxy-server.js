const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PROXY_PORT || 3001;

// Enable CORS for all routes
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'https://yourdomain.com'],
  credentials: true
}));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Proxy middleware for Keypano
const keypanoProxy = createProxyMiddleware({
  target: 'https://www.keypano.com',
  changeOrigin: true,
  pathRewrite: {
    '^/keypano': '', // Remove /keypano prefix when forwarding to target
  },
  onProxyReq: (proxyReq, req, res) => {
    // Add necessary headers
    proxyReq.setHeader('Referer', 'https://www.keypano.com');
    proxyReq.setHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
  },
  onProxyRes: (proxyRes, req, res) => {
    // Set CORS headers
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
    proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
    
    // Remove X-Frame-Options to allow iframe embedding
    delete proxyRes.headers['x-frame-options'];
    delete proxyRes.headers['X-Frame-Options'];
    
    // Set Content-Security-Policy to allow iframe embedding
    proxyRes.headers['Content-Security-Policy'] = "frame-ancestors *";
  },
  onError: (err, req, res) => {
    console.error('Proxy error:', err);
    res.status(500).json({ error: 'Proxy error occurred' });
  }
});

// Route for Keypano proxy
app.use('/keypano', keypanoProxy);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Proxy server running on port ${PORT}`);
  console.log(`📡 Keypano proxy available at: http://localhost:${PORT}/keypano`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
});

module.exports = app;


