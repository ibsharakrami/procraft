'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

export default function CaseStudyGallery({ galleryImages }) {
	if (!galleryImages || galleryImages.length === 0) return null;

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
						project showcase
					</h2>
					<p className='text-base md:text-lg text-gray-600 font-urbanist'>
						A visual journey through the design and development
					</p>
				</motion.div>

				{/* Gallery Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
					{galleryImages.map((image, index) => {
						// Create varied layouts: first 2 are large, rest alternate
						const isLarge = index < 2;
						const gridClass = isLarge ? 'md:col-span-1' : 'md:col-span-1';

						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-50px' }}
								transition={{ duration: 0.6, delay: index * 0.05 }}
								className={gridClass}
							>
								{/* Image Container */}
								<div className='group relative overflow-hidden'>
									<div className='relative aspect-video'>
										<img
											src={image.url}
											alt={image.caption}
											className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
										/>

										{/* Hover Overlay */}
										<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
									</div>

									{/* Caption - Shows on hover */}
									<div className='absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
										<p className='text-white text-sm md:text-base font-urbanist leading-relaxed'>
											{image.caption}
										</p>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* Optional Full-Width Image at End */}
				{galleryImages.length >= 6 && (
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='mt-8 md:mt-12'
					>
						<div className='relative overflow-hidden'>
							<div className='aspect-[21/9] hidden md:block'>
								<img
									src={galleryImages[galleryImages.length - 1].url}
									alt='Full showcase'
									className='w-full h-full object-cover'
								/>
							</div>
						</div>
					</motion.div>
				)}
			</Container>
		</section>
	);
}
