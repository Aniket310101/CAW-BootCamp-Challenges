module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['google'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    indent: ['error', 2],
    quotes: [2, 'single'],
  },
};
