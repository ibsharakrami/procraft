'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Image from 'next/image';
import { getRelatedCaseStudies } from '@/data/caseStudies';

export default function CaseStudyRelated({ currentSlug }) {
	const relatedProjects = getRelatedCaseStudies(currentSlug, 2);

	if (!relatedProjects || relatedProjects.length === 0) return null;

	return (
		<section data-theme='light' className='relative bg-white py-20 md:py-28 lg:py-36'>
			{/* Top Border Line - Dashed */}
			<div className='absolute top-0 left-0 right-0 md:left-[100px] md:right-[110px] h-[1px] border-t border-dashed border-gray-300' />

			{/* Bottom Border Line - Dashed */}
			<div className='absolute bottom-0 left-0 right-0 md:left-[100px] md:right-[110px] h-[1px] border-b border-dashed border-gray-300' />

			<Container size='default'>
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='mb-16 md:mb-24'
				>
					<h2 className='text-5xl md:text-6xl lg:text-7xl font-bold text-black font-blatant lowercase'>
						more projects
					</h2>
					<div className='w-20 h-[2px] bg-primary-blue mt-6' />
				</motion.div>

				{/* Related Project Cards */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16'>
					{relatedProjects.map((project, index) => (
						<motion.article
							key={project.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
						>
							<Link href={`/work/${project.slug}`} className='group block'>
								{/* Project Image */}
								<div className='relative overflow-hidden mb-6 h-[400px] md:h-[500px]'>
									<Image
										src={project.thumbnailImage}
										alt={`${project.title} - ${project.category.join(', ')} project by ProCraft`}
										fill
										className='object-cover transition-all duration-[0.3s] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.05] group-hover:rotate-1'
									/>
								</div>

								{/* Project Info */}
								<div className='space-y-3'>
									{/* Category Tags */}
									<p className='text-sm uppercase tracking-widest text-gray-400 font-urbanist'>
										{project.category.join(' / ')}
									</p>

									{/* Title */}
									<h3 className='text-3xl md:text-4xl font-bold text-black font-blatant'>
										{project.title}
									</h3>

									{/* Tagline */}
									<p className='text-lg text-gray-600 font-urbanist'>
										{project.tagline}
									</p>
								</div>
							</Link>
						</motion.article>
					))}
				</div>
			</Container>
		</section>
	);
}
