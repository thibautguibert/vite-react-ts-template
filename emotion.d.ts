import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: Record<string, string>;
    fontFamily?: Record<string, string>;
    screens: Record<string, string>;
    spacing?: Record<string, unknown>;
    radius?: Record<string, unknown>;
  }
}
