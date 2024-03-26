import path from 'path';
import { fileURLToPath } from 'url';
import TerserPlugin from 'terser-webpack-plugin';

import webpack from 'webpack';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const paths = {
  src: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'dist'),
};

export const webpackConfig = (isMode) => {
  const config = {
    entry: [path.join(paths.src, 'js/app.js')],
    mode: isMode ? 'development' : 'production',
    output: {
      path: path.join(paths.build, 'js'),
      filename: 'app.min.js',
      publicPath: '/',
    },
    devtool: false,

    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],
  };


  
  

  if (!isMode) {
    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false, // Исключаем комментарии из итогового бандла
            },
          },
        }),
      ],
    };
  }

  return config;
};