import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import React, { ReactNode } from "react";
import { useDarkMode } from "storybook-dark-mode";
import { theme } from "../src/theme";

function ThemeWrapper(props: { children: ReactNode }) {
  const colorScheme = useDarkMode() ? "dark" : "light";

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={() => {}}>
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

export const decorators = [
  (renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
];
