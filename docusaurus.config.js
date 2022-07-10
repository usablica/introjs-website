const path = require("path");
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Intro.js Docs",
  tagline: "User Onboarding and Product Walkthrough Library",
  url: "https://introjs.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "usablica",
  projectName: "introjs-website",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "/img/social.png",
      algolia: {
        appId: "XNVVMJ2N5K",
        apiKey: "46fdbb963f54d3f48fb175a9a31f4660",
        indexName: "crawler_introjs.com",
        algoliaOptions: {}, // Optional, if provided by Algolia
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      navbar: {
        hideOnScroll: true,
        title: "Intro.js",
        logo: {
          alt: "Intro.js logo",
          src: "img/logo.svg",
          href: "https://introjs.com",
          target: "_self",
        },
        items: [
          {
            to: "docs/",
            activeBasePath: "docs",
            label: "Docs",
            position: "left",
          },
          {
            to: "/docs/examples/basic/hello-world",
            label: "Examples",
            position: "left",
          },
          {
            to: "https://github.com/usablica/intro.js/releases",
            label: "Download",
            position: "left",
          },
          {
            to: "/docs/support",
            label: "Support",
            position: "left",
          },
          {
            to: "https://introjs.com/contact",
            label: "Contact us",
            position: "left",
            target: "_blank",
          },
          {
            to: "https://introjs.com/blog",
            label: "Blog",
            position: "left",
          },
          {
            href: "https://github.com/usablica/intro.js",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Intro.js",
                to: "docs/",
              },
              {
                label: "Install",
                to: "docs/getting-started/install",
              },
              {
                label: "Quick Start",
                to: "docs/getting-started/start",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/intro.js",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/usablica",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Intro.js Blog",
                to: "https://introjs.com/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/usablica/intro.js",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Usablica`,
      },
    }),
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          editUrl: "https://github.com/usablica/introjs-website/edit/master/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themes: [require.resolve("@docusaurus/theme-live-codeblock")],
  plugins: [
    path.resolve(__dirname, "./plugins/jsdom"),
    path.resolve(__dirname, "./plugins/tailwind"),
    [
      "@docusaurus/plugin-google-analytics",
      {
        trackingID: "UA-69239984-1",
      },
    ],
  ],
};

module.exports = config;
