'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

export default function CaseStudyBrief({ briefText, client, duration, role }) {
	return (
		<section data-theme='light' className='bg-white py-16 md:py-24 lg:py-32'>
			<Container size='default'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16'>
					{/* Left Column - Heading */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='lg:col-span-4'
					>
						<h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 font-blatant'>
							the brief
						</h2>

						{/* Project Metadata */}
						<div className='space-y-4 text-sm md:text-base'>
							{client && (
								<div>
									<p className='text-gray-400 uppercase tracking-wider text-xs mb-1'>
										Client
									</p>
									<p className='text-gray-900 font-semibold'>{client}</p>
								</div>
							)}

							{duration && (
								<div>
									<p className='text-gray-400 uppercase tracking-wider text-xs mb-1'>
										Duration
									</p>
									<p className='text-gray-900 font-semibold'>{duration}</p>
								</div>
							)}

							{role && (
								<div>
									<p className='text-gray-400 uppercase tracking-wider text-xs mb-1'>
										Our Role
									</p>
									<p className='text-gray-900 font-semibold'>{role}</p>
								</div>
							)}
						</div>
					</motion.div>

					{/* Right Column - Content */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='lg:col-span-8'
					>
						<div className='prose prose-lg max-w-none'>
							<p className='text-base md:text-lg leading-relaxed text-gray-700 font-urbanist'>
								{briefText}
							</p>
						</div>
					</motion.div>
				</div>
			</Container>
		</section>
	);
}
