import { Theme } from "@emotion/react";

export const lightPalette = {
  primary: "#ef5f42",
  primaryDark: "#d54529",
  primaryLight: "#ed4d2d",
  textPrimary: "rgba(0, 0, 0, 0.87)",
  textSecondary: "rgba(0, 0, 0, 0.54)",
  textDisabled: "rgba(0, 0, 0, 0.38)",
  textDivider: "rgba(0, 0, 0, 0.12)",
  white: "#fdfdfd",
  black: "#000001",
};

export const darkPalette = {
  primary: "#ef5f42",
  primaryDark: "#be3e24",
  primaryLight: "#f17157",
  textPrimary: "rgba(255, 255, 255, 1)",
  textSecondary: "rgba(255, 255, 255, 0.7)",
  textDisabled: "rgba(255, 255, 255, 0.5)",
  textDivider: "rgba(255, 255, 255, 0.12)",
  white: "#fdfdfd",
  black: "#000001",
};

export const fontSize = {
  xsmall: "8px",
  small: "12px",
  medium: "16px",
  large: "20px",
  xlarge: "24px",
};

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const mediaSize = {
  xsmall: "375px",
  small: "640px",
  medium: "768px",
  large: "990px",
  xlarge: "1200px",
};

export type PaletteTypes = typeof lightPalette | typeof darkPalette;
export type PaletteKeyTypes = keyof PaletteTypes;
export type FontSizeTypes = typeof fontSize;
export type FontWeightTypes = typeof fontWeight;
export type MediaSizeTypes = typeof mediaSize;

const theme: Theme = {
  palette: lightPalette, // @Todo 나중에 light ? lighPalette : DarkPalette로 구현
  fontSize,
  fontWeight,
  mediaSize,
};

export default theme;
