'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { companyInfo } from '@/data/aboutData';

export default function WhoWeAre() {
	return (
		<section className='bg-white py-16 md:py-24 lg:py-32'>
			<Container>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
					{/* Text Column */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-100px' }}
					>
						<div className='mb-4'>
							<span className='text-xs md:text-sm uppercase tracking-wider text-gray-400 font-light'>
								Who We Are
							</span>
						</div>
						<h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 font-blatant'>
							Your Strategic Growth Partner
						</h2>
						<p className='text-lg md:text-xl text-gray-600 leading-relaxed mb-6'>
							{companyInfo.whoWeAre}
						</p>
						<p className='text-base md:text-lg text-gray-500 leading-relaxed mb-8'>
							Since {companyInfo.established}, we've helped businesses of all
							sizes achieve their digital ambitions through strategic
							consulting, world-class design, and innovative technology
							solutions.
						</p>
						<motion.a
							href='/services'
							className='inline-flex items-center gap-2 text-[#10367D] hover:text-[#74B4D9] transition-colors font-medium'
							whileHover={{ x: 5 }}
							transition={{ duration: 0.2 }}
						>
							Explore Our Services
							<svg
								className='w-5 h-5'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M17 8l4 4m0 0l-4 4m4-4H3'
								/>
							</svg>
						</motion.a>
					</motion.div>

					{/* Image Column */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-100px' }}
						className='relative'
					>
						<div className='grid grid-cols-2 gap-4'>
							{/* Large Image */}
							<div className='col-span-2 relative aspect-[4/3] rounded-sm overflow-hidden shadow-sm'>
								<Image
									src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80'
									alt='Team collaboration at ProCraft'
									fill
									className='object-cover hover:scale-105 transition-transform duration-700'
									sizes='(max-width: 768px) 100vw, 50vw'
								/>
							</div>

							{/* Two Smaller Images */}
							<div className='relative aspect-square rounded-sm overflow-hidden shadow-sm'>
								<Image
									src='https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80'
									alt='Strategy meeting'
									fill
									className='object-cover hover:scale-105 transition-transform duration-700'
									sizes='(max-width: 768px) 50vw, 25vw'
								/>
							</div>
							<div className='relative aspect-square rounded-sm overflow-hidden shadow-sm'>
								<Image
									src='https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
									alt='Modern office workspace'
									fill
									className='object-cover hover:scale-105 transition-transform duration-700'
									sizes='(max-width: 768px) 50vw, 25vw'
								/>
							</div>
						</div>
					</motion.div>
				</div>
			</Container>
		</section>
	);
}
