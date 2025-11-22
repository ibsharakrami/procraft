'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

export default function CaseStudySolution({ project }) {
	return (
		<section data-theme='light' className='relative bg-white py-16 md:py-24 lg:py-32'>
			{/* Top Border Line - Dashed */}
			<div className='absolute top-0 left-0 right-0 h-[1px] border-t border-dashed border-gray-300' />

			{/* Bottom Border Line - Dashed */}
			<div className='absolute bottom-0 left-0 right-0 h-[1px] border-b border-dashed border-gray-300' />

			<Container size='default'>
				{/* Two Column Layout - inspired by edirect.ae */}
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20'>
					{/* Left Column - Heading (25% width) */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='lg:col-span-3'
					>
						<h2 className='text-4xl md:text-5xl lg:text-6xl font-normal text-black font-urbanist lowercase sticky top-32'>
							our solution
						</h2>
					</motion.div>

					{/* Right Column - Solution Points (75% width) */}
					<div className='lg:col-span-9 space-y-12 md:space-y-16 lg:space-y-20'>
						{project.solution.map((point, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-100px' }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className='group'
							>
								{/* Solution Item */}
								<div className='flex gap-4 md:gap-6 items-baseline'>
									{/* Number - Minimalist style */}
									<div className='flex-shrink-0'>
										<span className='inline-block text-5xl md:text-6xl lg:text-7xl font-light text-gray-200 font-urbanist leading-none transition-colors duration-500 group-hover:text-primary-blue/20 translate-y-[0.15em]'>
											{(index + 1).toString().padStart(2, '0')}
										</span>
									</div>

									{/* Content */}
									<div className='flex-1'>
										{/* Solution text - Clean, readable typography */}
										<p className='text-xl md:text-2xl lg:text-3xl leading-tight text-gray-800 font-urbanist font-light tracking-tight'>
											{point}
										</p>

										{/* Subtle underline accent - appears on hover */}
										<motion.div
											className='w-16 h-[2px] bg-primary-blue mt-6 origin-left'
											initial={{ scaleX: 0 }}
											whileInView={{ scaleX: 1 }}
											viewport={{ once: true }}
											transition={{ duration: 0.8, delay: 0.3 }}
										/>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}
