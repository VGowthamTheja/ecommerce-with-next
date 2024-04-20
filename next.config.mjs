/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "m.media-amazon.com" },
      { hostname: "rukminim2.flixcart.com" },
      { hostname: "www.fitbit.com" },
      { hostname: "ismart.co.in" },
    ],
  },
};

export default nextConfig;
