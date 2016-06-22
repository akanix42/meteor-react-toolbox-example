# Meteor react-toolbox-example

Meteor version of [react-toolbox-example](https://github.com/react-toolbox/react-toolbox-example)

### Getting Started
1. Clone this repository
1. Run `meteor npm install && meteor`
1. Visit `localhost:3000` in your browser

### How it works (using Meteor 1.3.3.1 and nathantreid:css-modules 2.0.2):
1. `meteor create your-app`
1. `cd your-app`
1. `meteor npm install --save react-toolbox`
1. `meteor npm install --save-dev node-sass@3.4.2`
1. `meteor add nathantreid:css-modules@2.0.2`
1. Remove the `server` directory
1. Remove all files from the `client` directory
1. Download the [react-toolbox-example](https://github.com/react-toolbox/react-toolbox-example) 
1. Copy all of the files from react-toolbox-example/app into the /client folder
1. Wrap the `ReactDom.render()` call in index.jsx inside `Meteor.startup()`:
``` js
Meteor.startup(function () {
    ReactDOM.render((
    // rest of ReactDOM.render call...
});
```

1. Copy the head & body tags, minus the <link rel="stylesheet" href="react-toolbox.css"> and <script src="react-toolbox.js"></script> (Meteor will handle those) from react-toolbox-example/www/index.html to an index.html in the /client folder
1. Add the following to packages.json:
``` json
    "cssModules": {
        "extensions": [
          "scss"
        ],
        "globalVariables": [
          "node_modules/react-toolbox/lib/_colors.scss",
          { "theme-building": true },
          "client/toolbox-theme.scss"
        ]
      }
```
1. Run meteor

The `extensions` property determines which file types are handled by the plugin (default: `[ "mss" ]`).

The `globalVariables` property is roughly the equivalent of the toolbox-loader configured by `toolbox: { theme: }` property from the react-toolbox-example's webpack.config.js.
