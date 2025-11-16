'use client';

import { motion } from 'framer-motion';
import { pricingPackages } from '@/data/pricingData';

export default function PricingSection() {
	return (
		<section
			data-theme='light'
			className='relative bg-white py-16 md:py-20 lg:py-24'
		>
			<div className='mx-auto max-w-7xl px-6 md:px-[96px]'>
				<div className='flex flex-col lg:flex-row lg:items-start lg:gap-8'>
					{/* Left Side - Title */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='mb-8 lg:mb-0 lg:sticky lg:top-32 lg:w-[220px] flex-shrink-0'
					>
						<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.05]'>
							Compare <br />
							<span className='font-bold italic text-[#10367D]'>ProCraft</span>{' '}
							<span className='font-normal'>plans</span>
						</h2>
					</motion.div>

					{/* Right Side - Pricing Cards */}
					<div className='flex-1'>
						{/* Recommended Badge - Positioned Above Cards */}
						<div className='relative h-12 mb-0'>
							{pricingPackages.map((pkg, index) => (
								pkg.badge && (
									<div
										key={pkg.id}
										className='absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0'
										style={{
											left: `calc(${index * (100 / pricingPackages.length)}% + ${100 / (pricingPackages.length * 2)}% - 75px)`
										}}
									>
										<div className='bg-[#74B4D9] text-white text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-wide'>
											{pkg.badge}
										</div>
									</div>
								)
							))}
						</div>

						{/* Pricing Cards Grid */}
						<div className='grid grid-cols-3 gap-0'>
							{pricingPackages.map((pkg, index) => (
								<PricingCard key={pkg.id} package={pkg} index={index} totalCards={pricingPackages.length} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function PricingCard({ package: pkg, index, totalCards }) {
	const isFeatured = pkg.featured;
	const isFirst = index === 0;
	const isLast = index === totalCards - 1;

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			viewport={{ once: true }}
			className='relative'
		>
			{/* Card */}
			<div
				className={`h-full ${
					isFeatured 
						? 'bg-gray-50' 
						: 'bg-white'
				} ${
					isFirst ? 'rounded-l-2xl' : ''
				} ${
					isLast ? 'rounded-r-2xl' : ''
				}`}
			>
				{/* Header */}
				<div className='p-4 md:p-8 pb-3 md:pb-6 border-b border-gray-100'>
					{/* Plan Name */}
					<h3 className='text-base md:text-2xl font-bold text-gray-900 mb-2 md:mb-4'>
						{pkg.name}
					</h3>

					{/* Price */}
					<div className='mb-1 md:mb-2'>
						<span className='text-2xl md:text-5xl font-bold text-gray-900'>
							${pkg.price}
						</span>
						<span className='text-xs md:text-lg text-gray-600'>{pkg.priceLabel}</span>
					</div>

					{/* Period */}
					<p className='text-[10px] md:text-sm text-[#10367D] font-medium mb-2 md:mb-4'>
						{pkg.period}
					</p>

					{/* Description */}
					<p className='text-[10px] md:text-sm text-gray-600 leading-relaxed hidden md:block'>
						{pkg.description}
					</p>
				</div>

				{/* Specs Grid */}
				<div className='p-4 md:p-8 pb-3 md:pb-6'>
					<div className='flex justify-around gap-2 md:gap-6'>
						{pkg.specs.map((spec, idx) => (
							<div key={idx} className='flex flex-col items-center'>
								<div className='text-[7px] md:text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-1 md:mb-1.5 whitespace-nowrap'>
									{spec.label}
								</div>
								<div className='text-[10px] md:text-sm font-bold text-gray-900 leading-tight text-center'>
									{spec.value}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* CTA Section */}
				<div className='p-4 md:p-8 pt-0'>
					<button
						className={`w-full py-2 md:py-3.5 px-3 md:px-6 rounded-lg font-semibold text-xs md:text-base transition-all duration-300 mb-2 md:mb-4 ${
							isFeatured
								? 'bg-[#10367D] text-white hover:bg-[#0a2454]'
								: 'bg-gray-900 text-white hover:bg-gray-800'
						}`}
					>
						{pkg.buttonText}
					</button>

					{/* View Pricing Link */}
					<button className='w-full text-[9px] md:text-sm text-gray-600 hover:text-[#10367D] transition-colors duration-200 flex items-center justify-center gap-1 md:gap-2 group'>
						<span className='hidden md:inline'>{pkg.linkText}</span>
						<span className='md:hidden'>View pricing</span>
						<svg
							className='w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-200'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M9 5l7 7-7 7'
							/>
						</svg>
					</button>
				</div>
			</div>
		</motion.div>
	);
}
