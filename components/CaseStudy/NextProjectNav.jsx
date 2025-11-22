'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { caseStudies } from '@/data/caseStudies';

export default function NextProjectNav({ currentSlug }) {
	// Find current project index
	const currentIndex = caseStudies.findIndex((p) => p.slug === currentSlug);

	// Get next project (loop back to first if at end)
	const nextIndex = (currentIndex + 1) % caseStudies.length;
	const nextProject = caseStudies[nextIndex];

	return (
		<section data-theme='dark' className='relative overflow-hidden'>
			{/* Top Border Line */}
			<div className='absolute top-0 left-0 right-0 h-[1px] bg-gray-800 z-10' />

			<Link href={`/work/${nextProject.slug}`} className='group block'>
				<div className='relative min-h-[70vh] flex items-center justify-center overflow-hidden'>
					{/* Background Image */}
					<div className='absolute inset-0'>
						<Image
							src={nextProject.thumbnailImage}
							alt={nextProject.title}
							fill
							className='object-cover transition-all duration-[0.3s] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.05]'
						/>
					</div>

					{/* Overlay */}
					<div className='absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300' />

					{/* Content */}
					<div className='relative z-10 text-center px-6'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className='space-y-6'
						>
							<p className='text-white/60 text-sm uppercase tracking-widest font-urbanist'>
								Next Project
							</p>
							<h2 className='text-white text-5xl md:text-6xl lg:text-7xl font-bold font-blatant lowercase'>
								{nextProject.title}
							</h2>
							<p className='text-white/80 text-lg md:text-xl font-urbanist max-w-2xl mx-auto'>
								{nextProject.tagline}
							</p>
						</motion.div>
					</div>
				</div>
			</Link>
		</section>
	);
}
