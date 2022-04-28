import "@emotion/react";
import {
  FontSizeTypes,
  FontWeightTypes,
  MediaSizeTypes,
  PaletteTypes,
} from "./theme";

declare module "@emotion/react" {
  export interface Theme {
    palette: PaletteTypes;
    fontSize: FontSizeTypes;
    fontWeight: FontWeightTypes;
    mediaSize: MediaSizeTypes;
  }
}
