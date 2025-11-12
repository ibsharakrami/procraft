'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import Container from '@/components/ui/Container';
import { teamMembers } from '@/data/aboutData';

export default function TeamGrid() {
	const containerVariants = {
		hidden: { opacity: 1 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
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
						Our Team
					</span>
					<h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black font-blatant'>
						Meet The Experts
					</h2>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, margin: '-100px' }}
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10'
				>
					{teamMembers.map((member) => (
						<motion.div key={member.id} variants={cardVariants} className='group'>
							{/* Image */}
							<div className='relative aspect-square mb-6 overflow-hidden rounded-sm shadow-sm'>
								<Image
									src={member.image}
									alt={`${member.name} - ${member.role} at ProCraft Digital Agency Dubai`}
									fill
									className='object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500'
									sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw'
								/>
								{/* Overlay on hover */}
								<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
							</div>

							{/* Info */}
							<div className='text-center'>
								<h3 className='text-xl md:text-2xl font-bold text-black mb-1 font-blatant'>
									{member.name}
								</h3>
								<p className='text-sm md:text-base text-[#10367D] mb-3 font-medium'>
									{member.role}
								</p>
								<p className='text-sm md:text-base text-gray-600 leading-relaxed mb-4 line-clamp-3'>
									{member.bio}
								</p>

								{/* LinkedIn Link */}
								<a
									href={member.linkedin}
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-400 hover:border-[#10367D] hover:text-[#10367D] hover:bg-[#10367D]/5 transition-all duration-300'
									aria-label={`${member.name} on LinkedIn`}
								>
									<Linkedin size={20} />
								</a>
							</div>
						</motion.div>
					))}
				</motion.div>
			</Container>
		</section>
	);
}
