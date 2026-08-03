import React from 'react';
import LegalLayout from '../components/legal/LegalLayout.jsx';

export default function TermsOfService() {
  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'using-rncore', title: '2. Using RNCore' },
    { id: 'user-accounts', title: '3. User Accounts' },
    { id: 'api-usage', title: '4. API Usage & Rate Limits' },
    { id: 'prohibited-activities', title: '5. Prohibited Activities' },
    { id: 'service-availability', title: '6. Service Availability' },
    { id: 'termination', title: '7. Account Termination' },
    { id: 'changes-to-terms', title: '8. Changes to Terms' },
    { id: 'contact', title: '9. Contact Information' },
  ];

  return (
    <LegalLayout
      title="Terms of Service"
      description="Rules, guidelines, and terms governing your use of RNCore services."
      lastUpdated="August 2026"
      sections={sections}
    >
      <div className="space-y-16">
        
        {/* 1. Acceptance */}
        <section id="acceptance" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-zinc-800/80 pb-3">
            1. Acceptance of Terms
          </h2>
          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
            By creating an account or querying RNCore API endpoints, you agree to be legally bound by these Terms of Service. If you disagree with any part, please refrain from using the platform.
          </p>
        </section>

        {/* 2. Using RNCore */}
        <section id="using-rncore" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-zinc-800/80 pb-3">
            2. Using RNCore
          </h2>
          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
            RNCore grants developers a non-exclusive, non-transferable right to access REST API endpoints for software development, integration testing, and production deployment in compliance with these terms.
          </p>
        </section>

        {/* 3. User Accounts */}
        <section id="user-accounts" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-zinc-800/80 pb-3">
            3. User Accounts
          </h2>
          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
            You must provide accurate account information upon registration. You are responsible for preserving account security and all activities occurring under your API keys.
          </p>
        </section>

        {/* 4. API Usage */}
        <section id="api-usage" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-zinc-800/80 pb-3">
            4. API Usage & Rate Limits
          </h2>
          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
            API access is subject to predefined rate limits to ensure ecosystem stability. Exceeding limits will result in HTTP <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-xs font-mono text-slate-800 dark:text-zinc-200">429 Too Many Requests</code> throttled responses.
          </p>
        </section>

        {/* 5. Prohibited Activities */}
        <section id="prohibited-activities" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-zinc-800/80 pb-3">
            5. Prohibited Activities
          </h2>
          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
            You strictly agree not to engage in:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-zinc-300">
            <li>Distributed Denial of Service (DDoS) attempts or payload injection attacks.</li>
            <li>Attempting to bypass authentication mechanisms or access unauthorized schemas.</li>
            <li>Reselling or reverse-engineering core RNCore infrastructure services.</li>
          </ul>
        </section>

        {/* 6. Service Availability */}
        <section id="service-availability" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-zinc-800/80 pb-3">
            6. Service Availability
          </h2>
          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
            While RNCore targets 99.9% API uptime, services are provided "as is". Periodic maintenance windows may occur with advance notice via developer status dashboards.
          </p>
        </section>

        {/* 7. Account Termination */}
        <section id="termination" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-zinc-800/80 pb-3">
            7. Account Termination
          </h2>
          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
            RNCore reserves the right to suspend or terminate API keys that repeatedly violate rate limits, engage in malicious requests, or breach security guidelines.
          </p>
        </section>

        {/* 8. Changes to Terms */}
        <section id="changes-to-terms" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-zinc-800/80 pb-3">
            8. Changes to Terms
          </h2>
          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
            We may update these terms to reflect feature changes or legal compliance. Continued platform usage after published updates constitutes acceptance of revised terms.
          </p>
        </section>

        {/* 9. Contact Information */}
        <section id="contact" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-zinc-800/80 pb-3">
            9. Contact Information
          </h2>
          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
            For questions regarding these Terms of Service, contact our legal team at{' '}
            <a href="mailto:krishan8974783135@gmail.com" className="text-blue-600 underline font-medium dark:text-blue-400">
              krishan8974783135@gmail.com
            </a>.
          </p>
        </section>

      </div>
    </LegalLayout>
  );
}