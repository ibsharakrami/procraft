'use client';

import PortfolioIntro from './PortfolioIntro';
import PortfolioGrid from './PortfolioGrid';
import portfolioData from '@/data/portfolioData.json';

export default function Portfolio() {
	return (
		<section className='py-16 md:py-20 lg:py-32 px-6 md:px-12 lg:px-20 bg-white'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20'>
					{/* Left Column - Intro (Sticky on desktop) */}
					<div className='lg:col-span-5'>
						<PortfolioIntro />
					</div>

					{/* Right Column - Project Grid */}
					<div className='lg:col-span-7'>
						<PortfolioGrid projects={portfolioData.projects} />
					</div>
				</div>
			</div>
		</section>
	);
}
