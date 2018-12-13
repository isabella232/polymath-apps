const path = require('path');
const lodash = require('lodash');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const dotenv = require('dotenv');
const dotenvSafe = require('dotenv-safe');
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = env => {
  // Get client-only environment variables with .env file support
  // Prioritize real environment variables

  dotenv.config({ path: 'config/.env.local' });

  // Get local environment variables
  // NOTE @RafaelVidaurre: We could prevent this in remove envs
  const { required: requiredVars, parsed } = dotenvSafe.config({
    path: path.resolve(__dirname, 'config/.env.local'),
    example: path.resolve(__dirname, 'config/.env.required.local'),
  });

  const allowedKeys = Object.keys(requiredVars);
  const envVars = lodash.pick(parsed, allowedKeys);

  return {
    devtool: 'cheap-module-source-map',
    mode: 'development',
    entry: [
      require.resolve('react-dev-utils/webpackHotDevClient'),
      path.resolve(__dirname, './src/index.tsx'),
    ],
    context: path.resolve(__dirname, '../'),
    module: {
      rules: [
        {
          oneOf: [
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: require.resolve('url-loader'),
              options: {
                limit: 10000,
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
            // {
            //   test: /\.(js|jsx|mjs)$/,
            //   loader: require.resolve('source-map-loader'),
            //   enforce: 'pre',
            //   include: 'src',
            // },
            {
              test: /\.tsx?$/,
              loader: 'babel-loader',
              options: {
                rootMode: 'upward',
              },
            },
            {
              test: /\.css$/,
              use: [
                require.resolve('style-loader'),
                {
                  loader: require.resolve('css-loader'),
                  options: {
                    importLoaders: 1,
                  },
                },
                {
                  loader: require.resolve('postcss-loader'),
                  options: {
                    ident: 'postcss',
                    plugins: () => [
                      require('postcss-flexbugs-fixes'),
                      autoprefixer({
                        browsers: [
                          '>1%',
                          'last 4 versions',
                          'Firefox ESR',
                          'not ie < 9', // React doesn't support IE8 anyway
                        ],
                        flexbox: 'no-2009',
                      }),
                    ],
                  },
                },
              ],
            },
            {
              exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
              loader: require.resolve('file-loader'),
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      plugins: [
        new TsconfigPathsPlugin(),
        new DeclarationBundlerPlugin({
          moduleName: '@polymathnetwork/new-issuer',
        }),
      ],
      // alias: {
      // Aliases would go here
      // },
    },
    plugins: [
      new webpack.DefinePlugin(envVars),
      new HtmlWebpackPlugin({
        inject: true,
        template: __dirname + '/public/index.html',
      }),

      new webpack.NamedModulesPlugin(),
      // TODO: Implement this to add env support
      // new webpack.DefinePlugin(env.stringified),
      new webpack.HotModuleReplacementPlugin(),
      new CaseSensitivePathsPlugin(),
      // new WatchMissingNodeModulesPlugin(paths.appNodeModules),
      // new ForkTsCheckerWebpackPlugin({
      //   async: false,
      //   watch: 'src',
      //   tsconfig: 'tsconfig.json',
      //   tslint: 'tslint.json',
      // }),
    ],
    output: {
      pathinfo: true,
      filename: 'index.js',
      path: path.resolve(__dirname, 'build/dist'),
      publicPath: '/',
      devtoolModuleFilenameTemplate: info =>
        path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  };
};