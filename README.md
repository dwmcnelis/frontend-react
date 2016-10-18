# Frontend React

A React application (master-detail feed) with isomorphic rendering, async react-router routes, async redux reducers, material ui, async data fetching, and code-splitting.

### Stack Technologies
 * [Node.js 6.5](https://github.com/nodejs/node) JavaScript runtime
 * [Express](https://github.com/expressjs/express) Fast, unopinionated, minimalist web server

 * [React](https://github.com/facebook/react) A declarative, efficient, and flexible JavaScript library for building user interfaces
 * [React Router](https://github.com/reactjs/react-router) Declarative routing for React
 * [MaterialUI](https://github.com/callemall/material-ui/tree/next) Material UI components built with React
 * [React Helmet](https://github.com/nfl/react-helmet) A document head manager for React
 * [Redux](https://github.com/reactjs/redux) Predictable state container for JavaScript apps
 * [React Redux](https://github.com/reactjs/react-redux) Official React bindings for Redux
 * [Redux Thunk](https://github.com/gaearon/redux-thunk) Thunk middleware for Redux

 * [Redial](https://github.com/markdalgleish/redial) Route lifecycle data fetching
 * [Axios](https://github.com/react-bootstrap/react-bootstrap) Promise based HTTP client for the browser and node.js

 * [Babel 6](https://github.com/babel/babel) Compiler for writing next generation JavaScript
 * [Webpack](https://github.com/webpack/webpack) A bundler for javascript and friends

### Setup
1. `$ cd frontend-react`
2. `$ npm install`
3. `$ vi .dev.development`

### Environments

#### dev

`$ npm run start`

  * Proxy to backend API
  * [React Hot Loader](https://github.com/gaearon/react-hot-loader) Tweak React components in real time
  * [Redux Logger](https://github.com/evgenyrodionov/redux-logger) Logger middleware for Redux

#### prod

`$ npm run clean`
`$ npm run build`
`$ npm run start:prod`

  * Proxy to backend API
  * Minimal logging

#### test

`$ npm run test`
`$ npm run coverage`

* [Mocha](https://github.com/mochajs/mocha) Simple, flexible, fun javascript test framework
* [Istanbul](https://github.com/gotwarlost/istanbul) Code coverage tool
* [NYC](https://github.com/gotwarlost/istanbul) Istanbul command line interface
