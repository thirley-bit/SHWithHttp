// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  // export default {
  presets: [
    ['taro', {
      framework: 'react',
      ts: false
    }],
    ['@babel/preset-env', {
      targets: {
      node: 'current',
      chrome: '49',
      ios:'10'
      },
      useBuiltIns:"usage",
      corejs:'2.6.12'
      }],
      "@babel/preset-typescript"
      ],
      plugins: [
      ["@babel/plugin-transform-modules-commonjs", {
      "allowTopLevelThis": true
      }],
  ]
}
