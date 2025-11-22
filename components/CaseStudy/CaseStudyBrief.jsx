'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Image from 'next/image';

export default function CaseStudyBrief({
	briefText,
	services,
	liveUrl,
	client,
	clientLogo,
	clientDescription,
}) {
	return (
		<section data-theme='light' className='relative bg-white py-16 md:py-24 lg:py-32'>
			{/* Top Border Line - Dashed */}
			<div className='absolute top-0 left-0 right-0 lg:left-[100px] lg:right-[110px] h-[1px] border-t border-dashed border-gray-300' />

			<Container size='default'>
				{/* Client Logo */}
				{clientLogo && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='flex justify-center mb-12 md:mb-16'
					>
						<div className='relative w-48 h-24 md:w-64 md:h-32 lg:w-80 lg:h-40 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300'>
							<Image
								src={clientLogo}
								alt={`${client} logo`}
								fill
								className='object-contain'
							/>
						</div>
					</motion.div>
				)}

				{/* Client Description */}
				{clientDescription && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className='max-w-4xl mx-auto text-center mb-16 md:mb-20 lg:mb-24'
					>
						<p className='text-base md:text-lg leading-relaxed text-gray-600 font-urbanist'>
							{clientDescription}
						</p>
					</motion.div>
				)}

				{/* Main Content */}
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20'>
					{/* Left - The Brief */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='lg:col-span-2'
					>
						<h2 className='text-4xl md:text-5xl lg:text-6xl font-normal text-black mb-8 md:mb-10 font-urbanist lowercase'>
							the brief
						</h2>

						<div className='text-base md:text-lg leading-relaxed text-gray-700 font-urbanist space-y-4'>
							{briefText.split('\n\n').map((paragraph, index) => (
								<p key={index}>{paragraph}</p>
							))}
						</div>
					</motion.div>

					{/* Right - Sidebar */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='space-y-16'
					>
						{/* Scope of Project */}
						{services && services.length > 0 && (
							<div>
								<h3 className='text-2xl md:text-3xl font-normal text-black mb-6 md:mb-8 font-urbanist lowercase'>
									scope of project
								</h3>
								<div className='space-y-3 md:space-y-4'>
									{services.map((service, index) => (
										<p key={index} className='text-lg md:text-xl font-semibold text-black font-urbanist'>
											{service}
										</p>
									))}
								</div>
							</div>
						)}

						{/* See the Website */}
						{liveUrl && (
							<div>
								<a
									href={liveUrl}
									target='_blank'
									rel='noopener noreferrer'
									className='group inline-flex items-center gap-3 text-lg md:text-xl font-normal text-black hover:text-primary-blue transition-colors duration-300 font-urbanist lowercase underline underline-offset-4 decoration-1'
								>
									see the website
									<svg
										className='w-6 h-6 md:w-7 md:h-7 text-primary-blue transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 17L17 7M17 7H7M17 7V17' />
									</svg>
								</a>
							</div>
						)}
					</motion.div>
				</div>
			</Container>

			{/* Bottom Border Line - Dashed */}
			<div className='absolute bottom-0 left-0 right-0 h-[1px] border-b border-dashed border-gray-300' />
		</section>
	);
}
