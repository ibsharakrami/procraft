'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { philosophyChapters } from '@/data/aboutData';

export default function OurPhilosophy() {
	const containerVariants = {
		hidden: { opacity: 1 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	};

	const chapterVariants = {
		hidden: { opacity: 0, y: 50 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: 'easeOut',
			},
		},
	};

	return (
		<section data-theme="light" className='bg-white py-16 md:py-24 lg:py-32'>
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, margin: '0px' }}
					className='text-center mb-16 md:mb-20'
				>
					<span className='inline-block text-xs md:text-sm uppercase tracking-[0.2em] text-[#74B4D9] font-light mb-4 border-l-4 border-[#74B4D9] pl-4'>
						Our Journey
					</span>
					<h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black font-blatant'>
						Our Story in <span className='text-[#10367D]'>5 Chapters</span>
					</h2>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, margin: '0px', amount: 0 }}
					className='space-y-16 md:space-y-24 lg:space-y-32'
				>
					{philosophyChapters.map((chapter, index) => {
						const isEven = index % 2 === 0;

						return (
							<motion.div
								key={chapter.id}
								variants={chapterVariants}
								className='relative'
							>
								<div
									className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
										isEven ? '' : 'lg:flex-row-reverse'
									}`}
								>
									{/* Image Column */}
									<div
										className={`relative ${
											isEven ? 'lg:order-1' : 'lg:order-2'
										}`}
									>
										<div className='relative aspect-[4/3] rounded-sm overflow-hidden shadow-sm group'>
											<Image
												src={chapter.image}
												alt={`${chapter.title} - ${chapter.chapter} of ProCraft's journey | Dubai digital agency story`}
												fill
												className='object-cover group-hover:scale-105 transition-transform duration-700'
												sizes='(max-width: 1024px) 100vw, 50vw'
											/>
											{/* Color Overlay */}
											<div
												className='absolute inset-0 opacity-10'
												style={{ backgroundColor: chapter.color }}
											></div>
										</div>
									</div>

									{/* Content Column */}
									<div
										className={`${isEven ? 'lg:order-2' : 'lg:order-1'} ${
											isEven ? 'lg:pl-8' : 'lg:pr-8'
										}`}
									>
										{/* Chapter Label & Year */}
										<div className='flex items-center gap-4 mb-4'>
											<span
												className='text-sm md:text-base uppercase tracking-[0.2em] font-light'
												style={{ color: chapter.color }}
											>
												{chapter.chapter}
											</span>
											<span className='text-4xl md:text-5xl font-bold text-gray-200'>
												{chapter.year}
											</span>
										</div>

										{/* Title */}
										<h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 font-blatant'>
											{chapter.title}
										</h3>

										{/* Story */}
										<p className='text-base md:text-lg text-gray-600 leading-relaxed'>
											{chapter.story}
										</p>

										{/* Decorative Line Accent */}
										<div className='mt-8 flex items-center gap-4'>
											<div
												className='h-1 w-16 md:w-20'
												style={{ backgroundColor: chapter.color }}
											></div>
											<span className='text-xs uppercase tracking-wider text-gray-400'>
												{index + 1} / {philosophyChapters.length}
											</span>
										</div>
									</div>
								</div>
							</motion.div>
						);
					})}
				</motion.div>

				{/* Closing Statement */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true, margin: '0px' }}
					className='text-center mt-20 md:mt-24 lg:mt-32'
				>
					<p className='text-xl md:text-2xl lg:text-3xl text-gray-700 font-light max-w-3xl mx-auto'>
						Every chapter has shaped who we are today.{' '}
						<span className='text-[#10367D] font-normal'>
							Let's write the next one together.
						</span>
					</p>
				</motion.div>
			</Container>
		</section>
	);
}
