/** @type {import('next').NextConfig} */
const dotenv = require("dotenv");
const withTwin = require('./withTwin.js')

const nextConfig = {
  transpilePackages: ['react-daisyui'],
  reactStrictMode: true,
  images: {
    domains: ["openweathermap.org"],
  }
  
};
dotenv.config();
module.exports = withTwin(nextConfig);
