const path = require('path');

module.exports = {
  title: 'Intro.js',
  tagline: 'Step-by-step onboarding tour library guide and feature introduction',
  url: 'https://introjs.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'usablica',
  projectName: 'introjs-website',
  themeConfig: {
    image: '/img/social.png',
    googleAnalytics: {
      trackingID: 'UA-69239984-1',
    },
    navbar: {
      hideOnScroll: true,
      title: 'Intro.js',
      logo: {
        alt: 'Intro.js',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '📚 Docs',
          position: 'left',
        },
        {
          to: 'https://github.com/usablica/intro.js/releases',
          label: '💾 Download',
          position: 'left'
        },
        {
          to: '/docs/support',
          label: '💡 Support',
          position: 'left'
        },
        {
          to: 'blog',
          label: '📝 Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/usablica/intro.js',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Intro.js',
              to: 'docs/',
            },
            {
              label: 'Install',
              to: 'docs/getting-started/install',
            },
            {
              label: 'Quick Start',
              to: 'docs/getting-started/start',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/intro.js',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/usablica',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/usablica/intro.js',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Usablica Limited`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: 'https://github.com/usablica/introjs-website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/usablica/introjs-website/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, './plugins/tailwind')
  ]
};
