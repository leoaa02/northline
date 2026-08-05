# Northline

```text
NORTHLINE
Digital newspaper crafted for the modern web.
```

Northline is a modern digital newspaper built with a product mindset: editorial quality, technical precision, and long-term scalability.

## Vision

Northline exists to bridge digital journalism and frontend engineering.

It is not a simple blog. It is an editorial platform designed to grow into a professional media product, where content strategy, reading experience, and technical architecture evolve together.

Its philosophy is clear:

- Publish with editorial rigor.
- Design for clarity and reading flow.
- Build for performance, accessibility, SEO, and scale.
- Treat the newsroom experience and user experience as equally important.

## Technologies

| Technology | Role in Northline |
|---|---|
| Next.js | Application framework and App Router architecture |
| React | UI composition and rendering model |
| TypeScript | Type safety and maintainability |
| Tailwind CSS v4 | Design system implementation and styling |
| Sanity CMS | Structured content platform |
| GROQ | Content querying layer |
| Vercel | Deployment and production hosting |
| ESLint | Code quality and consistency |
| Prettier | Code formatting standard |

## Features

- [x] Editorial-first UI design
- [x] Responsive layout across breakpoints
- [x] Sanity CMS integration
- [x] SEO-ready page structure
- [x] Next.js App Router architecture
- [x] Scalable component organization
- [x] Reusable design system foundations
- [x] Editorial typography system
- [x] Image optimization pipeline
- [x] Accessibility-focused UI patterns

## Architecture

Northline is organized as a monorepo with the main newspaper app in `artifacts/northline`.

Core directories of the newspaper app:

- `app/` - App Router routes, layouts, loading/error boundaries, and Studio route.
- `components/` - Reusable UI and editorial components.
- `lib/` - Shared utilities and helpers.
- `sanity/` - CMS client, schema definitions, and GROQ queries.
- `services/` - Content orchestration and data access layer.
- `styles/` - Design system tokens, foundations, and component-level styles.
- `public/` - Static assets.
- `types/` - Domain and content type definitions.

Additional workspace packages:

- `artifacts/api-server/` - API backend.
- `artifacts/mockup-sandbox/` - isolated design and prototype sandbox.
- `lib/` - shared libraries used across workspace packages.

## Installation

From the repository root:

```bash
npm install
npm run dev
npm run build
npm run lint
npm run typecheck
```

## Environment Variables

Create an environment file for the Next.js app at `artifacts/northline/.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=yyyy-mm-dd
```

## Roadmap

- [x] Migracion a Next.js
- [x] Integracion con Sanity
- [x] Design System
- [ ] Autenticacion
- [ ] Newsletter
- [ ] RSS Feed
- [ ] Sitemap
- [ ] Busqueda
- [ ] Comentarios
- [ ] Dashboard editorial

## Design Philosophy

Northline is inspired by contemporary editorial media products.

The interface prioritizes:

- Typography
- Spacing
- Visual hierarchy
- Reading rhythm
- Performance

Every design and engineering decision should protect clarity, speed, and editorial trust.

## License

MIT

## Author

Leonardo Alcala  
Frontend Developer  
Future Journalism Student

- GitHub: https://github.com/your-username
- LinkedIn: https://www.linkedin.com/in/your-profile
