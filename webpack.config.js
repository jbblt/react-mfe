const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "jbblt",
    projectName: "react-mfe",
    webpackConfigEnv,
    argv,
  });
  return merge(defaultConfig, {
    externals: ["@jbblt/angular-mfe", "@jbblt/utility"],
    // modify the webpack config however you'd like to by adding to this object
  });
};
