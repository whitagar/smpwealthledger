import React from 'react';
import { motion } from 'framer-motion';
const steps = [
{
  number: '01',
  title: 'Listen & Understand',
  description:
  'We start with a deep dive into your current situation, values, and what truly matters to you. No judgments, just understanding.'
},
{
  number: '02',
  title: 'Analyze & Plan',
  description:
  'I meticulously review your financial picture to craft a tailored, actionable plan that bridges the gap between where you are and where you want to be.'
},
{
  number: '03',
  title: 'Execute & Adapt',
  description:
  'A plan is only as good as its execution. I guide you through implementation and adjust the strategy as your life evolves.'
}];

export function ApproachSection() {
  return (
    <section id="approach" className="py-24 md:py-32 bg-brown-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
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
                duration: 0.6
              }}
              className="text-4xl md:text-5xl font-serif mb-6">
              
              How I Work
            </motion.h2>
            <motion.p
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
              className="text-white/70 font-light text-lg mb-8">
              
              A transparent, structured process designed to bring clarity and
              confidence to your financial life.
            </motion.p>
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
              
              <a
                href="#contact"
                className="text-beige-300 hover:text-white transition-colors flex items-center gap-2 font-medium">
                
                Learn more about my process <span className="text-xl">→</span>
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-12">
              {steps.map((step, index) =>
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: 30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2
                }}
                className="flex flex-col md:flex-row gap-6 md:gap-10 border-t border-white/10 pt-8">
                
                  <div className="text-4xl font-serif text-beige-400/50 shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif mb-3">{step.title}</h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}