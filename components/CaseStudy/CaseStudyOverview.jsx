'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

export default function CaseStudyOverview({ project }) {
	return (
		<section
			data-theme='light'
			className='relative bg-gray-50 py-20 md:py-28 lg:py-36'
		>
			{/* Top Border Line */}
			<div className='absolute top-0 left-0 right-0 h-[1px] bg-gray-300' />

			<Container size='default'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20'>
					{/* Main Content */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='lg:col-span-2'
					>
						<h2 className='text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-12 md:mb-16 font-blatant lowercase'>
							overview
						</h2>
						<p className='text-lg md:text-xl leading-relaxed text-gray-700 mb-16 md:mb-20 font-urbanist'>
							{project.description}
						</p>

						<h3 className='text-3xl md:text-4xl font-bold text-black mb-8 font-blatant lowercase'>
							the challenge
						</h3>
						<p className='text-lg md:text-xl leading-relaxed text-gray-700 font-urbanist'>
							{project.challenge}
						</p>
					</motion.div>

					{/* Metadata Sidebar */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='space-y-10'
					>
						{/* Client */}
						<div>
							<h4 className='text-xs uppercase tracking-widest text-gray-400 mb-2 font-urbanist'>
								Client
							</h4>
							<p className='text-2xl font-bold text-black font-blatant'>
								{project.client}
							</p>
						</div>

						{/* Year */}
						<div>
							<h4 className='text-xs uppercase tracking-widest text-gray-400 mb-2 font-urbanist'>
								Year
							</h4>
							<p className='text-2xl font-bold text-black font-blatant'>
								{project.year}
							</p>
						</div>

						{/* Technologies */}
						{project.technologies && project.technologies.length > 0 && (
							<div>
								<h4 className='text-xs uppercase tracking-widest text-gray-400 mb-4 font-urbanist'>
									Technologies
								</h4>
								<div className='flex flex-wrap gap-2'>
									{project.technologies.map((tech, i) => (
										<span
											key={i}
											className='text-sm text-gray-900 font-medium font-urbanist'
										>
											{tech}
											{i < project.technologies.length - 1 && ','}
										</span>
									))}
								</div>
							</div>
						)}
					</motion.div>
				</div>
			</Container>
		</section>
	);
}
