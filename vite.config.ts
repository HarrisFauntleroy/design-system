import react from "@vitejs/plugin-react";
import path from "node:path";
import { UserConfigExport } from "vite";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";
import { name } from "./package.json";

const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
      }),
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name,
        formats: ["es", "umd"],
        fileName: (format) => `${name}.${format}.js`,
      },
      rollupOptions: {
        external: ["react", "react/jsx-runtime", "react-dom"],
        output: {
          globals: {
            "react": "React",
            "react/jsx-runtime": "react/jsx-runtime",
            "react-dom": "ReactDOM",
          },
        },
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
    },
  });
};
// https://vitejs.dev/config/
export default app;
