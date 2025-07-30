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
    <header className={clsx('hero hero--primary hero-section', styles['heroBanner'])}>
      {/* Gradient orbs for Linear-style background */}
      <div className="orb-primary -top-20 -left-20"></div>
      <div className="orb-accent -top-40 -right-20"></div>
      <div className="orb-purple bottom-20 left-1/4"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="hero__title">
            {siteConfig.title}
          </h1>
          <p className="hero__subtitle">
            {siteConfig.tagline}
          </p>
          <div className={styles['buttons']}>
            <Link
              className="btn-primary"
              to="/docs/intro">
              🚀 Start Your Compliance Journey - 5min ⏱️
            </Link>
          </div>
          
          {/* Stats section */}
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-icon text-primary-400">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="stat-label">ISO 27001</div>
              <div className="stat-value text-primary-400">2022</div>
              <div className="stat-desc">Latest Standard</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon text-accent-400">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="stat-label">SOC 2</div>
              <div className="stat-value text-accent-400">Type II</div>
              <div className="stat-desc">Trust Services</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon text-purple-400">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="stat-label">Implementation</div>
              <div className="stat-value text-purple-400">12mo</div>
              <div className="stat-desc">Typical Timeline</div>
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
        
        {/* Additional sections */}
        <section className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
          {/* Background orbs */}
          <div className="orb-primary top-20 right-10 opacity-10"></div>
          <div className="orb-accent bottom-20 left-10 opacity-10"></div>
          
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="section-title">Why Choose Our Guide?</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Built by compliance professionals for tech teams. No consultant jargon, just actionable steps.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="card-glass text-center">
                <div className="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="feature-title">Step-by-Step</h3>
                <p className="text-gray-300 leading-relaxed">
                  Clear, actionable steps from executive buy-in to final audit. No fluff, just results.
                </p>
              </div>
              
              <div className="card-glass text-center">
                <div className="w-20 h-20 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="feature-title">Tech-Focused</h3>
                <p className="text-gray-300 leading-relaxed">
                  Written for developers, DevOps, and security teams. Practical implementation guidance.
                </p>
              </div>
              
              <div className="card-glass text-center">
                <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="feature-title">Proven Results</h3>
                <p className="text-gray-300 leading-relaxed">
                  Based on successful implementations. Templates, checklists, and real-world examples.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
} 