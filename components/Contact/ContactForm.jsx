'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Loader2, Send, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { sendEmail, isEmailJSConfigured } from '@/lib/emailjs';
import { serviceOptions, formSection } from '@/data/contactData';

// Zod validation schema
const contactSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z.string()
    .email('Please enter a valid email address'),
  phone: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/, 'Please enter a valid phone number'),
  company: z.string().optional(),
  service: z.string()
    .min(1, 'Please select a service'),
  message: z.string()
    .min(20, 'Message must be at least 20 characters')
    .max(1000, 'Message must be less than 1000 characters'),
  recaptcha: z.string().optional() // Will be handled separately
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Check if EmailJS is configured
    if (!isEmailJSConfigured()) {
      toast.error('Email service is not configured. Please contact us directly at info@procraft.ae');
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        company: data.company || 'Not provided',
        service: data.service,
        message: data.message,
        to_email: 'info@procraft.ae'
      };

      // Send email via EmailJS
      const result = await sendEmail(templateParams);

      if (result.success) {
        // Success state
        setIsSuccess(true);
        toast.success(formSection.successMessage, {
          duration: 5000,
          icon: '🎉'
        });

        // Reset form after 2 seconds
        setTimeout(() => {
          reset();
          setIsSuccess(false);
        }, 3000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error(formSection.errorMessage, {
        duration: 6000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-8 md:p-10 lg:p-12"
    >
      {/* Form Header */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-blatant">
          {formSection.heading}
        </h2>
        <p className="text-gray-600 font-urbanist">
          {formSection.subheading}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide font-urbanist">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10367D]/20 transition-all font-urbanist ${
              errors.name ? 'border-red-500' : 'border-gray-200 focus:border-[#10367D]'
            }`}
            placeholder="John Doe"
            disabled={isSubmitting || isSuccess}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500 font-urbanist">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide font-urbanist">
            Your Email <span className="text-red-500">*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10367D]/20 transition-all font-urbanist ${
              errors.email ? 'border-red-500' : 'border-gray-200 focus:border-[#10367D]'
            }`}
            placeholder="john@example.com"
            disabled={isSubmitting || isSuccess}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500 font-urbanist">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide font-urbanist">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10367D]/20 transition-all font-urbanist ${
              errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-[#10367D]'
            }`}
            placeholder="+971 50 123 4567"
            disabled={isSubmitting || isSuccess}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500 font-urbanist">{errors.phone.message}</p>
          )}
        </div>

        {/* Company Field (Optional) */}
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide font-urbanist">
            Company
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#10367D] focus:ring-2 focus:ring-[#10367D]/20 transition-all font-urbanist"
            placeholder="Your Company Name"
            disabled={isSubmitting || isSuccess}
          />
        </div>

        {/* Service Interest Dropdown */}
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide font-urbanist">
            Service Interest <span className="text-red-500">*</span>
          </label>
          <select
            {...register('service')}
            id="service"
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10367D]/20 transition-all font-urbanist bg-white ${
              errors.service ? 'border-red-500' : 'border-gray-200 focus:border-[#10367D]'
            }`}
            disabled={isSubmitting || isSuccess}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-500 font-urbanist">{errors.service.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide font-urbanist">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={6}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10367D]/20 transition-all resize-none font-urbanist ${
              errors.message ? 'border-red-500' : 'border-gray-200 focus:border-[#10367D]'
            }`}
            placeholder="Tell us about your project..."
            disabled={isSubmitting || isSuccess}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500 font-urbanist">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting || isSuccess}
          className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 font-urbanist ${
            isSuccess
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-[#10367D] hover:bg-[#10367D]/90 hover:shadow-xl'
          } disabled:opacity-70 disabled:cursor-not-allowed`}
          whileHover={!isSubmitting && !isSuccess ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting && !isSuccess ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              Message Sent!
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </motion.button>

        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 text-center font-urbanist">
          By submitting this form, you agree to our Privacy Policy and consent to being contacted about your inquiry.
        </p>
      </form>
    </motion.div>
  );
}
