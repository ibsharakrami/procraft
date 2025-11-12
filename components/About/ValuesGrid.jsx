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
				staggerChildren: 0.25,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 40 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.7,
				ease: 'easeOut',
			},
		},
	};

	return (
		<section className='bg-gray-50 py-16 md:py-24 lg:py-32'>
			<Container>
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, margin: '-100px' }}
					className='text-center mb-16 md:mb-20 lg:mb-24'
				>
					<span className='text-xs md:text-sm uppercase tracking-wider text-gray-400 font-light mb-4 block'>
						Core Values
					</span>
					<h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black font-blatant'>
						What Drives Us
					</h2>
				</motion.div>

				{/* Timeline Container */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, margin: '-100px' }}
					className='relative max-w-5xl mx-auto'
				>
					{/* Vertical Timeline Line - Hidden on mobile, centered on desktop */}
					<div className='hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#10367D]/30 -translate-x-1/2' />

					{/* Mobile Timeline Line - Left aligned */}
					<div className='lg:hidden absolute left-[30px] md:left-[40px] top-0 bottom-0 w-[2px] bg-[#10367D]/30' />

					{/* Values Timeline Items */}
					<div className='space-y-16 md:space-y-20 lg:space-y-24'>
						{coreValues.map((value, index) => {
							const IconComponent = iconMap[value.icon];
							const isEven = index % 2 === 1;

							return (
								<motion.div
									key={value.id}
									variants={itemVariants}
									className='relative'
								>
									{/* Desktop Layout: Alternating Left/Right */}
									<div className='hidden lg:grid lg:grid-cols-2 lg:gap-12 items-center'>
										{/* Left Side Card (Odd Numbers: 1, 3) */}
										{!isEven && (
											<motion.div
												whileHover={{ y: -6, transition: { duration: 0.3 } }}
												className='group bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100'
											>
												<div className='flex items-start gap-6'>
													{/* Icon */}
													<motion.div
														whileHover={{ rotate: 10, scale: 1.1 }}
														transition={{ duration: 0.3 }}
													>
														<IconComponent
															size={48}
															className='text-[#10367D] group-hover:text-[#74B4D9] transition-colors'
															strokeWidth={1.5}
														/>
													</motion.div>

													{/* Content */}
													<div className='flex-1'>
														<h3 className='text-2xl md:text-3xl font-bold text-black mb-3 font-blatant'>
															{value.title}
														</h3>
														<p className='text-base text-gray-600 leading-relaxed font-light'>
															{value.description}
														</p>
													</div>
												</div>
											</motion.div>
										)}

										{/* Spacer for even numbers */}
										{isEven && <div></div>}

										{/* Numbered Circle - Always in center column */}
										<div className='absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-10'>
											<motion.div
												whileHover={{ scale: 1.15 }}
												transition={{ type: 'spring', stiffness: 300 }}
												className='relative'
											>
												{/* Horizontal Connector Line to Card */}
												<div
													className={`absolute top-1/2 -translate-y-1/2 w-12 h-[2px] bg-[#10367D]/50 ${
														isEven ? 'left-full' : 'right-full'
													}`}
												/>

												{/* Circle */}
												<div className='w-20 h-20 rounded-full bg-white border-[3px] border-[#10367D] flex items-center justify-center shadow-lg'>
													<span className='text-2xl font-bold text-[#10367D] font-blatant'>
														{String(value.id).padStart(2, '0')}
													</span>
												</div>
											</motion.div>
										</div>

										{/* Right Side Card (Even Numbers: 2, 4) */}
										{isEven && (
											<motion.div
												whileHover={{ y: -6, transition: { duration: 0.3 } }}
												className='group bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100'
											>
												<div className='flex items-start gap-6'>
													{/* Icon */}
													<motion.div
														whileHover={{ rotate: 10, scale: 1.1 }}
														transition={{ duration: 0.3 }}
													>
														<IconComponent
															size={48}
															className='text-[#10367D] group-hover:text-[#74B4D9] transition-colors'
															strokeWidth={1.5}
														/>
													</motion.div>

													{/* Content */}
													<div className='flex-1'>
														<h3 className='text-2xl md:text-3xl font-bold text-black mb-3 font-blatant'>
															{value.title}
														</h3>
														<p className='text-base text-gray-600 leading-relaxed font-light'>
															{value.description}
														</p>
													</div>
												</div>
											</motion.div>
										)}
									</div>

									{/* Mobile/Tablet Layout: Stacked with left timeline */}
									<div className='lg:hidden flex items-start gap-6 md:gap-8'>
										{/* Numbered Circle on Timeline */}
										<div className='flex-shrink-0'>
											<motion.div
												whileHover={{ scale: 1.1 }}
												transition={{ type: 'spring', stiffness: 300 }}
												className='relative'
											>
												{/* Horizontal Connector Line */}
												<div className='absolute left-full top-1/2 -translate-y-1/2 w-6 md:w-8 h-[2px] bg-[#10367D]/50' />

												{/* Circle */}
												<div className='w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full bg-white border-[3px] border-[#10367D] flex items-center justify-center shadow-lg'>
													<span className='text-lg md:text-xl font-bold text-[#10367D] font-blatant'>
														{String(value.id).padStart(2, '0')}
													</span>
												</div>
											</motion.div>
										</div>

										{/* Card Content */}
										<motion.div
											whileHover={{ y: -4, transition: { duration: 0.3 } }}
											className='group flex-1 bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100'
										>
											{/* Icon */}
											<motion.div
												whileHover={{ rotate: 10, scale: 1.1 }}
												transition={{ duration: 0.3 }}
												className='mb-4'
											>
												<IconComponent
													size={44}
													className='text-[#10367D] group-hover:text-[#74B4D9] transition-colors'
													strokeWidth={1.5}
												/>
											</motion.div>

											{/* Content */}
											<h3 className='text-xl md:text-2xl font-bold text-black mb-3 font-blatant'>
												{value.title}
											</h3>
											<p className='text-sm md:text-base text-gray-600 leading-relaxed font-light'>
												{value.description}
											</p>
										</motion.div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</motion.div>
			</Container>
		</section>
	);
}
