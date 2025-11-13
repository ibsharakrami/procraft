'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

export default function CaseStudyProcess({ processSteps }) {
	if (!processSteps || processSteps.length === 0) return null;

	return (
		<section data-theme='light' className='bg-[#F5F5F5] py-16 md:py-24 lg:py-32'>
			<Container size='wide'>
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='mb-12 md:mb-16 lg:mb-20 text-center'
				>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 font-blatant'>
						the process
					</h2>
					<p className='text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-urbanist'>
						Our step-by-step approach to bringing this project to life
					</p>
				</motion.div>

				{/* Process Steps */}
				<div className='space-y-16 md:space-y-24 lg:space-y-32'>
					{processSteps.map((step, index) => {
						const isEven = index % 2 === 0;

						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-100px' }}
								transition={{ duration: 0.7, delay: index * 0.1 }}
								className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
									isEven ? '' : 'lg:grid-flow-dense'
								}`}
							>
								{/* Image */}
								<div
									className={`relative overflow-hidden ${
										isEven ? 'lg:col-start-1' : 'lg:col-start-2'
									}`}
								>
									<img
										src={step.image}
										alt={step.title}
										className='w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover'
									/>
								</div>

								{/* Content */}
								<div
									className={`space-y-4 ${
										isEven ? 'lg:col-start-2' : 'lg:col-start-1'
									}`}
								>
									{/* Step Number */}
									<div className='inline-block'>
										<span className='text-[#10367D] text-sm md:text-base font-bold uppercase tracking-wider bg-white px-4 py-2'>
											Step {index + 1}
										</span>
									</div>

									{/* Title */}
									<h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-black font-blatant'>
										{step.title}
									</h3>

									{/* Description */}
									<p className='text-base md:text-lg leading-relaxed text-gray-700 font-urbanist'>
										{step.description}
									</p>
								</div>
							</motion.div>
						);
					})}
				</div>
			</Container>
		</section>
	);
}
