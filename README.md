# NgxTableLib

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.0.

## Build

Before build you need to do some steps:
1. clone this project to <project_name>/projects folder
2. install `ngx-spinner` package: `npm run ngx-spinner@14`
4. install `ng-packagr` package
5. add this project to your `angular.json` file
   
   `"ngx-table-lib": {
      "projectType": "library",
      "root": "projects/ngx-table-lib",
      "sourceRoot": "projects/ngx-table-lib/src",
      "prefix": "lib",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:ng-packagr",
          "options": {
            "project": "projects/ngx-table-lib/ng-package.json"
          },
          "configurations": {
            "production": {
              "tsConfig": "projects/ngx-table-lib/tsconfig.lib.prod.json"
            },
            "development": {
              "tsConfig": "projects/ngx-table-lib/tsconfig.lib.json"
            }
          },
          "defaultConfiguration": "production"
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "projects/ngx-table-lib/src/test.ts",
            "tsConfig": "projects/ngx-table-lib/tsconfig.spec.json",
            "karmaConfig": "projects/ngx-table-lib/karma.conf.js"
          }
        }
      }`
   
4. add `"node_modules/ngx-spinner/animations/square-jelly-box.css"` in your main project build options styles array

Run `ng build ngx-table-lib --configuration production` to build the project. The build artifacts will be stored in the `dist/` directory.

## Usage

For usage you need to have dist folder with this library and `npx-spinner@14` package

add `"node_modules/ngx-spinner/animations/square-jelly-box.css"` in your main project build options styles array

import `NgxTableLibModule` module from `ngx-table-lib`

use `<ngx-table-lib>` tag for create a table
> Note: This table will adapt its height and width to the parent container

Inputs:
  headers - array of strings with keys for your data (fill be show as headers in table)
  data - array of objects with data
  enableLoader - boolean state for use loader if data not load
  theme - value from `Theme` interface with two themes: `LIGHT` and `DARK`
  paginate - value for count of items on page (if no use - pagination will not work)
  total - value for set total items count
  paginatePlaced - value from `PaginatePlaces` interface with three positions: `LEFT`, `CENTER` and `RIGHT`
  
Outputs:
  pageWasChanged - return event with page number when it changes
  clickOnElement - return event with index of clicked string
  
![dark theme](https://github.com/MkpDolganovKirill/ngx-table-lib/blob/main/EXAMPLES/dark.png?raw=true)
![light theme](https://github.com/MkpDolganovKirill/ngx-table-lib/blob/main/EXAMPLES/light.png?raw=true)



