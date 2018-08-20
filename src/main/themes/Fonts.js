// @flow

import Colors from './Colors';

type Font = {
  fontFamily: string,
  color: string,
  fontWeight: number,
  fontSize: number,
}

type FontWeight = 'base' | 'bold'

const type = {
  base: 'Rubik',
};

const weight = {
  base: 400,
  bold: 500,
};

function toCSS(font: Font) {
  return `
    font-family: ${font.fontFamily};
    color: ${font.color};
    font-weight: ${font.fontWeight};
    font-size: ${font.fontSize}px;
  `;
}

function massive(fontWeigth: FontWeight = 'base') {
  return {
    color: Colors.primaryText,
    fontFamily: type.base,
    fontWeight: weight[fontWeigth],
    fontSize: 38,
  };
}

function huge(fontWeigth: FontWeight = 'base') {
  return {
    color: Colors.primaryText,
    fontFamily: type.base,
    fontWeight: weight[fontWeigth],
    fontSize: 28,
  };
}

function main(fontWeigth: FontWeight = 'base') {
  return {
    color: Colors.primaryText,
    fontFamily: type.base,
    fontWeight: weight[fontWeigth],
    fontSize: 22,
  };
}

function secondary(fontWeigth: FontWeight = 'base') {
  return {
    color: Colors.primaryText,
    fontFamily: type.base,
    fontWeight: weight[fontWeigth],
    fontSize: 20,
  };
}

function sub(fontWeigth: FontWeight = 'base') {
  return {
    color: Colors.primaryText,
    fontFamily: type.base,
    fontWeight: weight[fontWeigth],
    fontSize: 17,
  };
}

function small(fontWeigth: FontWeight = 'base') {
  return {
    color: Colors.primaryText,
    fontFamily: type.base,
    fontWeight: weight[fontWeigth],
    fontSize: 14,
  };
}

function xsmall(fontWeigth: FontWeight = 'base') {
  return {
    color: Colors.primaryText,
    fontFamily: type.base,
    fontWeight: weight[fontWeigth],
    fontSize: 12,
  };
}

function xxsmall(fontWeigth: FontWeight = 'base') {
  return {
    color: Colors.primaryText,
    fontFamily: type.base,
    fontWeight: weight[fontWeigth],
    fontSize: 10,
  };
}

function tiny(fontWeigth: FontWeight = 'base') {
  return {
    color: Colors.primaryText,
    fontWeight: weight[fontWeigth],
    fontFamily: type.base,
    fontSize: 6,
  };
}

export default {
  massive,
  huge,
  main,
  secondary,
  sub,
  small,
  xsmall,
  xxsmall,
  tiny,
  toCSS,
};
