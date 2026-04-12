import React from 'react';
import { motion } from 'framer-motion';
export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.8
            }}>
            
            <h2 className="text-4xl md:text-5xl font-serif text-brown-900 mb-6">
              A personal approach to your wealth.
            </h2>
            <div className="space-y-6 text-dark/80 text-lg font-light leading-relaxed">
              <p>
                I started SMP Wealth Ledger with a simple belief: everyone
                deserves access to high-quality, unbiased financial guidance.
              </p>
              <p>
                As a solo practitioner, I don't pass you off to junior
                associates. When you work with SMP Wealth Ledger, you work
                directly with me. I take the time to deeply understand your
                goals, fears, and aspirations, crafting a financial roadmap that
                is uniquely yours.
              </p>
              <p>
                My fee-only structure means my only compensation comes directly
                from you. No commissions, no hidden incentives—just transparent
                advice focused entirely on your best interests.
              </p>
            </div>
            <div className="mt-10">
              <img
                src="/Copy_of_SamanthaParkinson.png"
                alt="SMP Wealth Ledger Logo"
                className="w-64 h-64 object-contain mix-blend-multiply" />
              
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.8
            }}
            className="relative h-[500px] rounded-sm overflow-hidden">
            
            <div className="absolute inset-0 bg-beige-300/20 mix-blend-multiply z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Financial Planning"
              className="w-full h-full object-cover grayscale opacity-90" />
            
          </motion.div>
        </div>
      </div>
    </section>);

}