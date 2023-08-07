/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    const headers = [];

    if (process.env.APP_ENV !== "production") {
      headers.push({
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],

        source: "/:path*",
      });
    }

    return headers;
  },
};

module.exports = nextConfig;
