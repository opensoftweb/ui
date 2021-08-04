const borders = {
  none: 0,
  hidden: "hidden",

  "1px-dashed": "1px dashed",
  "2px-dashed": "2px dashed",
  "4px-dashed": "4px dashed",

  "1px-dotted": "1px dotted",
  "2px-dotted": "2px dotted",
  "4px-dotted": "4px dotted",

  "1px-double": "1px double",
  "2px-double": "2px double",
  "4px-double": "4px double",

  "1px-groove": "1px groove",
  "2px-groove": "2px groove",
  "4px-groove": "4px groove",

  "1px-ridge": "1px ridge",
  "2px-ridge": "2px ridge",
  "4px-ridge": "4px ridge",

  "1px-inset": "1px inset",
  "2px-inset": "2px inset",
  "4px-inset": "4px inset",

  "1px-outset": "1px outset",
  "2px-outset": "2px outset",
  "4px-outset": "4px outset",

  "1px-solid": "1px solid",
  "2px-solid": "2px solid",
  "4px-solid": "4px solid",
};

const borderWidths = {
  "border-0": "0",
  "border-1": "1px",
  "border-2": "2px",
  "border-3": "3px",
  "border-4": "4px",
  "border-5": "5px",
  "border-6": "6px",
};

const breakpoints: any = ["576px", "768px", "992px", "1200px", "1400px"];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
breakpoints.xxl = breakpoints[4];

const colors = {
  white: "#fff",
  black: "",

  primary: "#0d6efd",
  secondary: "#6c757d",
  success: "#198754",
  info: "#0dcaf0",
  warning: "#ffc107",
  danger: "#dc3545",
  light: "#f8f9fa",
  dark: "#212529",

  blue: "#0d6efd",
  indigo: "#6610f2",
  purple: "#6f42c1",
  pink: "#d63384",
  red: "#dc3545",
  orange: "#fd7e14",
  yellow: "#ffc107",
  green: "#198754",
  teal: "#20c997",
  cyan: "#0dcaf0",

  grays: {
    100: "#f8f9fa",
    200: "#e9ecef",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#6c757d",
    700: "#495057",
    800: "#343a40",
    900: "#212529",
  },
};

const fonts = {
  "sans-serif": `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  monospace: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
};

const fontSizes = {
  base: "1rem",
  sm: ".875rem",
  lg: "1.25rem",
  "fs-1": "calc(1.375rem + 1.5vw)",
  "fs-2": "calc(1.325rem + .9vw)",
  "fs-3": "calc(1.3rem + .6vw)",
  "fs-4": "calc(1.275rem + .3vw)",
  "fs-5": "1.25rem",
  "fs-6": "1rem",
};

const fontWeights = {
  lighter: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  bolder: 800,
  black: 900,
};

const letterSpacings = {};

const lineHeights = {
  xs: 1,
  sm: 1.25,
  base: 1.5,
  lg: 2,
};

const radii = {
  circle: "50%",
  squared: "0",
  rounded: ".25rem",
  "rounded-1": ".2rem",
  "rounded-2": ".25rem",
  "rounded-3": ".3rem",
  pill: "50rem",
};

const shadows = {
  none: "none",
  sm: "0 .125rem .25rem rgba(0, 0, 0, .075)",
  regular: "0 .5rem 1rem rgba(0, 0, 0, .15)",
  lg: "0 1rem 3rem rgba(0, 0, 0, .175)",
};

const sizes = {
  auto: "auto",
  25: "25%",
  50: "50%",
  75: "75%",
  full: "100%",
};

const space = {
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
};

const zIndices = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  backdrop: 1040,
  offcanvas: 1050,
  modal: 1060,
  popover: 1070,
  tooltip: 1080,
};

export const theme = {
  borders,
  borderWidths,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,
  zIndices,
};
