# Seti Icons
![License](https://img.shields.io/github/license/setitheme/seti?style=flat-square)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](code_of_conduct.md)
![npm (scoped)](https://img.shields.io/npm/v/setitheme/icons)
![GitHub issues](https://img.shields.io/github/issues-raw/setitheme/icons?style=flat-square)
![Dependent repos (via libraries.io), scoped npm package](https://img.shields.io/librariesio/dependent-repos/npm/@setitheme/icons?style=flat-square)
![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/setitheme/icons?style=flat-square)


## Usage
The following examples show how to render the default basic html icon in various applications.

### Font Files
For all applications, if you are using the included css file & web fonts, it is assumed that you are serving the webfont files from the root of your server. For example:
[https://setitheme.org/seti-icons/seti-icon.ttf](https://setitheme.org/seti-icons/seti-icon.ttf)

You can copy these files by running the following from the same level that you hav installed seti icons.

**Yarn:**
`$ yarn seti-icons copy -o path/to/public/dir`

**NPM:**
`$ npm run seti-icons copy -o path/to/public/dir`

For example:
- `$ cd my-project`
- `$ yarn seti-icons copy -o public`
- Seti will then copy the following files to `my-project/public/`:
  - seti-icons/seti-icons.css
  - seti-icons/seti-icons.eot
  - seti-icons/seti-icons.scss
  - seti-icons/seti-icons.ttf
  - seti-icons/seti-icons.woff
  - seti-icons/seti-icons.woff2

Alternatively, you can download a bundle with all assets directly from the website: 
https://setitheme.org

### Good Ol' Fashioned HTML + CSS
```html
<html>
  <head>
    <!-- Import the CSS file -->
    <link rel="stylesheet" type="text/css" href="/icons/seti-icons.css" />
  </head>
  <body>
    <i className="seti-icon seti-icon-html"></i>
  </body>
</html>
```

### JSX

```javascript
// Import CSS
import '@setitheme/static/icons/seti-icons.css';

// Use the icon same as in html once css is imported
return <i className="seti-icon seti-icon-html"></i>

```

### React

```javascript
import '@setitheme/react';
<SetiIcon icon="react" />
```

### Vue

```javascript
<SetiIcon icon="vue" />
```
