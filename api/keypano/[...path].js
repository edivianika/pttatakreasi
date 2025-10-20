export default async function handler(req, res) {
  const { path } = req.query;
  const keypanoPath = Array.isArray(path) ? path.join('/') : path;
  
  // Construct the full Keypano URL
  const keypanoUrl = `https://www.keypano.com/${keypanoPath}`;
  
  try {
    // Fetch the content from Keypano
    const response = await fetch(keypanoUrl, {
      method: req.method,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Referer': 'https://www.keypano.com',
        'Accept': req.headers.accept || '*/*',
        'Accept-Language': req.headers['accept-language'] || 'en-US,en;q=0.9',
        'Accept-Encoding': req.headers['accept-encoding'] || 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        ...req.headers
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined
    });

    // Get the content
    const content = await response.text();
    
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    
    // Remove X-Frame-Options to allow iframe embedding
    res.removeHeader('x-frame-options');
    res.removeHeader('X-Frame-Options');
    
    // Set Content-Security-Policy to allow iframe embedding
    res.setHeader('Content-Security-Policy', "frame-ancestors *");
    
    // Copy other headers from Keypano response
    const headersToCopy = [
      'content-type',
      'content-length',
      'cache-control',
      'expires',
      'last-modified',
      'etag'
    ];
    
    headersToCopy.forEach(header => {
      const value = response.headers.get(header);
      if (value) {
        res.setHeader(header, value);
      }
    });
    
    // Set status code
    res.status(response.status);
    
    // Send the content
    res.send(content);
    
  } catch (error) {
    console.error('Keypano proxy error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch Keypano content',
      message: error.message 
    });
  }
}

// Handle OPTIONS requests for CORS
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}
