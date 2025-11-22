'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { caseStudies } from '@/data/caseStudies';
import { ArrowRight } from 'lucide-react';

export default function NextProjectNav({ currentSlug }) {
	// Find current project index
	const currentIndex = caseStudies.findIndex((p) => p.slug === currentSlug);

	// Get next project (loop back to first if at end)
	const nextIndex = (currentIndex + 1) % caseStudies.length;
	const nextProject = caseStudies[nextIndex];

	return (
		<section data-theme='light' className='relative bg-white'>
			{/* Top Border Line - Dashed */}
			<div className='absolute top-0 left-0 right-0 h-[1px] border-t border-dashed border-gray-300' />

			<div className='max-w-7xl mx-auto px-6 md:px-[96px] py-16 md:py-24 lg:py-32'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20'>
					{/* Left Column - Label & Title */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='lg:col-span-5'
					>
						{/* Label */}
						<p className='text-sm uppercase tracking-widest text-gray-400 mb-6 font-urbanist font-semibold'>
							Next Project
						</p>

						{/* Title */}
						<h2 className='text-4xl md:text-5xl lg:text-6xl font-normal text-black mb-6 font-urbanist lowercase'>
							{nextProject.title}
						</h2>

						{/* Tagline */}
						<p className='text-base md:text-lg text-gray-600 mb-8 font-urbanist font-light leading-relaxed'>
							{nextProject.tagline}
						</p>

						{/* View Project Link */}
						<Link
							href={`/work/${nextProject.slug}`}
							className='group inline-flex items-center gap-3 text-base md:text-lg font-normal text-black hover:text-primary-blue transition-colors duration-300 font-urbanist'
						>
							<span>View Project</span>
							<ArrowRight className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1' />
						</Link>
					</motion.div>

					{/* Right Column - Image */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='lg:col-span-7'
					>
						<Link href={`/work/${nextProject.slug}`} className='group block relative overflow-hidden'>
							{/* Image Container */}
							<div className='relative aspect-[4/3] overflow-hidden'>
								<Image
									src={nextProject.thumbnailImage}
									alt={`${nextProject.title} - ${nextProject.tagline}`}
									fill
									className='object-cover transition-all duration-700 ease-out group-hover:scale-105'
								/>

								{/* Subtle overlay on hover */}
								<div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300' />

								{/* Arrow indicator on hover */}
								<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300'>
									<div className='w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center'>
										<ArrowRight className='w-8 h-8 text-black' strokeWidth={1.5} />
									</div>
								</div>
							</div>

							{/* Project Categories */}
							<div className='mt-4 flex flex-wrap gap-2'>
								{nextProject.category.map((cat, idx) => (
									<span
										key={idx}
										className='text-xs uppercase tracking-wider text-gray-500 font-urbanist'
									>
										{cat}
										{idx < nextProject.category.length - 1 && ' ·'}
									</span>
								))}
							</div>
						</Link>
					</motion.div>
				</div>
			</div>

			{/* Bottom Border Line - Dashed */}
			<div className='absolute bottom-0 left-0 right-0 h-[1px] border-b border-dashed border-gray-300' />
		</section>
	);
}
