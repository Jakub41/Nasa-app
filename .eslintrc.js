//Path: /.eslintrc.js
module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: { sourceType: 'module' },
  rules: {
    "no-use-before-define": ["error", { "variables": false }],
    'react/jsx-filename-extension': 'off',
    'import/no-named-as-default': 'off',
    semi: [2, 'always'],
    'max-len': ['error', { code: 100 }],
    'prefer-promise-reject-errors': ['off'],
    'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
    'react/prop-types': ['off'],
    'no-return-assign': ['off'],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'prettier/prettier': ['error', { singleQuote: true }],
    quotes: [2, 'single', { avoidEscape: true }],
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
};
