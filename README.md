# SIS Architecture Reference
[![Build Status](https://travis-ci.com/ElevenfiftyAcademy/SIS-Angular-Dashboard.svg?token=xNdLViLyMqm8cTmoGFPJ&branch=master)](https://travis-ci.com/ElevenfiftyAcademy/SIS-Angular-Dashboard)
## Overview of folder structure
```text
|-- app
     |-- modules
       |-- home
           |-- [+] components
           |-- [+] pages
           |-- home-routing.module.ts
           |-- home.module.ts
     |-- core
       |-- [+] authentication
       |-- [+] footer
       |-- [+] guards
       |-- [+] http
       |-- [+] interceptors
       |-- [+] mocks
       |-- [+] services
       |-- [+] header
       |-- core.module.ts
       |-- ensureModuleLoadedOnceGuard.ts
       |-- logger.service.ts
     |
     |-- shared
          |-- [+] components
          |-- [+] directives
          |-- [+] pipes
     |
     |-- [+] configs
|-- assets
     |-- scss
          |-- [+] partials
          |-- _base.scss
          |-- styles.scss

```
## The Angular Style Guide
The logical place to start looking for best practices in Angular is the Angular Style Guide. The guide offers an opinionated view on syntax, conventions and application structure.

The key guidelines that really stood out for me was “Structure the app such that you can locate code quickly” and “Have a near-term view of implementation and a long-term vision. Start small but keep in mind where the app is heading down the road”. This means that you shouldn't lock yourself to one structure, since it will change a lot depending on the project.

## Modules
```text
|-- modules
       |-- home
           |-- components
           |-- pages
           |    |-- home
           |         |-- home.component.ts|html|scss|spec
           |
           |-- home-routing.module.ts
           |-- home.module.ts
```

## The Core Module
The CoreModule takes on the role of the root AppModule , but is not the module which gets bootstrapped by Angular at run-time. The CoreModule should contain singleton services (which is usually the case), universal components and other features where there’s only once instance per application. To prevent re-importing the core module elsewhere, you should also add a guard for it in the core module’ constructor.

```text
|-- core
       |-- [+] authentication
       |-- [+] footer
       |-- [+] guards
       |-- [+] http
       |-- [+] interceptors
       |-- [+] mocks
       |-- [+] services
       |-- [+] header
       |-- core.module.ts
       |-- ensureModuleLoadedOnceGuard.ts
       |-- logger.service.ts
```

The authentication folder simply handles the authentication-cycle of the user (from login to logout).

```text
|-- authentication
     |-- authentication.service.ts|spec.ts
```

The interceptors folder is a collection of interceptors I find specially useful.

```text
|-- interceptors
       |-- api-prefix.interceptor.ts
       |-- error-handler.interceptor.ts
       |-- http.token.interceptor.ts
```

The guards folder contains all of the guards I use to protect different routes in my applications.

```text
|-- guards
     |-- auth.guard.ts
     |-- no-auth-guard.ts
     |-- admin-guard.ts 
```
    
Mocks are specially useful for testing, but you can also use them to retrieve fictional data until the back-end is set up. The mocks folder contains all the mock-files of our app.

```text
|-- mocks
       |-- user.mock.ts
```

All additional singleton services are placed in the services folder.

```text
|-- services
     |-- srv1.service.ts|spec.ts
     |-- srv2.service.ts|spec.ts
```

## The Shared Module
The SharedModule is where any shared components, pipes/filters and services should go. The SharedModule can be imported in any other module when those items will be re-used. The shared module shouldn’t have any dependency to the rest of the application and should therefore not rely on any other module.
```text
|-- shared
     |-- [+] components
     |-- [+] directives
     |-- [+] pipes
```
The components folder contains all the “shared” components. This are components like loaders and buttons , which multiple components would benefit from.
```text
|-- components
     |-- loader
          |-- loader.component.ts|html|scss|spec.ts
     |-- buttons
          |-- favorite-button
               |-- favorite-button.component.ts|html|scss|spec.ts
          |-- collapse-button
               |-- collapse-button.component.ts|html|scss|spec.ts
```

The directives , pipes and models folders contains the directives, pipes and models used across the application.
```text
|-- directives
      |-- auth.directive.ts|spec.ts
|-- pipes
     |-- capitalize.pipe.ts
     |-- safe.pipe.ts
|-- models
     |-- user.model.ts
     |-- server-response.ts
```

## Configs
The config folder contains app settings and other predefined values.
```text
|-- configs
     |-- app-settings.config.ts
     |-- dt-norwegian.config.ts
```

## Styling
The global styles for the project are placed in a scss folder under assets .
```text
|-- scss
     |-- partials
          |-- _layout.vars.scss
          |-- _responsive.partial.scss
     |-- _base.scss
|-- styles.scss
```

The scss folder does only contain one folder — partials. Partial-files can be imported by other scss files. In my case, styles.scss imports all the partials to apply their styling.

## Lazy Loading
The application uses lazy-loading, which means the module isn’t loaded before the user actually accesses the route. By using the structure described in the “Modules”-section, you can easily refer each module in your main app-routing file.

---
##### Cited source for folder description above

 > Garberg, M. (2019). How to define a highly scalable folder  structure for your Angular project. ITNEXT. Available [here](https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7)
