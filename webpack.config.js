var path = require('path');
var webpack = require('webpack');

const port = process.env.PORT || 3000;

const config = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'static'),
    publicPath: '/static/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
	externals: {
		parallax: 'Parallax',
		hammer: 'Hammer',
	},
  module: {
    loaders: [{
      test: /\.js$|\.jsx$/,
      loaders: ['babel', 'eslint'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$|\.scss$/,
      loaders: ['style', 'css?modules&camelCase&localIdentName=[local]_[hash:base64:5]', 'postcss'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.png$/,
      loader: 'url?mimetype=image/png',
      include: path.join(__dirname, 'src'),
    }]
  },
  postcss: function() {
    return [require('autoprefixer'), require('precss')];
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'window.API_URL': JSON.stringify(process.env.API_URL),
    }),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins = config.plugins.concat([
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ]);
} else {
  config.entry = config.entry.concat([
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
  ]),
  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ]);
}

module.exports = config;

