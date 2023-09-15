import type { Preview } from "@storybook/react";

// initialiseMockServiceWorker()
// initialiseI18n()

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
    darkMode: {
      darkClass: "dark",
      lightClass: "light",
    },
    backgrounds: { padding: 0 },
  },
};

export default preview;
