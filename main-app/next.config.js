const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { topLevelAwait: true };
    config.plugins.push(
      new NextFederationPlugin({
        name: "main",
        remotes: {
          shop: `shop@http://localhost:3001/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        exposes: {
          "./nav": "./components/Nav",
          "./footer": "./components/Footer",
        },
        filename: "static/chunks/primaryEntry.js",
      })
    );
    return config;
  },
};

module.exports = nextConfig;
