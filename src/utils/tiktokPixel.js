// TikTok Pixel utility functions
export const ttq = window.ttq || function() {
  (window.ttq.q = window.ttq.q || []).push(arguments);
};

// Track page view
export const trackTikTokPageView = () => {
  if (typeof window !== 'undefined' && window.ttq) {
    ttq.page();
  }
};

// Track view content
export const trackTikTokViewContent = (contentName = 'Homepage', contentType = 'website') => {
  if (typeof window !== 'undefined' && window.ttq) {
    ttq.track('ViewContent', {
      content_name: contentName,
      content_type: contentType,
      content_category: 'Real Estate'
    });
  }
};

// Track lead generation
export const trackTikTokLead = (leadSource = 'WhatsApp', leadType = 'Property Inquiry') => {
  if (typeof window !== 'undefined' && window.ttq) {
    ttq.track('CompleteRegistration', {
      content_name: leadSource,
      content_type: leadType,
      content_category: 'Real Estate',
      value: 0.00,
      currency: 'IDR'
    });
  }
};

// Track WhatsApp button click
export const trackTikTokWhatsAppClick = (pageName = 'Homepage', projectName = 'General') => {
  if (typeof window !== 'undefined' && window.ttq) {
    ttq.track('CompleteRegistration', {
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
export const trackTikTokCalculatorUsage = (calculatorType = 'Sedah', unitSelected = '') => {
  if (typeof window !== 'undefined' && window.ttq) {
    ttq.track('ViewContent', {
      content_name: `Calculator - ${calculatorType}`,
      content_type: 'Calculator',
      content_category: 'Real Estate',
      unit_selected: unitSelected
    });
  }
};

// Track project page view
export const trackTikTokProjectView = (projectName = 'Sedah Green Residence') => {
  if (typeof window !== 'undefined' && window.ttq) {
    ttq.track('ViewContent', {
      content_name: projectName,
      content_type: 'Project Page',
      content_category: 'Real Estate',
      project_type: 'Syariah Property'
    });
  }
};

