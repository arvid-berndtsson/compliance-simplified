import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

interface FeatureItem {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
  badge?: string;
}

const FeatureList: FeatureItem[] = [
  {
    title: 'ISO 27001 Guide',
    Svg: require('@site/static/img/iso27001.svg').default,
    description: (
      <>
        Step-by-step implementation guide for ISO 27001:2022 certification.
        From executive buy-in to final audit.
      </>
    ),
    link: '/docs/iso27001/step1-buyin',
    badge: '2022 Standard',
  },
  {
    title: 'SOC 2 Guide',
    Svg: require('@site/static/img/soc2.svg').default,
    description: (
      <>
        Complete SOC 2 Trust Services Criteria implementation.
        Focus on Security, Availability, and more.
      </>
    ),
    link: '/docs/soc2/trust-services-criteria',
    badge: 'Type II',
  },
  {
    title: 'Implementation Steps',
    Svg: require('@site/static/img/tools.svg').default,
    description: (
      <>
        Step-by-step implementation roadmap for both ISO 27001 and SOC 2.
        Timeline, milestones, and best practices.
      </>
    ),
    link: '/docs/soc2/implementation-steps',
    badge: 'Roadmap',
  },
];

function Feature({Svg, title, description, link, badge}: FeatureItem): JSX.Element {
  return (
    <div className={clsx('col col--4')}>
      <div className="card-glass h-full flex flex-col">
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <Svg className={styles['featureSvg']} role="img" />
            {badge && (
              <div className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {badge}
              </div>
            )}
          </div>
        </div>
        
        <div className="text-center flex-1 flex flex-col">
          <h3 className="feature-title">{title}</h3>
          <p className="text-gray-300 mb-8 flex-1 leading-relaxed">{description}</p>
          
          <div className="mt-auto">
            <Link className="btn-primary w-full inline-flex items-center justify-center" to={link}>
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={clsx(styles['features'], 'features-section')}>
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="section-title">Compliance Made Simple</h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Choose your compliance journey. Each guide provides step-by-step instructions, 
            templates, and practical examples to help you achieve certification.
          </p>
        </div>
        
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-20">
          <div className="card-glass bg-gradient-to-r from-primary-500/10 to-accent-500/10 border-primary-500/20">
            <div className="p-10">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Join hundreds of tech teams who have successfully achieved compliance using our guides.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link className="btn-primary" to="/docs/intro">
                  Start with ISO 27001
                </Link>
                <Link className="btn-outline" to="/docs/soc2/trust-services-criteria">
                  Start with SOC 2
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 