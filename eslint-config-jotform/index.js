module.exports = {
  extends: 'airbnb',
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  globals: {
    document: true,
    window: true,
    fetch: true,
  },
  rules: {
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-unresolved': [2, { ignore: ['react'] }],
    'import/extensions': ['error', 'never', { packages: 'always' }],
  },
};
