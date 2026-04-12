import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="mb-10 flex justify-center">
          
          <Quote size={48} className="text-beige-300 opacity-50" />
        </motion.div>

        <motion.h2
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            delay: 0.1
          }}
          className="text-3xl md:text-4xl font-serif text-brown-900 leading-relaxed mb-10">
          
          "My commitment is to provide the clarity and confidence you need to
          make informed decisions. Your financial peace of mind is the ultimate
          measure of my success."
        </motion.h2>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            delay: 0.2
          }}>
          
          <p className="font-serif text-xl text-brown-900">
            Samantha Parkinson
          </p>
          <p className="text-dark/60 font-light mt-1">
            Founder, SMP Wealth Ledger
          </p>
        </motion.div>
      </div>
    </section>);

}