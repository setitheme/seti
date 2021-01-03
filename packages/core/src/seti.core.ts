const dark = '#0e1112';
const light = '#d4d7d6';
const darkText = dark;
const lightText = light;

interface Color {
  id: string,
  name: string,
  text: string,
  hsl: object,
  rgb: object,
  hex: {
    base: string,
    50: string,
    100: string,
    200: string,
    300: string,
    400: string,
    500: string,
    600: string,
    700: string,
    800: string,
    900: string,
  },
}

export const white:Color = {
  id: 'white',
  name: 'White',
  text: darkText,
  hsl: [160, 4, 84],
  rgb: [212, 215, 214],
  hex: {
    base: '#d4d7d6',
    50: '#d4d7d6',
    100: '#d4d7d6',
    200: '#d4d7d6',
    300: '#d4d7d6',
    400: '#d4d7d6',
    500: '#d4d7d6',
    600: '#d4d7d6',
    700: '#d4d7d6',
    800: '#d4d7d6',
    900: '#d4d7d6',
  },
};

export const black:Color = {
  id: 'black',
  name: 'Black',
  text: lightText,
  hsl: [195, 13, 6],
  rgb: [14, 17, 18],
  hex: {
    base: '#0e1112',
    50: '#0e1112',
    100: '#0e1112',
    200: '#0e1112',
    300: '#0e1112',
    400: '#0e1112',
    500: '#0e1112',
    600: '#0e1112',
    700: '#0e1112',
    800: '#0e1112',
    900: '#0e1112',
  },
};

export const blue:Color = {
  id: 'blue',
  name: 'Blue',
  text: lightText,
  hsl: [198, 43, 52],
  rgb: [81, 154, 186],
  hex: {
    base: '#519aba',
    50: '#e8f6fb',
    100: '#d3f0fc',
    200: '#b3e3f8',
    300: '#93d7f4',
    400: '#6dbee1',
    500: '#519aba',
    600: '#1d5b91',
    700: '#12436e',
    800: '#112b43',
    900: '#0d1823',
  },
};

export const gray:Color = {
  id: 'gray',
  name: 'Gray',
  text: lightText,
  hsl: [199, 20, 55],
  rgb: [116, 148, 163],
  hex: {
    base: '#7494a3',
    50: '#f4fafd',
    100: '#ddeff7',
    200: '#c4dfeb',
    300: '#a9c0ca',
    400: '#8cabb9',
    500: '#7494a3',
    600: '#455e6a',
    700: '#293c44',
    800: '#1a272c',
    900: '#121b1e',
  },
};

export const green:Color = {
  id: 'green',
  name: 'Green',
  text: darkText,
  hsl: [89, 49, 52],
  rgb: [141, 193, 73],
  hex: {
    base: '#8dc149',
    50: '#edfdec',
    100: '#e0fbd9',
    200: '#d3fe9a',
    300: '#b7f269',
    400: '#a4df56',
    500: '#8dc149',
    600: '#609d31',
    700: '#3e7018',
    800: '#274c0a',
    900: '#0e2506',
  },
};

export const orange:Color = {
  id: 'orange',
  name: 'Orange',
  text: lightText,
  hsl: [24, 76, 55],
  rgb: [227, 121, 51],
  hex: {
    base: '#e37933',
    50: '#fdf6f1',
    100: '#fae3d4',
    200: '#fbcfb2',
    300: '#f7b58a',
    400: '#ed9b64',
    500: '#e37933',
    600: '#b55421',
    700: '#944205',
    800: '#6f3803',
    900: '#412207',
  },
};

export const pink:Color = {
  id: 'pink',
  name: 'Pink',
  text: lightText,
  hsl: [341, 89, 64],
  rgb: [245, 83, 133],
  hex: {
    base: '#f55385',
    50: '#fae7ed',
    100: '#f9cfdc',
    200: '#fcb2c8',
    300: '#fd97b6',
    400: '#fa739c',
    500: '#f55385',
    600: '#993864',
    700: '#63213f',
    800: '#421328',
    900: '#280e22',
  },
};

export const purple:Color = {
  id: 'purple',
  name: 'Purple',
  text: lightText,
  hsl: [273, 40, 61],
  rgb: [160, 116, 196],
  hex: {
    base: '#a074c4',
    50: '#f7f2fb',
    100: '#ead4fc',
    200: '#ddbdf7',
    300: '#cf9ef7',
    400: '#b183d7',
    500: '#a074c4',
    600: '#774c9b',
    700: '#4f397c',
    800: '#362557',
    900: '#201632',
  }
};

export const red:Color = {
  id: 'red',
  name: 'Red',
  text: lightText,
  hsl: [357, 58, 52],
  rgb: [204, 62, 68],
  hex: {
    base: '#cc3e44',
    50: '#fae6e6',
    100: '#facbcb',
    200: '#fba7a7',
    300: '#f97c7c',
    400: '#ee4545',
    500: '#cc3e44',
    600: '#7c1c20',
    700: '#590b0e',
    800: '#3b070a',
    900: '#2b090b',
  }
};

export const yellow:Color = {
  id: 'yellow',
  name: 'Yellow',
  text: darkText,
  hsl: [60, 57, 53],
  rgb: [203, 203, 65],
  hex: {
    base: '#cbcb41',
    50: '#fffffb',
    100: '#fdfde2',
    200: '#fbf7b2',
    300: '#fcf367',
    400: '#e5e32e',
    500: '#cbcb41',
    600: '#afa428',
    700: '#a2852f',
    800: '#8c6e16',
    900: '#634c09',
  }
};

export const colors = {
  misc: {
    background: dark,
    text: lightText,
  },
  cyan: blue,
  black,
  blue,
  gray,
  grey: gray,
  green,
  magenta: pink,
  orange,
  pink,
  purple,
  red,
  white,
  yellow
};

export default {
  version: '1.0.0',
  colors
};
