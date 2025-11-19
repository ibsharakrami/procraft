import AboutHero from '@/components/About/AboutHero';
import WhoWeAre from '@/components/About/WhoWeAre';
import OurPhilosophy from '@/components/About/OurPhilosophy';
import ValuesGrid from '@/components/About/ValuesGrid';
import StatsSection from '@/components/About/StatsSection';
import TeamGrid from '@/components/About/TeamGrid';
import CTASection from '@/components/About/CTASection';

export const metadata = {
	title: 'About ProCraft - Who We Are',
	description: "Discover ProCraft's story. Dubai-based creative digital agency empowering businesses with strategic consulting, innovative web design, and results-driven digital marketing since 2020.",
	keywords: [
		'digital agency Dubai',
		'creative agency UAE',
		'web design Dubai',
		'ProCraft team',
		'about ProCraft',
		'Dubai agency team',
		'Deira creative agency',
		'Gold Souq Extension agency',
		'digital marketing team Dubai'
	],
	openGraph: {
		title: 'About ProCraft - Dubai Creative Digital Agency',
		description: "Meet the team behind Dubai's leading digital growth agency. We combine strategy, creativity, and technology to drive real business impact.",
		url: 'https://procraft.ae/about',
		type: 'website',
	},
	alternates: {
		canonical: 'https://procraft.ae/about',
	},
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
