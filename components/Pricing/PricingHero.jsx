'use client';

import { motion } from 'framer-motion';

export default function PricingHero() {
	return (
		<section
			className='relative min-h-[50vh] md:min-h-[55vh] lg:min-h-[60vh] flex items-center justify-center bg-[#F5F5F5] overflow-hidden pt-32 md:pt-36 lg:pt-40 pb-20 md:pb-24 lg:pb-28'
			data-theme='light'
		>
			{/* Dotted World Map Pattern Background */}
			<div className='absolute inset-0 opacity-[0.08]'>
				<svg className='w-full h-full' xmlns='http://www.w3.org/2000/svg'>
					<defs>
						<pattern
							id='dot-pattern-pricing'
							x='0'
							y='0'
							width='40'
							height='40'
							patternUnits='userSpaceOnUse'
						>
							<circle cx='2' cy='2' r='1.5' fill='#10367D' />
						</pattern>
					</defs>
					<rect
						x='0'
						y='0'
						width='100%'
						height='100%'
						fill='url(#dot-pattern-pricing)'
					/>
				</svg>
			</div>

			{/* Contextual Element - Top Right */}
			<motion.div
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.3 }}
				className='absolute top-8 md:top-10 lg:top-12 right-8 md:right-12 lg:right-16'
			>
				<div className='text-right'>
					<p className='text-xs text-gray-500 mb-1 font-urbanist'>Investment</p>
					<span className='text-sm md:text-base text-gray-700 hover:text-[#10367D] transition-colors font-semibold tracking-wide font-urbanist'>
						AED 1,249 - 3,999
					</span>
				</div>
			</motion.div>

			{/* Hero Content */}
			<div className='relative z-10 mx-auto max-w-7xl px-6 md:px-[96px]'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='text-center'
				>
					{/* Badge */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className='inline-block mb-6'
					>
						<span className='inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-[#10367D] shadow-sm border border-gray-200'>
							<span className='w-2 h-2 bg-[#74B4D9] rounded-full animate-pulse'></span>
							Transparent Pricing
						</span>
					</motion.div>

					{/* Title */}
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight'
					>
						Choose Your Perfect Plan
					</motion.h1>

					{/* Description */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className='text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'
					>
						Transparent pricing for world-class digital marketing services. All packages include high-quality content, dedicated account management, and proven strategies to grow your business.
					</motion.p>
				</motion.div>
			</div>
		</section>
	);
}
