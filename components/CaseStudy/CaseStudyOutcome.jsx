'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

export default function CaseStudyOutcome({ outcomes }) {
	if (!outcomes || outcomes.length === 0) return null;

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
						the outcome
					</h2>
					<div className='w-20 h-[2px] bg-primary-blue mt-6' />
				</motion.div>

				{/* Outcomes Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20'>
					{outcomes.map((outcome, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className='space-y-4'
						>
							<h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-black font-blatant'>
								{outcome.title}
							</h3>
							<p className='text-lg md:text-xl leading-relaxed text-gray-700 font-urbanist'>
								{outcome.description}
							</p>
						</motion.div>
					))}
				</div>
			</Container>
		</section>
	);
}
