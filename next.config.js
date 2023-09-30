/** @type {import('next').NextConfig} */
const dotenv = require('dotenv');
const nextConfig = {
    reactStrictMode: true,
  images: {
    domains: ['openweathermap.org'],
  },
}
dotenv.config();
module.exports = nextConfig
