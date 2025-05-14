# Personal website for Aqib Niaz Bhat

This repository is used for publishing my personal website at: <https://aqib-bhat.github.io/aqibmedes/>

## How was the website built?

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
  - You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
  - To learn React, check out the [React documentation](https://reactjs.org/)
- Further details are explained in the following sections.

## Development

- Install NodeJS on your computer.
- **Recommendations**:
  - Use the **Terminal** app and PowerShell (with `oh-my-posh`) on Windows
  - Use **iTerm2** app and `zsh` (with `oh-my-zsh`) on Mac
  - `npm` gets installed along with NodeJS (`npm` version >= 5.2 gives us `npx`)
- Install `yarn`: `npm install --global yarn`

### If you want to create your own repository

- In GitHub create a repository for your personal website e.g. `personal-website`
- Check out the repo locally and `cd` to it.
- Run the command: `npx create-react-app . --template typescript`
  - `.` is used instead of a custom app name so that instead of creating a new directory, the react app is created in the current directory/repository.
  - `--template typescript` is optional. You can avoid it if you plan to use plain JavaScript.
- In `App.tsx`, remove the `<p>` and `<a>` tags, and add an `<h1>` tag.
- In `index.html`, update fields like `meta` tag's `content` attribute and the `title` tag.
- Run tests: `npm run test` OR `yarn run test`
- Fix `App.test.tsx` by changing the `getByText` param.
- Write your custom React components in a `components` directory that you will have to create.
- Adding the **Material UI (MUI)** React components: <https://mui.com/material-ui/getting-started/installation/>
  - `yarn add @mui/material @emotion/react @emotion/styled`
  - `yarn add @fontsource/roboto`
  - `yarn add @mui/icons-material`
- Install React Router for web applications: `yarn add react-router-dom`

### If you check out this repository

- Run: `yarn install`
  - You will need to run this to install the required dependencies and create+fill your `node_modules` directory.

### Scripts

In the project directory, you can run:

- `yarn start`
  - Runs the app in the development mode.
    - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
    - The page will reload if you make edits.
  - You will also see any lint errors in the console.
- `yarn test`
  - Launches the test runner in the interactive watch mode.\
  - See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
- `yarn run build`
  - Builds the app for production to the `build` folder.
  - It correctly bundles React in production mode and optimizes the build for the best performance.
    - The build is minified and the filenames include the hashes.
    - Your app is ready to be deployed!
    - Test the build locally: `npx serve`
      - It will ask to install the `serve` package
  - See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### ::warning:: `npm run eject`

- **Note: this is a one-way operation. Once you `eject`, you can’t go back!**
- If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
- Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
- You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### First deployment - going live

- In `package.json`, set: `"homepage":"https://yourusername.github.io/repository-name"`
- Install the `gh-pages` package: `yarn add gh-pages`
- In `package.json` > `scripts` > add
  - `"predeploy": "yarn run build",`
  - `"deploy": "gh-pages -d build",`
- Deploy the application: `yarn run deploy`
- Go to the "Settings" page for the repository, then click on the "Pages" tab.
  - Choose `gh-pages` as the branch for deployment.
- Again deploy the application: `yarn run deploy`.
  - Check your GitHub repo to make sure that a new deployment has started using the `gh-pages` branch of your repository.
  - Once the latest deployment finishes, your website should now be live at: <https://yourusername.github.io/repository-name>
    - Remember to replace `yourusername` with **your actual GitHub username**! :D

### Later changes

- To upgrade dependencies: `yarn upgrade`
- Other commands: `yarn test`, `yarn start`, `yarn run build`, `yarn run deploy`.
- In case of any issues, try `rm -rf node_modules/` first and then `yarn install`.

## References and acknowledgements

I was able to get going following these sources:

- <https://www.freecodecamp.org/news/how-to-build-a-react-project-with-create-react-app-in-10-steps/>
- <https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/>
- <https://reactgo.com/deploy-react-app-github-pages/>

**Note:** Please remember that things change fast in software, and often when following an article, I found that some things were no longer applicable and I had to find a way through other sources or experimenting on my own.

Later, I referred to other sources to understand the React code and make custom changes. Some of the sources I remember:

- MUI documentation: <https://mui.com/material-ui/getting-started/>
  - Responsiveness: <https://www.youtube.com/watch?v=ZowbtOWOElY>
- <https://kentcdodds.com/blog/understanding-reacts-key-prop>
- And of course, many answers were found on StackOverflow: <https://stackoverflow.com/>
