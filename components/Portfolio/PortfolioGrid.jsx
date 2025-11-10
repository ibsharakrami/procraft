'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PortfolioGrid({ projects }) {
	const [hoveredIndex, setHoveredIndex] = useState(null);

	return (
		<div className='space-y-20 md:space-y-24 lg:space-y-28'>
			{projects.map((project, index) => (
				<motion.a
					key={project.id}
					href={project.caseStudyUrl}
					initial={{ opacity: 0, y: 60 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
					className='block group cursor-pointer'
					onMouseEnter={() => setHoveredIndex(index)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					{/* Image Container */}
					<div className='relative overflow-hidden mb-8 bg-gray-100'>
						<div className='relative w-full aspect-16/10 md:aspect-video lg:aspect-16/8'>
							<img
								src={project.image}
								alt={project.title}
								className='w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105'
							/>
							
							{/* Subtle Overlay on Hover */}
							<div className='absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
						</div>
					</div>

					{/* Project Info */}
					<div className='space-y-4'>
						<h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-black group-hover:text-[#10367D] transition-colors duration-300'>
							{project.title}
						</h3>
						
						{project.services && project.services.length > 0 && (
							<p className='text-gray-500 text-xs md:text-sm uppercase tracking-[0.25em] font-light'>
								{project.services.join(' & ')}
							</p>
						)}

						{project.caseStudyUrl && (
							<div className='pt-2'>
								<span className='inline-flex items-center gap-2 text-sm md:text-base text-gray-600 group-hover:text-[#10367D] transition-colors duration-300'>
									View case study
									<span className='text-xs transform group-hover:translate-x-1 transition-transform duration-300'>&gt;&gt;</span>
								</span>
							</div>
						)}
					</div>
				</motion.a>
			))}
		</div>
	);
}
