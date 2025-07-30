import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorials',
      description: 'Learn by doing. Hands-on guides to get you started.',
      items: [
        'tutorials/quick-start',
        'tutorials/iso27001-walkthrough',
        'tutorials/soc2-walkthrough',
      ],
    },
    {
      type: 'category',
      label: 'How-to Guides',
      description: 'Task-oriented guides for specific compliance activities.',
      items: [
        'how-to/executive-buyin',
        'how-to/scope-definition',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      description: 'Technical details, specifications, and quick lookups.',
      items: [
        'reference/iso27001-controls',
        'reference/soc2-criteria',
        'reference/glossary',
      ],
    },
    {
      type: 'category',
      label: 'Explanation',
      description: 'Understanding-oriented content about concepts and principles.',
      items: [
        'explanation/iso27001-overview',
      ],
    },
  ],
};

export default sidebars; 