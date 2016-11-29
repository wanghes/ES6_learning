// setup by `npm i rollup rollup-plugin-babel babel-preset-es2015 babel-plugin-external-helpers --save-dev`
// build.js: 需要创建dist目录
require("rollup").rollup({
  entry: "./src/main.js",
  plugins: [
    require("rollup-plugin-babel")({
      "presets": [["es2015", { "modules": false }]],
      "plugins": ["external-helpers"]
    })
  ]
}).then(bundle => {
  var result = bundle.generate({
    // output format - 'amd', 'cjs', 'es6', 'iife', 'umd'
    format: 'iife'
  });

  require("fs").writeFileSync("./dist/bundle.js", result.code);
  // sourceMaps are supported too!

}).then(null, err => console.error(err));