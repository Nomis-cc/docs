import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

import type { DocsThemeConfig } from "nextra-theme-docs";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const logo = (
  <div
    style={{
      display: "flex",
      gap: "0.5rem",
      alignItems: "center",
    }}
  >
    <img
      src="/logos/nomis-blueprint.svg"
      style={{
        inlineSize: "1.5rem",
      }}
    />
    <span style={{ fontWeight: 500 }}>Nomis Labs</span>
  </div>
);

const head = () => {
  const { title } = useConfig();
  const { asPath } = useRouter();

  const description = "Nomis Protocol Documentation";
  const subtitle = asPath.split("/").at(-2)?.replace(/-/g, " ");
  const capitalizedSubtitle =
    subtitle?.charAt(0).toUpperCase() + subtitle?.slice(1);
  const image = `${baseUrl}/api/og?title=${title}${
    subtitle ? `&subtitle=${capitalizedSubtitle}` : ""
  }`;
  const keywords = ["Nomis", "Protocol", "Documentation"];

  const isMainPage = asPath === "/";

  return (
    <>
      <link rel="icon" href="/app/favicon.svg" />
      <meta name="author" content="Nomis Labs" />
      <title>{isMainPage ? "Nomis Docs" : `${title} @ Nomis Docs`}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords?.join(", ")} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="x:card" content="summary_large_image" />
      <meta name="x:title" content={title} />
      <meta name="x:description" content={description} />
      <meta name="x:image" content={image} />
    </>
  );
};

const footer = {
  text: (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <p>
        Nomis is a multichain identity protocol that helps users build, manage,
        and leverage their onchain reputation and web3 projects to make onchain
        data-driven decisions
      </p>

      <p>2023 © Nomis. All rights reserved.</p>
    </div>
  ),
};

const chat = {
  link: "https://discord.com/nomis",
  icon: (
    <img
      style={{
        inlineSize: "calc(0.875rem * 1.25 + 1rem)",
        borderRadius: "0.5rem",
      }}
      src="/logos/discord.svg"
    />
  ),
};

const config: DocsThemeConfig = {
  logo,
  head,
  footer,
  direction: "ltr",
  chat,

  primarySaturation: {
    dark: 100,
    light: 100,
  },

  primaryHue: {
    dark: 200,
    light: 200,
  },

  sidebar: {
    toggleButton: true,
  },

  docsRepositoryBase: "https://github.com/nomis-cc/docs",

  // useNextSeoProps: () => {
  //   const { asPath } = useRouter();
  //   const isMainPage = asPath === "/";

  //   const subtitle = asPath.split("/").at(-1);

  //   return {
  //     titleTemplate: isMainPage ? "Nomis Docs" : "%s | Nomis Labs",
  //     defaultTitle: "Nomis Labs",
  //     twitter: {
  //       cardType: "summary_large_image",
  //       handle: "@0xNomis",
  //     },
  //     openGraph: {
  //       images: [{ url: `${baseUrl}/api/og?title=%s%${subtitle ?? ""}` }],
  //     },
  //   };
  // },
};

export default config;
