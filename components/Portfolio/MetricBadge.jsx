'use client';

import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Counter({ value, suffix = '', duration = 2 }) {
	const nodeRef = useRef();
	const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, { duration: duration * 1000 });
	const displayValue = useRef(0);

	useEffect(() => {
		if (isInView) {
			const targetValue = parseFloat(value.toString().replace(/[^0-9.]/g, ''));
			const controls = animate(motionValue, targetValue, {
				duration: duration,
				ease: "easeOut",
			});

			return controls.stop;
		}
	}, [isInView, motionValue, value, duration]);

	useEffect(() => {
		const unsubscribe = springValue.on("change", (latest) => {
			if (nodeRef.current) {
				displayValue.current = latest;
				nodeRef.current.textContent = Math.floor(latest) + suffix;
			}
		});

		return unsubscribe;
	}, [springValue, suffix]);

	return <span ref={nodeRef}>0{suffix}</span>;
}

export default function MetricBadge({ value, label, className = '' }) {
	// Extract number and suffix (e.g., "150+" -> value: "150", suffix: "+")
	const match = value.match(/^(\d+)(.*)$/);
	const numericValue = match ? match[1] : value;
	const suffix = match ? match[2] : '';

	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.4, ease: "easeOut" }}
			className={`inline-flex flex-col items-start backdrop-blur-md bg-white/90 border border-white/20 rounded-lg px-4 py-3 shadow-lg ${className}`}
		>
			<span className="text-2xl md:text-3xl font-bold text-[#10367D] font-blatant tracking-tight">
				<Counter value={numericValue} suffix={suffix} duration={1.5} />
			</span>
			<span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-600 font-light mt-1">
				{label}
			</span>
		</motion.div>
	);
}
