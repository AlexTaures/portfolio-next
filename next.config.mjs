/** @type {import('next').NextConfig} */ 
const nextConfig = {
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
    reactStrictMode: true,
    basePath: '/portfolio-next',  // El nombre de tu repositorio
    assetPrefix: '/portfolio-next/',
  };
  
  export default nextConfig;
  