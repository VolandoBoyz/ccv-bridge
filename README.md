# Influencity Node Project Bootstrap
This is a starter kit for Influencity [Node.js](https://nodejs.org) projects.

----------

## Stack used
* [Express.js](http://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [Webpack](http://webpack.github.io/) - A well-known module bundler.
* [Babel](https://babeljs.io/) - The compiler for writing next-generation Javascript.
* [Nodemon](https://nodemon.io/) - Monitor for any changes in your source and automatically restart your server.
* [Node-Config](https://github.com/lorenwest/node-config) - Organizes hierarchical configurations for your app deployments.
* [ESLint](http://eslint.org/) - The pluggable linting utility for Javascript and JSX.
* [Mocha](http://mochajs.org/) - A feature-rich Javascript test framework making asynchronous testing simple and fun.
* [Chai](http://chaijs.com/) - A BDD/TDD assertion library for Node.js and the browser.
* [Sinon.JS](http://sinonjs.org/) - Standalone test spies, stubs and mocks for Javascript.

----------

## How to use it

1. Clone the repo
    ```sh
    $ git clone git+ssh://git@github.com/Influencity/node-project-bootstrap.git <your_project_name>
    ```

2. Modify package.json
    * name
    * version
    * description
    * repository
    * author
    * license
    * bugs
    * homepage

3. Enjoy!
    * Install npm packages:
        ```sh
        $ npm install
        ```
    * Build the binaries:
        ```sh
        $ npm run build
        ```
    * Build the binaries (watch mode):
        ```sh
        $ npm run watch
        ```
    * Run tests:
        ```sh
        $ npm run test
        ```
    * Run only some tests:
        ```sh
        $ npm run test <test_file_or_directory>
        ```
    * Start the server (development environment):
        ```sh
        $ npm run dev
        ```
    * Start the server (production environment):
        ```sh
        $ npm run start
        ```

> **Note:**
> Development and production environments differ only in the use of `config/development.json` and `config/production.json` respectively as config.
At the moment, this only affects to the server listening port.

----------

## ToDo's
* Dockerize the package.
* A branch with basic routing configuration.
* A branch with MongoDB configured as database.
* Example spies/stubs/mocks with Sinon.

## License
[Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)
