/*
 * @Author: xuhua
 * @Date: 2023-02-08 09:38:40
 * @LastEditors: xuhua
 * @LastEditTime: 2023-02-08 09:38:47
 * @FilePath: /demo/webpack-hmr.config.js
 * @Description: 热重载配置
 */
const nodeExternals = require('webpack-node-externals');
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');

module.exports = function (options, webpack) {
  return {
    ...options,
    entry: ['webpack/hot/poll?100', options.entry],
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?100'],
      }),
    ],
    plugins: [
      ...options.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin({
        paths: [/.js$/, /.d.ts$/],
      }),
      new RunScriptWebpackPlugin({ name: options.output.filename }),
    ],
  };
};
