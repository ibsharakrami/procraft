/**
 * ProCraft ERP — our own SaaS product, hosted on the erp.procraft.ae subdomain.
 *
 * Kept in one place because the same links appear in three crawlable spots:
 * the homepage product section, the footer, and the full-screen nav overlay.
 * All copy and figures below are taken from the live erp.procraft.ae site.
 */

export const ERP_URL = 'https://erp.procraft.ae';

export const procraftERP = {
	name: 'ProCraft ERP',
	url: ERP_URL,
	tagline: 'Inventory & Accounting Software',
	summary:
		'One system for stock, billing and accounts — built for shops, wholesalers and multi-branch retail across the UAE and India. See stock in every branch, send VAT invoices, and keep the books up to date without re-typing anything.',
	features: [
		'Live stock across every branch, counted and costed on every hop',
		'VAT-compliant invoicing that posts straight to the accounts',
		'Purchases, transfers, returns and payments in one ledger',
		'Shopify inventory sync',
		'Full English and Arabic interface',
	],
	facts: [
		{ value: 'AED 99', label: 'from, per month' },
		{ value: '15 days', label: 'free — no card' },
		{ value: '2', label: 'countries' },
	],
	// Deep links — every one of these is in the erp.procraft.ae sitemap.
	links: {
		pricing: `${ERP_URL}/pricing`,
		demo: `${ERP_URL}/demo`,
		inventory: `${ERP_URL}/inventory-management-software-uae`,
		pos: `${ERP_URL}/pos-system-uae`,
		vat: `${ERP_URL}/vat-accounting-software-uae`,
	},
};

/** Footer "Product" column. */
export const productLinks = [
	{ href: ERP_URL, label: 'ProCraft ERP' },
	{ href: procraftERP.links.inventory, label: 'Inventory Management' },
	{ href: procraftERP.links.pos, label: 'POS System UAE' },
	{ href: procraftERP.links.vat, label: 'VAT Accounting Software' },
	{ href: procraftERP.links.pricing, label: 'ERP Pricing' },
];
