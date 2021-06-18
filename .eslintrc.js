module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    'no-console': 'off',
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
}
