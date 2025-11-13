'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { sendEmail, isEmailJSConfigured } from '@/lib/emailjs';
import { serviceOptions } from '@/data/contactData';

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
});

export default function ContactFormEdirect() {
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

    if (!isEmailJSConfigured()) {
      toast.error('Email service is not configured. Please contact us directly at info@procraft.ae');
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        company: data.company || 'Not provided',
        service: data.service,
        message: data.message,
        to_email: 'info@procraft.ae'
      };

      const result = await sendEmail(templateParams);

      if (result.success) {
        setIsSuccess(true);
        toast.success('Thank you for reaching out! We\'ll get back to you within 24 hours.', {
          duration: 5000,
          icon: '🎉'
        });

        setTimeout(() => {
          reset();
          setIsSuccess(false);
        }, 3000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Oops! Something went wrong. Please try again or contact us at info@procraft.ae', {
        duration: 6000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg shadow-lg p-8 md:p-10"
      id="contact-form"
    >
      {/* Form Header */}
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-1 font-urbanist">
          Your Details <span className="text-red-500">*</span>
        </h3>
        <p className="text-sm text-gray-500 font-urbanist">
          Required fields are marked with an asterisk
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm text-gray-700 mb-2 font-urbanist">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className={`w-full px-4 py-3 bg-[#F0F0F0] border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10367D] transition-all font-urbanist ${
              errors.name ? 'ring-2 ring-red-500' : ''
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
          <label htmlFor="email" className="block text-sm text-gray-700 mb-2 font-urbanist">
            Your Email <span className="text-red-500">*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className={`w-full px-4 py-3 bg-[#F0F0F0] border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10367D] transition-all font-urbanist ${
              errors.email ? 'ring-2 ring-red-500' : ''
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
          <label htmlFor="phone" className="block text-sm text-gray-700 mb-2 font-urbanist">
            Phone number <span className="text-red-500">*</span>
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className={`w-full px-4 py-3 bg-[#F0F0F0] border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10367D] transition-all font-urbanist ${
              errors.phone ? 'ring-2 ring-red-500' : ''
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
          <label htmlFor="company" className="block text-sm text-gray-700 mb-2 font-urbanist">
            Company
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            className="w-full px-4 py-3 bg-[#F0F0F0] border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10367D] transition-all font-urbanist"
            placeholder="Your Company Name"
            disabled={isSubmitting || isSuccess}
          />
        </div>

        {/* Service Interest Dropdown */}
        <div>
          <label htmlFor="service" className="block text-sm text-gray-700 mb-2 font-urbanist">
            Service Interest <span className="text-red-500">*</span>
          </label>
          <select
            {...register('service')}
            id="service"
            className={`w-full px-4 py-3 bg-[#F0F0F0] border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10367D] transition-all font-urbanist ${
              errors.service ? 'ring-2 ring-red-500' : ''
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
          <label htmlFor="message" className="block text-sm text-gray-700 mb-2 font-urbanist">
            Please provide a brief description of your enquiry <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={6}
            className={`w-full px-4 py-3 bg-[#F0F0F0] border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10367D] transition-all resize-none font-urbanist ${
              errors.message ? 'ring-2 ring-red-500' : ''
            }`}
            placeholder="Tell us about your project..."
            disabled={isSubmitting || isSuccess}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500 font-urbanist">{errors.message.message}</p>
          )}
        </div>

        {/* Privacy Checkbox */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="privacy"
            required
            className="mt-1 w-4 h-4 text-[#10367D] focus:ring-[#10367D] rounded"
            disabled={isSubmitting || isSuccess}
          />
          <label htmlFor="privacy" className="text-xs text-gray-600 font-urbanist">
            I have read and accept the Privacy Policy and consent to edirect contacting me about my enquiry
          </label>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting || isSuccess}
          className={`w-full py-4 px-6 rounded-md font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 font-urbanist ${
            isSuccess
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-black hover:bg-gray-800'
          } disabled:opacity-70 disabled:cursor-not-allowed`}
          whileHover={!isSubmitting && !isSuccess ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting && !isSuccess ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              Submitted!
            </>
          ) : (
            'Submit'
          )}
        </motion.button>
      </form>
    </motion.div>
  );
}
