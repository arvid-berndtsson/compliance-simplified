import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'intro',
        'basics/iso27001-overview',
      ],
    },
    {
      type: 'category',
      label: 'ISO 27001 Guide',
      items: [
        'iso27001/step1-buyin',
        'iso27001/step2-scope',
      ],
    },
    {
      type: 'category',
      label: 'SOC 2 Guide',
      items: [
        'soc2/trust-services-criteria',
        'soc2/implementation-steps',
      ],
    },
    // TODO: Add more sections as documentation grows
    // {
    //   type: 'category',
    //   label: 'Tools & Resources',
    //   items: [
    //     'tools/controls-explorer',
    //     'tools/gap-assessment',
    //     'tools/templates',
    //     'tools/faq',
    //   ],
    // },
  ],
};

export default sidebars; 