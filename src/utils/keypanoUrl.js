/**
 * Get the appropriate Keypano URL based on environment
 * @param {string} project - Project type ('narraya' or 'grandsezha')
 * @returns {string} The Keypano URL for iframe src
 */
export const getKeypanoUrl = (project = 'narraya') => {
  // Define Keypano paths for different projects
  const keypanoPaths = {
    narraya: 'v/3fc8am5j63d7y8-1759128200.html',
    grandsezha: 'v/4l2764dd2vc4b3-1735052461.html',
    sedah: 'v/823e632el9r7t6-1761019544.html'
  };
  
  const keypanoPath = keypanoPaths[project] || keypanoPaths.narraya;
  
  // Check if we're in development mode
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  // Check if we're running on localhost
  const isLocalhost = typeof window !== 'undefined' && 
    (window.location.hostname === 'localhost' || 
     window.location.hostname === '127.0.0.1');
  
  if (isDevelopment && isLocalhost) {
    // Use local proxy server in development
    return `http://localhost:3001/keypano/${keypanoPath}`;
  } else {
    // Use Vercel API route in production
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || 
                   (typeof window !== 'undefined' ? window.location.origin : '');
    return `${baseUrl}/api/keypano?path=${encodeURIComponent(keypanoPath)}`;
  }
};

/**
 * Check if Keypano is available
 * @returns {Promise<boolean>} True if Keypano is accessible
 */
export const checkKeypanoAvailability = async () => {
  try {
    const url = getKeypanoUrl();
    const response = await fetch(url, { 
      method: 'HEAD',
      mode: 'no-cors' // This will work even with CORS issues
    });
    return true;
  } catch (error) {
    console.warn('Keypano not available:', error);
    return false;
  }
};
