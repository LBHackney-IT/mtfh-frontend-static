const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mtfh",
    projectName: "static",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: [
            "style-loader",
            { loader: "css-loader", options: { sourceMap: false } },
            {
              loader: "sass-loader",
              options: { sourceMap: false },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
      },
      extensions: [".ts", ".tsx", ".js"],
    },
    externals: ["@mtfh/common", "react-router-dom"],
  });
};
