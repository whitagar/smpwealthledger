import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Map, Wallet, TrendingDown, Umbrella } from 'lucide-react';
const services = [
{
  icon: <Map size={32} className="text-beige-400" />,
  title: 'Money Mapping',
  description:
  'A clear picture of where your money goes and a system to keep your finances organized month after month.'
},
{
  icon: <Wallet size={32} className="text-beige-400" />,
  title: 'Spending Plans',
  description:
  'A spending plan that fits your life, paired with the work of recognizing the triggers that throw it off course.'
},
{
  icon: <TrendingDown size={32} className="text-beige-400" />,
  title: 'Debt Repayment',
  description:
  'Step-by-step strategies to pay down debt in a way that is sustainable and built around your situation.'
},
{
  icon: <Umbrella size={32} className="text-beige-400" />,
  title: 'Expense Planning',
  description:
  'Preparation for the big purchases on the horizon and the financial surprises that show up uninvited.'
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
            
            Practical, judgment-free money coaching — built around clear
            plans, healthy habits, and an accountability partner you can count
            on.
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