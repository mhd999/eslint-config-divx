module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "camelcase": 0,
    "react/prop-types": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-wrap-multilines": 0,
    "linebreak-style": 0,
    "no-shadow": 0,
    "no-param-reassign": 0,
    "max-len": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/href-no-hash": 0,
    "no-plusplus": 0,
    "react/prefer-stateless-function": 0,
    "react/forbid-prop-types": 0,
    "react/no-unused-prop-types": 0,
    "import/prefer-default-export": 0,
    "no-confusing-arrow": 0,
    "arrow-body-style": 0,
    "global-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
  },
  "globals": {
    "document": true,
    "window": true,
    "require": true,
    "fetch": true
  },
  "env": {
    "jest": true
  },
  "parser": "babel-eslint"
}
