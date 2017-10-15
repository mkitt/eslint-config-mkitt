module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:flowtype/recommended'
  ],
  plugins: [
    'flowtype'
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    semi: ['error', 'never'],
    'no-alert': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'object-curly-newline': 'off',
    'react/jsx-filename-extension': 'off',
    'react/sort-comp': [
      'error',
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render'
        ]
      }
    ]
  }
}
