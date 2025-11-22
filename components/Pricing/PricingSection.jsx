'use client';

import { motion } from 'framer-motion';
import { pricingPackages } from '@/data/pricingData';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import PricingIntro from './PricingIntro';

export default function PricingSection() {
	const [activeIndex, setActiveIndex] = useState(1);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 1280);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	useEffect(() => {
		if (!isAutoPlaying || !isMobile) return;

		const interval = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % pricingPackages.length);
		}, 7000);

		return () => clearInterval(interval);
	}, [isAutoPlaying, isMobile]);

	return (
		<section className='relative bg-white py-16 md:py-24 lg:py-32'>
			<div className='mx-auto max-w-7xl px-6 md:px-[96px]'>
				{/* Mobile/Tablet: Simple Stack */}
				<div className='xl:hidden'>
					<div className='mb-12'>
						<p className='text-[#74B4D9] text-xs md:text-sm uppercase tracking-wider mb-6 md:mb-8 leading-relaxed border-l-4 border-[#74B4D9] pl-4'>
							Pricing
						</p>
						<h2 className='text-4xl md:text-5xl font-bold text-black mb-6 font-blatant leading-tight'>
							Choose Your Plan
						</h2>
					</div>

					{/* Simple Carousel */}
					<div className='relative'>
						{pricingPackages[activeIndex].badge && (
							<motion.div
								key={`badge-${activeIndex}`}
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3 }}
								className='absolute -top-4 left-1/2 -translate-x-1/2 z-10'
							>
								<span className='bg-[#10367D] text-white text-xs font-medium px-4 py-1.5 rounded uppercase tracking-wide'>
									{pricingPackages[activeIndex].badge}
								</span>
							</motion.div>
						)}

						<motion.div
							key={activeIndex}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.5 }}
							className='mt-6'
						>
							<PricingCard package={pricingPackages[activeIndex]} isMobile={true} />
						</motion.div>

						{/* Indicators */}
						<div className='flex justify-center gap-2 mt-8'>
							{pricingPackages.map((_, index) => (
								<button
									key={index}
									onClick={() => {
										setActiveIndex(index);
										setIsAutoPlaying(false);
										setTimeout(() => setIsAutoPlaying(true), 5000);
									}}
									className={`h-1.5 rounded-full transition-all duration-300 ${
										index === activeIndex
											? 'bg-[#10367D] w-8'
											: 'bg-gray-300 w-1.5'
									}`}
									aria-label={`Go to plan ${index + 1}`}
								/>
							))}
						</div>
					</div>
				</div>

				{/* Desktop: Asymmetric Layout */}
				<div className='hidden xl:grid xl:grid-cols-5 xl:gap-16'>
					{/* Left: Intro (2 columns, sticky) */}
					<div className='xl:col-span-2'>
						<PricingIntro />
					</div>

					{/* Right: Cards (3 columns, stacked) */}
					<div className='xl:col-span-3 space-y-8'>
						{pricingPackages.map((pkg, index) => (
							<motion.div
								key={pkg.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-50px' }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
									ease: 'easeOut',
								}}
							>
								<PricingCard package={pkg} isMobile={false} />
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function PricingCard({ package: pkg, isMobile }) {
	return (
		<div className='group relative bg-white border border-gray-200 hover:border-gray-400 transition-colors duration-300 rounded-sm p-8 md:p-10 lg:p-12'>
			{/* Badge (Desktop only, minimal) */}
			{!isMobile && pkg.badge && (
				<div className='absolute -top-3 right-8'>
					<span className='bg-[#10367D] text-white text-xs font-medium px-4 py-1.5 rounded uppercase tracking-wide'>
						{pkg.badge}
					</span>
				</div>
			)}

			{/* Plan Name */}
			<h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 font-blatant'>
				{pkg.name}
			</h3>

			{/* Price */}
			<div className='mb-6'>
				<span className='text-5xl md:text-6xl font-bold text-black'>
					AED {pkg.price}
				</span>
				<span className='text-base text-gray-500 ml-2'>/ {pkg.period}</span>
			</div>

			{/* Description */}
			<p className='text-base md:text-lg text-gray-600 leading-relaxed mb-8 font-light font-urbanist'>
				{pkg.description}
			</p>

			{/* Features */}
			<ul className='space-y-3 mb-10'>
				{pkg.keyFeatures.map((feature, idx) => (
					<li key={idx} className='flex items-start gap-3 text-sm md:text-base text-gray-600 font-urbanist'>
						<svg
							className='w-5 h-5 text-[#10367D] flex-shrink-0 mt-0.5'
							fill='currentColor'
							viewBox='0 0 20 20'
						>
							<path
								fillRule='evenodd'
								d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
								clipRule='evenodd'
							/>
						</svg>
						<span>{feature}</span>
					</li>
				))}
			</ul>

			{/* Specs (minimal, inline) */}
			<div className='flex flex-wrap gap-x-8 gap-y-4 mb-10 pb-10 border-b border-gray-200'>
				{pkg.specs.map((spec, idx) => (
					<div key={idx}>
						<div className='text-xs uppercase tracking-wider text-gray-400 mb-1 font-urbanist'>
							{spec.label}
						</div>
						<div className='text-sm font-semibold text-black font-urbanist'>{spec.value}</div>
					</div>
				))}
			</div>

			{/* CTA */}
			<div>
				<button
					className={`w-full py-3.5 px-6 rounded font-semibold text-base transition-all duration-300 mb-4 ${
						pkg.featured
							? 'bg-[#10367D] text-white hover:bg-[#0a2454]'
							: 'bg-black text-white hover:bg-gray-800'
					}`}
				>
					{pkg.buttonText}
				</button>

				<Link
					href='/pricing'
					className='text-sm text-gray-600 hover:text-[#10367D] transition-colors duration-200 flex items-center justify-center gap-2'
				>
					<span>{pkg.linkText}</span>
					<span className='text-xs'>&gt;&gt;</span>
				</Link>
			</div>
		</div>
	);
}
