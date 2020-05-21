//Path: /.eslintrc.js
module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'import/no-named-as-default': 'off',
    semi: [2, 'always'],
    'max-len': ['error', { code: 100 }],
    'prefer-promise-reject-errors': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
    'react/prop-types': ['off'],
    'no-return-assign': ['off'],
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
}
