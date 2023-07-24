/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",

        destination:
          process.env.NODE_ENV === "development"
            ? "https://adityakjun.pythonanywhere.com/api/:path*"
            : "/api/", // Proxy to Backend
      },
    ];
  },
};
