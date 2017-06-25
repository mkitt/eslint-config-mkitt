module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',

  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'no-alert': 2,
    'no-console': 2,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
          '.jsx'
        ]
      }
    ],
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
    ],
    semi: 0
  }
}

