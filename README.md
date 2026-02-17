# Personal website for Aqib Niaz Bhat

This repository is used for publishing my personal website at: <https://aqib-bhat.github.io/aqibmedes/>

## How was the website built?

- This project was built using [React](https://react.dev/) with [Vite](https://vite.dev/) as the build tool and [React Router](https://reactrouter.com/) for client-side routing.
- [Material-UI (MUI)](https://mui.com/) is used as the component library.
- This website is published to GitHub Pages.

## Development

- Install NodeJS (>=22.12.0) on your computer.
- Run `npm install` to install the required dependencies and create+fill your `node_modules` directory.

### Scripts

In the project directory, you can run:

- `npm run dev` - Start development server
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally

### Deployment

Deployment is automated via GitHub Actions. Pushing to the `master` branch triggers a build and deploy to GitHub Pages (see `.github/workflows/deploy.yml`).

**Setup**: In your repository's **Settings → Pages → Source**, select **"GitHub Actions"**.

### Troubleshooting

- In case of any issues, try `rm -rf node_modules/` first and then `npm install`.
