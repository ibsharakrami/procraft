'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PortfolioCard({ project, index, size = 'medium' }) {
	// Map size variants to grid classes
	const sizeClasses = {
		small: 'col-span-1 row-span-1',
		medium: 'col-span-1 md:row-span-2',
		large: 'md:col-span-2 md:row-span-2',
		featured: 'md:col-span-2 md:row-span-3',
	};

	return (
		<Link href={project.liveUrl} target='_blank' rel='noopener noreferrer'>
			<motion.div
				className={`group relative h-full overflow-hidden cursor-pointer ${sizeClasses[size]}`}
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '-100px' }}
				transition={{
					duration: 0.5,
					delay: index * 0.1,
					ease: [0.4, 0, 0.2, 1],
				}}
			>
				{/* Background Image */}
				<div
					className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105'
					style={{
						backgroundImage: `url(${
							project.thumbnailImage || '/images/portfolio/placeholder.jpg'
						})`,
					}}
				/>

				{/* Default Bottom Gradient (always visible) */}
				<div className='absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-300' />

				{/* Default Content (always visible - just title) */}
				<div className='absolute bottom-0 left-0 right-0 p-6 md:p-8 group-hover:opacity-0 transition-opacity duration-300'>
					<h3 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold'>
						{project.title}
					</h3>
				</div>

				{/* Hover Overlay - Full dark overlay with content */}
				<motion.div
					className='absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 md:p-8'
					initial={{ opacity: 0 }}
				>
					{/* Top Right - View case study link */}
					<div className='flex justify-end'>
						<motion.div
							className='inline-flex items-center gap-2 text-white text-sm md:text-base font-medium hover:text-[#74B4D9] transition-colors'
							initial={{ opacity: 0, x: 20 }}
							whileHover={{ x: 5 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.1, duration: 0.3 }}
						>
							View case study
							<span className='text-xs'>&gt;&gt;</span>
						</motion.div>
					</div>

					{/* Bottom - Title and Service Tags */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.15, duration: 0.3 }}
					>
						<h3 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
							{project.title}
						</h3>

						{/* Service Tags */}
						{project.services && project.services.length > 0 && (
							<p className='text-white/80 text-xs md:text-sm uppercase tracking-wider'>
								{project.services.join(', ')}
							</p>
						)}
					</motion.div>
				</motion.div>
			</motion.div>
		</Link>
	);
}
