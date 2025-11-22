'use client';

import { motion } from 'framer-motion';

export default function CaseStudyCTA() {
	return (
		<section data-theme='dark' className='relative bg-black py-10 md:py-12 lg:py-14'>
			{/* Content */}
			<div className='max-w-7xl mx-auto px-6 md:px-[96px]'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8'
				>
					{/* Left - Text */}
					<div>
						<h2 className='text-lg md:text-xl lg:text-2xl font-normal text-white/60 uppercase tracking-[0.2em] font-urbanist text-center md:text-left'>
							HOW CAN WE HELP?
						</h2>
					</div>

					{/* Right - Phone Button */}
					<div>
						<a
							href='tel:+971545866866'
							className='inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 border border-white text-white text-lg md:text-xl font-light tracking-wide hover:bg-white hover:text-black transition-all duration-300 font-urbanist'
						>
							+971 545 866 866
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
