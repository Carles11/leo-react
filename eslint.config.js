/** @type {import('eslint').Linter.FlatConfig} */
const { defineConfig } = require("eslint-define-config");
const airbnb = require("eslint-config-airbnb");
const prettier = require("eslint-config-prettier");
const prettierPlugin = require("eslint-plugin-prettier");
const reactPlugin = require("eslint-plugin-react");

const config = defineConfig([
    {
        files: ["**/*.js", "**/*.jsx"], // Adjust according to your file types
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "module",
            parser: {
                parse: (code, options) => {
                    const babelParser = require("@babel/eslint-parser");
                    return babelParser.parse(code, {
                        ...options,
                        requireConfigFile: false,
                    });
                },
            },
        },
        plugins: {
            react: reactPlugin,
            prettier: prettierPlugin,
        },
        rules: {
            "react/jsx-filename-extension": [1, { extensions: ['.jsx', '.js'] }],
            "react/prop-types": 0,
            "prettier/prettier": "error",
            // Add more rules based on your needs
        },
    },
    {
        rules: {
            ...prettier.rules,
        },
    },
]);

module.exports = config;
