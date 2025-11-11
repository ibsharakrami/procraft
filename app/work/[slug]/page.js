import { getCaseStudyBySlug, caseStudies } from '@/data/caseStudies';
import { notFound } from 'next/navigation';
import CaseStudyHero from '@/components/CaseStudy/CaseStudyHero';
import CaseStudyOverview from '@/components/CaseStudy/CaseStudyOverview';
import CaseStudySolution from '@/components/CaseStudy/CaseStudySolution';
import CaseStudyResults from '@/components/CaseStudy/CaseStudyResults';
import CaseStudyTechnologies from '@/components/CaseStudy/CaseStudyTechnologies';
import CaseStudyGallery from '@/components/CaseStudy/CaseStudyGallery';
import NextProjectNav from '@/components/CaseStudy/NextProjectNav';

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const project = getCaseStudyBySlug(params.slug);

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

export default function CaseStudyPage({ params }) {
  const project = getCaseStudyBySlug(params.slug);

  // If no project found, return 404
  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <CaseStudyHero project={project} />

      {/* Overview Section */}
      <CaseStudyOverview project={project} />

      {/* Solution Section */}
      <CaseStudySolution project={project} />

      {/* Results Section */}
      <CaseStudyResults project={project} />

      {/* Gallery Section (placeholder for now) */}
      <CaseStudyGallery project={project} />

      {/* Technologies Section */}
      <CaseStudyTechnologies project={project} />

      {/* Next Project Navigation */}
      <NextProjectNav currentSlug={params.slug} />
    </>
  );
}
