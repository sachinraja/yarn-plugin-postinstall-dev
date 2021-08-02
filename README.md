# yarn-plugin-postinstall-dev

Run a `postInstallDev` script after installation (`yarn install`).

## Installation

```shell
yarn plugin import https://raw.githubusercontent.com/sachinraja/yarn-plugin-postinstall-dev/main/bundles/%40yarnpkg/plugin-postinstall-dev.js
```

## Example

```json
{
  "name": "yarn-plugin-postinstall-dev",
  "scripts": {
    "postInstallDev": "husky install"
  }
}
```
