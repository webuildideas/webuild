module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'prettier/@typescript-eslint',
    'plugin:prettier/recommended' // Make sure this is always last
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
    'react/display-name': 0,
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 0,
    '@typescript-eslint/ban-ts-ignore': 'off',
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
  settings: {
    react: {
      version: 'detect'
    }
  }
}
