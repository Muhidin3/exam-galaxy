/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
    
  },
  output: 'export',  // Enables static export
  trailingSlash: true,  // Helps with Cloudflare routing
  images: {
    unoptimized: true,
  }, 
}

const { extendConfig } = require('@cloudflare/next-on-pages');

module.exports = extendConfig(nextConfig);
