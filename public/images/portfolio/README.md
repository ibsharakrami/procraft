# Portfolio Images

This directory contains images for the portfolio/work page.

## Required Images

For each project in `/data/caseStudies.js`, you need:

### Sharma Space
- `sharma-space-thumbnail.jpg` - Card thumbnail (recommended: 1200×900px or 16:10 ratio)
- `sharma-space-hero.jpg` - Hero image for detail page (recommended: 1920×1080px)

### The Virtual Greens
- `virtual-greens-thumbnail.jpg` - Card thumbnail (recommended: 1200×900px or 16:10 ratio)
- `virtual-greens-hero.jpg` - Hero image for detail page (recommended: 1920×1080px)

## Image Guidelines

- **Format**: JPG or WebP recommended for photographs
- **Aspect Ratio**: 16:10 or 4:3 works best for cards
- **Size**: Keep under 500KB for fast loading
- **Resolution**: 1200px width minimum for thumbnails
- **Optimization**: Use tools like TinyPNG or ImageOptim

## Placeholder

Until real images are added, the portfolio cards will use the path:
`/images/portfolio/placeholder.jpg`

You can add a generic placeholder image or the cards will show a broken image icon.

## Adding New Projects

When adding new projects to `/data/caseStudies.js`:
1. Add project images to this directory
2. Update the `thumbnailImage` and `heroImage` paths in the data file
3. Follow the naming convention: `[project-slug]-thumbnail.jpg` and `[project-slug]-hero.jpg`
