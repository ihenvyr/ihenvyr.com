require("./config/dotenv");
const path = require("path");
const Dotenv = require("dotenv-webpack");
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  poweredByHeader: false,
  webpack(config, options) {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, `.env.${process.env.NODE_ENV}`),
        systemvars: true,
      }),
    ];

    return config;
  }
});