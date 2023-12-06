module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/recommended",
    ],
    overrides: [
        {
        env: {
            node: true,
        },
        files: [".eslintrc.{js,cjs}"],
        parserOptions: {
            sourceType: "script",
        },
        globals: {
            Atomics: "readonly",
            SharedArrayBuffer: "readonly",
        },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
        jsx: true,
        },
    },
    plugins: ["react", "import","prettier"],
    rules: {
        "no-console": "error",
        "import/prefer-default-export": "off",
    },
    ignorePatterns: ["public"],
};
