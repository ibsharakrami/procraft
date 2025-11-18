'use client';

import { motion } from 'framer-motion';
import { servicesHeroContent } from '@/data/servicesData';

export default function ServicesHero() {
	return (
		<section
			className='relative min-h-[50vh] md:min-h-[55vh] lg:min-h-[60vh] flex items-center justify-center bg-[#F5F5F5] overflow-hidden py-20 md:py-24 lg:py-28'
			data-theme='light'
		>
			{/* Dotted Pattern Background */}
			<div className='absolute inset-0 opacity-[0.08]'>
				<svg className='w-full h-full' xmlns='http://www.w3.org/2000/svg'>
					<defs>
						<pattern
							id='dot-pattern-services'
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
						fill='url(#dot-pattern-services)'
					/>
				</svg>
			</div>

			{/* Contextual Element - Top Right */}
			{servicesHeroContent.contextual && (
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className='absolute top-8 md:top-10 lg:top-12 right-8 md:right-12 lg:right-16'
				>
					<div className='text-right'>
						<p className='text-xs text-gray-500 mb-1 font-urbanist'>{servicesHeroContent.contextual.label}</p>
						<a 
							href={`tel:${servicesHeroContent.contextual.value.replace(/\s/g, '')}`}
							className='text-sm md:text-base text-gray-700 hover:text-[#10367D] transition-colors font-semibold tracking-wide font-urbanist'
						>
							{servicesHeroContent.contextual.value}
						</a>
					</div>
				</motion.div>
			)}

			{/* Center Content */}
			<div className='relative z-10 max-w-4xl mx-auto px-6 md:px-12 lg:px-16 text-center'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					{/* TIER 1 - Label */}
					<p className='text-gray-400 uppercase tracking-[0.4em] text-xs md:text-sm font-light mb-6 mt-10 md:mb-8 font-urbanist'>
						{servicesHeroContent.label}
					</p>

					{/* TIER 2 - Main Heading */}
					<h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-6 md:mb-8 leading-tight font-blatant'>
											{servicesHeroContent.heading}{' '}
												<span className='text-[#10367D]'>{servicesHeroContent.headingHighlight}</span>
					</h1>

					{/* TIER 3 - Subheading */}
						<h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-black mb-8 md:mb-10 leading-snug font-blatant'>
						Empowering Businesses Across  <span className='text-[#74B4D9]'>the UAE</span>
					</h2>

					{/* TIER 4 - Description */}
					<p className='text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-urbanist leading-relaxed'>
						{servicesHeroContent.description}
					</p>
				</motion.div>
			</div>
		</section>
	);
}
