# Seti Core
![License](https://img.shields.io/github/license/setitheme/seti?style=flat-square)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](code_of_conduct.md)
![npm (scoped)](https://img.shields.io/npm/v/setitheme/core)
![GitHub issues](https://img.shields.io/github/issues-raw/setitheme/core?style=flat-square)
![Dependent repos (via libraries.io), scoped npm package](https://img.shields.io/librariesio/dependent-repos/npm/@setitheme/core?style=flat-square)
![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/setitheme/core?style=flat-square)


Shared functionality across Seti modules. Only intended for internal use, but open to anyone who wants to utilize seti colors.

## Installation

#### Yarn
```
$ yarn add @setitheme/core
```

#### NPM
```
$ npm install @setitheme/core
```

## Usage
This package simply exposes a json confile file with all color variations used in Seti.

```
import { colors } @setitheme/core;
```
