'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import Link from 'next/link';

function PortfolioCard({ project, index }) {
	const [rotateX, setRotateX] = useState(0);
	const [rotateY, setRotateY] = useState(0);
	const cardRef = useRef(null);

	const handleMouseMove = (e) => {
		if (!cardRef.current) return;
		
		const card = cardRef.current;
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;
		
		const rotateXValue = ((y - centerY) / centerY) * -10;
		const rotateYValue = ((x - centerX) / centerX) * 10;
		
		setRotateX(rotateXValue);
		setRotateY(rotateYValue);
	};

	const handleMouseLeave = () => {
		setRotateX(0);
		setRotateY(0);
	};

	return (
		<motion.div
			ref={cardRef}
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.6, delay: index * 0.15 }}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{
				transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
				transition: 'transform 0.1s ease-out'
			}}
			className='group cursor-pointer'
		>
			<Link href={project.caseStudyUrl}>
				{/* Image Container */}
				<div className='relative overflow-hidden bg-gray-100 shadow-lg mb-6'>
					<div className='relative w-full aspect-[4/3]'>
						<img
							src={project.image}
							alt={`${project.title} - ${project.services?.join(', ')} project by ProCraft | Dubai digital agency portfolio`}
							className='w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-90'
						/>
						
						{/* Overlay on Hover */}
						<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
					</div>
				</div>

				{/* Project Info */}
				<div className='space-y-3'>
					<h3 className='text-2xl md:text-3xl font-bold text-black group-hover:text-[#10367D] transition-colors duration-300'>
						{project.title}
					</h3>
					
					{project.services && project.services.length > 0 && (
						<p className='text-gray-500 text-xs uppercase tracking-[0.2em] font-light'>
							{project.services.join(' & ')}
						</p>
					)}

					{project.caseStudyUrl && (
						<div className='pt-1'>
							<span className='inline-flex items-center gap-2 text-sm text-gray-600 group-hover:text-[#10367D] transition-colors duration-300'>
								View case study
								<span className='text-xs transform group-hover:translate-x-1 transition-transform duration-300'>&gt;&gt;</span>
							</span>
						</div>
					)}
				</div>
			</Link>
		</motion.div>
	);
}

export default function PortfolioGrid({ projects }) {
	return (
		<div className='pt-8 md:pt-12 lg:pt-16'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12'>
				{projects.map((project, index) => (
					<PortfolioCard key={project.id} project={project} index={index} />
				))}
			</div>
		</div>
	);
}
