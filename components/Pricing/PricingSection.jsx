'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { pricingPackages } from '@/data/pricingData';
import { useState, useEffect } from 'react';

export default function PricingSection() {
	const [activeIndex, setActiveIndex] = useState(1); // Start with middle card (Enterprise)
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);
	const [isMobile, setIsMobile] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [dragOffset, setDragOffset] = useState(0);

	// Detect if mobile/tablet on mount
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 1280); // Changed from 768 to 1280
		};
		
		checkMobile();
		window.addEventListener('resize', checkMobile);
		
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	// Auto-play carousel on mobile
	useEffect(() => {
		if (!isAutoPlaying || !isMobile) return;
		
		const interval = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % pricingPackages.length);
		}, 7000); // Increased from 5000ms to 7000ms (7 seconds)
		
		return () => clearInterval(interval);
	}, [isAutoPlaying, isMobile]);

	// Navigation functions
	const nextSlide = () => {
		setActiveIndex((prev) => (prev + 1) % pricingPackages.length);
	};

	const prevSlide = () => {
		setActiveIndex((prev) => (prev - 1 + pricingPackages.length) % pricingPackages.length);
	};

	// Drag handlers
	const handleDragStart = (e) => {
		setIsDragging(true);
		setIsAutoPlaying(false);
		setStartX(e.type.includes('mouse') ? e.pageX : e.touches[0].clientX);
		setDragOffset(0);
	};

	const handleDragMove = (e) => {
		if (!isDragging) return;
		const currentPosition = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
		setDragOffset(currentPosition - startX);
	};

	const handleDragEnd = () => {
		if (!isDragging) return;
		
		const threshold = 50;
		
		// If moved more than threshold, change slide
		if (dragOffset < -threshold) {
			nextSlide();
		} else if (dragOffset > threshold) {
			prevSlide();
		}
		
		// Reset
		setIsDragging(false);
		setDragOffset(0);
		setIsAutoPlaying(true);
	};

	// Calculate card transform based on position relative to active card
	const getCardTransform = (cardIndex) => {
		const diff = (cardIndex - activeIndex + pricingPackages.length) % pricingPackages.length;
		
		if (diff === 0) {
			// Center (Active) Card
			return {
				x: 0,
				scale: 1,
				opacity: 1,
				blur: 0,
				zIndex: 3
			};
		} else if (diff === 1) {
			// Right Card
			return {
				x: 150,
				scale: 0.9,
				opacity: 0.6,
				blur: 2, // Reduced from 4px to 2px
				zIndex: 2
			};
		} else {
			// Left Card
			return {
				x: -150,
				scale: 0.9,
				opacity: 0.6,
				blur: 2, // Reduced from 4px to 2px
				zIndex: 1
			};
		}
	};

	return (
		<section
			data-theme='light'
			className='relative bg-white py-16 md:py-20 lg:py-24'
		>
			<div className='mx-auto max-w-7xl px-6 md:px-[96px]'>
				<div className='flex flex-col lg:flex-row lg:items-start lg:gap-12 xl:gap-16'>
					{/* Left Side - Title */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='mb-8 lg:mb-0 lg:sticky lg:top-32 lg:w-[200px] xl:w-[220px] flex-shrink-0'
					>
						<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.05]'>
							Compare <br />
							<span className='font-bold italic text-[#10367D]'>ProCraft</span>{' '}
							<span className='font-normal'>plans</span>
						</h2>
					</motion.div>

					{/* Right Side - Pricing Cards */}
					<div className='flex-1 min-w-0'>
						{/* Desktop: Recommended Badge */}
						<div className='hidden xl:block relative h-12 mb-0'>
							{pricingPackages.map((pkg, index) => (
								pkg.badge && (
									<div
										key={pkg.id}
										className='absolute left-1/2 -translate-x-1/2 xl:left-auto xl:translate-x-0'
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

						{/* Mobile/Tablet: Carousel with stacking */}
						<div 
							className='xl:hidden relative h-[520px] overflow-hidden select-none'
							style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
							onMouseEnter={() => setIsAutoPlaying(false)}
							onMouseLeave={() => {
								setIsAutoPlaying(true);
								handleDragEnd();
							}}
							onMouseDown={handleDragStart}
							onMouseMove={handleDragMove}
							onMouseUp={handleDragEnd}
							onTouchStart={handleDragStart}
							onTouchMove={handleDragMove}
							onTouchEnd={handleDragEnd}
						>
							{/* Recommended Badge for Active Card */}
							{pricingPackages[activeIndex].badge && (
								<motion.div
									key={`badge-${activeIndex}`}
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0 }}
									className='absolute top-0 left-1/2 -translate-x-1/2 z-10'
								>
									<div className='bg-[#74B4D9] text-white text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-wide'>
										{pricingPackages[activeIndex].badge}
									</div>
								</motion.div>
							)}

							{/* Carousel Cards */}
							<div className='relative w-full h-full pt-12'>
								{pricingPackages.map((pkg, index) => {
									const transform = getCardTransform(index);
									return (
										<motion.div
											key={pkg.id}
											className='absolute top-0 left-1/2 w-[80%]'
											animate={{
												x: transform.x + dragOffset,
												translateX: '-50%',
												scale: transform.scale,
												opacity: transform.opacity,
												filter: `blur(${transform.blur}px)`
											}}
											style={{
												zIndex: transform.zIndex
											}}
											transition={{
												duration: isDragging ? 0 : 0.5,
												ease: [0.4, 0, 0.2, 1]
											}}
										>
											<div className='bg-white rounded-2xl shadow-xl border border-[#ddd] overflow-hidden' style={{ pointerEvents: index === activeIndex ? 'auto' : 'none' }}>
												<PricingCard package={pkg} index={index} totalCards={pricingPackages.length} isMobileCarousel={true} />
											</div>
										</motion.div>
									);
								})}
							</div>

							{/* Carousel Indicators */}
							<div className='absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2'>
								{pricingPackages.map((_, index) => (
									<button
										key={index}
										onClick={() => {
											setActiveIndex(index);
											setIsAutoPlaying(false);
											setTimeout(() => setIsAutoPlaying(true), 5000);
										}}
										className={`w-2 h-2 rounded-full transition-all duration-300 ${
											index === activeIndex 
												? 'bg-[#10367D] w-6' 
												: 'bg-gray-300'
										}`}
										aria-label={`Go to pricing card ${index + 1}`}
									/>
								))}
							</div>
						</div>

						{/* Desktop: Grid Layout */}
						<div className='hidden xl:flex justify-between gap-6'>
							{pricingPackages.map((pkg, index) => (
								<PricingCard key={pkg.id} package={pkg} index={index} totalCards={pricingPackages.length} isMobileCarousel={false} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function PricingCard({ package: pkg, index, totalCards, isMobileCarousel }) {
	const isFeatured = pkg.featured;
	const isFirst = index === 0;
	const isLast = index === totalCards - 1;

	// Mobile carousel: no motion wrapper, no rounded corners from grid
	if (isMobileCarousel) {
		return (
			<div className={`h-full ${isFeatured ? 'bg-gray-50' : 'bg-white'}`}>
				{/* Header */}
				<div className='p-6 md:p-8 pb-4 md:pb-6 border-b border-gray-100'>
					{/* Plan Name */}
					<h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4'>
						{pkg.name}
					</h3>

					{/* Price */}
					<div className='mb-2 md:mb-2'>
						<span className='text-4xl md:text-5xl font-bold text-gray-900'>
							${pkg.price}
						</span>
						<span className='text-base md:text-lg text-gray-600'>{pkg.priceLabel}</span>
					</div>

					{/* Period */}
					<p className='text-sm md:text-sm text-[#10367D] font-medium mb-3 md:mb-4'>
						{pkg.period}
					</p>

					{/* Description */}
					<p className='text-sm md:text-sm text-gray-600 leading-relaxed'>
						{pkg.description}
					</p>
				</div>

				{/* Specs Grid */}
				<div className='p-6 md:p-8 pb-4 md:pb-6'>
					<div className='flex justify-around gap-4 md:gap-6'>
						{pkg.specs.map((spec, idx) => (
							<div key={idx} className='flex flex-col items-center'>
								<div className='text-[9px] md:text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-1.5 md:mb-1.5 whitespace-nowrap'>
									{spec.label}
								</div>
								<div className='text-sm md:text-sm font-bold text-gray-900 leading-tight text-center'>
									{spec.value}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* CTA Section */}
				<div className='p-6 md:p-8 pt-0'>
					<button
						className={`w-full py-3 md:py-3.5 px-4 md:px-6 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 mb-3 md:mb-4 ${
							isFeatured
								? 'bg-[#10367D] text-white hover:bg-[#0a2454]'
								: 'bg-gray-900 text-white hover:bg-gray-800'
						}`}
					>
						{pkg.buttonText}
					</button>

					{/* View Pricing Link */}
					<button className='w-full text-sm md:text-sm text-gray-600 hover:text-[#10367D] transition-colors duration-200 flex items-center justify-center gap-2 md:gap-2 group'>
						<span>{pkg.linkText}</span>
						<svg
							className='w-4 h-4 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-200'
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
		);
	}

	// Desktop grid: original design with motion wrapper
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
				className={`h-full border border-[#ddd] rounded-2xl ${
					isFeatured 
						? 'bg-gray-50' 
						: 'bg-white'
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
