module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: ['google', 'eslint:recommended', 'plugin:prettier/recommended'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: "module"
    },
    rules: {
        'require-jsdoc': 0,
    }
};
