/** @type {import('eslint').Linter.FlatConfig} */
const { defineConfig } = require("eslint-define-config");
const airbnb = require("eslint-config-airbnb");
const prettierConfig = require("eslint-config-prettier");

const config = defineConfig([
    {
        ...airbnb, // Use the Airbnb config here
        plugins: ["prettier"],
        env: {
            jest: true,
            browser: true,
        },
        rules: {
            semi: [2, "never"],
            "no-tabs": 0,
            "no-mixed-spaces-and-tabs": 0,
            "no-unexpected-multiline": 2,
            "import/no-named-as-default": 0,
            "prettier/prettier": "error",
        },
    },
    {
        // Add Prettier configuration separately
        ...prettierConfig,
    },
]);

module.exports = config;
