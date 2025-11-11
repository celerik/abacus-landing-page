/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Solo usa basePath en producción (GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? '/abacus-landing-page' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
