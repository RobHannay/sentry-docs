/* eslint-env node */
/* eslint import/no-nodejs-modules:0 */

module.exports = {
  extends: ['sentry-docs', 'plugin:@next/next/recommended'],
  globals: {
    jest: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    'import/no-nodejs-modules': 'off',
  },
};
