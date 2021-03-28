# SinglestoneExercise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

## My Reasoning

### Tools

I made two tooling choices before begining the project:

- **Angluar CLI** is the recommended tool for setting up and building Angular projects. The old Angular Quickstart is available, but deprecated, and attempting to roll my own setup with Webpack of another bundler seemed like overkill. I also find the ease of generating componentes encourages me to write smaller ones.
- **SCSS** for preprocessing CSS. I like to use variables, nesting, and mixins.

### Project Organization

#### Why Modules?

I'm pretending this exercise is a real application meant for production. I expect it to grow over time. Maybe the customer will want to introducing more views, or routing. Using modules now will make keeping organized as we add additional features easier.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
