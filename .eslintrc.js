module.exports = {
  extends: "standard",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },
  parser: "babel-eslint",
  plugins: ["react"],
  rules: {
    "no-unused-vars": 0,
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx"]
      }
    ]
  }
};
