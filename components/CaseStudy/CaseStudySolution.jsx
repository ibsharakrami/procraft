'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

export default function CaseStudySolution({ project }) {
	return (
		<section data-theme='light' className='relative bg-gray-50 py-20 md:py-28 lg:py-36'>
			{/* Top Border Line */}
			<div className='absolute top-0 left-0 right-0 h-[1px] bg-gray-300' />

			<Container size='default'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className='text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 font-blatant lowercase'>
						our solution
					</h2>
					<div className='w-20 h-[2px] bg-primary-blue mb-16 md:mb-20' />

					<div className='space-y-8 md:space-y-10'>
						{project.solution.map((point, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.05 }}
								className='flex gap-6 items-start'
							>
								<span className='text-5xl md:text-6xl font-bold text-primary-blue/20 font-blatant flex-shrink-0 leading-none'>
									{(index + 1).toString().padStart(2, '0')}
								</span>
								<p className='text-lg md:text-xl leading-relaxed text-gray-700 font-urbanist pt-2'>
									{point}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</Container>
		</section>
	);
}
