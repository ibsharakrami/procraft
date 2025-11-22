'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Container from '@/components/ui/Container';

export default function CaseStudyHighlight({ statement }) {
	const [displayedText, setDisplayedText] = useState('');
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		if (!isInView || !statement) return;

		let currentIndex = 0;
		setDisplayedText('');

		const typingInterval = setInterval(() => {
			if (currentIndex <= statement.length) {
				setDisplayedText(statement.slice(0, currentIndex));
				currentIndex++;
			} else {
				clearInterval(typingInterval);
			}
		}, 50); // 50ms per character - adjust for speed

		return () => clearInterval(typingInterval);
	}, [isInView, statement]);

	if (!statement) return null;

	return (
		<section
			data-theme='light'
			className='relative bg-gray-50 py-12 md:py-16 lg:py-20'
		>
			{/* Top Border Line - Dashed */}
			<div className='absolute top-0 left-0 right-0 h-[1px] border-t border-dashed border-gray-300' />

			<Container size='default'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					onViewportEnter={() => setIsInView(true)}
					transition={{ duration: 0.5 }}
					className='max-w-5xl mx-auto text-center'
				>
					<h2 className='text-2xl md:text-3xl lg:text-4xl font-normal text-black leading-tight font-urbanist lowercase italic'>
						{displayedText}
						<motion.span
							animate={{ opacity: [1, 0] }}
							transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
							className='inline-block ml-1'
						>
							|
						</motion.span>
					</h2>
				</motion.div>
			</Container>

			{/* Bottom Border Line - Dashed */}
			<div className='absolute bottom-0 left-0 right-0 md:left-[100px] md:right-[110px] h-[1px] border-b border-dashed border-gray-300' />
		</section>
	);
}
