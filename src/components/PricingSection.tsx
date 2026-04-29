import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-brown-900 mb-6">
            Simple, transparent pricing.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-dark/70 font-light">
            As a fee-only firm, you pay me for the time that's needed. No
            subscriptions, no commissions—just the time we spend together.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto">
          <div className="bg-white border border-beige-300/60 rounded-sm shadow-sm p-10 md:p-12">
            <div className="text-center mb-8">
              <p className="text-sm uppercase tracking-[0.2em] text-beige-400 mb-3">
                3-Month Plan
              </p>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-6xl font-serif text-brown-900">$600</span>
              </div>
              <p className="text-dark/60 font-light">
                Six meetings over three months
              </p>
            </div>

            <ul className="space-y-4 mb-10 text-dark/80 font-light">
              <li className="flex items-start gap-3">
                <Check size={20} className="text-beige-400 shrink-0 mt-1" />
                <span>One meeting every other week, six total</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-beige-400 shrink-0 mt-1" />
                <span>Fee-only—no commissions, no subscriptions</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-beige-400 shrink-0 mt-1" />
                <span>
                  Focused guidance for clients ready to break the
                  paycheck-to-paycheck cycle
                </span>
              </li>
            </ul>

            <a
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__lWZKxRURUI3SUlNWVJYMEdRQVBKQTNYOE5DVTE5Ni4u"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-brown-900 text-white px-8 py-4 font-medium hover:bg-brown-900/90 transition-colors rounded-sm">
              Fill out a consultation request
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}
