module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      'react/jsx-one-expression-per-line': 'off'
  },
};
