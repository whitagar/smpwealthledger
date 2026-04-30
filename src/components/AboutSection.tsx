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
                I'm a mother with a love for finance—born from seeing
                firsthand the freeing effect of taking control of my own
                personal budget.
              </p>
              <p>
                My passion for finance grew through five years working at a
                local credit union, followed by two years of mortgage
                experience. That background gave me a clear-eyed view of how
                everyday families navigate debt, saving, and homeownership.
              </p>
              <p>
                I specialize in working with clients who feel like they're
                living paycheck to paycheck, struggling with debt, and want to
                break out of the constant loop—to start thriving instead of
                just surviving.
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
              src="/samantha-parkinson.jpg"
              alt="Samantha Parkinson"
              className="w-full h-full object-cover grayscale opacity-90" />
            
          </motion.div>
        </div>
      </div>
    </section>);

}