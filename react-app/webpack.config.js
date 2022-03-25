const path = require('path')
const { merge } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react-ts')

module.exports = (webpackConfigEnv, argv) => {
  let output = {};
  const defaultConfig = singleSpaDefaults({
    orgName: 'org1',
    projectName: 'react-app',
    webpackConfigEnv,
    argv,
  })

  if (argv.mode === 'production') {
    output = {
      path: path.join(__dirname, 'dist/react-app'),
      publicPath: '/dist/react-app',
    };
  }

  return merge(defaultConfig, {
    output: output
    // modify the webpack config however you'd like to by adding to this object
  })
}
