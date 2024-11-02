/** @type {import('next').NextConfig} */ 

const imagesConf = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'alextaures.github.io',
          port: '',
          pathname: '/portfolio/static/media/**',
        },
      ],
    },
  }

const nextConfig = {...imagesConf};

export default nextConfig;
