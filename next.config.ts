import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /** The hero mark on the home page is served from Cloudinary. */
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/mqzbailq/image/upload/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
