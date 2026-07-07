/** @type {import('next').NextConfig} */

// Served from https://solutionjet.github.io/kaziahmed/ — a project page lives
// under a repo-named subpath, so assets must be prefixed with it in CI builds.
const repo = "kaziahmed";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isGithubActions ? `/${repo}` : "",
  assetPrefix: isGithubActions ? `/${repo}` : "",
};

export default nextConfig;
