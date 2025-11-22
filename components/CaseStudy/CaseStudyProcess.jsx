'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Image from 'next/image';

export default function CaseStudyProcess({ processSteps }) {
	if (!processSteps || processSteps.length === 0) return null;

	return (
		<section data-theme='light' className='relative bg-white py-20 md:py-28 lg:py-36'>
			{/* Top Border Line */}
			<div className='absolute top-0 left-0 right-0 h-[1px] bg-gray-200' />

			<Container size='default'>
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='mb-16 md:mb-24 lg:mb-32'
				>
					<h2 className='text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 font-blatant lowercase'>
						the process
					</h2>
					<div className='w-20 h-[2px] bg-primary-blue mb-6' />
					<p className='text-lg md:text-xl text-gray-600 max-w-3xl font-urbanist'>
						Our step-by-step approach to bringing this project to life
					</p>
				</motion.div>

				{/* Process Steps */}
				<div className='space-y-24 md:space-y-32 lg:space-y-40'>
					{processSteps.map((step, index) => {
						const isEven = index % 2 === 0;

						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
									isEven ? '' : 'lg:grid-flow-dense'
								}`}
							>
								{/* Image */}
								<div
									className={`relative overflow-hidden group ${
										isEven ? 'lg:col-start-1' : 'lg:col-start-2'
									}`}
								>
									<div className='relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden'>
										<Image
											src={step.image}
											alt={step.title}
											fill
											className='object-cover transition-all duration-[0.3s] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.05] group-hover:rotate-1'
										/>
									</div>
								</div>

								{/* Content */}
								<div
									className={`space-y-6 ${
										isEven ? 'lg:col-start-2' : 'lg:col-start-1'
									}`}
								>
									{/* Step Number */}
									<div className='space-y-4'>
										<span className='text-sm font-bold uppercase tracking-widest text-primary-blue font-urbanist'>
											Step {index + 1} of {processSteps.length}
										</span>
										<div className='w-12 h-[2px] bg-primary-blue' />
									</div>

									{/* Title */}
									<h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-black font-blatant'>
										{step.title}
									</h3>

									{/* Description */}
									<p className='text-lg md:text-xl leading-relaxed text-gray-700 font-urbanist'>
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
