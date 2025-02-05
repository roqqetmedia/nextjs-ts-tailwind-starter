import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
  },
});

const eslintConfig = [
  {
    ignores: ["**/node_modules/", "**/.next/", "**/dist/"],
  },
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        React: true,
        JSX: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  ...compat.extends(
    "eslint:recommended",
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ),
  {
    rules: {
      "no-unused-vars": "off",
      "no-console": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-var-requires": "off",
      "react/no-unescaped-entities": "off",
      "react/display-name": "off",
      "react/jsx-curly-brace-presence": [
        "warn",
        { props: "never", children: "never" },
      ],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];

export default eslintConfig;
