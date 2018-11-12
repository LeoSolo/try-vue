module.exports = {
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        'plugin:vue/recommended',
        'standard'
    ],
    plugins: [
        'vue'
    ],
    rules: {
        "ter-indent": [4, {
            "SwitchCase": 8
        }],
        "space-before-function-paren": 0,
        "quotemark": [true, "single", "jsx-double"]
    }
}