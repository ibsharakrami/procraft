import { pricingPackages } from '@/data/pricingData';
import Link from 'next/link';
import PricingComparisonTable from '@/components/Pricing/PricingComparisonTable';
import PricingFAQ from '@/components/Pricing/PricingFAQ';

export const metadata = {
	title: 'Pricing Plans | ProCraft Digital Marketing Packages',
	description: 'Explore our comprehensive digital marketing packages. From Starter to Business plans, find the perfect solution for your social media marketing needs.',
};

export default function PricingPage() {
	return (
		<main className='min-h-screen bg-white'>
			{/* Hero Section */}
			<section className='relative bg-gradient-to-br from-[#10367D] to-[#074291] py-20 md:py-28'>
				<div className='mx-auto max-w-7xl px-6 md:px-[96px]'>
					<div className='text-center'>
						<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
							Choose Your Perfect Plan
						</h1>
						<p className='text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed'>
							Transparent pricing for world-class digital marketing services. All packages include high-quality content, dedicated account management, and proven strategies to grow your business.
						</p>
					</div>
				</div>
			</section>

			{/* Pricing Cards Overview */}
			<section className='relative bg-gray-50 py-16 md:py-24'>
				<div className='mx-auto max-w-7xl px-6 md:px-[96px]'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{pricingPackages.map((pkg, index) => (
							<div
								key={pkg.id}
								className={`relative bg-white rounded-2xl border-2 p-8 ${
									pkg.featured 
										? 'border-[#10367D] shadow-2xl scale-105' 
										: 'border-gray-200 shadow-lg'
								}`}
							>
								{/* Badge */}
								{pkg.badge && (
									<div className='absolute -top-4 left-1/2 -translate-x-1/2'>
										<span className='bg-[#74B4D9] text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-wide'>
											{pkg.badge}
										</span>
									</div>
								)}

								{/* Package Header */}
								<div className='text-center mb-8'>
									<h2 className='text-2xl font-bold text-gray-900 mb-4'>
										{pkg.name}
									</h2>
									<div className='mb-4'>
										<span className='text-5xl font-bold text-gray-900'>
											AED {pkg.price}
										</span>
									</div>
									<p className='text-sm text-[#10367D] font-medium mb-4'>
										{pkg.period}
									</p>
									<p className='text-sm text-gray-600 leading-relaxed'>
										{pkg.description}
									</p>
								</div>

								{/* Key Features */}
								<div className='mb-8'>
									<h3 className='text-sm font-bold text-gray-900 uppercase tracking-wide mb-4'>
										Key Features
									</h3>
									<ul className='space-y-3'>
										{pkg.keyFeatures.map((feature, idx) => (
											<li key={idx} className='flex items-start gap-3'>
												<svg className='w-5 h-5 text-[#74B4D9] flex-shrink-0 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
													<path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
												</svg>
												<span className='text-sm text-gray-700'>{feature}</span>
											</li>
										))}
									</ul>
								</div>

								{/* CTA Button */}
								<button
									className={`w-full py-3.5 px-6 rounded-lg font-semibold transition-all duration-300 ${
										pkg.featured
											? 'bg-[#10367D] text-white hover:bg-[#0a2454] shadow-lg'
											: 'bg-gray-900 text-white hover:bg-gray-800'
									}`}
								>
									{pkg.buttonText}
								</button>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Comparison Table */}
			<PricingComparisonTable />

			{/* Add-Ons Section */}
			<section className='relative bg-gray-50 py-16 md:py-24'>
				<div className='mx-auto max-w-7xl px-6 md:px-[96px]'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
							Additional Services (Add-Ons)
						</h2>
						<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
							Enhance your package with our premium add-on services
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{pricingPackages[0].fullDetails.addOns.map((addon, idx) => (
							<div key={idx} className='bg-white rounded-xl p-6 border border-gray-200 hover:border-[#10367D] transition-colors'>
								<div className='flex items-start gap-3'>
									<svg className='w-6 h-6 text-[#74B4D9] flex-shrink-0 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
										<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
									</svg>
									<span className='text-sm text-gray-700 font-medium'>{addon}</span>
								</div>
							</div>
						))}
					</div>

					<div className='mt-12 text-center'>
						<Link
							href='/contact'
							className='inline-block bg-[#10367D] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0a2454] transition-colors'
						>
							Contact Us for Custom Add-Ons Pricing
						</Link>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<PricingFAQ />

			{/* CTA Section */}
			<section className='relative bg-gradient-to-br from-[#10367D] to-[#074291] py-16 md:py-20'>
				<div className='mx-auto max-w-4xl px-6 md:px-[96px] text-center'>
					<h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
						Not Sure Which Plan Is Right for You?
					</h2>
					<p className='text-lg text-white/90 mb-8 leading-relaxed'>
						Let's talk! Our experts will help you choose the perfect package based on your business goals, budget, and growth objectives.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link
							href='/contact'
							className='inline-block bg-white text-[#10367D] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
						>
							Schedule a Consultation
						</Link>
						<a
							href='tel:+971545866866'
							className='inline-block bg-[#74B4D9] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#5a9bc4] transition-colors'
						>
							Call Us: +971 545 866 866
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}
