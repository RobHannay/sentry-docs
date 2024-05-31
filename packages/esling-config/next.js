/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["sentry-docs", "plugin:@next/next/recommended"],
  globals: {
    jest: true,
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  rules: {
    "import/no-nodejs-modules": "off",
  },
};
