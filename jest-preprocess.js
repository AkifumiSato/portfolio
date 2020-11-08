const babelOptions = {
  presets: ["babel-preset-gatsby", "@babel/preset-typescript"],
  env: {
    test: {
      plugins: ["require-context-hook"]
    }
  }
}

module.exports = require("babel-jest").createTransformer(babelOptions)