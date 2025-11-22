'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

export default function CaseStudyOverview({ project }) {
	return (
		<section
			data-theme='light'
			className='relative bg-white py-16 md:py-24 lg:py-32'
		>
			{/* Top Border Line - Dashed */}
			<div className='absolute top-0 left-0 right-0 h-[1px] border-t border-dashed border-gray-300' />

			<Container size='default'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20'>
					{/* Main Content */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='lg:col-span-2'
					>
						<h2 className='text-4xl md:text-5xl lg:text-6xl font-normal text-black mb-8 md:mb-10 font-urbanist lowercase'>
							overview
						</h2>
						<div className='text-base md:text-lg leading-relaxed text-gray-700 mb-12 md:mb-16 font-urbanist space-y-4'>
							{project.description.split('\n\n').map((paragraph, index) => (
								<p key={index}>{paragraph}</p>
							))}
						</div>

						<h3 className='text-2xl md:text-3xl font-normal text-black mb-6 md:mb-8 font-urbanist lowercase'>
							the challenge
						</h3>
						<div className='text-base md:text-lg leading-relaxed text-gray-700 font-urbanist space-y-4'>
							{project.challenge.split('\n\n').map((paragraph, index) => (
								<p key={index}>{paragraph}</p>
							))}
						</div>
					</motion.div>

					{/* Metadata Sidebar */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='space-y-12 md:space-y-16'
					>
						{/* Client */}
						<div>
							<h4 className='text-sm md:text-base uppercase tracking-wider text-gray-500 mb-3 font-urbanist'>
								Client
							</h4>
							<p className='text-xl md:text-2xl font-semibold text-black font-urbanist'>
								{project.client}
							</p>
						</div>

						{/* Year */}
						<div>
							<h4 className='text-sm md:text-base uppercase tracking-wider text-gray-500 mb-3 font-urbanist'>
								Year
							</h4>
							<p className='text-xl md:text-2xl font-semibold text-black font-urbanist'>
								{project.year}
							</p>
						</div>

						{/* Technologies */}
						{project.technologies && project.technologies.length > 0 && (
							<div>
								<h4 className='text-sm md:text-base uppercase tracking-wider text-gray-500 mb-4 font-urbanist'>
									Technologies
								</h4>
								<div className='flex flex-wrap gap-2'>
									{project.technologies.map((tech, i) => (
										<span
											key={i}
											className='text-base md:text-lg text-gray-900 font-normal font-urbanist'
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

			{/* Bottom Border Line - Dashed */}
			<div className='absolute bottom-0 left-0 right-0 h-[1px] border-b border-dashed border-gray-300' />
		</section>
	);
}
