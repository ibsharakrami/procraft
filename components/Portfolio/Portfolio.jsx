'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
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
		<motion.article variants={cardVariants} className={classNames('relative', className)}>
			<TiltWrapper href={`/work/${project.slug}`}>
				<div className='group transition-all duration-300'>
					{/* Image Container - Clean, no overlay */}
					<div className='relative overflow-hidden mb-8'>
						<img
							src={project.thumbnailImage}
							alt={project.title}
							className='w-full h-auto object-cover'
							loading='lazy'
						/>
					</div>

					{/* Title - Always visible below image */}
					<div>
						<h3 className='text-2xl md:text-3xl font-bold text-black group-hover:text-[#10367D] transition-colors duration-300'>
							{project.title}
						</h3>
					</div>

					{/* Fixed-height Hover Content Area - No expansion, just opacity fade */}
					<div className='h-20 md:h-24 relative mt-3'>
						<div className='opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out'>
							{/* Row 1: View case study link (right aligned) */}
							<div className='flex justify-end mb-2'>
								<span className='inline-flex items-center gap-2 text-[#10367D] text-xs md:text-sm font-medium hover:text-[#74B4D9] transition-colors duration-300 whitespace-nowrap'>
									View case study <span className='text-xs'>››</span>
								</span>
							</div>

							{/* Row 2: Service Tags */}
							{project.services?.length ? (
								<p className='text-gray-600 text-xs md:text-sm uppercase tracking-[0.15em] font-light'>
									{project.services.join(', ')}
								</p>
							) : null}
						</div>
					</div>
				</div>
			</TiltWrapper>
		</motion.article>
	);
}

export default function Portfolio() {
	// Filter and display only featured projects (Sharma Space & The Virtual Greens)
	const projects = caseStudies.filter(study => study.featured).slice(0, 4);

	return (
		<section className='relative bg-white py-16 md:py-24 lg:py-32'>
			<div className='mx-auto max-w-7xl px-6 md:px-8 lg:px-12'>
				{/* Background accents */}
				<div className='pointer-events-none absolute inset-0 -z-10'>
					<div className='absolute left-0 top-0 h-80 w-2/3 bg-gradient-to-b from-transparent to-gray-50/50' />
					<div className='absolute right-0 top-1/3 h-96 w-1/2 bg-gray-50/50' />
				</div>

			{/* Grid: exactly two columns on lg+ */}
			<motion.div
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.2 }}
				variants={stagger}
				className='grid grid-cols-1 gap-8 lg:grid-cols-2'
			>
				{/* Column 1 */}
				<div className='flex flex-col gap-8'>
					{/* Copy block (Row 1) */}
					<motion.div variants={container}>
						<p className='text-sm font-semibold uppercase tracking-[0.2em] text-gray-500'>
							Working together
						</p>
						<h2 className='mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500'>
							with our clients
						</h2>
						<h3 className='mt-6 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl'>
							To Achieve Their Business&apos; Vision
						</h3>
						<p className='mt-5 max-w-md text-base leading-7 text-gray-600'>
							Whether we&apos;re building a new website, creating new branding, composing
							compelling copy or increasing a business&apos; social media presence; you can
							always count on <span className='font-semibold'>edirect</span>. Our skilled and
							dedicated team are meticulous in the implementation of various marketing
							strategies. Together, we are forever working hard towards achieving our
							clients&apos; vision.
						</p>
						<a
							href='/work'
							className='mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700'
						>
							view more <span className='text-lg'>››</span>
						</a>
					</motion.div>

					{/* Row 2 & 3 of Column 1 */}
					{projects[0] && <ProjectCard project={projects[0]} />}
					{projects[1] && <ProjectCard project={projects[1]} />}
				</div>

				{/* Column 2 */}
				<div className='flex flex-col gap-8 lg:mt-28'>
					{/* Row 1 & 2 of Column 2 */}
					{projects[2] && <ProjectCard project={projects[2]} />}
					{projects[3] && <ProjectCard project={projects[3]} />}
				</div>
			</motion.div>
			</div>
		</section>
	);
}
