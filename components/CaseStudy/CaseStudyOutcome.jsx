'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

export default function CaseStudyOutcome({ outcomes }) {
	if (!outcomes || outcomes.length === 0) return null;

	return (
		<section data-theme='light' className='bg-white py-16 md:py-24 lg:py-32'>
			<Container size='default'>
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='mb-12 md:mb-16'
				>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 font-blatant'>
						the outcome
					</h2>
				</motion.div>

				{/* Outcomes List */}
				<div className='space-y-12 md:space-y-16'>
					{outcomes.map((outcome, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className='border-l-4 border-[#10367D] pl-6 md:pl-8'
						>
							<h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-black mb-4 font-blatant'>
								{outcome.title}
							</h3>
							<p className='text-base md:text-lg leading-relaxed text-gray-700 font-urbanist'>
								{outcome.description}
							</p>
						</motion.div>
					))}
				</div>
			</Container>
		</section>
	);
}
