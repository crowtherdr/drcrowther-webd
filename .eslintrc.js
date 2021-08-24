module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  plugins: ['@typescript-eslint'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'es5',
        semi: false,
      },
    ],
    'arrow-parens': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'consistent-return': 'off',
    'default-case': 'off',
    'no-unused-expressions': ['warn', { allowShortCircuit: true }],
    'no-warning-comments': 1,
    'prefer-destructuring': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-inferrable-types': ['warn', { ignoreParameters: true }],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-use-before-define': 'off',

    semi: ['error', 'never'],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      parser: 'espree',
      extends: [],
    },
  ],
}
