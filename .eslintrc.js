import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    ignores: [
      "public/",
      "src/components/ui",
      "tailwind.config.js",
      "dist/",
      "cypress/",
    ],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "no-console": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // React import
            ["^react", "^react-dom"],
            // External packages
            ["^([a-z]|@[^/])+"],
            // Internal paths starting with @/
            ["^@/(?!assets).*"],
            // Assets imports
            ["^@/assets"],
            // Style imports
            ["^[./].*(?<!\\.(c|le|sc)ss)$"],
            // CSS imports
            ["\\.(c|le|sc)ss$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
      "react/react-in-jsx-scope": "off",
    },
  },
];
