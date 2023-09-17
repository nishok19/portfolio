/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  images: {
    domains: ["raw.githubusercontent.com", "github.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  trailingSlash: true,
  output: 'export',
};

module.exports = nextConfig;
