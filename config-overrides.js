/* eslint-disable  react-hooks/rules-of-hooks */
const { useBabelRc, override, addWebpackModuleRule } = require('customize-cra')

module.exports = override(
  useBabelRc(),
  addWebpackModuleRule({
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: [
      { loader: 'babel-loader' },
      {
        loader: '@linaria/webpack5-loader',
        options: {
          sourceMap: process.env.NODE_ENV !== 'production',
          cacheDirectory: 'src/.linaria_cache',
          babelOptions: {
            presets: [
              ['react-app', { flow: false, typescript: true }],
              ['@linaria', { evaluate: true, displayName: true }],
            ],
          },
        },
      },
    ],
  })
)
