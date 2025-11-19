import emailjs from '@emailjs/browser';

// EmailJS Configuration
export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  autoReplyTemplateId: process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID || '',
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
 * @param {string} templateId - Optional custom template ID (defaults to main template)
 * @returns {Promise} - EmailJS send promise
 */
export const sendEmail = async (templateParams, templateId = null) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      templateId || EMAILJS_CONFIG.templateId,
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
 * Send contact form notification to ProCraft
 * @param {Object} formData - Form data from user
 * @returns {Promise} - EmailJS send promise
 */
export const sendContactNotification = async (formData) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    company: formData.company || 'Not provided',
    service: formData.service,
    message: formData.message,
    to_email: 'azaanpeshmam45@gmail.com, ibsharakrami@gmail.com, syedsafwanpirzade@gmail.com'
  };

  return await sendEmail(templateParams, EMAILJS_CONFIG.templateId);
};

/**
 * Send auto-reply confirmation to user
 * @param {Object} formData - Form data from user
 * @returns {Promise} - EmailJS send promise
 */
export const sendAutoReply = async (formData) => {
  const templateParams = {
    to_name: formData.name,
    to_email: formData.email,
    service: formData.service,
    from_name: 'ProCraft Team'
  };

  return await sendEmail(templateParams, EMAILJS_CONFIG.autoReplyTemplateId);
};

/**
 * Send both contact notification and auto-reply
 * @param {Object} formData - Form data from user
 * @returns {Promise} - Object with results for both emails
 */
export const sendContactFormEmails = async (formData) => {
  try {
    // Send both emails in parallel for faster response
    const [notificationResult, autoReplyResult] = await Promise.allSettled([
      sendContactNotification(formData),
      sendAutoReply(formData)
    ]);

    const notification = notificationResult.status === 'fulfilled'
      ? notificationResult.value
      : { success: false, error: notificationResult.reason };

    const autoReply = autoReplyResult.status === 'fulfilled'
      ? autoReplyResult.value
      : { success: false, error: autoReplyResult.reason };

    return {
      notification,
      autoReply,
      allSuccess: notification.success && autoReply.success
    };
  } catch (error) {
    console.error('Error sending emails:', error);
    return {
      notification: { success: false, error },
      autoReply: { success: false, error },
      allSuccess: false
    };
  }
};

/**
 * Send email using a form reference
 * @param {HTMLFormElement} form - Form element reference
 * @param {string} templateId - Optional custom template ID
 * @returns {Promise} - EmailJS send promise
 */
export const sendEmailFromForm = async (form, templateId = null) => {
  try {
    const response = await emailjs.sendForm(
      EMAILJS_CONFIG.serviceId,
      templateId || EMAILJS_CONFIG.templateId,
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

/**
 * Validate auto-reply configuration
 * @returns {boolean} - True if auto-reply template is configured
 */
export const isAutoReplyConfigured = () => {
  return !!(
    EMAILJS_CONFIG.autoReplyTemplateId &&
    isEmailJSConfigured()
  );
};
