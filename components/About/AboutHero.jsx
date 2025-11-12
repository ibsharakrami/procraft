'use client';

import { motion } from 'framer-motion';
import { companyInfo } from '@/data/aboutData';

export default function AboutHero() {
	return (
		<section className='relative min-h-[50vh] md:min-h-[65vh] lg:min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#10367D]'>
			{/* Animated Pattern Background */}
			<div className='absolute inset-0 opacity-20'>
				<div className='absolute inset-0 animated-pattern'></div>
			</div>

			{/* Content */}
			<div className='relative z-10 text-center px-6 md:px-8'>
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
					className='text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight font-blatant'
				>
					WE ARE PROCRAFT
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
					className='text-xl md:text-2xl lg:text-3xl text-white/80 max-w-2xl mx-auto font-light'
				>
					{companyInfo.tagline}
				</motion.p>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 1.2 }}
				className='absolute bottom-8 md:bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 z-20'
			>
				<div className='flex flex-col items-center gap-2'>
					<span className='text-white/50 text-sm uppercase tracking-wider font-light'>
						Scroll
					</span>
					<div className='w-[1px] h-16 bg-white/20 relative'>
						<div className='w-2 h-2 rounded-full bg-white/60 absolute -left-[3px] top-0 animate-bounce-slow'></div>
					</div>
				</div>
			</motion.div>

			{/* CSS for Animated Pattern */}
			<style jsx>{`
				@keyframes movePattern {
					0% {
						background-position: 0 0;
					}
					100% {
						background-position: 50px 50px;
					}
				}

				.animated-pattern {
					background-image: radial-gradient(
							circle,
							rgba(255, 255, 255, 0.1) 1px,
							transparent 1px
						),
						radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
					background-size: 50px 50px;
					background-position: 0 0, 25px 25px;
					animation: movePattern 20s linear infinite;
				}

				@keyframes bounce-slow {
					0%,
					100% {
						transform: translateY(0);
					}
					50% {
						transform: translateY(20px);
					}
				}

				:global(.animate-bounce-slow) {
					animation: bounce-slow 2s ease-in-out infinite;
				}
			`}</style>
		</section>
	);
}
