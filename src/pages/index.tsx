import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="hero-section">
      <div className="container">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="hero-title">
            {siteConfig.title}
          </h1>
          <p className="hero-subtitle">
            {siteConfig.tagline}
          </p>
          <p className="hero-description">
            Step-by-step guides for ISO 27001 and SOC 2 compliance, created by volunteer compliance experts. No consultant jargon, just actionable steps to get your team certified.
          </p>
          <div className="hero-buttons">
            <Link className="btn-primary" to="/docs/intro">
              Start Your Journey
            </Link>
            <Link className="btn-outline" to="/docs/tutorials/quick-start">
              Quick Start Guide
            </Link>
          </div>
          
          {/* Stats */}
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">93</div>
              <div className="stat-label">ISO 27001 Controls</div>
            </div>
            <div className="stat">
              <div className="stat-number">5</div>
              <div className="stat-label">Trust Services Criteria</div>
            </div>
            <div className="stat">
              <div className="stat-number">12</div>
              <div className="stat-label">Month Timeline</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Jargon-free ISO 27001 and SOC 2 compliance guidance for tech teams.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
} 