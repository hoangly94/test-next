/** @type {import('next').NextConfig} */
const path = require('path');
const withCSS = require('@zeit/next-css')
const { withPlugins } = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['sezy-design']);

module.exports = withPlugins(withTM(), withCSS(), {
  reactStrictMode: true,
  // future: { webpack5: true },
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.(ts)x?$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules/sezy-design")
        ],
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules/sezy-design")
        ],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]',
              },
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
    );

    return config;
  },
  postcssLoaderOptions: {
    parser: true,
    config: {
      ctx: {
        theme: JSON.stringify(process.env.REACT_APP_THEME)
      }
    }
  }
})


// module.exports = withCSS({
//   cssModules: true,
// })
// module.exports = {
//   reactStrictMode: true,
//   // future: { webpack5: true },
//   webpack: (config, options) => {
//     config.module.rules.push(
//       {
//         test: /\.(ts)x?$/,
//         include: [
//           path.resolve(__dirname, "src"),
//           path.resolve(__dirname, "node_modules/sezy-design")
//         ],
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: [
//               "@babel/preset-env",
//               "@babel/preset-react",
//               "@babel/preset-typescript",
//             ],
//           },
//         },
//       },
//       {
//         test: /\.css$/,
//         include: [
//           path.resolve(__dirname, "src"),
//           path.resolve(__dirname, "node_modules/sezy-design")
//         ],
//         use: [
//           {
//             loader: 'style-loader',
//           },
//           {
//             loader: 'css-loader',
//             options: {
//               modules: {
//                 localIdentName: '[local]',
//               },
//               importLoaders: 2,
//             },
//           },
//           {
//             loader: "postcss-loader",
//           },
//         ],
//       },
//     );

//     return config;
//   },
// }