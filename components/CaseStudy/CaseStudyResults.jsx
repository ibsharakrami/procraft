'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

export default function CaseStudyResults({ project }) {
	// Convert results object to array of metrics
	const metrics = Object.entries(project.results).map(([key, value]) => ({
		label: key
			.replace(/([A-Z])/g, ' $1')
			.trim()
			.replace(/^./, (str) => str.toUpperCase()),
		value: value,
	}));

	return (
		<section data-theme='dark' className='relative bg-black py-20 md:py-28 lg:py-36'>
			{/* Top Border Line */}
			<div className='absolute top-0 left-0 right-0 h-[1px] bg-gray-800' />

			<Container size='default'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center mb-16 md:mb-24'
				>
					<h2 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white font-blatant lowercase'>
						results
					</h2>
					<div className='w-20 h-[2px] bg-primary-blue mt-6 mx-auto' />
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16'>
					{metrics.map((metric, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className='text-center space-y-4'
						>
							<div className='text-5xl md:text-6xl lg:text-7xl font-bold text-primary-blue font-blatant'>
								{metric.value}
							</div>
							<div className='text-white/60 text-xs uppercase tracking-widest font-urbanist'>
								{metric.label}
							</div>
						</motion.div>
					))}
				</div>
			</Container>
		</section>
	);
}
