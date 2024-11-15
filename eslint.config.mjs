import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" }},
  { languageOptions: { globals: { ...globals.browser, ...globals.node, ...globals.jest }}},
  pluginJs.configs.recommended,
  {
    files: ["**/*.test.js", "**/*.spec.js"],
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: { ...globals.jest }
    },
    rules: {
      ...pluginJest.configs.recommended.rules,
    },
  },
];