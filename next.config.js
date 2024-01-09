// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns : [
      {
        protocol : 'https',
        hostname : 'images.unsplash.com/**',
        pathname : '**'
      },
      {
        protocol : 'https',
        hostname : 's3.us-west-2.amazonaws.com/**',
        pathname : '**'
      },
      {
        protocol : 'https',
        hostname : 'www.notion.so/**',
        pathname : '**'
      },
      {
        protocol : 'https',
        hostname : 'prod-files-secure.s3.us-west-2.amazonaws.com/**',
        pathname : '**'
      },
      {
        protocol : 'https',
        hostname : 'notion-blog-iqyn.vercel.app/**',
        pathname : '**'
      },
    ]
  },
};

module.exports = nextConfig;