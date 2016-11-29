// setup by `npm i grunt grunt-rollup rollup-plugin-babel babel-preset-es2015 babel-plugin-external-helpers --save-dev`
// gruntfile.js
module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-rollup");
  grunt.initConfig({
    "rollup": {
      "options": {
        "format": "iife",
        "plugins": [
          require("rollup-plugin-babel")({
            "presets": [["es2015", { "modules": false }]],
            "plugins": ["external-helpers"]
          })
        ]
      },
      "dist": {
        "files": {
          "./dist/bundle.js": ["./src/main.js"]
        }
      }
    }
  });
}