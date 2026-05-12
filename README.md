# Революет — Студия цифрового дизайна

Production-ready website for Revolucet design studio built with Next.js 15, React 19, and Tailwind CSS v4.

## Features

- **Modern Design System**: ORYZO AI color palette with custom CSS variables
- **Responsive Layout**: Mobile-first design with Tailwind CSS breakpoints
- **Multi-page Site**: Home, About, Portfolio, and Contact pages
- **Interactive Components**: Portfolio filtering, contact form with validation
- **Optimized Typography**: Custom fonts from Google Fonts (Halyard, Literata, DM Mono)
- **Icon Library**: Lucide React icons for modern UI elements
- **Server & Client Components**: Next.js App Router with mixed rendering patterns

## Tech Stack

- **Framework**: Next.js 15.5.18
- **React**: 19.0.0 (with 'use client' directives)
- **Styling**: Tailwind CSS 4.0.0 with @tailwindcss/postcss
- **Icons**: lucide-react 0.365.0
- **Language**: JavaScript with JSX (.jsx files)
- **Node**: 22.x LTS

## Getting Started

### Prerequisites
- Node.js 22.x or higher
- npm or yarn package manager

### Installation

```bash
# Install dependencies with legacy peer deps flag for React 19 compatibility
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

The application will run on [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.jsx          # Root layout with Navigation and Footer
│   ├── page.jsx            # Home page
│   ├── globals.css         # Global styles and CSS variables
│   ├── about/
│   │   └── page.jsx        # About page with team and values
│   ├── portfolio/
│   │   └── page.jsx        # Portfolio with category filtering
│   └── contact/
│       └── page.jsx        # Contact form and FAQ
├── components/
│   ├── Navigation.jsx      # Sticky header with navigation
│   └── Footer.jsx          # Footer with links and social
└── styles/                 # Additional style modules

Configuration Files:
├── jsconfig.json           # Path aliases (@/ → ./src/)
├── postcss.config.js       # PostCSS configuration for Tailwind v4
├── tailwind.config.js      # Tailwind theme with ORYZO AI colors
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## Key Configuration

### Path Aliases
The project uses `@/` path alias for clean imports:
```javascript
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
```

### Tailwind CSS v4
Custom theme configuration with ORYZO AI colors:
- `cork-dust`: #f5e6d3 (primary light color)
- `rust-accent`: #c85d44 (accent color)
- `faded-bark`: #3d3d3d (light dark color)
- `aged-stone`: #a39b8c (secondary text)
- `deep-mocha`: #4a3f35 (dark background)
- `pitch-darkness`: #1a1a1a (darkest background)

### Custom Fonts
- **Halyard** (Display): Inter family for headings
- **Literata** (Brand): Merriweather family for logo and emphasis
- **Mono**: DM Mono for code and technical text

## Pages

### Home (`/`)
Hero section with featured services, portfolio preview, testimonials, and blog preview.

### About (`/about`)
Studio story, core values (Quality, Collaboration, Innovation, Results), team members, and statistics.

### Portfolio (`/portfolio`)
Filterable showcase of projects by category:
- Branding
- UI/UX Design
- Web Design

### Contact (`/contact`)
Contact form with validation, contact information, working hours, and FAQ section.

## Development

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Code Style

- Use ES6+ syntax
- Use `'use client'` directive for interactive components
- Prefer functional components with React hooks
- Follow Tailwind utility-first approach
- Use semantic HTML elements

### Component Guidelines

- One component per file
- Export default for main component
- Use descriptive names
- Keep components focused and reusable
- Add comments only when WHY is non-obvious

## Building for Production

```bash
npm run build
npm run start
```

Next.js will create an optimized production build.

## Known Issues & Solutions

### React 19 Peer Dependency Warning
If you see peer dependency warnings, use the `--legacy-peer-deps` flag during installation. This is expected with React 19 and packages not yet updated for React 19 compatibility.

### Tailwind CSS v4 PostCSS Configuration
Ensure `postcss.config.js` uses `@tailwindcss/postcss` plugin (not `tailwindcss`). The PostCSS plugin was moved to a separate package in Tailwind CSS v4.

## Form Submission

The contact form currently uses a placeholder submit handler. To enable actual email delivery:

1. Configure a backend service (Nodemailer, SendGrid, AWS SES, etc.)
2. Update the `handleSubmit` function in `src/app/contact/page.jsx`
3. Create an API route in `src/app/api/contact/route.js`

## Performance

- Images should use Next.js Image component for optimization
- Consider code splitting for large page components
- Use dynamic imports for heavy libraries
- Monitor bundle size with `npm run analyze`

## SEO

- Metadata is configured in layout and page components
- Open Graph tags are included in `layout.jsx`
- Consider adding `sitemap.xml` and `robots.txt`
- Add structured data (Schema.org) for better search engine indexing

## Deployment

The site is ready to deploy on:
- **Vercel** (recommended for Next.js)
- **Netlify** (with `next export` or serverless functions)
- **Traditional Node.js Hosting** (using `npm run build && npm run start`)

## License

© 2025 Revolucet Design Studio. All rights reserved.

## Support

For questions or issues, contact: hello@revolyut.ru
