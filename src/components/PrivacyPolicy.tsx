import React from 'react';
import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-offwhite text-dark font-sans">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link to="/" className="text-sm text-brown-900/60 hover:text-brown-900 transition-colors mb-10 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-serif text-brown-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-brown-900/50 mb-10">Last updated: April 2026</p>

        <div className="space-y-8 text-brown-900/80 font-light leading-relaxed">
          <section>
            <h2 className="text-xl font-serif text-brown-900 mb-3">Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as your name, email address,
              and any other information you submit through our intake form or by contacting us directly.
              We do not collect information automatically beyond standard web server logs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-brown-900 mb-3">How We Use Your Information</h2>
            <p>
              Information you provide is used solely to respond to your inquiries, schedule consultations,
              and provide financial planning services. We do not sell, trade, or share your personal
              information with third parties except as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-brown-900 mb-3">Mobile Information</h2>
            <p>
              No mobile information will be shared with third parties/affiliates
              for marketing/promotional purposes. Phone numbers and any
              messaging consent collected through our intake form are used only
              to communicate with you about your inquiry and scheduled
              consultations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-brown-900 mb-3">Data Security</h2>
            <p>
              We take reasonable steps to protect your personal information from unauthorized access
              or disclosure. However, no method of transmission over the internet is completely secure,
              and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-brown-900 mb-3">Contact</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:sam.wealthledger@outlook.com" className="text-brown-900 underline hover:text-beige-400 transition-colors">
                sam.wealthledger@outlook.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
