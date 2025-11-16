'use client';

import { motion } from 'framer-motion';
import { Shield, Lightbulb, Users, TrendingUp } from 'lucide-react';
import Container from '@/components/ui/Container';
import { coreValues } from '@/data/aboutData';
import { useState } from 'react';

const iconMap = {
	Shield: Shield,
	Lightbulb: Lightbulb,
	Users: Users,
	TrendingUp: TrendingUp,
};

// Separate FlipCard component to properly use hooks
function FlipCard({ value, index }) {
	const [isFlipped, setIsFlipped] = useState(false);
	const IconComponent = iconMap[value.icon];

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			viewport={{ once: true }}
			className='relative h-[320px] w-full block'
			style={{ perspective: '1000px' }}
		>
			{/* Flip Container */}
			<motion.div
				className='relative w-full h-full block'
				style={{ 
					transformStyle: 'preserve-3d',
					width: '100%',
					display: 'block'
				}}
				animate={{ rotateY: isFlipped ? 180 : 0 }}
				transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
				onClick={() => setIsFlipped(!isFlipped)}
			>
				{/* Front of Card */}
				<div
					className='absolute w-full h-full backface-hidden'
					style={{ backfaceVisibility: 'hidden' }}
				>
					<div className='w-full h-full bg-gradient-to-br from-[#10367D] to-[#0a2454] rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 cursor-pointer relative overflow-hidden'>
						{/* Decorative Elements */}
						<div className='absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16' />
						<div className='absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12' />
						
						{/* Icon */}
						<motion.div
							whileHover={{ scale: 1.1, rotate: 5 }}
							className='mb-6 relative z-10'
						>
							<div className='w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/20'>
								<IconComponent
									size={48}
									className='text-white'
									strokeWidth={1.5}
								/>
							</div>
						</motion.div>

						{/* Title */}
						<h3 className='text-3xl font-bold text-white mb-4 text-center font-blatant relative z-10'>
							{value.title}
						</h3>

						{/* Tap Indicator */}
						<motion.div
							animate={{ scale: [1, 1.1, 1] }}
							transition={{ duration: 2, repeat: Infinity }}
							className='flex items-center gap-2 text-white/80 text-sm font-medium relative z-10'
						>
							<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122' />
							</svg>
							Tap to Learn More
						</motion.div>

						{/* Number Badge */}
						<div className='absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20'>
							<span className='text-lg font-bold text-white font-blatant'>
								{String(value.id).padStart(2, '0')}
							</span>
						</div>
					</div>
				</div>

				{/* Back of Card */}
				<div
					className='absolute w-full h-full backface-hidden'
					style={{ 
						backfaceVisibility: 'hidden',
						transform: 'rotateY(180deg)'
					}}
				>
					<div className='w-full h-full bg-white rounded-2xl shadow-xl p-8 cursor-pointer relative overflow-hidden border-2 border-[#10367D]/20'>
						{/* Decorative Corner Accent */}
						<div className='absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#10367D] to-transparent opacity-10 rounded-br-full' />
						<div className='absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#74B4D9] to-transparent opacity-10 rounded-tl-full' />
						
						{/* Number Badge */}
						<div className='flex items-center justify-between mb-6'>
							<div className='w-14 h-14 rounded-2xl bg-gradient-to-br from-[#10367D] to-[#0a2454] flex items-center justify-center shadow-md'>
								<span className='text-xl font-bold text-white font-blatant'>
									{String(value.id).padStart(2, '0')}
								</span>
							</div>
							
							{/* Small Icon */}
							<div className='w-12 h-12 rounded-full bg-[#74B4D9]/10 flex items-center justify-center'>
								<IconComponent
									size={24}
									className='text-[#10367D]'
									strokeWidth={2}
								/>
							</div>
						</div>

						{/* Title */}
						<h3 className='text-2xl font-bold text-black mb-4 font-blatant'>
							{value.title}
						</h3>

						{/* Description */}
						<p className='text-base text-gray-600 leading-relaxed mb-6'>
							{value.description}
						</p>

						{/* Tap to Flip Back */}
						<motion.div
							animate={{ opacity: [0.5, 1, 0.5] }}
							transition={{ duration: 2, repeat: Infinity }}
							className='flex items-center gap-2 text-[#10367D] text-sm font-medium'
						>
							<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
							</svg>
							Tap to Flip Back
						</motion.div>

						{/* Bottom Accent Line */}
						<div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#10367D] via-[#74B4D9] to-transparent' />
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}


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
		<section data-theme="light" className='bg-gray-50 py-16 md:py-24 lg:py-32'>
			<Container>
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, margin: '-100px' }}
					className='text-center mb-16 md:mb-20 lg:mb-24'
				>
					<span className='inline-block text-xs md:text-sm uppercase tracking-wider text-[#74B4D9] font-light mb-4 border-l-4 border-[#74B4D9] pl-4'>
						Core Values
					</span>
					<h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black font-blatant'>
						What <span className='text-[#10367D]'>Drives</span> Us
					</h2>
				</motion.div>

			{/* Mobile Layout: Flip Cards (< 768px) */}
			<div className='md:hidden space-y-6'>
				{coreValues.map((value, index) => (
					<FlipCard key={value.id} value={value} index={index} />
				))}
			</div>				{/* Tablet Layout: 2-Column Grid (768px - 1023px) */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, margin: '-100px' }}
					className='hidden md:grid lg:hidden grid-cols-2 gap-6 md:gap-8'
				>
					{coreValues.map((value) => {
						const IconComponent = iconMap[value.icon];

						return (
							<motion.div
								key={value.id}
								variants={itemVariants}
								whileHover={{ y: -4, scale: 1.02 }}
								className='group bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden'
							>
								{/* Background Gradient Accent */}
								<div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#10367D]/10 to-transparent rounded-bl-full' />
								
								{/* Number Badge */}
								<div className='absolute top-4 right-4 w-10 h-10 rounded-full bg-[#10367D]/10 flex items-center justify-center'>
									<span className='text-sm font-bold text-[#10367D] font-blatant'>
										{String(value.id).padStart(2, '0')}
									</span>
								</div>

								{/* Icon */}
								<motion.div
									whileHover={{ rotate: 10, scale: 1.1 }}
									transition={{ duration: 0.3 }}
									className='mb-5'
								>
									<IconComponent
										size={48}
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
						);
					})}
				</motion.div>

				{/* Desktop Layout: Timeline */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, margin: '-100px' }}
					className='hidden lg:block relative'
				>
					{/* Vertical Timeline Line - Desktop only */}
					<div className='absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#10367D]/30 -translate-x-1/2' />

					{/* Values Timeline Items */}
					<div className='space-y-0'>
						{coreValues.map((value, index) => {
							const IconComponent = iconMap[value.icon];
							const isEven = index % 2 === 1;

							return (
								<motion.div
									key={value.id}
									variants={itemVariants}
									className='relative'
								>
									{/* Desktop Timeline Layout */}
									<div className='grid grid-cols-2 gap-12 items-center'>
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
