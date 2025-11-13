'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

export default function CaseStudyTestimonial({ testimonial }) {
	if (!testimonial) return null;

	const { quote, author, role, avatar } = testimonial;

	return (
		<section data-theme='dark' className='relative bg-gradient-to-br from-[#10367D] to-[#0a2454] py-16 md:py-24 lg:py-32 overflow-hidden'>
			{/* Dotted Background Pattern */}
			<div className='absolute inset-0 opacity-[0.08]'>
				<svg className='w-full h-full' xmlns='http://www.w3.org/2000/svg'>
					<defs>
						<pattern
							id='dot-pattern-testimonial'
							x='0'
							y='0'
							width='40'
							height='40'
							patternUnits='userSpaceOnUse'
						>
							<circle cx='2' cy='2' r='1.5' fill='white' />
						</pattern>
					</defs>
					<rect
						x='0'
						y='0'
						width='100%'
						height='100%'
						fill='url(#dot-pattern-testimonial)'
					/>
				</svg>
			</div>

			<Container size='narrow'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className='relative z-10 text-center'
				>
					{/* Quote Icon */}
					<div className='mb-8'>
						<svg
							className='w-12 h-12 md:w-16 md:h-16 mx-auto text-[#74B4D9] opacity-40'
							fill='currentColor'
							viewBox='0 0 24 24'
						>
							<path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
						</svg>
					</div>

					{/* Quote */}
					<blockquote className='mb-10 md:mb-12'>
						<p className='text-xl md:text-2xl lg:text-3xl leading-relaxed text-white font-light italic font-urbanist'>
							"{quote}"
						</p>
					</blockquote>

					{/* Author Info */}
					<div className='flex items-center justify-center gap-4'>
						{/* Avatar */}
						{avatar && (
							<div className='w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 border-white/20'>
								<img
									src={avatar}
									alt={author}
									className='w-full h-full object-cover'
								/>
							</div>
						)}

						<div className='text-left'>
							<p className='text-white font-semibold text-lg md:text-xl font-urbanist'>
								{author}
							</p>
							<p className='text-[#74B4D9] text-sm md:text-base font-urbanist'>
								{role}
							</p>
						</div>
					</div>
				</motion.div>
			</Container>
		</section>
	);
}
