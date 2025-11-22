'use client';

import { motion } from 'framer-motion';

export default function PricingIntro() {
	return (
		<motion.div
			className='lg:sticky lg:top-32'
			initial={{ opacity: 0, x: -30 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
		>
			<div>
				<span className='inline-block text-xs md:text-sm uppercase tracking-wider text-[#74B4D9] font-light mb-4 border-l-4 border-[#74B4D9] pl-4'>
					Pricing
				</span>
				<h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 font-blatant'>
					Choose Your Plan
				</h2>
			</div>

			<p className='text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-light font-urbanist'>
				Flexible pricing designed for businesses of all sizes. From startups to enterprises, we have a plan that fits your needs and budget.
			</p>

			<a
				href='/contact'
				className='text-sm md:text-base text-gray-600 hover:text-[#10367D] transition-colors inline-flex items-center gap-2 font-medium'
			>
				need a custom quote?
				<span className='text-xs'>&gt;&gt;</span>
			</a>
		</motion.div>
	);
}
