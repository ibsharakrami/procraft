import { pricingPackages } from '@/data/pricingData';
import Link from 'next/link';
import PricingComparisonTable from '@/components/Pricing/PricingComparisonTable';
import PricingFAQ from '@/components/Pricing/PricingFAQ';
import PricingHero from '@/components/Pricing/PricingHero';

export const metadata = {
	title: 'Pricing Plans | ProCraft Digital Marketing Packages',
	description: 'Explore our comprehensive digital marketing packages. From Starter to Business plans, find the perfect solution for your social media marketing needs.',
};

export default function PricingPage() {
	return (
		<main className='min-h-screen bg-white'>
			{/* Hero Section */}
			<PricingHero />

			{/* Pricing Cards Overview */}
			<section className='relative bg-[#0A1628] py-20 md:py-28 overflow-visible'>
				<div className='mx-auto max-w-7xl px-6 md:px-[96px]'>
					<div className='flex flex-col md:flex-row justify-between gap-8 items-stretch'>
						{pricingPackages.map((pkg, index) => (
							<div
								key={pkg.id}
								className={`relative bg-white rounded-2xl border-2 p-8 pb-8 flex-1 flex flex-col ${
									pkg.featured 
										? 'border-[#10367D] shadow-2xl md:scale-105 z-10' 
										: 'border-gray-200 shadow-lg z-0'
								}`}
								style={{ minHeight: 'fit-content' }}
							>
								{/* Badge */}
								{pkg.badge && (
									<div className='absolute -top-4 left-1/2 -translate-x-1/2'>
										<span className='bg-[#74B4D9] text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-wide'>
											{pkg.badge}
										</span>
									</div>
								)}

								{/* Top Content */}
								<div className='flex-grow'>
									{/* Package Header */}
									<div className='text-center mb-6'>
										<h2 className='text-2xl font-bold text-gray-900 mb-3'>
											{pkg.name}
										</h2>
										<div className='mb-2'>
											<span className='text-5xl font-bold text-gray-900'>
												AED {pkg.price}
											</span>
										</div>
										<p className='text-sm text-[#10367D] font-medium mb-3'>
											{pkg.period}
										</p>
										<p className='text-sm text-gray-600 leading-relaxed px-2'>
											{pkg.description}
										</p>
									</div>

									{/* Key Features */}
									<div className='mb-6'>
										<ul className='space-y-2.5'>
											{pkg.keyFeatures.map((feature, idx) => (
												<li key={idx} className='flex items-start gap-2.5 text-sm text-gray-700'>
													<svg className='w-5 h-5 text-[#74B4D9] flex-shrink-0 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
														<path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
													</svg>
													<span>{feature}</span>
												</li>
											))}
										</ul>
									</div>

									{/* Specs */}
									<div className='grid grid-cols-3 gap-3 py-4 border-t border-b border-gray-200'>
										<div className='text-center'>
											<p className='text-xs text-gray-500 uppercase tracking-wide mb-1'>{pkg.specs[0].label}</p>
											<p className='text-base font-bold text-gray-900'>{pkg.specs[0].value.split(' ')[0]}</p>
											<p className='text-xs text-gray-600'>{pkg.specs[0].value.split(' ').slice(1).join(' ')}</p>
										</div>
										<div className='text-center'>
											<p className='text-xs text-gray-500 uppercase tracking-wide mb-1'>{pkg.specs[1].label}</p>
											<p className='text-base font-bold text-gray-900'>{pkg.specs[1].value.split(' ')[0]}</p>
											<p className='text-xs text-gray-600'>{pkg.specs[1].value.split(' ').slice(1).join(' ')}</p>
										</div>
										<div className='text-center'>
											<p className='text-xs text-gray-500 uppercase tracking-wide mb-1'>{pkg.specs[2].label}</p>
											<p className='text-base font-bold text-gray-900'>{pkg.specs[2].value}</p>
										</div>
									</div>
								</div>

								{/* CTA Button */}
								<div className='mt-6 pt-2 flex-shrink-0'>
									<button
										className={`w-full py-3.5 px-6 rounded-lg font-semibold transition-all duration-300 mb-3 ${
											pkg.featured
												? 'bg-[#10367D] text-white hover:bg-[#0a2454] shadow-lg'
												: 'bg-gray-900 text-white hover:bg-gray-800'
										}`}
									>
										{pkg.buttonText}
									</button>
									<Link 
										href='#comparison-table'
										className='flex items-center justify-center gap-1 text-sm text-gray-600 hover:text-[#10367D] transition-colors'
									>
										View full package details
										<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
										</svg>
									</Link>
								</div>
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
							href='tel:+971555624052'
							className='inline-block bg-[#74B4D9] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#5a9bc4] transition-colors'
						>
							Call Us: +971 55 562 4052
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}
