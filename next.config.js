const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  output: "export",
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/docs/intro",
        destination: "/docs/iso27001/overview",
        permanent: true,
      },
      {
        source: "/docs/reference/iso27001-controls",
        destination: "/docs/iso27001/controls",
        permanent: true,
      },
      {
        source: "/docs/reference/soc2-criteria",
        destination: "/docs/soc2/criteria",
        permanent: true,
      },
      {
        source: "/docs/reference/tools",
        destination: "/tools",
        permanent: true,
      },
      {
        source: "/docs/explanation/iso27001-overview",
        destination: "/docs/iso27001/overview",
        permanent: true,
      },
    ];
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    mdxRs: true,
  },
};

module.exports = withMDX(nextConfig);
