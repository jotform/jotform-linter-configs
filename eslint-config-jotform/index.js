module.exports = {
  extends: 'airbnb',
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  globals: {
    document: true,
    window: true,
    fetch: true
  },
  rules: {
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-boolean-value': 0,
    'react/no-danger': 0,
    'react/jsx-no-target-blank': 0,
    'jsx-a11y/img-has-alt': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'arrow-body-style': 0,
    'class-methods-use-this': 0,
    'max-len': ['error', 200],
    'comma-dangle': ['error', 'never'],
    'consistent-return': 0,
    'no-case-declarations': 0,
    'no-plusplus': 0,
    'object-shorthand': 0,
    'no-unneeded-ternary': 0,
    'no-underscore-dangle': 0,
    'no-continue': 0,
    'operator-assignment': 0,
    'linebreak-style': 0,
    'no-var': 0,
    'vars-on-top': 0,
    'max-statements': ['error', 40, { ignoreTopLevelFunctions: true }],
    'max-lines': ['error', { max: 1000, skipComments: true }],
    complexity: ['error', 20]
  }
};
