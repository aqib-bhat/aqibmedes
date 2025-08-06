# Personal website for Aqib Niaz Bhat

This repository is used for publishing my personal website at: <https://aqib-bhat.github.io/aqibmedes/>

## How was the website built?

- This project was built using [Netx.js](https://nextjs.org/docs) that is a React framework.
- This website is published to GitHub pages.

## Development

- Install NodeJS on your computer.
- Run `npm install` to install the required dependencies and create+fill your `node_modules` directory.

### Scripts

In the project directory, you can run:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run predeploy` - Build for deployment
- `npm run deploy` - Deploy to GitHub Pages

### First deployment - going live

- In `package.json`, set: `"homepage":"https://yourusername.github.io/repository-name"`
- Deploy the application: `npm run deploy`
- Go to the "Settings" page for the repository, then click on the "Pages" tab.
  - Choose `gh-pages` as the branch for deployment.
- Again deploy the application: `npm run deploy`.
  - Check your GitHub repo to make sure that a new deployment has started using the `gh-pages` branch of your repository.
  - Once the latest deployment finishes, your website should now be live at: <https://yourusername.github.io/repository-name>
    - Remember to replace `yourusername` with **your actual GitHub username**! :D

### Troubleshooting

- In case of any issues, try `rm -rf node_modules/` first and then `npm install`.
