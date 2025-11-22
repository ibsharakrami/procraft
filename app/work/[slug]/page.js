import { getCaseStudyBySlug, caseStudies } from '@/data/caseStudies';
import { notFound } from 'next/navigation';
import CaseStudyHero from '@/components/CaseStudy/CaseStudyHero';
import CaseStudyBrief from '@/components/CaseStudy/CaseStudyBrief';
import CaseStudyOverview from '@/components/CaseStudy/CaseStudyOverview';
import CaseStudyHighlight from '@/components/CaseStudy/CaseStudyHighlight';
import CaseStudySolution from '@/components/CaseStudy/CaseStudySolution';
import CaseStudyResults from '@/components/CaseStudy/CaseStudyResults';
import CaseStudyTechnologies from '@/components/CaseStudy/CaseStudyTechnologies';
import CaseStudyCTA from '@/components/CaseStudy/CaseStudyCTA';
import NextProjectNav from '@/components/CaseStudy/NextProjectNav';

// Generate metadata for SEO
export async function generateMetadata({ params }) {
	const { slug } = await params;
	const project = getCaseStudyBySlug(slug);

	if (!project) {
		return {
			title: 'Case Study Not Found | ProCraft',
		};
	}

	return {
		title: `${project.title} - Case Study | ProCraft`,
		description: project.description,
		openGraph: {
			title: `${project.title} - Case Study | ProCraft`,
			description: project.tagline,
			images: [project.heroImage],
		},
	};
}

// Generate static params for all case studies at build time
export async function generateStaticParams() {
	return caseStudies.map((study) => ({
		slug: study.slug,
	}));
}

export default async function CaseStudyPage({ params }) {
	const { slug } = await params;
	const project = getCaseStudyBySlug(slug);

	// If no project found, return 404
	if (!project) {
		notFound();
	}

	return (
		<>
			{/* 1. Hero Section */}
			<CaseStudyHero project={project} />

			{/* 2. The Brief Section - Comprehensive brief with metadata */}
			<CaseStudyBrief
				briefText={project.briefText}
				client={project.client}
				clientLogo={project.clientLogo}
				clientDescription={project.clientDescription}
				duration={project.duration}
				role={project.role}
				services={project.services}
				liveUrl={project.liveUrl}
			/>

			{/* 3. Overview & Challenge Section */}
			<CaseStudyOverview project={project} />

			{/* 4. Highlight Statement - Key achievement or characteristic */}
			<CaseStudyHighlight statement={project.highlightStatement} />

			{/* 5. Solution Highlights Section */}
			<CaseStudySolution project={project} />

			{/* 6. The Results Section - Key metrics & live website link */}
			<CaseStudyResults project={project} />

			{/* 7. Technologies Section - Tech stack */}
			<CaseStudyTechnologies project={project} />

			{/* 8. Call to Action - HOW CAN WE HELP? */}
			<CaseStudyCTA />

			{/* 9. Next Project Navigation - Carousel */}
			<NextProjectNav currentSlug={slug} />
		</>
	);
}
