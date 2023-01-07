/**
 * ESLint Configuration
 */
/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
const config = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // custom
    // "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
  },
};

module.exports = config;
