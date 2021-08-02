# yarn-plugin-postinstall-dev

Run a `postinstallDev` script after installation (`yarn install`). Works for Yarn v2 and v3.

## Installation

```shell
yarn plugin import https://raw.githubusercontent.com/sachinraja/yarn-plugin-postinstall-dev/main/bundles/%40yarnpkg/plugin-postinstall-dev.js
```

## Example

```json
{
  "name": "yarn-plugin-postinstall-dev",
  "scripts": {
    "postinstallDev": "husky install"
  }
}
```
