'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Image from 'next/image';

export default function CaseStudyTestimonial({ testimonial }) {
	if (!testimonial) return null;

	const { quote, author, role, avatar } = testimonial;

	return (
		<section data-theme='light' className='relative bg-gray-50 py-20 md:py-28 lg:py-36'>
			{/* Top Border Line */}
			<div className='absolute top-0 left-0 right-0 h-[1px] bg-gray-300' />

			<Container size='default'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='max-w-4xl mx-auto'
				>
					{/* Quote */}
					<blockquote className='mb-12 md:mb-16'>
						<p className='text-2xl md:text-3xl lg:text-4xl leading-relaxed text-black font-urbanist mb-8'>
							"{quote}"
						</p>
					</blockquote>

					{/* Author Info */}
					<div className='flex items-center gap-6'>
						{/* Avatar */}
						{avatar && (
							<div className='relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0 grayscale'>
								<Image
									src={avatar}
									alt={author}
									fill
									className='object-cover'
								/>
							</div>
						)}

						<div>
							<p className='text-xl md:text-2xl font-bold text-black font-blatant'>
								{author}
							</p>
							<p className='text-base md:text-lg text-gray-600 font-urbanist'>
								{role}
							</p>
						</div>
					</div>
				</motion.div>
			</Container>
		</section>
	);
}
