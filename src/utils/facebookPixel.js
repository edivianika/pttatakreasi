// Facebook Pixel utility functions
export const fbq = window.fbq || function() {
  (window.fbq.q = window.fbq.q || []).push(arguments);
};

// Track page view
export const trackPageView = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    fbq('track', 'PageView');
  }
};

// Track view content
export const trackViewContent = (contentName = 'Homepage', contentType = 'website') => {
  if (typeof window !== 'undefined' && window.fbq) {
    fbq('track', 'ViewContent', {
      content_name: contentName,
      content_type: contentType,
      content_category: 'Real Estate'
    });
  }
};

// Track lead generation
export const trackLead = (leadSource = 'WhatsApp', leadType = 'Property Inquiry') => {
  if (typeof window !== 'undefined' && window.fbq) {
    fbq('track', 'Lead', {
      content_name: leadSource,
      content_type: leadType,
      content_category: 'Real Estate',
      value: 0.00,
      currency: 'IDR'
    });
  }
};

// Track WhatsApp button click
export const trackWhatsAppClick = (pageName = 'Homepage', projectName = 'General') => {
  if (typeof window !== 'undefined' && window.fbq) {
    fbq('track', 'Lead', {
      content_name: `WhatsApp Click - ${pageName}`,
      content_type: 'WhatsApp Inquiry',
      content_category: 'Real Estate',
      project_name: projectName,
      value: 0.00,
      currency: 'IDR'
    });
  }
};

// Track calculator usage
export const trackCalculatorUsage = (calculatorType = 'Sedah', unitSelected = '') => {
  if (typeof window !== 'undefined' && window.fbq) {
    fbq('track', 'ViewContent', {
      content_name: `Calculator - ${calculatorType}`,
      content_type: 'Calculator',
      content_category: 'Real Estate',
      unit_selected: unitSelected
    });
  }
};

// Track project page view
export const trackProjectView = (projectName = 'Sedah Green Residence') => {
  if (typeof window !== 'undefined' && window.fbq) {
    fbq('track', 'ViewContent', {
      content_name: projectName,
      content_type: 'Project Page',
      content_category: 'Real Estate',
      project_type: 'Syariah Property'
    });
  }
};
