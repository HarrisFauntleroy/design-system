import {
  Button,
  ColorScheme,
  ColorSchemeProvider,
  Divider,
  MantineProvider,
} from "@mantine/core";
import { useColorScheme, useHotkeys, useLocalStorage } from "@mantine/hooks";
import { StoryFn } from "@storybook/react";
import { useState } from "react";

export function ThemeWrapper(Story: StoryFn) {
  const mode = useColorScheme();
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
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Button.Group>
          <Button variant="outline" onClick={toggleColorScheme}>
            Colour scheme: {colorScheme}
          </Button>
        </Button.Group>
        <Divider />
        <Story />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export const WithColorSchemeProvider = (Story: StoryFn) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");

  const toggleColorScheme = () => {
    const nextColorScheme = colorScheme === "dark" ? "light" : "dark";
    setColorScheme(nextColorScheme);
  };

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <Story />
    </ColorSchemeProvider>
  );
};

export const WithLocalStoreUIVersion = (Story: StoryFn) => {
  const DEFAULT_UI_VERSION = "default";
  const EXPERIMENTAL_UI_VERSION = "experimental";
  const LOCAL_STORAGE_KEY = "uiVersion";

  const [uiVersion, setUIVersion] = useState(() =>
    localStorage.getItem(LOCAL_STORAGE_KEY)
  );

  function handleToggle() {
    try {
      const newValue =
        uiVersion === DEFAULT_UI_VERSION
          ? EXPERIMENTAL_UI_VERSION
          : DEFAULT_UI_VERSION;
      setUIVersion(newValue);
      localStorage.setItem(LOCAL_STORAGE_KEY, newValue);
    } catch (error) {
      console.error(error);
    } finally {
      window.location.reload();
    }
  }

  return (
    <>
      <Story />
      <label
        style={{ marginTop: "16px", marginRight: "8px" }}
      >{`LocalStorage: { uiVersion: {${uiVersion}} }`}</label>
      <button onClick={handleToggle}>
        {uiVersion === DEFAULT_UI_VERSION
          ? "Switch to Experimental UI"
          : "Switch to Default UI"}
      </button>
    </>
  );
};
