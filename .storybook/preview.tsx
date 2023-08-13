import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import type { Preview } from "@storybook/react";
import React from "react";
import { useDarkMode } from "storybook-dark-mode";
import { theme } from "../src/styles/theme";

// initialiseMockServiceWorker()
// initialiseI18n()

// .storybook/preview.tsx

function ThemeWrapper(props: { children: React.ReactNode }) {
  const mode = useDarkMode() ? "dark" : "light";

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "storybook-color-scheme",
    defaultValue: mode,
  });

  const toggleColorScheme = () => {
    const nextColorScheme = colorScheme === "dark" ? "light" : "dark";
    console.log(
      `Changing color scheme from ${colorScheme} -> ${nextColorScheme}`
    );
    setColorScheme(nextColorScheme);
  };

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ ...theme, colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        {props.children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

// enhance your stories with decorator that uses ThemeWrapper
export const decorators = [
  (renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    msw: {
      handlers: [],
    },
  },
};

export default preview;
