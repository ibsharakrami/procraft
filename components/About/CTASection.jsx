'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '@/components/ui/Container';

export default function CTASection() {
	const containerVariants = {
		hidden: { opacity: 1 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: 'easeOut',
			},
		},
	};

	return (
		<section data-theme="dark" className='relative py-24 md:py-32 bg-gradient-to-br from-[#10367D] via-[#0d2d5e] to-[#0a2550] overflow-hidden'>
			{/* Background Pattern */}
			<div className='absolute inset-0 opacity-10'>
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]'></div>
			</div>

			<Container>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, margin: '-100px' }}
					className='text-center relative z-10'
				>
					{/* Heading */}
					<motion.h2
						variants={itemVariants}
						className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-blatant'
					>
						Ready to Transform Your Business?
					</motion.h2>

					{/* Subtext */}
					<motion.p
						variants={itemVariants}
						className='text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-light'
					>
						Let's create something amazing together. Our team is ready to bring
						your vision to life.
					</motion.p>

					{/* Buttons */}
					<motion.div
						variants={itemVariants}
						className='flex flex-col sm:flex-row gap-4 justify-center items-center'
					>
						{/* Primary CTA */}
						<Link
							href='/contact'
							className='group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-[#10367D] font-semibold rounded-full hover:bg-[#74B4D9] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105'
						>
							Let's Talk
							<svg
								className='w-5 h-5 group-hover:translate-x-1 transition-transform'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M17 8l4 4m0 0l-4 4m4-4H3'
								/>
							</svg>
						</Link>

						{/* Secondary CTA */}
						<Link
							href='/services'
							className='inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300'
						>
							View Services
						</Link>
					</motion.div>

					{/* Contact Info */}
					<motion.div
						variants={itemVariants}
						className='mt-12 pt-8 border-t border-white/10'
					>
						<p className='text-white/60 text-sm mb-3'>Or reach us directly</p>
						<div className='flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80'>
							<a
								href='tel:+971555624052'
								className='hover:text-white transition-colors flex items-center gap-2'
							>
								<svg
									className='w-5 h-5'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
									/>
								</svg>
								+971 55 562 4052
							</a>
							<span className='hidden sm:block text-white/30'>|</span>
							<a
								href='mailto:info@procraft.ae'
								className='hover:text-white transition-colors flex items-center gap-2'
							>
								<svg
									className='w-5 h-5'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
									/>
								</svg>
								info@procraft.ae
							</a>
						</div>
					</motion.div>
				</motion.div>
			</Container>
		</section>
	);
}
