import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Compliance Made Simple',
  tagline: 'ISO27001 and SOC 2 Compliance Made Simple',
  favicon: 'img/logo.svg',

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
        title: 'Compliance Made Simple',
      logo: {
        alt: 'Compliance Made Simple Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
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
              label: 'Quick Start Tutorial',
              to: '/docs/tutorials/quick-start',
            },
            {
              label: 'ISO 27001 Walkthrough',
              to: '/docs/tutorials/iso27001-walkthrough',
            },
            {
              label: 'SOC 2 Walkthrough',
              to: '/docs/tutorials/soc2-walkthrough',
            },
          ],
        },
        {
          title: 'ISO 27001',
          items: [
            {
              label: 'Executive Buy-in',
              to: '/docs/how-to/executive-buyin',
            },
            {
              label: 'Scope Definition',
              to: '/docs/how-to/scope-definition',
            },
            {
              label: 'Controls Reference',
              to: '/docs/reference/iso27001-controls',
            },
          ],
        },
        {
          title: 'SOC 2',
          items: [
            {
              label: 'Trust Services Criteria',
              to: '/docs/reference/soc2-criteria',
            },
            {
              label: 'Implementation Guide',
              to: '/docs/tutorials/soc2-walkthrough',
            },
            {
              label: 'Glossary',
              to: '/docs/reference/glossary',
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