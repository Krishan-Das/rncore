import React from 'react';
import LegalLayout from "../components/legal/LegalLayout.jsx"

export default function PrivacyPolicy() {
  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'information-collected', title: '2. Information We Collect' },
    { id: 'how-we-use-information', title: '3. How We Use Information' },
    { id: 'api-keys-and-security', title: '4. API Keys and Security' },
    { id: 'data-storage', title: '5. Data Storage' },
    { id: 'cookies-and-auth', title: '6. Cookies and Authentication' },
    { id: 'third-party-services', title: '7. Third Party Services' },
    { id: 'data-deletion', title: '8. Data Deletion' },
    { id: 'contact', title: '9. Contact Information' },
  ];

  return (
    <LegalLayout
      title="Privacy Policy"
      description="Learn how RNCore collects, uses, and protects your information."
      lastUpdated="August 2026"
      sections={sections}
    >
      <div className="space-y-16">
        
        {/* 1. Introduction */}
        <section id="introduction" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-zinc-800/80 pb-3">
            1. Introduction
          </h2>
          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
            Welcome to RNCore. RNCore is a beginner-friendly REST API platform engineered to provide reliable, scalable mock and production-ready data endpoints for modern web applications.
          </p>
          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
            This Privacy Policy outlines our commitment to transparency regarding how we handle user data, API metrics, credentials, and personal details across our developer services.
          </p>
        </section>

        {/* 2. Information We Collect */}
        <section id="information-collected" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-zinc-800/80 pb-3">
            2. Information We Collect
          </h2>
          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
            We only collect data necessary to provide and secure our API platform services:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-zinc-300">
            <li><strong className="text-slate-900 dark:text-white">Account Information:</strong> Your registered email address, username, and authentication tokens required for account management.</li>
            <li><strong className="text-slate-900 dark:text-white">API Usage Data:</strong> Request volume, bandwidth utilization, HTTP status response codes, user-agent details, and IP addresses for monitoring abuse and enforcing rate limits.</li>
            <li><strong className="text-slate-900 dark:text-white">Authentication Credentials:</strong> Hashes of account credentials and secret API access keys generated within the Developer Console.</li>
          </ul>
        </section>

        {/* 3. How We Use Information */}
        <section id="how-we-use-information" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-zinc-800/80 pb-3">
            3. How We Use Information
          </h2>
          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
            Collected data is strictly utilized to ensure optimal infrastructure performance:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-zinc-300">
            <li>Delivering, maintaining, and scaling core API endpoint availability.</li>
            <li>Detecting abnormal request spikes, rate-limit violations, and malicious traffic patterns.</li>
            <li>Informing developers about breaking changes, scheduled maintenance, or key updates.</li>
          </ul>
        </section>

        {/* 4. API Keys and Security */}
        <section id="api-keys-and-security" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-zinc-800/80 pb-3">
            4. API Keys and Security
          </h2>
          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
            Your generated API keys (<code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-xs font-mono text-slate-800 dark:text-zinc-200">rn_live_...</code>) act as confidential access credentials.
          </p>
          <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-200/80 dark:bg-blue-950/20 dark:border-blue-900/40 text-sm text-blue-900 dark:text-blue-300">
            <strong>Security Notice:</strong> Developers are responsible for keeping API keys private. Never publish secret keys in public version control repositories or expose them directly in browser client code.
          </div>
        </section>

        {/* 5. Data Storage */}
        <section id="data-storage" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-zinc-800/80 pb-3">
            5. Data Storage
          </h2>
          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
            All user and application data resides in encrypted PostgreSQL databases hosted in secure cloud data centers. Logical data isolation is maintained across all developer workspace schema partitions.
          </p>
        </section>

        {/* 6. Cookies and Authentication */}
        <section id="cookies-and-auth" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-zinc-800/80 pb-3">
            6. Cookies and Authentication
          </h2>
          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
            RNCore utilizes HTTP-only, secure cookies for web session persistence and JWT verification. We do not use third-party tracking or advertising cookies.
          </p>
        </section>

        {/* 7. Third Party Services */}
        <section id="third-party-services" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-zinc-800/80 pb-3">
            7. Third Party Services
          </h2>
          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
            We partner with trusted cloud infrastructure providers (e.g., AWS, Cloudflare) for network edge delivery, DNS routing, and threat mitigation.
          </p>
        </section>

        {/* 8. Data Deletion */}
        <section id="data-deletion" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-zinc-800/80 pb-3">
            8. Data Deletion
          </h2>
          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
            You hold total control over your data. You may purge API credentials or trigger complete account termination at any time via the account settings console.
          </p>
        </section>

        {/* 9. Contact Information */}
        <section id="contact" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-zinc-800/80 pb-3">
            9. Contact Information
          </h2>
          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
            For privacy queries or data requests, contact our security team at{' '}
            <a href="mailto:krishan8974783135@gmail.com" className="text-blue-600 underline font-medium dark:text-blue-400">
              krishan8974783135@gmail.com
            </a>.
          </p>
        </section>

      </div>
    </LegalLayout>
  );
}