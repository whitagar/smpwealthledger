import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-brown-900 text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="w-52 h-52 bg-white rounded-full flex items-center justify-center overflow-hidden mb-6">
              <img
                src="/Copy_of_SamanthaParkinson.png"
                alt="SMP Wealth Ledger Logo"
                className="w-full h-full object-cover" />
              
            </div>
            <p className="text-white/70 font-light max-w-sm leading-relaxed mb-6">
              Independent, fee-only financial planning and advice tailored for
              your unique journey.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white/50 hover:text-beige-300 transition-colors">
                
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-beige-300 transition-colors">
                
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-beige-300 transition-colors">
                
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-beige-300">
              Navigation
            </h4>
            <ul className="space-y-3 text-white/70 font-light">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors">
                  
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#approach"
                  className="hover:text-white transition-colors">
                  
                  Approach
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors">
                  
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-beige-300">Contact</h4>
            <ul className="space-y-3 text-white/70 font-light">
              <li><a href="mailto:sam.wealthledger@outlook.com" className="hover:text-white transition-colors">sam.wealthledger@outlook.com</a></li>
              {/* <li><a href="tel:5551234567" className="hover:text-white transition-colors">(555) 123-4567</a></li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm font-light">
          <p>© 2026 SMP Wealth Ledger. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}