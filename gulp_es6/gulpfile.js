// setup by `npm i gulp gulp-rollup rollup-plugin-babel babel-preset-es2015 babel-plugin-external-helpers --save-dev`
// gulpfile.js
var gulp       = require('gulp'),
    rollup     = require('gulp-rollup');

gulp.task('bundle', function() {
  gulp.src('./src/**/*.js')
    // transform the files here.
    .pipe(rollup({
      // any option supported by Rollup can be set here.
      "format": "iife",
      "plugins": [
        require("rollup-plugin-babel")({
          "presets": [["es2015", { "modules": false }]],
          "plugins": ["external-helpers"]
        })
      ],
      entry: './src/main.js'
    }))
    .pipe(gulp.dest('./dist'));
});