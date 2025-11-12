'use client';

import { useState, useEffect } from 'react';

export default function GridLines() {
	const [isScrolled, setIsScrolled] = useState(false);

	// Detect scroll position to change gridline color
	useEffect(() => {
		const handleScroll = () => {
			// Change color after scrolling past hero section (roughly viewport height)
			if (window.scrollY > window.innerHeight * 0.8) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			{/* Left Vertical Gridline */}
			<div
				className='hidden md:block fixed left-[75px] md:left-[83px] top-0 bottom-0 w-[1px] z-40 pointer-events-none transition-all duration-300'
				style={{
					borderLeft: isScrolled
						? '1px dashed rgba(16, 54, 125, 0.3)'
						: '1px dashed rgba(255, 255, 255, 0.3)',
				}}
				aria-hidden='true'
			></div>

			{/* Right Vertical Gridline */}
			<div
				className='hidden md:block fixed right-[75px] md:right-[83px] top-0 bottom-0 w-[1px] z-40 pointer-events-none transition-all duration-300'
				style={{
					borderLeft: isScrolled
						? '1px dashed rgba(16, 54, 125, 0.3)'
						: '1px dashed rgba(255, 255, 255, 0.3)',
				}}
				aria-hidden='true'
			></div>
		</>
	);
}
