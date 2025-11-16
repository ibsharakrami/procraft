'use client';

import React, { useState } from 'react';

export default function PricingComparisonTable() {
	const [selectedPackage, setSelectedPackage] = useState('standard');

	const comparisonData = {
		categories: [
			{
				name: 'Pricing & Billing',
				features: [
					{
						name: 'Monthly Investment',
						starter: 'AED 1,249',
						standard: 'AED 2,499',
						business: 'AED 3,999',
					},
					{
						name: 'Payment Type',
						starter: 'One Time',
						standard: 'One Time',
						business: 'One Time',
					},
					{
						name: 'Minimum Commitment',
						starter: '3 Months',
						standard: '3 Months',
						business: '3 Months',
					},
				],
			},
			{
				name: 'Content Creation',
				features: [
					{
						name: 'Social Media Posts',
						starter: '9 Posts',
						standard: '14 Posts',
						business: '20 Posts',
					},
					{
						name: 'Video Reels/Stories (15-30s)',
						starter: '3 Reels',
						standard: '6 Reels',
						business: '10 Reels',
					},
					{
						name: 'High-Quality Images & Videos',
						starter: true,
						standard: true,
						business: true,
					},
					{
						name: 'Industry-Specific Copyright Free Content',
						starter: true,
						standard: true,
						business: true,
					},
				],
			},
			{
				name: 'Platform Coverage',
				features: [
					{
						name: 'Facebook',
						starter: true,
						standard: true,
						business: true,
					},
					{
						name: 'Instagram',
						starter: true,
						standard: true,
						business: true,
					},
					{
						name: 'Google My Business',
						starter: false,
						standard: true,
						business: true,
					},
					{
						name: 'LinkedIn',
						starter: false,
						standard: true,
						business: true,
					},
				],
			},
			{
				name: 'Phase 1: Social Media Strategy',
				features: [
					{
						name: '1-1 Consultation (Audit & Recommendations)',
						starter: true,
						standard: true,
						business: true,
					},
					{
						name: 'Competitive Analysis',
						starter: true,
						standard: true,
						business: true,
					},
					{
						name: 'Strategy & Mood Board Creation',
						starter: true,
						standard: true,
						business: true,
					},
				],
			},
			{
				name: 'Phase 2: Setup & Optimization',
				features: [
					{
						name: 'Platform Integration',
						starter: true,
						standard: true,
						business: true,
					},
					{
						name: 'Logo Resizing & Banner Design',
						starter: true,
						standard: true,
						business: true,
					},
					{
						name: 'Bio Creation with #hashtags',
						starter: true,
						standard: true,
						business: true,
					},
					{
						name: 'Instagram Highlight Designs',
						starter: true,
						standard: true,
						business: true,
					},
				],
			},
			{
				name: 'Phase 3: Monthly Optimization',
				features: [
					{
						name: 'Daily Monitoring',
						starter: true,
						standard: true,
						business: true,
					},
					{
						name: 'Post Design per Month',
						starter: '8 Designs',
						standard: '14 Designs',
						business: '20 Designs',
					},
					{
						name: 'Animated Reels/Stories',
						starter: '4 Reels',
						standard: '6 Reels',
						business: '10 Reels',
					},
					{
						name: 'Catchy Captions',
						starter: true,
						standard: true,
						business: true,
					},
					{
						name: 'Careful #hashtags Selection',
						starter: true,
						standard: true,
						business: true,
					},
				],
			},
			{
				name: 'Phase 4: Reporting & Support',
				features: [
					{
						name: 'Content Creation Calendar',
						starter: true,
						standard: true,
						business: true,
					},
					{
						name: 'Community Management',
						starter: true,
						standard: true,
						business: true,
					},
					{
						name: 'Monthly Progress Report',
						starter: true,
						standard: true,
						business: true,
					},
					{
						name: 'Dedicated Account Manager',
						starter: true,
						standard: true,
						business: true,
					},
					{
						name: 'Support Channels',
						starter: 'Email',
						standard: 'Email, Call, Zoom',
						business: 'Email, Call, Zoom',
					},
				],
			},
		],
	};

	const renderValue = (value) => {
		if (value === true) {
			return (
				<svg className='w-6 h-6 text-green-500 mx-auto' fill='currentColor' viewBox='0 0 20 20'>
					<path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
				</svg>
			);
		}
		if (value === false) {
			return (
				<svg className='w-6 h-6 text-gray-300 mx-auto' fill='currentColor' viewBox='0 0 20 20'>
					<path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' />
				</svg>
			);
		}
		return <span className='text-sm text-gray-700 font-medium'>{value}</span>;
	};

	return (
		<section className='relative bg-white py-16 md:py-24'>
			<div className='mx-auto max-w-7xl px-6 md:px-[96px]'>
				{/* Section Header */}
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						Complete Feature Comparison
					</h2>
					<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
						Compare all features across our packages to find the perfect fit for your business needs.
					</p>
				</div>

				{/* Mobile: Package Selector */}
				<div className='md:hidden mb-8'>
					<div className='flex gap-2'>
						{['starter', 'standard', 'business'].map((pkg) => (
							<button
								key={pkg}
								onClick={() => setSelectedPackage(pkg)}
								className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all ${
									selectedPackage === pkg
										? 'bg-[#10367D] text-white'
										: 'bg-gray-100 text-gray-600'
								}`}
							>
								{pkg.charAt(0).toUpperCase() + pkg.slice(1)}
								{pkg === 'standard' && (
									<span className='block text-xs mt-1'>Recommended</span>
								)}
							</button>
						))}
					</div>
				</div>

				{/* Desktop: Full Comparison Table */}
				<div className='hidden md:block overflow-x-auto'>
					<table className='w-full border-collapse'>
						<thead className='sticky top-0 bg-white z-10'>
							<tr className='border-b-2 border-gray-200'>
								<th className='text-left p-4 font-bold text-gray-900 w-1/3'>
									Feature
								</th>
								<th className='text-center p-4 font-bold text-gray-900 w-1/6'>
									<div className='flex flex-col items-center'>
										<span>Starter</span>
										<span className='text-sm font-normal text-gray-500 mt-1'>AED 1,249</span>
									</div>
								</th>
								<th className='text-center p-4 font-bold text-white bg-[#10367D] w-1/6'>
									<div className='flex flex-col items-center'>
										<span>Standard</span>
										<span className='text-xs bg-[#74B4D9] px-2 py-1 rounded-full mt-1'>RECOMMENDED</span>
										<span className='text-sm font-normal text-white/90 mt-1'>AED 2,499</span>
									</div>
								</th>
								<th className='text-center p-4 font-bold text-gray-900 w-1/6'>
									<div className='flex flex-col items-center'>
										<span>Business</span>
										<span className='text-sm font-normal text-gray-500 mt-1'>AED 3,999</span>
									</div>
								</th>
							</tr>
						</thead>
						<tbody>
							{comparisonData.categories.map((category, catIndex) => (
								<React.Fragment key={`cat-${catIndex}`}>
									{/* Category Header */}
									<tr className='bg-gray-50'>
										<td colSpan='4' className='p-4 font-bold text-gray-900 text-sm uppercase tracking-wide'>
											{category.name}
										</td>
									</tr>
									{/* Category Features */}
									{category.features.map((feature, featIndex) => (
										<tr
											key={`feat-${catIndex}-${featIndex}`}
											className='border-b border-gray-100 hover:bg-gray-50 transition-colors'
										>
											<td className='p-4 text-sm text-gray-700'>{feature.name}</td>
											<td className='p-4 text-center'>{renderValue(feature.starter)}</td>
											<td className='p-4 text-center bg-blue-50/50'>{renderValue(feature.standard)}</td>
											<td className='p-4 text-center'>{renderValue(feature.business)}</td>
										</tr>
									))}
								</React.Fragment>
							))}
						</tbody>
					</table>
				</div>

				{/* Mobile: Selected Package Details */}
				<div className='md:hidden'>
					<div className='bg-white rounded-xl border-2 border-gray-200 overflow-hidden'>
						{/* Package Header */}
						<div className={`p-6 text-center ${
							selectedPackage === 'standard' ? 'bg-[#10367D] text-white' : 'bg-gray-50'
						}`}>
							<h3 className={`text-2xl font-bold mb-2 ${
								selectedPackage === 'standard' ? 'text-white' : 'text-gray-900'
							}`}>
								{selectedPackage.charAt(0).toUpperCase() + selectedPackage.slice(1)}
							</h3>
							<p className={`text-3xl font-bold ${
								selectedPackage === 'standard' ? 'text-white' : 'text-gray-900'
							}`}>
								AED {selectedPackage === 'starter' ? '1,249' : selectedPackage === 'standard' ? '2,499' : '3,999'}
							</p>
						</div>

						{/* Features List */}
						<div className='p-6'>
							{comparisonData.categories.map((category, catIndex) => (
								<div key={catIndex} className='mb-6 last:mb-0'>
									<h4 className='font-bold text-gray-900 text-sm uppercase tracking-wide mb-3 pb-2 border-b border-gray-200'>
										{category.name}
									</h4>
									<ul className='space-y-2'>
										{category.features.map((feature, featIndex) => (
											<li key={featIndex} className='flex items-center justify-between text-sm'>
												<span className='text-gray-700'>{feature.name}</span>
												<span className='ml-3 flex-shrink-0'>
													{renderValue(feature[selectedPackage])}
												</span>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Note */}
				<div className='mt-8 text-center'>
					<p className='text-sm text-gray-500 italic'>
						All packages include a minimum 3-month billing cycle. Custom solutions available upon request.
					</p>
				</div>
			</div>
		</section>
	);
}
