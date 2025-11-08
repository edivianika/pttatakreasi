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

// Track lead generation - TikTok Pixel Lead event with custom event
export const trackTikTokLead = (leadSource = 'WhatsApp', leadType = 'Property Inquiry', options = {}) => {
  if (typeof window !== 'undefined' && window.ttq) {
    // TikTok Pixel custom event LeadSubmit
    ttq.track('LeadSubmit', {
      property_name: options.propertyName || 'Sedah Green Residence',
      form_source: options.formSource || 'LandingPage',
      phone: options.phone || '+628133138887',
      price_interest: options.priceInterest || '173JT'
    });
    // Also track standard CompleteRegistration for compatibility
    ttq.track('CompleteRegistration', {
      content_name: leadSource,
      content_type: leadType,
      content_category: 'Real Estate',
      value: 0.00,
      currency: 'IDR'
    });
  }
};

// Track contact (for brochure download) - TikTok Pixel Contact event with custom event
export const trackTikTokContact = (contactSource = 'Brochure Download', contactType = 'Brochure', options = {}) => {
  if (typeof window !== 'undefined' && window.ttq) {
    // TikTok Pixel custom event LeadSubmit for contact
    ttq.track('LeadSubmit', {
      property_name: options.propertyName || 'Sedah Green Residence',
      form_source: options.formSource || 'BrochureDownload',
      phone: options.phone || '+628133138887',
      price_interest: options.priceInterest || '173JT'
    });
    // Also track standard SubmitForm for compatibility
    ttq.track('SubmitForm', {
      content_name: contactSource,
      content_type: contactType,
      content_category: 'Real Estate',
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

