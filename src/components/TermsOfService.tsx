import React from 'react';
import { Link } from 'react-router-dom';

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-offwhite text-dark font-sans">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link to="/" className="text-sm text-brown-900/60 hover:text-brown-900 transition-colors mb-10 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-serif text-brown-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-brown-900/50 mb-10">Last updated: April 2026</p>

        <div className="space-y-8 text-brown-900/80 font-light leading-relaxed">
          <section>
            <h2 className="text-xl font-serif text-brown-900 mb-3">Use of This Website</h2>
            <p>
              This website is provided for informational purposes only. The content on this site
              does not constitute financial, legal, or tax advice. Please consult a qualified
              professional before making any financial decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-brown-900 mb-3">No Client Relationship</h2>
            <p>
              Visiting this website or submitting an inquiry does not establish a client-advisor
              relationship. A formal engagement agreement must be signed before any advisory
              services are rendered.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-brown-900 mb-3">Intellectual Property</h2>
            <p>
              All content on this website, including text, images, and design, is the property
              of SMP Wealth Ledger and may not be reproduced or distributed without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-brown-900 mb-3">SMS &amp; Text Messaging</h2>
            <p>
              If you provide your phone number through our intake form and
              consent to text messages, message and data rates may apply.
              Message frequency may vary. Reply HELP for more information.
              Reply STOP to opt out.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-brown-900 mb-3">Limitation of Liability</h2>
            <p>
              SMP Wealth Ledger is not liable for any damages arising from your use of this website
              or reliance on any information provided herein.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-brown-900 mb-3">Contact</h2>
            <p>
              Questions about these terms can be directed to{' '}
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
