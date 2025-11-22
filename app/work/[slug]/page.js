import { getCaseStudyBySlug, caseStudies } from '@/data/caseStudies';
import { notFound } from 'next/navigation';
import CaseStudyHero from '@/components/CaseStudy/CaseStudyHero';
import CaseStudyBrief from '@/components/CaseStudy/CaseStudyBrief';
import CaseStudyOverview from '@/components/CaseStudy/CaseStudyOverview';
import CaseStudyHighlight from '@/components/CaseStudy/CaseStudyHighlight';
import CaseStudyProcess from '@/components/CaseStudy/CaseStudyProcess';
import CaseStudySolution from '@/components/CaseStudy/CaseStudySolution';
import CaseStudyResults from '@/components/CaseStudy/CaseStudyResults';
import CaseStudyOutcome from '@/components/CaseStudy/CaseStudyOutcome';
import CaseStudyTestimonial from '@/components/CaseStudy/CaseStudyTestimonial';
import CaseStudyTechnologies from '@/components/CaseStudy/CaseStudyTechnologies';
import CaseStudyCTA from '@/components/CaseStudy/CaseStudyCTA';
import CaseStudyRelated from '@/components/CaseStudy/CaseStudyRelated';
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

			{/* 2. The Brief Section - New comprehensive brief with metadata */}
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

			{/* 3. Ove\rview & Challenge Section - Existing */}
			<CaseStudyOverview project={project} />

			{/* 4. Highlight Statement - Key achievement or characteristic */}
			<CaseStudyHighlight statement={project.highlightStatement} />

			{/* 5. The Process Section - New step-by-step methodology */}
			<CaseStudyProcess processSteps={project.processSteps} />

			{/* 6. Solution Highlights Section - Existing */}
			<CaseStudySolution project={project} />

			{/* 7. The Results Section - Key metrics & live website link */}
			<CaseStudyResults project={project} />

			{/* 8. The Outcome Section - New detailed outcomes */}
			<CaseStudyOutcome outcomes={project.outcomes} />

			{/* 9. Client Testimonial Section - New testimonial */}
			<CaseStudyTestimonial testimonial={project.testimonial} />

			{/* 10. Technologies Section - Existing tech stack */}
			<CaseStudyTechnologies project={project} />

			{/* 11. Call to Action - HOW CAN WE HELP? */}
			<CaseStudyCTA />

			{/* 12. Related Projects Section - New recommendations */}
			<CaseStudyRelated currentSlug={slug} />

			{/* 13. Next Project Navigation - Existing carousel */}
			<NextProjectNav currentSlug={slug} />
		</>
	);
}
