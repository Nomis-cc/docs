import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
});

const config = {
  reactStrictMode: true,
  redirects() {
    return [
      {
        source: "/docs/create-wagmi",
        destination: "/cli/create-wagmi",
        permanent: true,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withNextra(config);
