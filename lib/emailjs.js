import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Get your credentials from https://www.emailjs.com/
export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
};

/**
 * Initialize EmailJS with public key
 * Call this once when the app starts (in _app.js or layout)
 */
export const initEmailJS = () => {
  if (EMAILJS_CONFIG.publicKey) {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }
};

/**
 * Send email using EmailJS
 * @param {Object} templateParams - Parameters to send to the email template
 * @returns {Promise} - EmailJS send promise
 */
export const sendEmail = async (templateParams) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};

/**
 * Send email using a form reference
 * @param {HTMLFormElement} form - Form element reference
 * @returns {Promise} - EmailJS send promise
 */
export const sendEmailFromForm = async (form) => {
  try {
    const response = await emailjs.sendForm(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      form,
      EMAILJS_CONFIG.publicKey
    );
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};

/**
 * Validate EmailJS configuration
 * @returns {boolean} - True if all config values are set
 */
export const isEmailJSConfigured = () => {
  return !!(
    EMAILJS_CONFIG.serviceId &&
    EMAILJS_CONFIG.templateId &&
    EMAILJS_CONFIG.publicKey
  );
};
