'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

export default function CaseStudyBeforeAfter({ beforeAfter }) {
	if (!beforeAfter) return null;

	const { before, after, description } = beforeAfter;

	return (
		<section data-theme='light' className='bg-white py-16 md:py-24 lg:py-32'>
			<Container size='wide'>
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='mb-12 md:mb-16 text-center'
				>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 font-blatant'>
						the transformation
					</h2>
					<p className='text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-urbanist'>
						{description}
					</p>
				</motion.div>

				{/* Before/After Images */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12'>
					{/* Before */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className='relative group'
					>
						<div className='relative overflow-hidden rounded-lg shadow-lg'>
							<img
								src={before}
								alt='Before'
								className='w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover'
							/>

							{/* Overlay Label */}
							<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 md:p-8'>
								<div>
									<span className='inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm md:text-base font-semibold mb-2 font-urbanist'>
										Before
									</span>
									<p className='text-white text-lg md:text-xl font-semibold font-blatant'>
										Previous Version
									</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* After */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className='relative group'
					>
						<div className='relative overflow-hidden rounded-lg shadow-lg'>
							<img
								src={after}
								alt='After'
								className='w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover'
							/>

							{/* Overlay Label */}
							<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 md:p-8'>
								<div>
									<span className='inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm md:text-base font-semibold mb-2 font-urbanist'>
										After
									</span>
									<p className='text-white text-lg md:text-xl font-semibold font-blatant'>
										ProCraft Solution
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</Container>
		</section>
	);
}
