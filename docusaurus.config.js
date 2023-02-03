// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'miranum',
  tagline: 'Miranum simplifies the complexity process automation comes with.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: '',
          logo: {
            alt: 'miranum logo',
            src: 'img/logo_blau.png',
          },
          items: [
            {
              type: 'doc',
              docId: 'gettingstarted',
              position: 'left',
              label: 'miranum-ide',
            },
            //{to: '/blog', label: 'Blog', position: 'left'},
            {
              href: 'https://github.com/flowsquad',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Dokumentation',
              items: [
                // {
                //   label: 'Einführung',
                //   to: '/docs/intro',
                // },
              ],
            },
            {
              title: 'Community',
              items: [
                // {
                //   label: 'Twitter',
                //   href: 'https://twitter.com/docusaurus',
                // },
                // {
                //   label: 'Slack',
                //   href: 'https://twitter.com/docusaurus',
                // },
              ],
            },
            {
              title: 'More',
              items: [
                // {
                //   label: 'Blog',
                //   to: '/blog',
                // },
                {
                  label: 'GitHub',
                  href: 'https://github.com/flowsquad',
                },
              ],
            },
            {
              title: 'Legal',
              items: [
                {
                  label: 'Impressum',
                  href: 'https://miragon.io/impressum',
                },
                {
                  label: 'Privacy',
                  href: 'https://miragon.io/datenschutz',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Miragon`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
};

module.exports = config;
