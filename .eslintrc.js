module.exports = {
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
    },
    "extends": "eslint:recommended",
    "rules": {
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
    },
    "globals": {
        "browser": false
    }
}