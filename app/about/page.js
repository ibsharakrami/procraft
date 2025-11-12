import AboutHero from '@/components/About/AboutHero';
import WhoWeAre from '@/components/About/WhoWeAre';
import MissionVision from '@/components/About/MissionVision';
import ValuesGrid from '@/components/About/ValuesGrid';
import StatsSection from '@/components/About/StatsSection';
import TeamGrid from '@/components/About/TeamGrid';
import ClientLogos from '@/components/ClientLogos/ClientLogos';
import CTASection from '@/components/About/CTASection';

export const metadata = {
	title: 'About ProCraft | Creative Digital Growth Agency in Dubai',
	description:
		"Learn about ProCraft, Dubai's premier creative digital agency. We empower businesses with strategic consulting, web design, and digital marketing solutions that drive real impact.",
	keywords:
		'digital agency Dubai, creative agency UAE, web design Dubai, ProCraft team, about ProCraft',
};

export default function AboutPage() {
	return (
		<main className='overflow-hidden'>
			{/* Hero Section - Full screen with animated pattern */}
			<AboutHero />

			{/* Who We Are - 2 column layout */}
			<WhoWeAre />

			{/* Mission & Vision - Centered statements */}
			<MissionVision />

			{/* Core Values - 2x2 Grid */}
			<ValuesGrid />

			{/* Stats Section - 4 columns with count-up animation */}
			<StatsSection />

			{/* Team Grid - 4 members */}
			<TeamGrid />

			{/* Client Logos Marquee - Reusing existing component */}
			<section className='bg-[#EBEBEB] py-16 md:py-24 lg:py-32'>
				<div className='text-center mb-12 md:mb-16'>
					<span className='text-xs md:text-sm uppercase tracking-wider text-gray-400 font-light mb-4 block'>
						Our Clients
					</span>
					<h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black font-blatant px-6'>
						Trusted by Leading Brands
					</h2>
				</div>
				<ClientLogos />
			</section>

			{/* CTA Section - Gradient background */}
			<CTASection />
		</main>
	);
}
