# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ProCraft is a Next.js 16 website for a creative digital growth agency based in Dubai. The site showcases services including business consulting, web design & development, e-commerce, digital marketing & SEO, social media marketing, and graphic design.

**Tagline**: "Crafting Growth Through Strategy & Design"

**Mission**: To empower businesses with creativity, clarity, and technology that drives real impact.

**Values**: Integrity, Innovation, Collaboration, and Results

## Design Inspiration & Philosophy

The site is primarily inspired by **edirect.ae** and follows these design principles:

- **Minimalist monochromatic design** with strategic accent colors
- **Vertical sidebar navigation** pattern for distinctive branding
- **Full-screen immersive experiences** over traditional dropdowns
- **Performance-first approach** with lazy loading and optimized assets
- **Scroll-based interactions** that create smooth transitions between sections
- **Professional yet modern** aesthetic balancing simplicity with sophistication

**Key Design Adaptations**:
- Uses blue accent (#10367D, #74B4D9) instead of green to differentiate brand identity
- Implements left-side vertical branding with "procraft" text
- Features dual navigation systems (desktop/mobile optimized)
- Incorporates background video in hero section for dynamic first impression

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Development server runs at http://localhost:3000

## Tech Stack

- **Framework**: Next.js 16.0.1 (App Router)
- **React**: 19.2.0
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font Loading**: Next.js `next/font` with local fonts

## Content Structure & Site Map

### Current Implementation Status
- ✅ **Home Page**: Complete with Hero, Services, Portfolio, and CTA sections
- ⏳ **Work/Portfolio Page**: Planned (portfolio currently on home page)
- ⏳ **About Page**: Planned (not yet implemented)
- ⏳ **Services Page**: Partially implemented (ServiceSection component exists)
- ⏳ **Contact Page**: Planned (not yet implemented)

### Home Page Sections
1. **Hero Section**: Full-screen video background with headline and tagline
2. **Services Section**: 6 service cards with hover interactions and background transitions
3. **Portfolio Section**: Case studies with 2-column grid, filtering, and Framer Motion animations
4. **Call-to-Action**: "Ready to Start Your Project?" with consultation booking link

### About Page Structure (Planned)
- **Who We Are**: Company introduction as strategic growth partner
- **Mission Statement**: Empowering businesses with creativity and technology
- **Vision Statement**: Becoming trusted partner for digital transformation
- **Values**: Core principles (Integrity, Innovation, Collaboration, Results)

### Services Offered

#### 1. Business Consulting
Sub-services to be detailed:
- **Retention Strategy**: Build customer loyalty and reduce churn
- **Business Startup**: Transform ideas into profitable ventures
- **Business Buy & Sale**: Expert assistance for transactions
- **Franchise Buy & Sale**: Franchise opportunity exploration
- **Business Investment**: Secure funding and strategic investors

#### 2. Website Design & Development
Responsive, SEO-friendly websites with conversion focus

#### 3. E-Commerce Solutions
Secure, scalable online stores with seamless shopping experiences

#### 4. Digital Marketing & SEO
Keyword optimization, ad campaigns, and visibility strategies

#### 5. Social Media Marketing
Audience growth and authentic engagement on Instagram, Facebook, LinkedIn

#### 6. Graphic Design
Logos, branding kits, and visual identity systems

### Contact Page Structure (Planned)
- Contact form
- Direct contact options (Email, WhatsApp, Phone)
- Dubai office location: Business Bay, Dubai, UAE
- "Schedule a Call" CTA

## Architecture & Project Structure

### Font System
The project uses two local font families defined in `app/layout.js`:
- **Blatant**: Primary brand font (regular and bold weights)
- **Urbanist**: Body font (10 weights, regular and italic styles)

Both fonts are loaded via `next/font/local` and exposed as CSS variables (`--font-blatant`, `--font-urbanist`).

### Layout System
The root layout (`app/layout.js`) includes:
- Global Navigation (left-side vertical navigation with hamburger menu)
- Footer
- WhatsAppButton (fixed floating button with phone: +971 545 866 866)
- GridLines (vertical guide lines on left/right that change color on scroll)

All pages inherit this layout structure automatically.

### Path Aliasing
The project uses `@/*` alias configured in `jsconfig.json` to reference files from the project root:
```javascript
import Navigation from "@/components/layout/Navigation";
```

### Color System
Brand colors are defined in `app/globals.css`:
- **Primary Blue**: `#10367D` (--primary-blue) - Main brand color
- **Secondary Blue**: `#74B4D9` (--secondary-blue) - Accent and hover states
- **Light Gray**: `#EBEBEB` (--light-gray) - Background/neutral tones
- **Emerald**: Used in service section accents (#34d399 range)

### Component Organization

```
components/
├── layout/           # Layout components (Navigation, Footer)
├── ui/              # Reusable UI components (Container, GridLines, WhatsAppButton)
├── Services/        # Service-specific components (ServiceSection)
└── Portfolio/       # Portfolio section components
    ├── PortfolioIntro.jsx       # Left column intro text (sticky on desktop)
    ├── PortfolioGrid.jsx        # Single column card layout
    └── PortfolioCard.jsx        # Individual project cards with minimal/hover states

data/
└── caseStudies.js   # Project data and helper functions
```

### Scroll-Based Interactions
Multiple components change appearance based on scroll position at the **80vh threshold**:
- **Navigation**: Logo and hamburger menu transition from white to primary blue
- **GridLines**: Vertical grid lines change from white/30% to primary-blue/30%

This creates a cohesive visual transition as users scroll from the hero section (with video background) to content sections (with light backgrounds).

### UI/UX Patterns

#### Navigation System
**Dual Navigation Approach** (inspired by edirect.ae):
- **Desktop**: Fixed vertical elements
  - Brand name rotated 270° on left side
  - Hamburger menu trigger at vertical center
  - Scroll indicator at bottom left
- **Mobile**: Centered brand name at top, hamburger menu visible
- **Full-Screen Menu Overlay**: Dark blue (#10367D) background with:
  - Large navigation links (5xl-7xl font size)
  - Contact information on right side
  - Social media icons at bottom
  - Staggered slide-in animations

#### Interactive Elements
- **Service Cards**:
  - Hover triggers background image transition on section
  - Card background slides up white on hover
  - Emerald accent bar on left side
- **WhatsApp Button**: Fixed position with green accent (#25D366 standard WhatsApp green)
- **Scroll Indicator**: Animated dot traveling down vertical line
- **Video Background**: Autoplay, loop, muted with overlay opacity for readability

#### Animation Patterns
- Use Framer Motion for advanced animations
- CSS keyframes for simple animations (slideIn, scrollDot)
- Transition durations: 300ms (colors), 500ms (transforms)
- Hover states with scale and color transitions

### Component Patterns

**Container Component**: Provides consistent content width with predefined size options:
- `default`: max-w-7xl
- `narrow`: max-w-4xl
- `wide`: max-w-[1400px]
- `full`: max-w-full

**Navigation**: Full-screen overlay menu with:
- Vertical brand name on left side
- Hamburger menu trigger
- Scroll indicator animation
- Smooth transitions and animations
- Contact info and social links in overlay

**ServiceSection**: Interactive service cards with:
- Background image transitions on hover
- Card flip animation (white background slides up on hover)
- Dynamic hover states affecting full section background
- 3-column grid (responsive: 1 col mobile, 2 col tablet, 3 col desktop)

**GridLines**: Visual design element providing:
- Fixed positioning at 100px and 110px from edges
- Dashed vertical lines (1px width)
- Scroll-responsive color changes
- Consistent visual framing across all pages

**Portfolio System**: Implemented on **Home Page** (`/app/page.js`) with:
- Asymmetric 2-column layout (40/60 split on desktop)
- Left column: "WORKING TOGETHER WITH OUR CLIENTS" intro (sticky)
- Right column: Project cards in single vertical column
- Minimal default state (image + title only)
- Detailed hover state (service tags + "View case study" link)
- Data-driven from `/data/caseStudies.js`

## Portfolio Implementation (Complete)

The portfolio section is fully implemented on the **HOME PAGE** (`/app/page.js`), featuring two live projects (Sharma Space and The Virtual Greens) with a clean, editorial-style design inspired by top agencies.

### Portfolio Section Structure (on Home Page)

Located after Services Section, before CTA:

**Asymmetric 2-Column Layout:**
1. **Left Column (40%)**: PortfolioIntro component
   - "WORKING TOGETHER WITH OUR CLIENTS" heading
   - "To Achieve Their Business' Vision" subheading
   - Descriptive body text about ProCraft's approach
   - "view more >>" link
   - Sticky positioning on desktop (top-32)

2. **Right Column (60%)**: PortfolioGrid component
   - Project cards in single vertical column
   - Large, impactful images (450-650px height)
   - Vertical spacing between cards (64-96px)

3. **Background**: White (professional, clean aesthetic)

**Note**: All images use Unsplash URLs for instant loading (no 404 errors)

### Portfolio Components

#### PortfolioCard (`components/Portfolio/PortfolioCard.jsx`)
Minimal, editorial-style card with clean hover states:

**Default State (Non-Hovered):**
- Full-bleed background image
- Subtle bottom gradient (black/60% to transparent)
- Project title ONLY at bottom (no other metadata)
- Large, bold typography (3xl-5xl responsive)
- Clean, uncluttered appearance
- Card height: 450px (mobile), 550px (tablet), 650px (desktop)

**Hover State (300ms transitions):**
1. **Background Zoom**: Image scales to 105% (700ms for smooth parallax)
2. **Overlay Appears**: Black overlay (75% opacity) covers entire card
3. **Content Reveal**:
   - **Top Right**: "View case study >>" link (fades in from right)
   - **Bottom**: Project title + service tags
   - Service tags: Comma-separated, uppercase, small text
   - Example: "WEBSITE DESIGN, BRANDING, DIGITAL MARKETING"
4. **Default content fades out**: Title at bottom disappears

**Scroll Reveal Animation:**
- Each card fades in from bottom (y: 50 to 0)
- Staggered by index × 150ms for cascading effect
- Viewport trigger at -100px margin
- Once: true (doesn't re-animate on scroll up)

**Technical Details:**
- Uses Framer Motion `motion.div` for all animations
- Full-card clickable area (entire card is a Link component)
- Opens project in new tab (target="_blank")
- Responsive typography with Urbanist font
- Shadow enhancement on hover

#### PortfolioIntro (`components/Portfolio/PortfolioIntro.jsx`)
Left column intro section:

**Content:**
- Small label: "WORKING TOGETHER WITH OUR CLIENTS" (gray-400, uppercase, tracking-wide)
- Heading: "To Achieve Their Business' Vision" (3xl-5xl, semibold, black)
- Body text: Description of ProCraft's approach (gray-600, font-light)
- Link: "view more >>" (gray-600, hover: primary blue)

**Behavior:**
- Sticky positioning on desktop (top-32)
- Fades in from left on scroll (x: -30 to 0)
- Stays visible while scrolling through portfolio cards

#### PortfolioGrid (`components/Portfolio/PortfolioGrid.jsx`)
Simple container for portfolio cards:

**Layout:**
- Single column only (no grid)
- Vertical flex column
- Gap: 32px (mobile), 48px (tablet), 64px (desktop)
- No filtering system (removed for cleaner design)
- No AnimatePresence (simpler implementation)

**Displays all case studies from data file in sequence**

### Case Studies Data (`data/caseStudies.js`)

**Data Structure:**
```javascript
{
  id: string,              // Unique identifier
  slug: string,            // URL-friendly slug (for future detail pages)
  title: string,           // Project title
  client: string,          // Client name
  category: string[],      // Array for multiple categories
  year: string,            // Project year
  tagline: string,         // Brief one-liner
  heroImage: string,       // Large hero image path
  thumbnailImage: string,  // Card thumbnail path
  description: string,     // Full description
  challenge: string,       // Problem statement
  solution: string[],      // Array of solution points
  services: string[],      // Services provided
  results: object,         // Key metrics/outcomes
  technologies: string[],  // Tech stack used
  liveUrl: string,         // Live project URL
  featured: boolean,       // Featured flag
  themeColor: string       // Brand color hex
}
```

**Helper Functions:**
- `getCategories()`: Returns unique categories + "All"
- `filterCaseStudies(category)`: Filters by category
- `getCaseStudyBySlug(slug)`: Retrieves single project (for detail pages)

**Current Projects:**
1. **Sharma Space** (sharmaspace.in)
   - Categories: Web Design, E-commerce
   - Next.js with SSR, multi-language support (English, Hindi, Kannada)
   - Booking system integration, 150+ projects, 4.8/5 rating
   - Theme color: #da532c
   - Images: Unsplash (interior design themed)

2. **The Virtual Greens** (thevirtualgreens.com)
   - Categories: Web Design, Hospitality
   - Golf simulator lounge in Riyadh
   - Enterprise infrastructure, performance-optimized
   - Theme color: #10367D
   - Images: Unsplash (golf/sports themed)

**Note on Images:**
- All portfolio and service images use Unsplash URLs
- No local image files required - eliminates 404 errors
- Images load instantly from CDN
- To use custom images: Update paths in `/data/caseStudies.js` and `/components/Services/ServiceSection.jsx`

### Animation Specifications

**Timing Functions:**
- Card hover: 400ms with custom easing [0.4, 0, 0.2, 1]
- Background zoom: 700ms for smooth parallax
- Overlay slide: 400ms ease-out
- Content fade: 300ms with 100ms delay
- Scroll reveals: 500ms with stagger delay
- Filter transitions: 300ms for layout shifts

**Framer Motion Patterns Used:**
- `whileHover`: Hover state animations
- `whileInView`: Scroll-triggered animations with viewport config
- `AnimatePresence`: Smooth entry/exit when filtering
- `layout`: Automatic layout animations during reordering
- Custom easing curves for professional feel

### Responsive Design

**Breakpoints:**
- **Mobile (<768px)**: Stacked layout (intro on top, cards below in single column), 450px card height
- **Tablet (768px-1024px)**: Stacked layout, 550px card height
- **Desktop (>1024px)**: Asymmetric 2-column (40/60 split via grid-cols-5), 650px card height

**Layout Behavior:**
- **Desktop**:
  - Left column (2/5 width): Sticky intro text
  - Right column (3/5 width): Scrolling cards
- **Mobile/Tablet**:
  - Intro text at top (not sticky)
  - Cards stack below in single column

**Typography Scale:**
- Intro heading: 3xl → 4xl → 5xl
- Card titles (default): 3xl → 4xl → 5xl
- Card titles (hover): 3xl → 4xl → 5xl
- Service tags: xs → sm

**Why Asymmetric Layout:**
- Follows reference design from edirect.ae/top agencies
- Tells a story with intro text before showing work
- Creates editorial, magazine-like experience
- Professional, sophisticated presentation

### Design Consistency

**Color Usage:**
- Section background: White (clean, professional)
- Intro text: Gray-400 (labels), Black (heading), Gray-600 (body)
- Card overlays: Black/75% opacity on hover
- Service tags: White/80% opacity
- Links: Gray-600 → Primary blue (#10367D) on hover

**Integration with Existing Patterns:**
- Uses Container component with size='wide' for more breathing room
- Maintains vertical padding rhythm (py-16 md:py-24 lg:py-32)
- Follows Framer Motion animation patterns
- Consistent typography with Urbanist font
- Complements Services section (dark) → Portfolio (light) → CTA (dark gradient)

### Future Enhancements

**Ready to Add:**
- Individual case study detail pages at `/app/work/[slug]/page.js`
- Video previews on hover (similar to edirect.ae)
- Additional project entries in caseStudies.js
- "Load More" pagination for many projects
- Search functionality
- Social share buttons on detail pages
- Client testimonials integration
- Related projects suggestions

**Files to Create for Detail Pages:**
- `/app/work/[slug]/page.js` - Dynamic route for individual case studies
- `/components/Portfolio/CaseStudyHero.jsx` - Large hero section
- `/components/Portfolio/CaseStudyGallery.jsx` - Image gallery
- `/components/Portfolio/CaseStudyMetrics.jsx` - Results/metrics display

## Development Notes

- The app uses `'use client'` directive extensively for client-side interactivity
- Tailwind utility classes are used directly in components (no separate CSS modules)
- Responsive breakpoints follow Tailwind defaults (md: 768px, lg: 1024px, xl: 1280px)
- Fixed positioning and z-index layering are used for overlapping UI elements (z-40 for gridlines, z-50 for navigation)
- The site has a distinctive left-aligned vertical branding approach
- Performance optimizations to consider: lazy loading images, video optimization, code splitting

## Reference & Inspiration Sites

- **Primary**: https://www.edirect.ae/ (main design inspiration)
- **Additional references**:
  - https://www.digitalnexa.com/ (case studies layout)
  - https://digitalfarm.ae/ (service presentation)
  - https://bird.ae/ (client showcase patterns)

## Future Development Roadmap

### Immediate Priorities
1. Complete About page implementation (Who We Are, Mission, Vision, Values)
2. Expand Services page with individual service detail pages
3. Build Contact page with form and map integration
4. ~~Add Portfolio section to home page~~ ✅ **COMPLETE**

### Features to Implement
- ~~**Portfolio Section on Home Page**: Project cards with filtering and animations~~ ✅ **COMPLETE**
- **Dedicated Work Page**: Separate `/work` page with expanded portfolio (optional)
- **Case Study Detail Pages**: Individual pages for each project at `/work/[slug]`
- **Client Logos**: "Who We Work With" section displaying client brands
- **Blog/Insights**: "Stay up-to-date" section with articles
- **Back-to-Top Button**: Smooth scroll to top functionality
- **Custom Cursor**: Optional green dot cursor effect (inspired by edirect.ae)
- **Loading Screen**: Splash screen with logo animation
- **Form Validation**: Contact form with proper validation and submission handling

### Performance Enhancements
- Implement lazy loading for images and videos
- Add loading skeletons for dynamic content
- Optimize font loading strategy
- Consider implementing service worker for offline support
- Add analytics and performance monitoring

### Content Expansion
- Develop detailed service sub-pages for each of the 6 main services
- Create team member profiles for About page
- Build testimonials/reviews section
- Add FAQ section for common inquiries
- Implement blog/news section for SEO and thought leadership
