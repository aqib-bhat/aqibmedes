# AGENTS.md

Guidance for coding agents (Claude Code, Codex, Copilot, Cursor, etc.) working in this repository.

## Project overview

Personal website for Aqib Niaz Bhat, published at <https://aqib-bhat.github.io/aqibmedes/>.

A static single-page app built with Vite, React 18, TypeScript, React Router v7 and Material-UI (MUI) v5, deployed to GitHub Pages. There is no backend: all content is compiled in from TypeScript files.

## Setup and commands

Use Node.js version from `.nvmrc` (>=22.12.0) and **npm** (not Yarn or pnpm). `package-lock.json` is the lockfile.

```bash
npm install        # Install dependencies
npm run dev        # Dev server at http://localhost:5173/aqibmedes/
npm run build      # Type-check (tsc) + production build to dist/
npm run preview    # Serve the production build locally
```

There is no test suite or linter. `npm run build` is the verification step: it must pass before you commit. For UI changes, also check the affected pages in `npm run dev`.

## Project structure

- `src/main.tsx` — entry point; mounts `BrowserRouter` with `basename="/aqibmedes"`
- `src/App.tsx` — dark MUI theme, global layout (header, footer) and all route definitions
- `src/pages/` — one component per route: Home (`/`), About, Resume, Contact, Bookshelf, Blogs, Podcasts
- `src/components/` — shared UI: `DrawerAppBar` (responsive nav with mobile drawer), `Footer`, `Item`, `StyledLink`
- `src/data/` — static content as TypeScript exports (`ResumeData`, `BookRecommendations`)
- `public/` — static assets copied as-is, plus `404.html` for SPA routing on GitHub Pages

## Conventions

- **Base path**: the site is served under `/aqibmedes/`, set in `vite.config.ts` (`base`) and `src/main.tsx` (`basename`). Reference public assets with the `/aqibmedes/` prefix (e.g. `/aqibmedes/Aqib_DP.jpeg`). Router paths in `App.tsx` and `<Link to>` don't include it.
- **Adding a page**: create it in `src/pages/`, add a `<Route>` in `src/App.tsx`, and add an entry to the `navItems` array in `src/components/DrawerAppBar.tsx`.
- **Links**: internal links use React Router `Link` or `StyledLink`. External links use MUI `Link` with `target="_blank" rel="noopener"`.
- **Styling**: use MUI components, `sx`, and `styled()` (Emotion). The app uses a global dark theme, so don't hard-code light-theme colors.
- **Content changes** (resume, books) belong in `src/data/`, not in the page components.
- **TypeScript** runs in `strict` mode. Don't add `any` or `@ts-ignore` to get the build to pass.

## SPA routing on GitHub Pages

GitHub Pages has no server-side rewrites. `public/404.html` saves the requested URL in `sessionStorage` and redirects to the app root. A script in `index.html` then restores the URL with `history.replaceState`. Keep both pieces in sync if you change routing or the base path.

## Deployment

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages. No other step is needed. Don't commit `dist/`.

## Git and pull requests

- Branch off `master`; don't commit directly to it.
- Commit messages and PR titles use Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`.
- PR descriptions must follow `.github/pull_request_template.md` (a "Description of the change - What and Why" section and a "Testing details" section).
- Code owner: `@aqib-bhat` (see `.github/CODEOWNERS`).

## Dependencies

- Prefer `npm audit fix` for security updates. Check major-version bumps against how the package is actually used before applying them.
- Run `npm run build` after any dependency change.
