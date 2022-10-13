# Hypertheory Training/Labs Angular Reference

A kind of _catch-all_ reference for Angular application development. This is not meant to be a "real" application - more of a _ransom note_, _hodge-podge_ of various patterns, etc.

## Some Guiding Principles

1. Using Libraries / Lazy Loaded Features, Etc.
2. Keep the Appmodule nice and lean.
3. Redux / NGRX all the things.
4. Organically grow a component library (preferring standalone, dumb components)
5. Testing: Cypress for integration testing (with mocked APIs), and Cypress Component Tests for the UI Library
6. A _strict_ CI/CD Pipeline that evolves with the application.
7. Each library will have it's own documentation (maybe just a README for now?) that explains the reason for that libraries existence.

## This Project

### UI

This project uses [TailwindCSS](https://tailwindcss.com), and the [DaisyUI](https://daisyui.com) UI Library.

### Inner-Loop

The _reason_ to use NX, IMO, as well as TypeScript, is to improve the DX by surfacing issues in the inner-loop.

- ESLint
- Prettier

## Remainder for NX Readme

This project was generated using [Nx](https://nx.dev).

🔎 **Smart, Fast and Extensible Build System**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/getting-started/intro)

[Mental model is a good starting point for those who like to understand things theoretically first.](https://nx.dev/concepts/mental-model)

[Interactive Tutorial](https://nx.dev/getting-started/angular-tutorial)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@ht/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
