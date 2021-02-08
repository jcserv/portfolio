module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["react", "jsx-a11y", "simple-import-sort", "prettier"],
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-one-expression-per-line": "off",
    "no-console": "warn",
    "no-unused-vars": "warn",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-implicit-coercion": "error",
    "prettier/prettier": ["error"],
  },
  overrides: [
    {
      files: ["**/*.{js,jsx}"],
      rules: {
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
      },
    },
  ],
};
