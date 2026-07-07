/** @type {import('next').NextConfig} */

// Served from https://topdev424.github.io/ — user page, no subpath needed
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
