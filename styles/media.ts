import { mediaSize } from "./theme";

const mediaQuery = (maxWidth: string) => `@media (max-width: ${maxWidth})`;

const { large, medium, small, xlarge, xsmall } = mediaSize;

const media = {
  xsmall: mediaQuery(xsmall),
  small: mediaQuery(small),
  medium: mediaQuery(medium),
  large: mediaQuery(large),
  xlarge: mediaQuery(xlarge),
  custom: mediaQuery,
};

export default media;
