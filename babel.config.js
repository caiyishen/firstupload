module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  //less版本需要4以下要不然会报错
  plugins: [
    ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": true }] // `style: true` 会加载 less 文件
  ]
}
