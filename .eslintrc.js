module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        singleQuote: true,
        semi: false
      }
    ],
    'react/jsx-boolean-value': 0,
    'react/jsx-props-no-spreading': 0,
    'react/static-property-placement': 0,
    'import/no-extraneous-dependencies': 0,
    'no-use-before-define': [0],
    '@typescript-eslint/no-use-before-define': [1],
    'import/no-unresolved': 0,
    'react/display-name': 0,
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 0,
    '@typescript-eslint/ban-ts-ignore': 'off',
    'import/extensions': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-submodule-imports': 0,
    'react/require-default-props': 0,
    'import/prefer-default-export': 0,
    'react/forbid-prop-types': 0,
    'react/no-array-index-key': 0,
    'no-nested-ternary': 0,
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] }
    ],
    'react/jsx-sort-props': [
      1,
      {
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true
      }
    ],
    'react/sort-prop-types': [
      1,
      {
        callbacksLast: false,
        ignoreCase: true,
        requiredFirst: false,
        sortShapeProp: true,
        noSortAlphabetically: false
      }
    ]
  },
  env: {
    'jest/globals': true,
    browser: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
