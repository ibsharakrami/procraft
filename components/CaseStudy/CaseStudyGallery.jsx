'use client';

import Container from '@/components/ui/Container';

export default function CaseStudyGallery({ project }) {
  // Placeholder component for future gallery implementation
  // Can be expanded later when gallery images are added to case study data

  return null;

  // Future implementation example:
  // return (
  //   <section className="bg-[#EBEBEB] py-16 md:py-24">
  //     <Container size="wide">
  //       <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12 text-center">
  //         Project Gallery
  //       </h2>
  //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  //         {project.gallery?.map((image, index) => (
  //           <div key={index} className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
  //             <img src={image.url} alt={image.caption} className="w-full h-full object-cover" />
  //           </div>
  //         ))}
  //       </div>
  //     </Container>
  //   </section>
  // );
}
