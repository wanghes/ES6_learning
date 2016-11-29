//$ npm install --save-dev browserify babelify babel-preset-es2015 babel-preset-react
var fs = require("fs");
var browserify = require("browserify");
browserify(["./src/main.js"])
  .transform("babelify", {presets: ["es2015", "react"]})
  .bundle()
  .pipe(fs.createWriteStream("bundle.js"));