import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-brown-900 flex items-center overflow-hidden pt-20">
      {/* Decorative Circles */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-60 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] rounded-full bg-beige-300/20 blur-3xl" />
        
        <motion.div
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
          className="absolute right-[10%] bottom-[10%] w-[500px] h-[500px] rounded-full bg-beige-400/20 blur-3xl" />
        
        <motion.div
          animate={{
            x: [0, -30, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute right-[20%] top-[40%] w-[400px] h-[400px] rounded-full bg-cream-100/10 blur-3xl" />
        
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.h1
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}
            className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
            
            Your financial future deserves personal attention
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              delay: 0.2
            }}
            className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-10 max-w-2xl">
            
            Pay only for the guidance you need. As a solo, fee-only
            practitioner, I offer dedicated, one-on-one financial advice
            tailored to your unique life stage—without asset management minimums
            or hidden fees.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              delay: 0.4
            }}>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-beige-300 text-beige-300 hover:bg-beige-300 hover:text-brown-900 transition-all duration-300 font-medium rounded-sm">
              
              Schedule a Consultation
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1,
          duration: 1
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        
        <ChevronDown size={32} />
      </motion.div>
    </section>);

}