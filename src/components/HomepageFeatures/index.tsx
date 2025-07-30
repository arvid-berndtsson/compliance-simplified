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
    title: 'ISO 27001 Implementation',
    Svg: require('@site/static/img/iso27001.svg').default,
    description: (
      <>
        Complete step-by-step guide for ISO 27001:2022 certification. From executive buy-in to final audit, with all 93 controls explained.
      </>
    ),
    link: '/docs/tutorials/iso27001-walkthrough',
    badge: '2022',
  },
  {
    title: 'SOC 2 Trust Services',
    Svg: require('@site/static/img/soc2.svg').default,
    description: (
      <>
        Comprehensive SOC 2 Type II implementation covering Security, Availability, Processing Integrity, Confidentiality, and Privacy.
      </>
    ),
    link: '/docs/tutorials/soc2-walkthrough',
    badge: 'Type II',
  },
  {
    title: 'Quick Start Guide',
    Svg: require('@site/static/img/tools.svg').default,
    description: (
      <>
        Get your first compliance project running in under 30 minutes. Perfect for teams new to security compliance.
      </>
    ),
    link: '/docs/tutorials/quick-start',
    badge: '5 min',
  },
];

function Feature({Svg, title, description, link, badge}: FeatureItem): JSX.Element {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        <Svg className="w-8 h-8" role="img" />
        {badge && (
          <div className="feature-badge">
            {badge}
          </div>
        )}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
      <Link className="feature-link" to={link}>
        Learn more →
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Choose Your Compliance Journey</h2>
            <p className="section-description">
              Each guide provides step-by-step instructions, templates, and practical examples to help you achieve certification.
            </p>
          </div>
          <div className="features-grid">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="info-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h3>What You'll Get</h3>
              <ul>
                <li>Step-by-step implementation guides</li>
                <li>Downloadable policy templates</li>
                <li>Risk assessment frameworks</li>
                <li>Audit preparation checklists</li>
                <li>Real-world examples and case studies</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>Who This Is For</h3>
              <ul>
                <li>Tech startups and scale-ups</li>
                <li>DevOps and security teams</li>
                <li>Compliance officers and CISOs</li>
                <li>Engineering managers</li>
                <li>Anyone new to security compliance</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>Community-Driven</h3>
              <ul>
                <li>Created by volunteer compliance experts</li>
                <li>Open source and free to use</li>
                <li>Continuously improved by the community</li>
                <li>No commercial agenda or hidden costs</li>
                <li>Transparent and collaborative approach</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="community-section">
        <div className="container">
          <div className="community-content">
            <div className="community-text">
              <h2>Built by the Community, for the Community</h2>
              <p>
                This project is entirely community-driven, created by volunteer compliance experts who believe that security compliance shouldn't be expensive or complicated. Our contributors include CISOs, compliance officers, security consultants, and practitioners who have successfully implemented ISO 27001 and SOC 2 in their organizations.
              </p>
              <div className="community-stats">
                <div className="community-stat">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Volunteer-Driven</div>
                </div>
                <div className="community-stat">
                  <div className="stat-number">AGPL-3.0</div>
                  <div className="stat-label">Open Source License</div>
                </div>
                <div className="community-stat">
                  <div className="stat-number">Free</div>
                  <div className="stat-label">Forever</div>
                </div>
              </div>
              <div className="community-cta">
                <Link className="btn-outline" to="https://github.com/arvid-berndtsson/audit-site">
                  Contribute on GitHub
                </Link>
                <Link className="btn-primary" to="/docs/intro">
                  Start Using the Guides
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 