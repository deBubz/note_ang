# TodoComponentsPractice
So essentially this is going to be split into identical sections,
each section is the same `todo-list-app` where the only difference 
between each section is its logic in how data is `passed between components`

## App Layout
simple todo list, 3 components
- add new todo -
- todo list
  - todo item

## `item` model
- id `int` - simple incremental from the count of the list
- description `string` - description of the task
- completed `boolean`
- priority `string` - (optional) 

> of course this is shared

## Data passing methods
So far it incluces
1. passing data using `Input()` and `Output()`

## Styling

Styling is optional for now

Lets take this opportunity to pickup `tailwind css`


---

## Misc Angular things
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
