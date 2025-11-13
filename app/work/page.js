'use client';

import { caseStudies } from '@/data/caseStudies';
import Container from '@/components/ui/Container';
import { motion } from 'framer-motion';
import Link from 'next/link';
import WorkHero from '@/components/Work/WorkHero';

export default function WorkPage() {
	return (
		<>
			{/* Hero Section */}
			<WorkHero />

			{/* Projects Grid */}
			<section data-theme='light' className='bg-white py-12 md:py-16 lg:py-20'>
				<Container size='wide'>
					<motion.div
						layout
						className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16'
					>
						{caseStudies.map((project, index) => (
							<motion.article
								key={project.id}
								layout
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -50 }}
								transition={{ duration: 0.4, delay: index * 0.08 }}
							>
								<Link href={`/work/${project.slug}`}>
									<div className='group cursor-pointer'>
										{/* Project Image */}
										<div className='relative overflow-hidden mb-6 rounded-lg aspect-4/3'>
											<img
												src={project.thumbnailImage}
												alt={`${project.title} - ${project.category.join(', ')} project by ProCraft`}
												className='w-full h-full object-cover'
											/>

											{/* Black Overlay on Hover */}
											<div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-opacity duration-300' />

											{/* Year Badge */}
											<div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm'>
												<span className='text-xs font-semibold text-gray-900'>
													{project.year}
												</span>
											</div>
										</div>

										{/* Project Info */}
										<div className='space-y-3'>
											{/* Category Tags */}
											<p className='text-[#10367D] text-xs md:text-sm uppercase tracking-wider font-semibold'>
												{project.category.join(' · ')}
											</p>

											{/* Title */}
											<h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-black group-hover:text-[#10367D] transition-colors duration-200'>
												{project.title}
											</h3>

											{/* CTA Link */}
											<div className='pt-1'>
												<span className='inline-flex items-center gap-2 text-[#10367D] text-sm md:text-base font-medium group-hover:gap-4 transition-all duration-300'>
													View Case Study
													<svg
														className='w-4 h-4'
														fill='none'
														stroke='currentColor'
														viewBox='0 0 24 24'
													>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth={2}
															d='M17 8l4 4m0 0l-4 4m4-4H3'
														/>
													</svg>
												</span>
											</div>
										</div>
									</div>
								</Link>
							</motion.article>
						))}
					</motion.div>
				</Container>
			</section>
		</>
	);
}
