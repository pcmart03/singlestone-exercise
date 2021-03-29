# SinglestoneExercise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

## My Reasoning

### Tools

I made two tooling choices before begining the project:

- **Angluar CLI** is the recommended tool for setting up and building Angular projects. The old Angular Quickstart is available, but deprecated, and attempting to roll my own setup with Webpack of another bundler seemed like overkill. I also find the ease of generating componentes encourages me to write smaller ones.
- **SCSS** for preprocessing CSS. I mostly use preprocessors to help organize my CSS. However, some of the built-in functions are handy.

## Set up
If you have not already, please install the [Angular CLI](https://cli.angular.io/)

After downloading the code, run `npm install`.

## Build and Deploy to GitHub Pages
These instructions are based on the directions given in the [Angular documentation](https://angular.io/guide/deployment#deploy-to-github-pages). 

1. Create and publish a `gh-pages` branch.
2. Go to your GitHub project page and follow [these directions to publish from for docs folder](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-your-github-pages-site-from-a-docs-folder-on-your-master-branch).
3. If you have changed the name of your Github project, open the `package.json`  file update the `--base-href` option in the `deploy` script to match your project name.
4. Run `npm run deploy`.
5. In the `/docs` folder, create a copy of the `index.html` file and rename it `404.html`.
6. Commit the changes and push to `gh-pages`.

I know there's a package that does this task and more, but I chose not to use it, because I will not update this project often, and the manual method is not complicated.

## Development

The remaining instructions were provided by the Angular CLI. You can follow them to start the development server, run tests, and generate code scaffolding.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

**Note** This command will work, but I have created an npm script for deploying to GitHub Pages.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
