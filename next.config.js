/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  async redirects() {
    return [
      {
        source: "//",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:path*.php",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/:path*.html",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/:path*.htm",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
