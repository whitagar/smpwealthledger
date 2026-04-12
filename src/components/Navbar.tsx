import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brown-900/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6 text-sm font-medium text-white/90">
            <a href="#about" className="hover:text-beige-300 transition-colors">
              About
            </a>
            <a
              href="#services"
              className="hover:text-beige-300 transition-colors">
              
              Services
            </a>
            <a
              href="#approach"
              className="hover:text-beige-300 transition-colors">
              
              Approach
            </a>
            <a
              href="#contact"
              className="hover:text-beige-300 transition-colors">
              
              Contact
            </a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#contact"
            className="hidden md:block text-sm font-medium text-white hover:text-beige-300 transition-colors">
            
            Get Started
          </a>
          <div className="h-10 w-10 md:h-12 md:w-12 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-beige-300">
            <img
              src="/Copy_of_SamanthaParkinson.png"
              alt="SMP Wealth Ledger Logo"
              className="w-full h-full object-cover" />
            
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen &&
      <div className="md:hidden absolute top-full left-0 w-full bg-brown-900 border-t border-white/10 py-4 px-6 flex flex-col gap-4 shadow-xl">
          <a
          href="#about"
          className="text-white hover:text-beige-300"
          onClick={() => setMobileMenuOpen(false)}>
          
            About
          </a>
          <a
          href="#services"
          className="text-white hover:text-beige-300"
          onClick={() => setMobileMenuOpen(false)}>
          
            Services
          </a>
          <a
          href="#approach"
          className="text-white hover:text-beige-300"
          onClick={() => setMobileMenuOpen(false)}>
          
            Approach
          </a>
          <a
          href="#contact"
          className="text-white hover:text-beige-300"
          onClick={() => setMobileMenuOpen(false)}>
          
            Contact
          </a>
          <a
          href="#contact"
          className="text-beige-300 font-medium mt-2"
          onClick={() => setMobileMenuOpen(false)}>
          
            Get Started
          </a>
        </div>
      }
    </nav>);

}