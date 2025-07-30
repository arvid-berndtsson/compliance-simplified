import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Audit.arvid.tech',
  tagline: 'ISO27001 and SOC 2 Compliance Made Simple',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://audit.arvid.tech',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'arvid-berndtsson', // Usually your GitHub org/user name.
  projectName: 'audit-site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/arvid-berndtsson/audit-site/tree/main/',
        },
        blog: false, // Disable blog for now
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Audit.arvid.tech',
      logo: {
        alt: 'Audit Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guide',
        },
        {
          href: 'https://github.com/arvid-berndtsson/audit-site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'ISO 27001 Overview',
              to: '/docs/basics/iso27001-overview',
            },
            {
              label: 'SOC 2 Trust Services',
              to: '/docs/soc2/trust-services-criteria',
            },
            {
              label: 'Implementation Steps',
              to: '/docs/soc2/implementation-steps',
            },
          ],
        },
        {
          title: 'ISO 27001',
          items: [
            {
              label: 'Executive Buy-in',
              to: '/docs/iso27001/step1-buyin',
            },
            {
              label: 'Scope Definition',
              to: '/docs/iso27001/step2-scope',
            },
            {
              label: '2022 Standard',
              to: '/docs/basics/iso27001-overview',
            },
          ],
        },
        {
          title: 'SOC 2',
          items: [
            {
              label: 'Trust Services Criteria',
              to: '/docs/soc2/trust-services-criteria',
            },
            {
              label: 'Implementation Steps',
              to: '/docs/soc2/implementation-steps',
            },
            {
              label: 'Type II Certification',
              to: '/docs/soc2/trust-services-criteria',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/arvid-berndtsson/audit-site',
            },
            {
              label: 'Issues',
              href: 'https://github.com/arvid-berndtsson/audit-site/issues',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/arvid-berndtsson/audit-site/discussions',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Arvid Berndtsson. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
} satisfies Config;

export default config; 