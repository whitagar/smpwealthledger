import React from 'react';
import { motion } from 'framer-motion';
export function CTASection() {
  return (
    <section
      id="contact"
      className="py-24 bg-beige-300 relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full border-[40px] border-brown-900" />
        <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full border-[20px] border-brown-900" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
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
          className="text-4xl md:text-5xl font-serif text-brown-900 mb-6">
          
          Ready to take control of your financial future?
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
          className="text-xl text-brown-900/80 font-light mb-10">
          
          Schedule a complimentary, no-obligation introductory call to see if
          we're a good fit.
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
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__lWZKxRURUI3SUlNWVJYMEdRQVBKQTNYOE5DVTE5Ni4u"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brown-900 text-white px-10 py-4 text-lg font-medium hover:bg-brown-900/90 transition-colors shadow-lg hover:shadow-xl">
            Schedule a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>);

}