'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { getRelatedCaseStudies } from '@/data/caseStudies';

export default function CaseStudyRelated({ currentSlug }) {
	const relatedProjects = getRelatedCaseStudies(currentSlug, 2);

	if (!relatedProjects || relatedProjects.length === 0) return null;

	return (
		<section data-theme='light' className='bg-[#F5F5F5] py-16 md:py-24 lg:py-32'>
			<Container size='wide'>
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='mb-12 md:mb-16 text-center'
				>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 font-blatant'>
						related projects
					</h2>
					<p className='text-base md:text-lg text-gray-600 font-urbanist'>
						Explore more of our work
					</p>
				</motion.div>

				{/* Related Project Cards */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
					{relatedProjects.map((project, index) => (
						<motion.article
							key={project.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
						>
							<Link href={`/work/${project.slug}`}>
								<div className='group cursor-pointer'>
									{/* Project Image */}
									<div className='relative overflow-hidden mb-6 aspect-4/3'>
										<img
											src={project.thumbnailImage}
											alt={`${project.title} - ${project.category.join(', ')} project by ProCraft`}
											className='w-full h-full object-cover'
										/>

										{/* Black Overlay on Hover */}
										<div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-opacity duration-300' />

										{/* Year Badge */}
										<div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1'>
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
				</div>
			</Container>
		</section>
	);
}
