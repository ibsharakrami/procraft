'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { ExternalLink } from 'lucide-react';

export default function CaseStudyResults({ project }) {
	return (
		<section data-theme='light' className='relative bg-white py-16 md:py-24 lg:py-32'>
			{/* Top Border Line - Dashed */}
			<div className='absolute top-0 left-0 right-0 h-[1px] border-t border-dashed border-gray-300' />

			{/* Bottom Border Line - Dashed */}
			<div className='absolute bottom-0 left-0 right-0 h-[1px] border-b border-dashed border-gray-300' />

			<Container size='default'>
				{/* Two Column Layout */}
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20'>
					{/* Left Column - Heading */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='lg:col-span-3'
					>
						<h2 className='text-4xl md:text-5xl lg:text-6xl font-normal text-black font-urbanist lowercase sticky top-32'>
							the results
						</h2>
					</motion.div>

					{/* Right Column - Results Content */}
					<div className='lg:col-span-9 space-y-12 md:space-y-16'>
						{/* Metrics Grid */}
						{project.results && (
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10'
							>
								{Object.entries(project.results).map(([key, value], index) => (
									<motion.div
										key={key}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										className='border-l-2 border-primary-blue pl-6 space-y-2'
									>
										<p className='text-sm uppercase tracking-wider text-gray-500 font-urbanist font-semibold'>
											{key.replace(/([A-Z])/g, ' $1').trim()}
										</p>
										<p className='text-2xl md:text-3xl lg:text-4xl font-normal text-black font-urbanist leading-tight'>
											{value}
										</p>
									</motion.div>
								))}
							</motion.div>
						)}

						{/* Live Website Link */}
						{project.liveUrl && (
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className='pt-8 border-t border-gray-200'
							>
								<div className='space-y-4'>
									<p className='text-sm uppercase tracking-wider text-gray-500 font-urbanist font-semibold'>
										View Live Website
									</p>
									<a
										href={project.liveUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='group inline-flex items-center gap-3 text-2xl md:text-3xl lg:text-4xl font-light text-black hover:text-primary-blue transition-colors duration-300 font-urbanist break-all'
									>
										<span className='underline decoration-1 underline-offset-8 decoration-gray-300 group-hover:decoration-primary-blue transition-colors duration-300'>
											{project.liveUrl.replace(/^https?:\/\//, '')}
										</span>
										<ExternalLink className='w-6 h-6 md:w-8 md:h-8 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' strokeWidth={1.5} />
									</a>
								</div>
							</motion.div>
						)}
					</div>
				</div>
			</Container>
		</section>
	);
}
