import AboutHero from '@/components/About/AboutHero';
import WhoWeAre from '@/components/About/WhoWeAre';
import OurPhilosophy from '@/components/About/OurPhilosophy';
import ValuesGrid from '@/components/About/ValuesGrid';
import StatsSection from '@/components/About/StatsSection';
import TeamGrid from '@/components/About/TeamGrid';
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

			{/* Our Philosophy - 5 Chapter Story Timeline */}
			<OurPhilosophy />

			{/* Core Values - 2x2 Grid */}
			<ValuesGrid />

			{/* Stats Section - 4 columns with count-up animation */}
			<StatsSection />

			{/* Team Grid - 4 members */}
			<TeamGrid />

			{/* CTA Section - Gradient background */}
			<CTASection />
		</main>
	);
}
