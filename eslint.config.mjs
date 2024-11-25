import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: {globals: globals.browser}},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettierConfig,
  {
    plugins: {
      prettier,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Disable React in JSX scope rule
      "prettier/prettier": "error",
      semi: ["warn", "always"],
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
];
