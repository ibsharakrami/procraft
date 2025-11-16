'use client';

import { useState, useEffect, useRef } from 'react';
import { testimonials } from '@/data/testimonialsData';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

export default function TestimonialsCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const [progress, setProgress] = useState(0);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [dragOffset, setDragOffset] = useState(0);
	const progressRef = useRef(0);

	const DURATION = 10000; // 10 seconds

	// Single effect for auto-advance
	useEffect(() => {
		if (isPaused || isDragging) return;

		const interval = setInterval(() => {
			progressRef.current += 1;
			setProgress(progressRef.current);
			
			if (progressRef.current >= 100) {
				progressRef.current = 0;
				setProgress(0);
				setCurrentIndex((prev) => (prev + 1) % testimonials.length);
			}
		}, DURATION / 100);

		return () => {
			clearInterval(interval);
		};
	}, [isPaused, isDragging]);

	const nextSlide = () => {
		progressRef.current = 0;
		setProgress(0);
		setCurrentIndex((prev) => (prev + 1) % testimonials.length);
	};

	const prevSlide = () => {
		progressRef.current = 0;
		setProgress(0);
		setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};

	// Drag handlers
	const handleDragStart = (e) => {
		setIsDragging(true);
		setIsPaused(true);
		setStartX(e.type.includes('mouse') ? e.pageX : e.touches[0].clientX);
		setDragOffset(0);
	};

	const handleDragMove = (e) => {
		if (!isDragging) return;
		e.preventDefault();
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
		setIsPaused(false);
	};

	return (
		<section 
			data-theme='dark' 
			className='relative bg-black py-20 md:py-28 md:pb-20 overflow-hidden'
		>
			<div className='mx-auto max-w-7xl px-6 md:px-[96px]'>
				<div className='grid grid-cols-1 lg:grid-cols-[30%_70%] gap-12 lg:gap-24 lg:items-start'>
					{/* Left Column - Sticky Header */}
					<div className='lg:sticky lg:top-0 lg:self-start'>
						{/* Label */}
						<div className='flex items-center gap-2'>
							<Sparkles className='w-3 h-3 text-[#74B4D9]' />
							<span className='text-xs uppercase tracking-wider text-[#74B4D9] font-medium'>
								Testimonials
							</span>
						</div>

						{/* Heading */}
						<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4 leading-tight'>
							What others
							<br />
							say
						</h2>

						{/* Description */}
						<p className='text-sm md:text-base text-gray-400 leading-relaxed max-w-md'>
							I've worked with some amazing people over the years, here is what they have to say about me.
						</p>
					</div>

					{/* Right Column - Carousel */}
					<div 
						className='relative w-full'
						onMouseEnter={() => setIsPaused(true)}
						onMouseLeave={(e) => {
							setIsPaused(false);
							handleDragEnd(e);
						}}
					>
						{/* Carousel Wrapper */}
						<div className='overflow-hidden w-full'>
							{/* Sliding Container */}
							<div 
								className='flex'
								style={{ 
									transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
									transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
								}}
							>
								{testimonials.map((testimonial, index) => (
									<div 
										key={index} 
										className='w-full flex-shrink-0 px-1'
									>
										{/* Card */}
										<div 
											className='border border-gray-800 rounded-3xl p-8 md:p-10 bg-transparent w-full cursor-grab active:cursor-grabbing select-none'
											onMouseDown={handleDragStart}
											onMouseMove={handleDragMove}
											onMouseUp={handleDragEnd}
											onTouchStart={handleDragStart}
											onTouchMove={handleDragMove}
											onTouchEnd={handleDragEnd}
										>
											{/* Avatar + Name/Position */}
											<div className='flex items-center gap-4 mb-6 w-full'>
												{/* Avatar with Timer Ring */}
												<div className='relative flex-shrink-0 w-14 h-14 md:w-16 md:h-16'>
													{/* SVG Timer Ring */}
													<svg className='absolute inset-0 w-full h-full -rotate-90' viewBox='0 0 64 64'>
														{/* Background circle */}
														<circle
															cx='32'
															cy='32'
															r='30'
															fill='none'
															stroke='#3a3a3a'
															strokeWidth='2'
														/>
														{/* Progress circle */}
														<circle
															cx='32'
															cy='32'
															r='30'
															fill='none'
															stroke='#74B4D9'
															strokeWidth='2'
															strokeDasharray={`${2 * Math.PI * 30}`}
															strokeDashoffset={`${2 * Math.PI * 30 * (1 - progress / 100)}`}
															strokeLinecap='round'
															style={{
																transition: 'stroke-dashoffset 0.1s linear'
															}}
														/>
													</svg>
													
													{/* Avatar Image */}
													<div className='absolute inset-[4px] w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full overflow-hidden'>
														<Image
															src={testimonial.avatar}
															alt={testimonial.name}
															width={64}
															height={64}
															className='w-full h-full object-cover'
														/>
													</div>
												</div>

												{/* Name and Position */}
												<div className='flex-1 min-w-0'>
													<h3 className='text-lg md:text-xl font-bold text-white mb-1'>
														{testimonial.name}
													</h3>
													<p className='text-xs md:text-sm text-gray-400'>
														{testimonial.position} @{testimonial.company}
													</p>
												</div>
											</div>

											{/* Testimonial Text */}
											<p className='text-sm md:text-base text-gray-300 leading-relaxed mb-6 w-full'>
												{testimonial.testimonial}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Navigation Controls - Below Card */}
						<div className='flex items-center justify-between mt-6'>
							{/* LinkedIn Link - Commented out temporarily */}
							{/* <a
								href={testimonials[currentIndex].linkedinUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-2 text-white hover:text-[#74B4D9] transition-colors group'
							>
								<span className='text-xs md:text-sm'>Check it out on Linkedin</span>
								<ExternalLink className='w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
							</a> */}
							
							{/* White space placeholder */}
							<div></div>

							{/* Arrows + Counter */}
							<div className='flex items-center gap-4'>
								{/* Navigation Arrows */}
								<div className='flex items-center gap-2'>
									<button
										onClick={prevSlide}
										className='w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors'
										aria-label='Previous testimonial'
									>
										<ArrowLeft className='w-4 h-4 text-white' />
									</button>
									<button
										onClick={nextSlide}
										className='w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors'
										aria-label='Next testimonial'
									>
										<ArrowRight className='w-4 h-4 text-white' />
									</button>
								</div>

								{/* Counter */}
								<div className='text-gray-400 text-xs md:text-sm font-medium tabular-nums'>
									{String(currentIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
