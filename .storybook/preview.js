import { addDecorator } from "@storybook/react";
import { themes } from "@storybook/theming";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components/macro";
import { theme } from "../src/components/Theme";

const mythemes = [theme];
addDecorator(withThemesProvider(mythemes), ThemeProvider);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: "black" },
    // Override the default light theme
    light: { ...themes.normal, appBg: "red" },
    // Set the initial theme
    current: "dark",
    // Apply theme to style preview also
    stylePreview: false,
  },
};
