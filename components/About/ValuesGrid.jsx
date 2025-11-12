'use client';

import { motion } from 'framer-motion';
import { Shield, Lightbulb, Users, TrendingUp } from 'lucide-react';
import Container from '@/components/ui/Container';
import { coreValues } from '@/data/aboutData';

const iconMap = {
	Shield: Shield,
	Lightbulb: Lightbulb,
	Users: Users,
	TrendingUp: TrendingUp,
};

export default function ValuesGrid() {
	const containerVariants = {
		hidden: { opacity: 1 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 30 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: 'easeOut',
			},
		},
	};

	return (
		<section className='bg-white py-16 md:py-24 lg:py-32'>
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, margin: '-100px' }}
					className='text-center mb-12 md:mb-16'
				>
					<span className='text-xs md:text-sm uppercase tracking-wider text-gray-400 font-light mb-4 block'>
						Core Values
					</span>
					<h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black font-blatant'>
						What Drives Us
					</h2>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, margin: '-100px' }}
					className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'
				>
					{coreValues.map((value, index) => {
						const IconComponent = iconMap[value.icon];

						return (
							<motion.div
								key={value.id}
								variants={cardVariants}
								whileHover={{
									scale: 1.02,
								}}
								transition={{ duration: 0.3 }}
								className='group relative bg-white rounded-sm p-8 md:p-10 hover:shadow-xl transition-all duration-300'
							>
								{/* Icon */}
								<motion.div
									whileHover={{ rotate: 5, color: '#74B4D9' }}
									transition={{ duration: 0.3 }}
									className='mb-6'
								>
									<IconComponent
										size={48}
										className='text-[#10367D] transition-colors'
										strokeWidth={1.5}
									/>
								</motion.div>

								{/* Title */}
								<h3 className='text-2xl md:text-3xl font-bold text-black mb-3 font-blatant'>
									{value.title}
								</h3>

								{/* Description */}
								<p className='text-base md:text-lg text-gray-600 leading-relaxed'>
									{value.description}
								</p>
							</motion.div>
						);
					})}
				</motion.div>
			</Container>
		</section>
	);
}
