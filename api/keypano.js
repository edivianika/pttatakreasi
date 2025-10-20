export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { path } = req.query;
  
  // Construct the Keypano URL
  const keypanoPath = path || 'v/3fc8am5j63d7y8-1759128200.html';
  const keypanoUrl = `https://www.keypano.com/${keypanoPath}`;
  
  try {
    console.log('Fetching Keypano URL:', keypanoUrl);
    
    // Fetch the content from Keypano
    const response = await fetch(keypanoUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Referer': 'https://www.keypano.com',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Get the content
    const content = await response.text();
    
    // Remove X-Frame-Options to allow iframe embedding
    res.removeHeader('x-frame-options');
    res.removeHeader('X-Frame-Options');
    
    // Set Content-Security-Policy to allow iframe embedding
    res.setHeader('Content-Security-Policy', "frame-ancestors *");
    
    // Copy important headers from Keypano response
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
      message: error.message,
      url: keypanoUrl
    });
  }
}
