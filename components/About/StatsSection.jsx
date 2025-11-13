'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Container from '@/components/ui/Container';
import { stats } from '@/data/aboutData';

function AnimatedCounter({ value, suffix = '' }) {
	const ref = useRef(null);
	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, {
		damping: 60,
		stiffness: 100,
	});
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	useEffect(() => {
		if (isInView) {
			motionValue.set(value);
		}
	}, [motionValue, isInView, value]);

	useEffect(() => {
		const unsubscribe = springValue.on('change', (latest) => {
			if (ref.current) {
				ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
			}
		});

		return unsubscribe;
	}, [springValue, suffix]);

	return <span ref={ref}>0{suffix}</span>;
}

export default function StatsSection() {
	const containerVariants = {
		hidden: { opacity: 1 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const statVariants = {
		hidden: { opacity: 0, y: 20 },
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
		<section data-theme="dark" className='bg-[#10367D] py-16 md:py-24 lg:py-32'>
			<Container>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, margin: '-100px' }}
					className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12'
				>
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							variants={statVariants}
							className='text-center'
						>
							<div className='text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 font-blatant'>
								<AnimatedCounter value={stat.value} suffix={stat.suffix} />
							</div>
							<div className='text-sm md:text-base lg:text-lg text-white/70 uppercase tracking-wider font-light'>
								{stat.label}
							</div>
						</motion.div>
					))}
				</motion.div>
			</Container>
		</section>
	);
}
