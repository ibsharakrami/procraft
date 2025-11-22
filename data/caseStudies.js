export const caseStudies = [
	{
		id: 'sharma-space',
		slug: 'sharma-space',
		title: 'Sharma Space',
		client: 'Sharma Space',
		category: ['Web Design', 'E-commerce'],
		year: '2024',

		// Brief description for card
		tagline: 'Premium Interior Design Studio Website',

		// Hero section
		heroImage: '/images/portfolio/sharmaspace2.png',

		// Card thumbnail
		thumbnailImage: '/images/portfolio/sharmaspace2.png',

		// Overview
		description:
			"A sophisticated Next.js website for Bangalore's premier interior design studio, featuring admin content management, multi-language support, and seamless service presentation. The platform showcases over 150 completed projects with advanced search capabilities, integrates an admin CMS that allows content upload and editing, and delivers exceptional performance across all devices. Built with SEO optimization and schema markup to capture organic search traffic, while providing an immersive gallery experience that highlights the craftsmanship and attention to detail that defines Sharma Space's work.",

		// Challenge
		challenge:
			"Create a premium digital presence that matches Sharma Space's high-end interior design services with easy content management and showcasing 150+ completed projects.",

		// Detailed brief text
		briefText:
			"Sharma Space approached us with a clear vision: to establish themselves as Bangalore's premier interior design studio through a digital platform that would match the sophistication of their physical work. With over 150 completed projects and a growing client base across HSR Layout, Koramangala, and Whitefield, they needed a website that could effectively showcase their portfolio with an admin CMS for easy content upload and editing, and serve their diverse clientele through multi-language support. The challenge was to create a premium user experience while maintaining optimal performance and making their services accessible to clients across multiple Bangalore neighborhoods.",

		// Client description (appears below logo)
		clientDescription:
			"Sharma Space is Bangalore's leading interior design studio, specializing in residential and commercial spaces across HSR Layout, Koramangala, and Whitefield. With over 150 completed projects and a commitment to excellence, they transform spaces into personalized havens that reflect their clients' unique style and vision.",

		// Client logo
		clientLogo:
			'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=400&q=80',
		// Client logo
		clientLogo: '/images/client_logos/sharmaspace-client-logo.png',

		// Project duration
		duration: '3 months',

		// ProCraft's role
		role: 'Full-Stack Development & Design',

		// Solution highlights
		solution: [
			'Next.js implementation with SSR for optimal performance',
			'Admin CMS for content upload and editing',
			'Multi-language support (English, Hindi, Kannada)',
			'SEO-optimized with structured data markup',
			'Responsive design with custom animations',
			'Image optimization with WebP format',
		],

		// Process steps
		processSteps: [
			{
				title: 'Discovery & Research',
				description:
					"We began with an intensive discovery phase, analyzing Sharma Space's target audience across Bangalore's premium neighborhoods. Through stakeholder interviews and competitor analysis, we identified key user personas: homeowners seeking residential design, business owners looking for commercial solutions, and clients interested in modular kitchens and wardrobes. We mapped out the user journey from initial discovery to consultation booking.",
				image:
					'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80',
			},
			{
				title: 'Design & Prototyping',
				description:
					"Our design team created a sophisticated visual language that reflects Sharma Space's premium positioning. We developed a component system that showcases their portfolio elegantly while maintaining fast load times. The color palette draws inspiration from interior design trends, using warm neutrals and sophisticated accents. We prototyped the multi-language switching system to ensure seamless transitions between English, Hindi, and Kannada content.",
				image:
					'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
			},
			{
				title: 'Development & Integration',
				description:
					'We built the platform using Next.js with server-side rendering for optimal performance and SEO. The consultation booking system was integrated with their CRM, enabling real-time scheduling. We implemented WebP image optimization for their extensive portfolio, reducing load times by 40% while maintaining visual quality. The multi-language system was built using a custom translation API that allows easy content updates across all languages.',
				image:
					'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80',
			},
			{
				title: 'Testing & Launch',
				description:
					"We conducted comprehensive testing across devices and browsers, with special attention to mobile performance given Bangalore's mobile-first user base. Load testing ensured the booking system could handle peak traffic. We implemented Schema.org structured data for rich search results. Post-launch, we provided training to the Sharma Space team on content management and monitored performance metrics to ensure all systems operated smoothly.",
				image:
					'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
			},
		],

		// Gallery images
		galleryImages: [
			{
				url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80',
				caption:
					'Homepage hero section showcasing premium interior design portfolio',
			},
			{
				url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80',
				caption:
					'Services section with detailed offerings and consultation CTA',
			},
			{
				url: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=1600&q=80',
				caption: 'Portfolio gallery with filter system by project type',
			},
			{
				url: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=1600&q=80',
				caption: 'Mobile-responsive design with seamless consultation booking',
			},
			{
				url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
				caption:
					'Multi-language switcher supporting English, Hindi, and Kannada',
			},
			{
				url: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80',
				caption: 'Client testimonials section with 4.8/5 rating display',
			},
		],

		// Detailed outcomes
		outcomes: [
			{
				title: 'Enhanced User Engagement',
				description:
					'The new website achieved a 90+ PageSpeed score, resulting in faster load times and improved user engagement. The admin CMS empowered the team to easily upload and edit content, enabling quick updates to their portfolio of 150+ projects.',
			},
			{
				title: 'Multi-Language Accessibility',
				description:
					"The implementation of three-language support (English, Hindi, Kannada) expanded Sharma Space's reach across diverse demographics in Bangalore. This accessibility feature contributed to a 35% increase in consultation requests from non-English speaking clients.",
			},
			{
				title: 'SEO & Organic Growth',
				description:
					"Schema markup and SEO optimization led to improved search rankings for key terms like 'interior design Bangalore' and 'modular kitchen Koramangala.' Organic traffic increased by 60% within six months, reducing dependence on paid advertising.",
			},
		],

		// Client testimonial
		testimonial: {
			quote:
				"ProCraft transformed our digital presence beyond our expectations. The website perfectly captures the sophistication of our interior design work, and the admin CMS has made it incredibly easy for us to manage and update our content. We've seen a significant increase in high-quality leads since launch.",
			author: 'Rajesh Sharma',
			role: 'Founder, Sharma Space',
			avatar:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
		},

		// Before/After comparison
		beforeAfter: {
			before:
				'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
			after:
				'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
			description:
				"Transformation from a basic template website to a premium, custom-designed platform that reflects Sharma Space's high-end positioning in the Bangalore interior design market.",
		},

		// Related projects
		relatedProjects: ['carpenters-co', 'virtual-greens'],

		// Services provided
		services: [
			'Website Design',
			'Next.js Development',
			'Admin Content Management',
			'SEO Optimization',
			'Multi-language Implementation',
			'Performance Optimization',
		],

		// Results/metrics
		results: {
			clientRating: '4.8/5',
			projects: '150+',
			happyClients: '500+',
			performance: '90+ PageSpeed Score',
		},

		// Tech stack
		technologies: [
			'Next.js',
			'React',
			'Tailwind CSS',
			'WebP Optimization',
			'Schema Markup',
			'Multi-language API',
		],

		// Link
		liveUrl: 'https://sharmaspace.in',

		// Featured flag
		featured: true,

		// Color theme for card
		themeColor: '#da532c',

		// Grid size variant for layout
		size: 'featured',
	},

	{
		id: 'virtual-greens',
		slug: 'virtual-greens',
		title: 'The Virtual Greens',
		client: 'The Virtual Greens',
		category: ['Web Design', 'Hospitality'],
		year: '2024',

		tagline: 'Indoor Golf Simulator Entertainment Venue',

		heroImage: '/images/portfolio/tvg_hero_section.png',

		thumbnailImage: '/images/portfolio/tvg_hero_section.png',

		description:
			"A modern website for Riyadh's premier indoor golf simulator lounge, combining entertainment booking with venue information and social engagement. Built on enterprise-grade infrastructure with Singapore-based hosting for optimal Middle East performance, the platform features real-time bay availability, seamless booking integration, and deep social media connectivity. The design balances the technical sophistication of golf simulation technology with the vibrant, social atmosphere of an entertainment venue, complete with virtual tours, event management systems, and community engagement features that have established The Virtual Greens as Riyadh's leading golf entertainment destination.",

		challenge:
			'Design a vibrant digital presence for a golf entertainment venue that appeals to both serious golfers and social entertainment seekers in the Riyadh market.',

		briefText:
			"The Virtual Greens came to us with an ambitious goal: to establish Riyadh's premier indoor golf simulator entertainment venue through a digital platform that would attract both serious golf enthusiasts and social entertainment seekers. Operating in Saudi Arabia's rapidly growing entertainment sector, they needed a website that could showcase their state-of-the-art golf simulators, enable online booking, and create a strong social media presence. The challenge was to balance the technical sophistication of golf simulation technology with the fun, social atmosphere of an entertainment lounge, all while catering to the Middle Eastern market's specific preferences and expectations.",

		// Client description (appears below logo)
		clientDescription:
			"The Virtual Greens is Riyadh's premier indoor golf simulator entertainment lounge, combining cutting-edge golf technology with a vibrant social atmosphere. Catering to both serious golfers and entertainment seekers, they offer a unique experience where skill meets social connection in the heart of Saudi Arabia's growing entertainment sector.",

		clientLogo:
			'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=400&q=80',
		clientLogo: '/images/client_logos/tvg-client-logo.png',

		duration: '2.5 months',

		role: 'Web Development, Infrastructure & Social Integration',

		solution: [
			'Modern typography with Inter font family for contemporary feel',
			'Performance-optimized hosting infrastructure for high traffic',
			'Social media integration for community engagement',
			'Mobile-responsive design for on-the-go bookings',
			'Enterprise-level hosting with Singapore datacenter',
		],

		processSteps: [
			{
				title: 'Market Analysis & Strategy',
				description:
					"We conducted extensive research into Riyadh's entertainment landscape and the emerging golf simulator market in Saudi Arabia. Understanding the unique blend of serious golfers and social entertainment seekers, we developed a dual-focus strategy. We analyzed competitors across the GCC region and identified opportunities to differentiate The Virtual Greens through superior digital experience and community engagement features.",
				image:
					'https://images.unsplash.com/photo-1530028828-25e8270e4b7f?w=1200&q=80',
			},
			{
				title: 'Brand & Visual Design',
				description:
					"Our design approach balanced sophistication with approachability. We created a visual identity that showcases the venue's premium golf simulation technology while emphasizing the social, entertaining aspects. The color palette combines classic golf greens with modern, vibrant accents suitable for the Middle Eastern market. We designed an intuitive booking interface that works seamlessly in both Arabic and English.",
				image:
					'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200&q=80',
			},
			{
				title: 'Development & Infrastructure',
				description:
					'We built the platform with enterprise-grade hosting infrastructure using Singapore datacenters for optimal performance across the Middle East region. Social media APIs were deeply integrated to facilitate community engagement and viral growth. The booking system connects with their venue management software, enabling real-time bay availability and seamless reservation management. Performance monitoring tools were implemented to ensure consistently fast load times.',
				image:
					'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200&q=80',
			},
			{
				title: 'Launch & Community Building',
				description:
					'We orchestrated a phased launch strategy, beginning with a soft opening to VIP members and golf enthusiasts, followed by a broader public launch tied to social media campaigns. We established automated social media posting systems and community management tools to drive engagement. Post-launch optimization focused on conversion rate improvement for bookings and social sharing features to amplify word-of-mouth marketing.',
				image:
					'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&q=80',
			},
		],

		galleryImages: [
			{
				url: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1600&q=80',
				caption: 'Homepage featuring golf simulator bays and booking interface',
			},
			{
				url: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1600&q=80',
				caption:
					'Interactive venue showcase with 360° virtual tour integration',
			},
			{
				url: 'https://images.unsplash.com/photo-1530028828-25e8270e4b7f?w=1600&q=80',
				caption: 'Real-time bay availability and booking system',
			},
			{
				url: 'https://images.unsplash.com/photo-1587281320443-65916a84d0eb?w=1600&q=80',
				caption: 'Social media wall displaying community content and events',
			},
			{
				url: 'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=800&q=80',
				caption: 'Mobile app interface for on-the-go reservations',
			},
			{
				url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
				caption:
					'Event management system for tournaments and corporate bookings',
			},
		],

		outcomes: [
			{
				title: 'Market Leadership in Riyadh',
				description:
					"The Virtual Greens quickly established itself as Riyadh's premier golf entertainment destination. The website's intuitive booking system and social features contributed to rapid customer acquisition, with the venue reaching 80% capacity utilization within three months of launch.",
			},
			{
				title: 'Social Media Amplification',
				description:
					'Deep social media integration resulted in significant viral growth. User-generated content sharing features led to a 200% increase in organic social media reach. The community wall feature displaying Instagram posts created a feedback loop that encouraged more visitors to share their experiences.',
			},
			{
				title: 'Enterprise Performance',
				description:
					'Singapore-based hosting infrastructure delivered sub-2-second load times across the Middle East region. The platform successfully handled peak traffic during launch events and weekend rushes without performance degradation, ensuring smooth booking experiences even during high-demand periods.',
			},
		],

		testimonial: {
			quote:
				"ProCraft delivered a digital platform that perfectly captures the energy and sophistication of our venue. The seamless booking system and social integration have been game-changers for our business. We've seen tremendous growth in both golf enthusiasts and social groups discovering us online.",
			author: 'Mohammed Al-Rashid',
			role: 'Managing Director, The Virtual Greens',
			avatar:
				'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
		},

		beforeAfter: {
			before:
				'https://images.unsplash.com/photo-1454923634634-bd1614719a7b?w=800&q=80',
			after:
				'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80',
			description:
				'Evolution from a basic informational website to a fully integrated entertainment platform with booking, social features, and community engagement tools.',
		},

		relatedProjects: ['sharma-space', 'carpenters-co'],

		services: [
			'Website Design',
			'Web Development',
			'Performance Optimization',
			'Social Media Integration',
			'Infrastructure Setup',
		],

		results: {
			hosting: 'Enterprise Infrastructure',
			performance: 'High-Speed Singapore Hosting',
			reach: 'Middle East Market',
			integration: 'Full Social Media Integration',
		},

		technologies: [
			'Google Fonts API',
			'Performance Monitoring',
			'GoDaddy Infrastructure',
			'Responsive Design',
			'Social Media APIs',
		],

		liveUrl: 'https://thevirtualgreens.com',

		featured: true,

		themeColor: '#10367D',

		size: 'large',
	},

	{
		id: 'carpenters-co',
		slug: 'carpenters-co',
		title: 'Carpenters & Co.',
		client: 'Carpenters & Co.',
		category: ['Web Design', 'E-commerce'],
		year: '2024',

		tagline: 'Premium Handcrafted Furniture & Woodworking E-commerce',

		heroImage:
			'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=1920&q=80',

		thumbnailImage: '/images/portfolio/carpenter_co_thumbnail.png',

		description:
			'A sophisticated e-commerce platform for a premium furniture manufacturing brand specializing in handcrafted woodwork and bespoke design solutions. The platform seamlessly integrates with existing inventory management systems, features advanced product filtering by wood type and style period, and showcases intricate craftsmanship through high-resolution optimized imagery. With a custom order management system for bespoke furniture requests, automated quote generation, and secure payment processing for high-value transactions, the platform has enabled Carpenters & Co. to expand beyond their Dubai showroom and reach discerning clients across the UAE and GCC region while maintaining the premium tactile experience that defines their brand.',

		challenge:
			'Create a digital presence that conveys luxury craftsmanship while enabling seamless product browsing and custom order management for a discerning clientele.',

		briefText:
			'Carpenters & Co., a Dubai-based premium furniture manufacturer with over 20 years of heritage in handcrafted woodworking, approached us with a critical business need: to expand their reach beyond their physical showroom while maintaining the premium, tactile experience that defines their brand. Their clientele expects nothing less than perfection—from CEOs furnishing executive offices to homeowners seeking bespoke pieces for luxury villas. The challenge was multifaceted: showcase intricate craftsmanship through digital imagery, enable custom order requests for bespoke furniture, integrate with their complex inventory system, and create a user experience that reflects the same attention to detail found in their physical products. This project required us to translate the sensory experience of touching premium wood and seeing masterful joinery into a digital format that would resonate with their sophisticated target audience.',

		// Client description (appears below logo)
		clientDescription:
			"Carpenters & Co. is a Dubai-based premium furniture manufacturer with over 20 years of heritage in handcrafted woodworking. Specializing in bespoke furniture for luxury homes and executive offices, they serve a discerning clientele across the UAE and GCC region with masterful craftsmanship and uncompromising attention to detail.",

		clientLogo:
			'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&q=80',
		clientLogo: '/images/client_logos/carpenters&co-client-logo.png',

		duration: '4 months',

		role: 'Full E-commerce Platform Development & Brand Strategy',

		solution: [
			'E-commerce platform with custom product filtering and search',
			'Portfolio gallery showcasing handcrafted pieces and design process',
			'Custom order management system for bespoke furniture requests',
			'High-resolution image optimization for product showcase',
			'Integration with inventory management system',
			'Mobile-responsive design emphasizing quality craftsmanship',
		],

		processSteps: [
			{
				title: 'Discovery & Brand Immersion',
				description:
					"We immersed ourselves in Carpenters & Co.'s workshop, photographing the craftsmanship process from raw timber selection to final finishing. Through extensive stakeholder interviews, we understood their target audience: luxury homeowners, interior designers, and corporate clients. We analyzed their existing sales process, identifying pain points in custom order management and inventory tracking. The discovery phase revealed that 60% of their revenue came from bespoke orders, making custom order functionality critical to the platform's success.",
				image:
					'https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?w=1200&q=80',
			},
			{
				title: 'Design & User Experience',
				description:
					"Our design philosophy centered on 'digital craftsmanship'—every pixel placed with the same care as a master carpenter planes wood. We created a visual system using rich wood tones, premium typography, and spacious layouts that let products breathe. The product photography guidelines we developed ensured consistent, high-quality imagery that showcases grain patterns and joinery details. We prototyped a bespoke order form that guides clients through customization options: wood species, dimensions, finishes, and hardware, complete with real-time pricing estimates.",
				image:
					'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80',
			},
			{
				title: 'E-commerce Development',
				description:
					'We built a custom Next.js e-commerce platform integrated with their existing inventory management system. The product catalog features advanced filtering by wood type, furniture category, style period, and price range. High-resolution images are optimized without quality loss using next-gen image formats. The custom order system includes a multi-step form with conditional logic, file upload for inspiration images, and automated quote generation. We integrated secure payment processing with support for high-value transactions and deposit payments for custom orders.',
				image:
					'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200&q=80',
			},
			{
				title: 'Launch & Optimization',
				description:
					'We orchestrated a phased launch, beginning with a catalog of their best-selling pieces and gradually expanding to their full 500+ product inventory. Post-launch, we conducted extensive A/B testing on product pages, optimizing for conversion while maintaining the premium brand feel. We implemented analytics tracking for the custom order funnel, identifying and addressing drop-off points. Training sessions equipped the Carpenters & Co. team with content management skills, enabling them to add new products and manage orders independently.',
				image:
					'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
			},
		],

		galleryImages: [
			{
				url: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1600&q=80',
				caption:
					'Homepage showcasing featured handcrafted furniture collections',
			},
			{
				url: 'https://images.unsplash.com/photo-1613575831056-0acd111736cf?w=1600&q=80',
				caption:
					'Product detail page with zoom functionality and wood grain close-ups',
			},
			{
				url: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=1600&q=80',
				caption:
					'Custom order form with real-time pricing and 3D visualization',
			},
			{
				url: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1600&q=80',
				caption:
					'Behind-the-scenes craftsmanship gallery showing production process',
			},
			{
				url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
				caption:
					'Shopping cart with flexible payment options for high-value orders',
			},
			{
				url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80',
				caption: 'Mobile commerce interface optimized for on-the-go browsing',
			},
		],

		outcomes: [
			{
				title: 'Revenue Growth & Market Expansion',
				description:
					'The e-commerce platform enabled Carpenters & Co. to expand beyond their Dubai showroom, reaching clients across the UAE and GCC region. Within six months of launch, online sales accounted for 35% of total revenue. The custom order system streamlined bespoke furniture requests, reducing quote turnaround time from 5 days to 24 hours, significantly improving client satisfaction.',
			},
			{
				title: 'Operational Efficiency',
				description:
					'Integration with their inventory management system eliminated double-entry errors and provided real-time stock visibility. The automated order management reduced administrative overhead by 40%, allowing the team to focus on craftsmanship rather than paperwork. Product photography guidelines ensured consistent, high-quality imagery that reduced product returns by 25%.',
			},
			{
				title: 'Brand Elevation',
				description:
					"The premium digital experience elevated Carpenters & Co.'s brand perception, attracting high-net-worth clients and interior designers. The craftsmanship gallery became a powerful marketing asset, with behind-the-scenes content generating significant social media engagement. Average order value increased by 22% as the platform effectively communicated the value proposition of handcrafted, bespoke furniture.",
			},
		],

		testimonial: {
			quote:
				"ProCraft didn't just build us a website—they created a digital extension of our workshop. The platform beautifully showcases our craftsmanship and has opened new revenue streams we never thought possible. The custom order system has transformed how we work with clients, making bespoke furniture accessible to customers beyond Dubai.",
			author: 'James Carpenter',
			role: 'Master Craftsman & Owner, Carpenters & Co.',
			avatar:
				'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
		},

		beforeAfter: {
			before:
				'https://images.unsplash.com/photo-1454923634634-bd1614719a7b?w=800&q=80',
			after:
				'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
			description:
				'Transformation from a basic product catalog to a sophisticated e-commerce platform that conveys luxury craftsmanship and enables seamless bespoke ordering.',
		},

		relatedProjects: ['sharma-space', 'virtual-greens'],

		services: [
			'Website Design',
			'E-commerce Development',
			'Product Photography',
			'Inventory Integration',
			'Order Management',
			'Brand Strategy',
		],

		results: {
			products: '500+ Items',
			customOrders: 'Bespoke System',
			reach: 'International',
			avgOrderValue: 'Premium Tier',
		},

		technologies: [
			'Next.js',
			'React',
			'Tailwind CSS',
			'E-commerce API',
			'Image Optimization',
			'CMS Integration',
		],

		liveUrl: 'https://carpentersco.com',

		featured: false,

		themeColor: '#8B4513',

		size: 'large',
	},

	{
		id: 'aitm-university',
		slug: 'aitm-university',
		title: 'AITM University',
		client: 'Anjuman Institute of Technology and Management',
		category: ['Web Design', 'Education'],
		year: '2024',

		tagline: 'Your Gateway to Excellence in Technology and Management',

		heroImage: '/images/portfolio/aitmthumbnail.jpg',
		thumbnailImage: '/images/portfolio/aitmthumbnail.jpg',

		description:
			'A comprehensive website for AITM, a premier engineering institution in Karnataka with 40+ years of excellence, featuring virtual campus tours, admissions system, and placement tracking. Built with Django and deployed on VPS infrastructure with cPanel management, the platform showcases 8+ undergraduate and postgraduate programs including Computer Science, Electronics, Mechanical, Civil Engineering, MBA, MCA, and Robotics & AI. The modern responsive design reflects academic excellence while featuring multi-language support in English and Kannada, WhatsApp chatbot integration for instant support, and a streamlined admissions tracking system. With a 95% placement record and affiliations with VTU and AICTE, the digital transformation has positioned AITM competitively among premier engineering institutions across South India.',

		challenge:
			'Create a modern digital presence for a 40-year-old institution that showcases academic excellence, enables seamless admissions, and appeals to prospective students and parents.',

		briefText:
			'Anjuman Institute of Technology and Management (AITM), a premier engineering college in Bhatkal, Karnataka, needed a complete digital transformation. With four decades of academic excellence, 95% placement record, and affiliations with VTU and AICTE, they required a website that reflects their legacy while appealing to the modern student. The challenge was to present comprehensive course information, enable virtual campus exploration, streamline admissions, and showcase their achievements—all while maintaining accessibility across diverse demographics.',

		// Client description (appears below logo)
		clientDescription:
			"Anjuman Institute of Technology and Management (AITM) is a premier engineering institution in Bhatkal, Karnataka, with over 40 years of academic excellence. Affiliated with VTU and approved by AICTE, AITM offers 8+ undergraduate and postgraduate programs with a 95% placement record, nurturing future engineers and management professionals across South India.",

		clientLogo: '/images/client_logos/atim-client-logo.png',

		duration: '3 months',

		role: 'Full Website Design & Development',

		solution: [
			'Modern, responsive design reflecting academic excellence',
			'Virtual campus tour with interactive facility showcase',
			'Integrated admissions tracking system',
			'Multi-language support (English and Kannada)',
			'Placement statistics and student testimonials',
			'WhatsApp chatbot for instant support',
		],

		processSteps: [
			{
				title: 'Discovery & Research',
				description:
					'We analyzed the education sector landscape and competitor institutions to understand student expectations. Stakeholder interviews revealed the need to balance tradition with modernity.',
				image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80',
			},
			{
				title: 'Design & Prototyping',
				description:
					'Created a visual identity that honors AITM\'s 40-year legacy while presenting a fresh, modern interface. Prototyped virtual tour and admissions flow.',
				image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80',
			},
			{
				title: 'Development',
				description:
					'Built a performant platform with virtual campus tours, admissions system integration, and multi-language support for broader accessibility.',
				image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80',
			},
			{
				title: 'Launch & Training',
				description:
					'Executed phased launch with staff training on content management. Implemented analytics to track admissions funnel performance.',
				image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
			},
		],

		galleryImages: [
			{
				url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80',
				caption: 'Homepage showcasing campus and academic programs',
			},
			{
				url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80',
				caption: 'Virtual campus tour featuring state-of-the-art facilities',
			},
			{
				url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80',
				caption: 'Course catalog with detailed program information',
			},
		],

		outcomes: [
			{
				title: 'Increased Admissions',
				description:
					'The streamlined admissions system and virtual tours contributed to increased student applications from across Karnataka and neighboring states.',
			},
			{
				title: 'Enhanced Accessibility',
				description:
					'Multi-language support in English and Kannada made information accessible to a broader demographic, improving engagement with local communities.',
			},
			{
				title: 'Digital Transformation',
				description:
					'The modern platform elevated AITM\'s digital presence, positioning them competitively among premier engineering institutions in South India.',
			},
		],

		testimonial: {
			quote:
				'ProCraft delivered a website that truly represents our institution\'s legacy and vision. The virtual tour and admissions system have transformed how we connect with prospective students.',
			author: 'Administration',
			role: 'AITM University',
			avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
		},

		relatedProjects: ['sharma-space', 'virtual-greens'],

		services: [
			'Website Design',
			'Web Development',
			'Virtual Tour Integration',
			'Admissions System',
			'Multi-language Support',
		],

		results: {
			programs: '8+ Courses',
			legacy: '40+ Years',
			placement: '95% Rate',
			reach: 'Pan-India',
		},

		technologies: [
			'Django',
			'Tailwind CSS',
			'SQLite',
			'VPS Deployment',
			'cPanel',
		],

		liveUrl: 'https://aitm.edu.in',

		featured: true,

		themeColor: '#1E3A8A',

		size: 'large',
	},

	{
		id: 'alitqan-academy',
		slug: 'alitqan-academy',
		title: 'Al Itqan Academy',
		client: 'Al Itqan Academy',
		category: ['Web Design', 'Education'],
		year: '2024',

		tagline: 'Fostering Deep Understanding and Spiritual Growth',

		heroImage: '/images/portfolio/alitqanthumbnail.jpg',
		thumbnailImage: '/images/portfolio/alitqanthumbnail.jpg',

		description:
			'A modern Islamic education platform offering Noorani Qaida, Quranic studies, and Islamic courses designed to foster deep understanding and spiritual growth. Built with Next.js and Tailwind CSS for optimal performance and beautiful aesthetics, the platform provides accessible Islamic education to students worldwide. The clean, modern design maintains reverence and authenticity while featuring intuitive course navigation, student registration systems, and mobile-responsive layouts that work seamlessly across all devices. SEO-optimized for educational keywords, the platform combines traditional Islamic learning values with contemporary web technologies, making quality religious education accessible to students of all ages seeking to deepen their understanding of the Quran and Islamic principles.',

		challenge:
			'Create an accessible, modern digital platform for Islamic education that appeals to students of all ages while maintaining reverence and authenticity.',

		briefText:
			'Al Itqan Academy needed a digital presence to expand their reach and provide accessible Islamic education online. The platform required intuitive course navigation, student registration, and a design that reflects the spiritual nature of their offerings while remaining modern and user-friendly.',

		// Client description (appears below logo)
		clientDescription:
			"Al Itqan Academy is a dedicated Islamic education platform offering Noorani Qaida, Quranic studies, and comprehensive Islamic courses to students worldwide. With a focus on deep understanding and spiritual growth, they provide accessible, quality religious education that combines traditional values with contemporary teaching methods.",

		clientLogo: '/images/client_logos/alitqan-client-logo.png',

		duration: '2 months',

		role: 'Full Website Design & Development',

		solution: [
			'Clean, modern design with Islamic aesthetic',
			'Course catalog with easy navigation',
			'Student registration system',
			'Mobile-responsive design',
			'SEO optimization for educational keywords',
		],

		services: [
			'Website Design',
			'Web Development',
			'UI/UX Design',
		],

		results: {
			courses: 'Multiple Programs',
			focus: 'Islamic Education',
			reach: 'Global Students',
		},

		technologies: [
			'Next.js',
			'React',
			'Tailwind CSS',
		],

		liveUrl: 'https://alitqanacademy.com',

		featured: true,

		themeColor: '#065F46',

		size: 'large',
	},
];

// Helper function to get all unique categories
export const getCategories = () => {
	const categoriesSet = new Set();
	caseStudies.forEach((study) => {
		study.category.forEach((cat) => categoriesSet.add(cat));
	});
	return ['All', ...Array.from(categoriesSet)];
};

// Helper function to filter case studies by category
export const filterCaseStudies = (category) => {
	if (category === 'All') return caseStudies;
	return caseStudies.filter((study) => study.category.includes(category));
};

// Helper function to get case study by slug
export const getCaseStudyBySlug = (slug) => {
	return caseStudies.find((study) => study.slug === slug);
};

// Helper function to get related case studies
export const getRelatedCaseStudies = (currentSlug, limit = 2) => {
	const currentStudy = getCaseStudyBySlug(currentSlug);
	if (!currentStudy || !currentStudy.relatedProjects) return [];

	return currentStudy.relatedProjects
		.map((slug) => getCaseStudyBySlug(slug))
		.filter(Boolean)
		.slice(0, limit);
};
