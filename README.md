# Meteor react-toolbox-example

Meteor version of [react-toolbox-example](https://github.com/react-toolbox/react-toolbox-example)

### How it works (using 1.3-rc.7):
1. `meteor create your-app --release 1.3-rc.7`
1. `cd your-app`
1. `npm install --save react-toolbox`
1. `meteor add nathantreid:css-modules@1.0.0-beta.8`
1. create a folder your-app/client
1. Place all of the files from react-toolbox-example/app in the /client folder
1. Copy the head & body tags, minus the <link rel="stylesheet" href="react-toolbox.css"> and <script src="react-toolbox.js"></script> from react-toolbox-example/www/index.html to an index.html in the /client folder
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
        ],
        "outputJsFilePath": "{dirname}/{basename}",
        "explicitIncludes": [
          "node_modules/react-toolbox"
        ]
      }
```

The `extensions` property determines which file types are handled by the plugin (default: `[ "mss" ]`).

The `globalVariables` property is roughly the equivalent of the toolbox-loader configured by `toolbox: { theme: }` property from the react-toolbox-example's webpack.config.js.

The `outputJsFilePath` property configures the output filename used by the import statement (default: `{ "default": "{dirname}/{basename}.{extname}" }`, eg. "client/styles.scss"). React-Toolbox omits the extension from the scss imports, so it requires the output format to be `{ "default": "{dirname}/{basename}" }`, eg. "client/styles". If you want to use the standard format for files in your project, but still use React-Toolbox, you can limit the format specifically to the react-toolbox directory using a regular expression: 
``` json
    "outputJsFilePath": {
      "node_modules/react-toolbox/.*": "{dirname}/{basename}"
    },
```    

The `explicitIncludes` property tells the css modules plugin to process all handled file extensions (in this case, scss) in the supplied directories. This is required because Meteor 1.3 does not process files in the node_modules folder.
