'use client';

export default function GridLines() {
	return (
		<>
			{/* Left Vertical Gridline */}
			<div
				className='hidden md:block fixed left-[75px] md:left-[83px] top-0 bottom-0 w-[1px] z-40 pointer-events-none transition-all duration-300'
				style={{
					borderLeft: '1px dashed rgba(255, 255, 255, 0.3)',
					mixBlendMode: 'difference'
				}}
				aria-hidden='true'
			></div>

			{/* Right Vertical Gridline */}
			<div
				className='hidden md:block fixed right-[75px] md:right-[83px] top-0 bottom-0 w-[1px] z-40 pointer-events-none transition-all duration-300'
				style={{
					borderLeft: '1px dashed rgba(255, 255, 255, 0.3)',
					mixBlendMode: 'difference'
				}}
				aria-hidden='true'
			></div>
		</>
	);
}
