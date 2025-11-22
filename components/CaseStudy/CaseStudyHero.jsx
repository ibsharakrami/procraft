'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CaseStudyHero({ project }) {
	return (
		<section
			data-theme='dark'
			className='relative min-h-screen flex flex-col overflow-hidden'
		>
			{/* Top Half: Hero Image */}
			<div className='relative h-[40vh] w-full'>
				<div
					className='absolute inset-0 bg-cover bg-center'
					style={{ backgroundImage: `url(${project.heroImage})` }}
				/>
				<div className='absolute inset-0 bg-black/30' />

				{/* Breadcrumb */}
				<div className='absolute top-8 left-[83px] md:left-[100px] lg:left-[110px] z-10'>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className='flex items-center gap-2 text-white/70 text-sm'
					>
						<Link href='/' className='hover:text-white transition-colors'>
							Home
						</Link>
						<span>/</span>
						<Link href='/work' className='hover:text-white transition-colors'>
							Work
						</Link>
						<span>/</span>
						<span className='text-white'>{project.title}</span>
					</motion.div>
				</div>
			</div>

			{/* Bottom Half: Content Section */}
			<div className='relative h-[60vh] flex items-center'>
				{/* Background Image (continues from top) */}
				<div
					className='absolute inset-0 bg-cover bg-center'
					style={{ backgroundImage: `url(${project.heroImage})` }}
				/>
				{/* White overlay for readability */}
				<div className='absolute inset-0 bg-white/90' />

				<div className='container mx-auto px-6 md:px-[96px] relative z-10'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16'>
						{/* Left: Label + Title */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.3, duration: 0.6 }}
							className='flex flex-col justify-center'
						>
							<p className='text-gray-400 text-sm md:text-base uppercase mb-3'>
								CASE STUDY
							</p>
							<h1 className='text-black text-4xl md:text-5xl lg:text-6xl font-semibold font-blatant lowercase'>
								{project.title.toLowerCase()}
							</h1>
						</motion.div>

						{/* Right: Description */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4, duration: 0.6 }}
							className='flex flex-col justify-center'
						>
							<p className='text-gray-500 text-sm md:text-base leading-relaxed font-normal'>
								{project.description || project.tagline}
							</p>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
				<svg
					className='w-6 h-6 text-gray-400'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M19 14l-7 7m0 0l-7-7m7 7V3'
					/>
				</svg>
			</div>
		</section>
	);
}
