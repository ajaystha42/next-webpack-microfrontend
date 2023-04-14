const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { topLevelAwait: true };
    config.plugins.push(
      new NextFederationPlugin({
        name: "shop",
        remotes: {
          main: `main@http://localhost:3000/_next/static/${
            isServer ? "ssr" : "chunks"
          }/primaryEntry.js`,
        },
        exposes: {
          "./dashboard": "./components/Dashboard",
        },
        filename: "static/chunks/remoteEntry.js",
        extraOptions: {
          exposePages: true,
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
