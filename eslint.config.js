import pluginReact from 'eslint-plugin-react'
import pluginPrettier from 'eslint-plugin-prettier'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'readonly',
        global: 'readonly',
        Buffer: 'readonly',
        Promise: 'readonly',
        Symbol: 'readonly',
        Map: 'readonly',
        Set: 'readonly',
        WeakMap: 'readonly',
        WeakSet: 'readonly',
        ArrayBuffer: 'readonly',
        DataView: 'readonly',
        Int8Array: 'readonly',
        Uint8Array: 'readonly',
        Uint8ClampedArray: 'readonly',
        Int16Array: 'readonly',
        Uint16Array: 'readonly',
        Int32Array: 'readonly',
        Uint32Array: 'readonly',
        Float32Array: 'readonly',
        Float64Array: 'readonly',
        BigInt64Array: 'readonly',
        BigUint64Array: 'readonly',
      },
    },
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },
    settings: {
      react: {
        version: 'detect',
      },
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
    },
    ignores: [
      'node_modules/',
      'reports/',
      'components/',
      'dist/',
      '**/*{.,-}min.js',
      'LICENSE',
      'Procfile',
      '*.md',
      'package.json',
      'package-lock.json',
      'yarn.lock',
      'build/',
      'config-overrides.js',
      'public/',
      '**/*.json',
      'src/assets/',
      'src/__mocks__/',
      'x-tag-components.js',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: pluginReact,
      prettier: pluginPrettier,
    },
    settings: {
      react: {
        version: 'detect',
      },
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
    },
  },
]
