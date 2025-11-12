'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { companyInfo } from '@/data/aboutData';

export default function MissionVision() {
	return (
		<section className='bg-white py-16 md:py-24 lg:py-32'>
			<Container size='narrow'>
				{/* Mission */}
				<motion.div
					initial={{ opacity: 0, y: 30, scale: 0.95 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					viewport={{ once: true, margin: '-100px' }}
					className='text-center mb-16 md:mb-20'
				>
					<div className='mb-4'>
						<span className='text-xs md:text-sm uppercase tracking-[0.2em] text-gray-400 font-light'>
							Our Mission
						</span>
					</div>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight font-blatant'>
						"{companyInfo.mission}"
					</h2>
				</motion.div>

				{/* Vision */}
				<motion.div
					initial={{ opacity: 0, y: 30, scale: 0.95 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
					viewport={{ once: true, margin: '-100px' }}
					className='text-center'
				>
					<div className='mb-4'>
						<span className='text-xs md:text-sm uppercase tracking-[0.2em] text-gray-400 font-light'>
							Our Vision
						</span>
					</div>
					<p className='text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed font-light max-w-3xl mx-auto'>
						{companyInfo.vision}
					</p>
				</motion.div>
			</Container>
		</section>
	);
}
