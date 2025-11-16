'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';

// Motion variants
const container = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
	hidden: { opacity: 1 },
	show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
	hidden: { opacity: 0, y: 18 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function classNames(...args) {
	return args.filter(Boolean).join(' ');
}

// Cursor-tilt wrapper (card parallax)
function TiltWrapper({ children, href }) {
	const ref = useRef(null);
	const x = useMotionValue(0.5);
	const y = useMotionValue(0.5);
	const rx = useSpring(useTransform(y, [0, 1], [10, -10]), { stiffness: 220, damping: 18 });
	const ry = useSpring(useTransform(x, [0, 1], [-10, 10]), { stiffness: 220, damping: 18 });

	function onMove(e) {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		x.set((e.clientX - r.left) / r.width);
		y.set((e.clientY - r.top) / r.height);
	}

	function reset() {
		x.set(0.5);
		y.set(0.5);
	}

	const content = (
		<motion.div
			ref={ref}
			onMouseMove={onMove}
			onMouseLeave={reset}
			style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
			className='[perspective:1200px] will-change-transform'
		>
			{children}
		</motion.div>
	);

	return href ? (
		<a href={href} className='block'>
			{content}
		</a>
	) : (
		content
	);
}

function ProjectCard({ project, className }) {
	return (
		<motion.article 
			variants={cardVariants} 
			className={classNames('relative', className)}
			whileHover="hover"
			initial="initial"
		>
			<motion.div 
				className='transition-all duration-500 shadow-lg bg-white p-6 group overflow-hidden relative'
				variants={{
					initial: { y: 0 },
					hover: { y: -12, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }
				}}
				transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
			>
				{/* Animated gradient overlay */}
				<motion.div
					className='absolute inset-0 bg-gradient-to-br from-[#74B4D9]/0 via-[#10367D]/0 to-[#74B4D9]/0 pointer-events-none'
					variants={{
						initial: { opacity: 0 },
						hover: { opacity: 0.05 }
					}}
					transition={{ duration: 0.5 }}
				/>
				
				{/* Image Container with parallax effect */}
				<motion.div 
					className='relative overflow-hidden mb-6'
					variants={{
						initial: { scale: 1 },
						hover: { scale: 1.05 }
					}}
					transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
				>
					<motion.img
						src={project.thumbnailImage}
						alt={`${project.title} - ${project.tagline} | ${project.category.join(', ')} project by ProCraft Dubai`}
						className='w-full h-[300px] md:h-[400px] object-cover'
						loading='lazy'
						variants={{
							initial: { filter: 'brightness(1)' },
							hover: { filter: 'brightness(1.1)' }
						}}
						transition={{ duration: 0.4 }}
					/>
					
					{/* Sliding overlay effect */}
					<motion.div
						className='absolute inset-0 bg-gradient-to-t from-[#10367D]/20 to-transparent'
						variants={{
							initial: { y: '100%' },
							hover: { y: 0 }
						}}
						transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
					/>
				</motion.div>

				{/* Title with stagger effect */}
				<motion.div 
					className='mb-4 overflow-hidden'
					variants={{
						initial: { x: 0 },
						hover: { x: 8 }
					}}
					transition={{ duration: 0.3, ease: "easeOut" }}
				>
					<h3 className='text-2xl md:text-3xl font-bold text-black transition-colors duration-300 group-hover:text-[#10367D]'>
						{project.title}
					</h3>
				</motion.div>

				{/* Always visible content with fade-up animation */}
				<motion.div 
					className='space-y-3'
					variants={{
						initial: { opacity: 0.8, y: 0 },
						hover: { opacity: 1, y: -4 }
					}}
					transition={{ duration: 0.3 }}
				>
					{/* Service Tags - Always visible */}
					{project.services?.length ? (
						<motion.p 
							className='text-gray-600 text-xs md:text-sm uppercase tracking-[0.15em] font-light'
							variants={{
								initial: { opacity: 0.7 },
								hover: { opacity: 1 }
							}}
						>
							{project.services.join(', ')}
						</motion.p>
					) : null}
					
					{/* View case study button with expanding arrow */}
					<div className='flex justify-start'>
						<Link 
							href={`/work/${project.slug}`}
							className='inline-flex items-center text-[#10367D] text-sm md:text-base font-medium hover:text-[#74B4D9] transition-all duration-300 whitespace-nowrap group/link'
						>
							<motion.span
								variants={{
									initial: { x: 0 },
									hover: { x: -4 }
								}}
								transition={{ duration: 0.3 }}
							>
								View case study
							</motion.span>
							<motion.span 
								className='text-sm ml-2'
								variants={{
									initial: { x: 0, opacity: 0.7 },
									hover: { x: 8, opacity: 1 }
								}}
								transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
							>
								››
							</motion.span>
						</Link>
					</div>
				</motion.div>
			</motion.div>
		</motion.article>
	);
}

export default function Portfolio() {
	// Display only 3 featured projects
	const projects = caseStudies.filter(study => study.featured).slice(0, 3);

	return (
		<section data-theme="light" className='relative bg-white py-16 md:py-20 '>
			<div className='mx-auto max-w-7xl px-6 md:px-[96px]'>
				{/* Background accents */}
				<div className='pointer-events-none absolute inset-0 -z-10'>
					<div className='absolute left-0 top-0 h-80 w-2/3 bg-gradient-to-b from-transparent to-gray-50/50' />
					<div className='absolute right-0 top-1/3 h-96 w-1/2 bg-gray-50/50' />
				</div>

			{/* Grid: two columns from md (764px) and above */}
			<motion.div
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.2 }}
				variants={stagger}
				className='grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[52px]'
			>
				{/* Column 1: Intro text + 1 project */}
				<div className='flex flex-col gap-8'>
					{/* Copy block (Row 1) */}
					<motion.div variants={container}>
						<p className='text-lg md:text-2xl font-semibold uppercase tracking-[0.2em] text-gray-400'>
							Working together
						</p>
						<h2 className=' text-lg md:text-2xl font-semibold uppercase tracking-[0.2em] text-gray-400'>
							with our clients
						</h2>
						<h3 className='mt-7 text-2xl  font-medium tracking-tight text-gray-900 sm:text-4xl'>
							To Achieve Their Business&apos; Vision
						</h3>
						<p className='mt-5 max-w-md text-base leading-6 text-gray-400'>
							Whether we&apos;re building a new website, creating new branding, composing
							compelling copy or increasing a business&apos; social media presence; you can
							always count on <span className='font-semibold'>procraft</span>. Our skilled and
							dedicated team are meticulous in the implementation of various marketing
							strategies. Together, we are forever working hard towards achieving our
							clients&apos; vision.
						</p>
						<a
							href='/work'
							className='mt-6 inline-flex items-center justify-end gap-2 text-sm font-semibold  text-black'
						>
							view more <span className='text-lg text-blue-700'>››</span>
						</a>
					</motion.div>

					{/* First project card */}
					{projects[0] && <ProjectCard project={projects[0]} />}
				</div>

				{/* Column 2: 2 project cards stacked */}
				<div className='flex flex-col gap-8'>
					{projects[1] && <ProjectCard project={projects[1]} />}
					{projects[2] && <ProjectCard project={projects[2]} />}
				</div>
			</motion.div>
			</div>
		</section>
	);
}
