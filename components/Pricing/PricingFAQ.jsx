'use client';

import React, { useState } from 'react';

export default function PricingFAQ() {
	const [openIndex, setOpenIndex] = useState(0);

	const faqs = [
		{
			question: 'What is the minimum commitment period?',
			answer: 'All packages require a minimum 3-month billing cycle. This allows us to implement strategies, build momentum, and deliver measurable results for your business.',
		},
		{
			question: 'Can I upgrade or downgrade my package?',
			answer: 'Yes! You can upgrade or downgrade your package at any time. Changes will take effect at the start of your next billing cycle.',
		},
		{
			question: 'What social media platforms do you support?',
			answer: 'We support Facebook, Instagram, LinkedIn, Google My Business, Twitter, TikTok, and more. The number of platforms included varies by package.',
		},
		{
			question: 'Do you provide the images and videos?',
			answer: 'Yes! All packages include high-quality copyright-free images and videos specific to your industry. For custom photo/video shoots, check our add-on services.',
		},
		{
			question: 'How do I get started?',
			answer: 'Simply click "Get Started" on your preferred package, or contact us for a free consultation. We\'ll conduct an audit, understand your goals, and create a customized strategy for your business.',
		},
	];

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? -1 : index);
	};

	return (
		<section className='relative bg-gray-50 py-16 md:py-24'>
			<div className='mx-auto max-w-4xl px-6 md:px-[96px]'>
				{/* Section Header */}
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						Frequently Asked Questions
					</h2>
					<p className='text-lg text-gray-600'>
						Have questions? We've got answers.
					</p>
				</div>

				{/* FAQ Accordion */}
				<div className='space-y-4'>
					{faqs.map((faq, index) => (
						<div
							key={index}
							className='bg-white rounded-xl border-2 border-gray-200 overflow-hidden transition-all hover:border-[#10367D]'
						>
							<button
								onClick={() => toggleFAQ(index)}
								className='w-full px-6 py-5 flex items-center justify-between text-left transition-all'
							>
								<span className='text-lg font-semibold text-gray-900 pr-8'>
									{faq.question}
								</span>
								<svg
									className={`w-6 h-6 text-[#10367D] flex-shrink-0 transition-transform duration-300 ${
										openIndex === index ? 'rotate-180' : ''
									}`}
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M19 9l-7 7-7-7'
									/>
								</svg>
							</button>
							<div
								className={`overflow-hidden transition-all duration-300 ease-in-out ${
									openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
								}`}
							>
								<div className='px-6 pb-5 text-gray-600 leading-relaxed'>
									{faq.answer}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
