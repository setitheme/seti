# Seti Core
![License](https://img.shields.io/github/license/setitheme/seti?style=flat-square)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](code_of_conduct.md)
![npm (scoped)](https://img.shields.io/npm/v/setitheme/core)
![GitHub issues](https://img.shields.io/github/issues-raw/setitheme/core?style=flat-square)
![Dependent repos (via libraries.io), scoped npm package](https://img.shields.io/librariesio/dependent-repos/npm/@setitheme/core?style=flat-square)
![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/setitheme/core?style=flat-square)

Shared functionality across Seti modules. Only intended for internal use, but open to anyone who wants to utilize seti colors.

---

## Installation

### Yarn
```sh
yarn add @setitheme/core
```

### NPM
```sh
npm install @setitheme/core
```

---

## Usage
This package simply exposes a json confile file with all color variations used in Seti.

Each color includes hex color values in shades of 50 at lightest to 900 at darkest (with 500 being default)) aa well as rgb & hsl for base colors.

You can get the values from the config object as followed:

```javascript
import config from @setitheme/core;

console.log(config.version) // outputs: current version, i.e. 1.0.0
console.log(config.colors.blue.hsl) // outputs: [ 160, 4, 84 ]
console.log(config.colors.pink.hex.500) // outputs: #a074c4
```
