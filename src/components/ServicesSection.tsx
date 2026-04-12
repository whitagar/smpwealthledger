import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { LineChart, PiggyBank, FileText, ShieldCheck } from 'lucide-react';
const services = [
{
  icon: <LineChart size={32} className="text-beige-400" />,
  title: 'Financial Planning',
  description:
  'Comprehensive roadmaps tailored to your life goals, from buying a home to funding education.'
},
{
  icon: <PiggyBank size={32} className="text-beige-400" />,
  title: 'Retirement Strategy',
  description:
  'Clear, actionable plans to ensure you can transition into retirement with confidence and security.'
},
{
  icon: <FileText size={32} className="text-beige-400" />,
  title: 'Tax Optimization',
  description:
  'Strategic approaches to minimize your tax burden and maximize your wealth retention over time.'
},
{
  icon: <ShieldCheck size={32} className="text-beige-400" />,
  title: 'Investment Review',
  description:
  'Unbiased analysis of your current portfolio to ensure it aligns with your risk tolerance and objectives.'
}];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};
export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
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
            
            Expertise focused on you.
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
            className="text-lg text-dark/70 font-light">
            
            I provide specialized guidance across all areas of your financial
            life, ensuring every piece works together seamlessly.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px'
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {services.map((service, index) =>
          <motion.div
            key={index}
            variants={itemVariants}
            className="p-8 border border-cream-100 bg-offwhite hover:shadow-lg hover:border-beige-300 transition-all duration-300 group">
            
              <div className="mb-6 p-4 bg-white inline-block rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif text-brown-900 mb-4">
                {service.title}
              </h3>
              <p className="text-dark/70 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}