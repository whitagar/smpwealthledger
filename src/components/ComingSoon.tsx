import React from 'react';
import { motion } from 'framer-motion';

export function ComingSoon() {
  return (
    <div className="min-h-screen bg-brown-900 flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center overflow-hidden mx-auto mb-10">
          <img
            src="/Copy_of_SamanthaParkinson.png"
            alt="SMP Wealth Ledger"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
          Something beautiful<br />is on its way.
        </h1>

        <p className="text-white/60 font-light text-lg mt-6 max-w-md mx-auto leading-relaxed">
          SMP Wealth Ledger is launching soon. Independent, fee-only financial
          planning tailored for your unique journey.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-white/50 text-sm font-light">
          <a
            href="mailto:sam.wealthledger@outlook.com"
            className="hover:text-beige-300 transition-colors"
          >
            sam.wealthledger@outlook.com
          </a>
          <span className="hidden sm:block">·</span>
          <a
            href="https://www.instagram.com/smp.wealthledger"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-beige-300 transition-colors"
          >
            @smp.wealthledger
          </a>
        </div>
      </motion.div>
    </div>
  );
}
