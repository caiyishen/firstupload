"use strict";

module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module'
  },
  env: {
    es6: true,
    node: true
  },
  "extends": ['plugin:vue/recommended', 'eslint:recommended'],
  // add your custom rules here
  // it is base on https://github.com/vuejs/eslint-config-vue
  //0关闭1警告2错误
  rules: {
    'no-console': 2,
    "vue/multi-word-component-names": "off",
    'no-useless-escape': 0
  }
};