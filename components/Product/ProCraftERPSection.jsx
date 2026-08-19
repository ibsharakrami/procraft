'use client';

import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';
import { procraftERP, ERP_URL } from '@/data/productData';

/**
 * Homepage section for ProCraft ERP.
 *
 * The links here are plain <a href> elements rendered into the static export,
 * so they are visible to crawlers without running any JavaScript — this is the
 * in-content link from procraft.ae to the erp.procraft.ae subdomain.
 *
 * rel is "noopener" and deliberately NOT "nofollow" or "noreferrer": we want the
 * link followed, and we want the referrer preserved for analytics.
 */
export default function ProCraftERPSection() {
	const softwareSchema = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		'@id': `${ERP_URL}/#software`,
		name: procraftERP.name,
		url: ERP_URL,
		applicationCategory: 'BusinessApplication',
		applicationSubCategory: 'Inventory & Accounting Software',
		operatingSystem: 'Web browser',
		description: procraftERP.summary,
		inLanguage: ['en', 'ar'],
		areaServed: [
			{ '@type': 'Country', name: 'United Arab Emirates' },
			{ '@type': 'Country', name: 'India' },
		],
		offers: {
			'@type': 'Offer',
			url: procraftERP.links.pricing,
			price: '99',
			priceCurrency: 'AED',
			description: 'Starting price per month. Free for 15 days, no card required.',
			availability: 'https://schema.org/InStock',
		},
		publisher: {
			'@type': 'Organization',
			'@id': 'https://procraft.ae/#organization',
			name: 'ProCraft',
			url: 'https://procraft.ae',
		},
	};

	return (
		<section
			data-theme='light'
			className='relative bg-white py-16 md:py-24 lg:py-32'
			aria-labelledby='procraft-erp-heading'
		>
			<div className='mx-auto max-w-7xl px-6 md:px-[96px]'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
					{/* Left — copy and calls to action */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.6 }}
					>
						<p className='text-[#74B4D9] text-xs md:text-sm uppercase tracking-wider mb-6 md:mb-8 leading-relaxed border-l-4 border-[#74B4D9] pl-4'>
							Our Product
						</p>

						<h2 id='procraft-erp-heading' className='mb-6'>
							<a
								href={ERP_URL}
								target='_blank'
								rel='noopener'
								className='group inline-block'
							>
								<span className='block text-4xl md:text-5xl lg:text-6xl font-bold text-black font-blatant leading-tight group-hover:text-[#10367D] transition-colors duration-300'>
									ProCraft ERP
								</span>{' '}
								<span className='mt-2 block text-xl md:text-2xl lg:text-3xl font-semibold text-[#10367D] leading-tight'>
									Inventory &amp; Accounting Software
									<ArrowUpRight
										className='inline-block align-middle ml-2 -mt-1 w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'
										aria-hidden='true'
									/>
								</span>
							</a>
						</h2>

						<p className='text-gray-600 text-base md:text-lg font-light leading-relaxed mb-8 max-w-xl'>
							{procraftERP.summary}
						</p>

						{/* Facts */}
						<dl className='grid grid-cols-3 gap-x-4 gap-y-4 mb-10 max-w-lg'>
							{procraftERP.facts.map((fact) => (
								<div key={fact.label}>
									<dt className='text-2xl md:text-3xl font-bold text-black font-blatant'>
										{fact.value}
									</dt>
									<dd className='text-xs md:text-sm text-gray-500 uppercase tracking-wide'>
										{fact.label}
									</dd>
								</div>
							))}
						</dl>

						<div className='flex flex-wrap items-center gap-4'>
							<a
								href={ERP_URL}
								target='_blank'
								rel='noopener'
								className='inline-flex items-center gap-2 bg-[#10367D] text-white px-7 py-3.5 text-sm md:text-base font-medium hover:bg-[#0c2a63] transition-colors duration-300'
							>
								Start a free trial
								<ArrowUpRight className='w-4 h-4' aria-hidden='true' />
							</a>
							<a
								href={procraftERP.links.demo}
								target='_blank'
								rel='noopener'
								className='inline-flex items-center gap-2 border border-[#10367D]/30 text-[#10367D] px-7 py-3.5 text-sm md:text-base font-medium hover:border-[#10367D] hover:bg-[#10367D]/5 transition-colors duration-300'
							>
								Try the live demo
							</a>
							<a
								href={procraftERP.links.pricing}
								target='_blank'
								rel='noopener'
								className='text-sm md:text-base text-gray-600 hover:text-[#10367D] underline underline-offset-4 transition-colors duration-300'
							>
								See ERP pricing
							</a>
						</div>
					</motion.div>

					{/* Right — feature panel */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.6, delay: 0.15 }}
						className='bg-[#10367D] text-white p-8 md:p-10 lg:p-12'
					>
						<p className='text-[#74B4D9] text-xs uppercase tracking-[0.2em] mb-8'>
							What it does
						</p>
						<ul className='space-y-5'>
							{procraftERP.features.map((feature) => (
								<li key={feature} className='flex items-start gap-4'>
									<span className='mt-1 shrink-0 w-5 h-5 rounded-full bg-[#74B4D9]/20 flex items-center justify-center'>
										<Check
											className='w-3 h-3 text-[#74B4D9]'
											strokeWidth={3}
											aria-hidden='true'
										/>
									</span>
									<span className='text-white/85 text-sm md:text-base font-light leading-relaxed'>
										{feature}
									</span>
								</li>
							))}
						</ul>

						<div className='mt-10 pt-8 border-t border-white/20'>
							<p className='text-white/60 text-xs md:text-sm leading-relaxed'>
								Already running the daily trade of multi-branch retailers in the
								UAE and India.
							</p>
							<a
								href={procraftERP.links.inventory}
								target='_blank'
								rel='noopener'
								className='mt-4 inline-flex items-center gap-2 text-[#74B4D9] hover:text-white text-sm font-medium transition-colors duration-300'
							>
								Explore inventory management
								<ArrowUpRight className='w-4 h-4' aria-hidden='true' />
							</a>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Structured data — associates the ERP product with the ProCraft organization */}
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
			/>
		</section>
	);
}
