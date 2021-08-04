export const typography = {
  fonts: {
    "sans-serif": `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    monospace: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  },

  fontSizes: {
    base: "1rem",
    sm: ".875rem",
    lg: "1.25rem",
    "fs-1": "calc(1.375rem + 1.5vw)",
    "fs-2": "calc(1.325rem + .9vw)",
    "fs-3": "calc(1.3rem + .6vw)",
    "fs-4": "calc(1.275rem + .3vw)",
    "fs-5": "1.25rem",
    "fs-6": "1rem",
  },

  fontWeights: {
    lighter: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    bolder: 800,
    black: 900,
  },

  letterSpacings: {},

  lineHeights: {
    xs: 1,
    sm: 1.25,
    base: 1.5,
    lg: 2,
  },
};

export type Typography = typeof typography;
