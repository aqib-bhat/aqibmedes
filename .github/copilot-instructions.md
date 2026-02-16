# Copilot Instructions for AqibMedes

This is a personal website built with Vite, React, TypeScript, React Router, and Material-UI (MUI), deployed to GitHub Pages.

## Build and Development Commands

```bash
npm install        # Install dependencies
npm run dev        # Development server (Vite)
npm run build      # Production build (tsc + vite build, outputs to dist/)
npm run preview    # Preview production build locally
npm run deploy     # Deploy to GitHub Pages (builds first via predeploy)
```

## Architecture

### Static SPA
- Uses Vite as the build tool with React + TypeScript
- Client-side routing via React Router with `basename="/aqibmedes"`
- Deployed to GitHub Pages with `base: '/aqibmedes/'` in vite.config.ts
- A `public/404.html` handles SPA routing on GitHub Pages (redirects to index.html)

### Routing
- **React Router**: Routes defined in `src/App.tsx`
- **Pages**: Home (`/`), About, Resume, Contact, Bookshelf, Blogs, Podcasts
- **Navigation**: `DrawerAppBar.tsx` provides responsive header with mobile drawer

### UI Framework
- **Material-UI v5**: Primary component library with dark theme
- **Emotion**: CSS-in-JS styling (via MUI's styled-engine)
- **Global Layout**: `src/App.tsx` provides ThemeProvider, header, and footer wrapping all routes

### Data Layer
- **Static Data**: Content in `src/data/` as TypeScript files (ResumeData, BookRecommendations)
- **No Backend**: All data is compile-time static

## Key Conventions

### File Structure
- `src/components/` — Reusable UI components (DrawerAppBar, Footer, Item, StyledLink)
- `src/pages/` — Route page components
- `src/data/` — Static content as TypeScript exports
- `src/main.tsx` — App entry point (BrowserRouter setup)
- `src/App.tsx` — Layout + route definitions

### GitHub Pages Deployment
- **Base Path**: All routes and assets include `/aqibmedes/` prefix
- **Asset References**: Use `/aqibmedes/` prefix for public assets (images, manifest)
- **Deploy**: `gh-pages -d dist` publishes the `dist/` directory

### Component Patterns
- Internal links use React Router `Link` or the `StyledLink` component
- External links use MUI `Link` with `target="_blank" rel="noopener"`
- Dark theme applied globally via MUI ThemeProvider in App.tsx