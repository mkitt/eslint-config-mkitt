<img src="https://mkitt.net/apple-touch-icon.png" width="80px" height="80px" />

# ESLint configuration

1. Extends: `airbnb, flowtype/recommended`
2. Plugins: `flowtype, import, jsx-a11y, react`

Some airbnb rules are being overridden.

Install with `peerDependencies`:

```sh
yarn add eslint eslint-config-mkitt -DE
```

Add to package.json:

```json
"eslintConfig": {
  "extends": "mkitt"
}
```

[mkitt.net][mkitt.net] | [github/mkitt][github]

[github]: https://github.com/mkitt "@mkitt"
[mkitt.net]: https://mkitt.net "🏔"
