'use client';

import { motion } from 'framer-motion';

export default function PortfolioIntro() {
	return (
		<motion.div
			className='lg:sticky lg:top-32'
			initial={{ opacity: 0, x: -30 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
		>
			<p className='text-gray-400 text-xs md:text-sm uppercase tracking-[0.3em] mb-6 md:mb-8 leading-relaxed'>
				Working Together
				<br />
				With Our Clients
			</p>

			<h2 className='text-black text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight'>
				To Achieve Their Business&apos; Vision
			</h2>

			<p className='text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-light'>
				Whether we&apos;re building a new website, creating new branding, composing
				compelling copy or increasing a business&apos; social media presence; you can
				always count on edirect. Our skilled and dedicated team are meticulous
				in the implementation of various marketing strategies. Together, we are
				forever working hard towards achieving our clients&apos; vision.
			</p>

			<a
				href='/work'
				className='text-sm md:text-base text-gray-600 hover:text-[#10367D] transition-colors inline-flex items-center gap-2 font-medium'
			>
				view more
				<span className='text-xs'>&gt;&gt;</span>
			</a>
		</motion.div>
	);
}
