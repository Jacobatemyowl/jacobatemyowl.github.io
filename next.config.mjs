/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true, // Disable default image optimization
    },
    output: 'export'
  };

export default nextConfig;
