'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useNavigationTheme } from '@/hooks/useNavigationTheme';

export default function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
	const { topTheme, middleTheme, bottomTheme } = useNavigationTheme();

	const menuLinks = [
		{ href: '/about', label: 'About' },
		{ href: '/work', label: 'Work' },
		{ href: '/services', label: 'Expertise' },
		{ href: '/contact', label: 'Contact' },
	];

	const locations = [
		{
			city: 'Dubai',
			address: 'Business Bay, Dubai',
			details: 'United Arab Emirates',
		},
	];

	const contactInfo = {
		address: 'Business Bay, Dubai, United Arab Emirates',
		phone: '+971 545 866 866',
		email: 'info@procraft.ae',
	};

	const socialLinks = [
		{ icon: 'facebook', href: '#', label: 'Facebook' },
		{ icon: 'twitter', href: '#', label: 'Twitter' },
		{ icon: 'linkedin', href: '#', label: 'LinkedIn' },
		{ icon: 'instagram', href: '#', label: 'Instagram' },
	];

	// Prevent scroll when menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isMenuOpen]);

	return (
		<>
			{/* Mobile Top Navigation Bar - Only visible on mobile (<768px) */}
			<div className='md:hidden fixed top-0 left-0 right-0 bg-black z-50 h-16 px-5 flex items-center justify-between'>
				{/* Hamburger Menu Button */}
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className='flex flex-col gap-[5px] p-1 hover:opacity-70 transition-opacity cursor-pointer'
					aria-label='Toggle menu'
				>
					<span className='block h-[1px] w-[30px] bg-white/80'></span>
					<span className='block h-[1px] w-[30px] -ml-[8px] bg-white/80'></span>
					<span className='block h-[1px] w-[30px] bg-white/80'></span>
				</button>

				{/* Brand Name - Center */}
				<Link
					href='/'
					className='text-white text-base font-light tracking-[0.2em] hover:text-[#74B4D9] transition-colors'
					onClick={() => setIsMenuOpen(false)}
				>
					procraft
				</Link>

				{/* Phone Number - Right */}
				<button
					onClick={() => setIsPhoneModalOpen(true)}
					className='text-white text-sm hover:text-[#74B4D9] transition-colors font-light'
					aria-label='Contact us'
				>
					+971 545 866 866
				</button>
			</div>

			{/* Vertical Text - Left Side - Desktop Only */}
			<div
				className={`hidden md:block fixed left-[25px] md:left-[28px] top-[60px] z-50 pointer-events-none transition-opacity duration-500 ${
					isMenuOpen ? 'opacity-0' : 'opacity-100'
				}`}
			>
				<Link
					href='/'
					className={`text-[18px] md:text-[19px] tracking-[0.35em] [writing-mode:vertical-rl] rotate-180 pointer-events-auto hover:text-[#74B4D9] transition-all duration-300 font-light ${topTheme === 'dark' ? 'text-white' : 'text-[#10367D]'}`}
					onClick={() => setIsMenuOpen(false)}
				>
					procraft
				</Link>
			</div>

			{/* Scroll Indicator - Bottom Left - Desktop Only */}
			<div
				className={`hidden md:block fixed left-[25px] md:left-[28px] bottom-[50px] z-50 pointer-events-none transition-opacity duration-500 ${
					isMenuOpen ? 'opacity-0' : 'opacity-100'
				}`}
			>
				<div className='flex flex-col items-center gap-2'>
					<span
						className={`text-[17px] md:text-[18px] tracking-[0.3em] [writing-mode:vertical-rl] rotate-180 font-extralight transition-colors duration-300 ${bottomTheme === 'dark' ? 'text-white/90' : 'text-[#10367D]/90'}`}
					>
						scroll
					</span>
					<div
						className={`w-[2px] h-20 md:h-24 relative mt-2 transition-colors duration-300 ${bottomTheme === 'dark' ? 'bg-white/20' : 'bg-[#10367D]/20'}`}
					>
						<div
							className={`w-[6px] h-[6px] rounded-full absolute -left-[2px] top-0 animate-scroll-dot transition-colors duration-300 ${bottomTheme === 'dark' ? 'bg-white/60' : 'bg-[#10367D]/60'}`}
						></div>
					</div>
				</div>
			</div>

			{/* Hamburger Menu Button - Left Side - Desktop Only */}
			<div
				className={`hidden md:block fixed left-[20px] md:left-[24px] top-[50%] -translate-y-1/2 z-50 transition-opacity duration-500 ${
					isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
				}`}
			>
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className='flex flex-col gap-[8px] p-1 hover:opacity-70 transition-opacity cursor-pointer'
					aria-label='Toggle menu'
				>
					<span
						className={`block h-[1px] w-[30px] md:w-[30px] transition-colors duration-300 ${middleTheme === 'dark' ? 'bg-white/90' : 'bg-[#10367D]/90'}`}
					></span>
					<span
						className={`block h-[1px] w-[30px] md:w-[30px] -ml-[5px] transition-colors duration-300 ${middleTheme === 'dark' ? 'bg-white/90' : 'bg-[#10367D]/90'}`}
					></span>
					<span
						className={`block h-[1px] w-[30px] md:w-[30px] transition-colors duration-300 ${middleTheme === 'dark' ? 'bg-white/90' : 'bg-[#10367D]/90'}`}
					></span>
				</button>
			</div>

			{/* Full-Screen Menu Overlay */}
			<div
				className={`fixed inset-0 bg-[#10367D] z-40 transition-all duration-500 ${
					isMenuOpen
						? 'opacity-100 pointer-events-auto'
						: 'opacity-0 pointer-events-none'
				}`}
			>
				{/* Brand Name - Top Left */}
				<div className='absolute top-8 left-8 md:left-16'>
					<Link
						href='/'
						onClick={() => setIsMenuOpen(false)}
						className='text-white text-base md:text-lg font-normal hover:text-[#74B4D9] transition-colors'
					>
						procraft
					</Link>
				</div>

				{/* Close Button */}
				<button
					onClick={() => setIsMenuOpen(false)}
					className='absolute top-8 right-8 w-12 h-12 flex items-center justify-center text-white hover:text-[#74B4D9] transition-colors z-50'
					aria-label='Close menu'
				>
					<svg
						className='w-8 h-8'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				</button>

				<div className='h-full flex items-center'>
					<div className='w-full px-8 md:px-16 lg:px-24'>
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
							{/* Left Side - Menu Links */}
							<div className='flex flex-col justify-center'>
								<nav className='space-y-6 pl-6 md:pl-20 lg:pl-56'>
									{menuLinks.map((link, index) => (
										<Link
											key={link.href}
											href={link.href}
											onClick={() => setIsMenuOpen(false)}
											className='block text-white text-5xl md:text-6xl lg:text-7xl font-bold hover:text-[#74B4D9] transition-colors leading-tight'
											style={{
												animationDelay: `${index * 0.1}s`,
												animation: isMenuOpen
													? 'slideIn 0.5s ease-out forwards'
													: 'none',
											}}
										>
											{link.label}
										</Link>
									))}
								</nav>
							</div>

							{/* Right Side - Contact Info */}
							<div className='flex flex-col justify-center space-y-12'>
								<div>
									<h3 className='text-[#74B4D9] text-2xl font-bold mb-4'>
										Dubai Office
									</h3>
									<p className='text-white/80 text-sm leading-relaxed'>
										{contactInfo.address}
									</p>
									<a
										href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
										className='text-white/80 hover:text-[#74B4D9] transition-colors text-sm block mt-2'
									>
										{contactInfo.phone}
									</a>
									<a
										href={`mailto:${contactInfo.email}`}
										className='text-white/80 hover:text-[#74B4D9] transition-colors text-sm block mt-1'
									>
										{contactInfo.email}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Full Width Border Line - Above Social Icons */}
				<div className='absolute bottom-24 left-0 right-0 w-full h-px bg-white/30'></div>

				{/* Social Media Icons - Bottom Left */}
				<div className='absolute bottom-8 left-8 md:left-16'>
					{/* Social Icons */}
					<div className='flex gap-6'>
						{socialLinks.map((social) => (
							<a
								key={social.icon}
								href={social.href}
								className='text-white hover:text-[#74B4D9] transition-colors w-6 h-6'
								aria-label={social.label}
								target='_blank'
								rel='noopener noreferrer'
							>
								{social.icon === 'facebook' && (
									<svg
										className='w-6 h-6'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
									</svg>
								)}
								{social.icon === 'twitter' && (
									<svg
										className='w-6 h-6'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
									</svg>
								)}
								{social.icon === 'linkedin' && (
									<svg
										className='w-6 h-6'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
									</svg>
								)}
								{social.icon === 'instagram' && (
									<svg
										className='w-6 h-6'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' />
									</svg>
								)}
							</a>
						))}
					</div>
				</div>
			</div>

			{/* Phone Contact Modal - Mobile Only */}
			{isPhoneModalOpen && (
				<div
					className='md:hidden fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4'
					onClick={() => setIsPhoneModalOpen(false)}
				>
					<div
						className='bg-white rounded-lg p-6 max-w-sm w-full'
						onClick={(e) => e.stopPropagation()}
					>
						<div className='flex justify-between items-center mb-6'>
							<h3 className='text-xl font-semibold text-gray-900'>
								Contact Us
							</h3>
							<button
								onClick={() => setIsPhoneModalOpen(false)}
								className='text-gray-400 hover:text-gray-600'
								aria-label='Close modal'
							>
								<svg
									className='w-6 h-6'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</button>
						</div>

						<div className='space-y-3'>
							<a
								href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
								className='flex items-center gap-3 p-4 rounded-lg bg-[#10367D] text-white hover:bg-[#10367D]/90 transition-colors'
								onClick={() => setIsPhoneModalOpen(false)}
							>
								<svg
									className='w-6 h-6'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
									/>
								</svg>
								<div className='text-left'>
									<div className='font-medium'>Call Now</div>
									<div className='text-sm text-white/80'>
										{contactInfo.phone}
									</div>
								</div>
							</a>

							<a
								href={`https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, '')}`}
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center gap-3 p-4 rounded-lg bg-[#25D366] text-white hover:bg-[#25D366]/90 transition-colors'
								onClick={() => setIsPhoneModalOpen(false)}
							>
								<svg
									className='w-6 h-6'
									fill='currentColor'
									viewBox='0 0 24 24'
								>
									<path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
								</svg>
								<div className='text-left'>
									<div className='font-medium'>WhatsApp</div>
									<div className='text-sm text-white/90'>
										{contactInfo.phone}
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			)}

			<style jsx>{`
				@keyframes slideIn {
					from {
						opacity: 0;
						transform: translateX(-30px);
					}
					to {
						opacity: 1;
						transform: translateX(0);
					}
				}

				@keyframes scrollDot {
					0% {
						top: 0;
						opacity: 1;
					}
					50% {
						opacity: 0.5;
					}
					100% {
						top: 100%;
						opacity: 0;
					}
				}

				:global(.animate-scroll-dot) {
					animation: scrollDot 2s ease-in-out infinite;
				}
			`}</style>
		</>
	);
}
