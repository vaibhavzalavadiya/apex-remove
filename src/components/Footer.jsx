import React from 'react';
import { Wand2, Shield, Zap, Twitter, Facebook, Instagram, Github, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative mt-16">
      {/* Wave Animation */}
      <div className="w-full h-24 min-h-24 relative -top-px overflow-hidden">
        <svg 
          className="w-full h-24 min-h-24 mb-0 max-h-36 relative"
          xmlns="http://www.w3.org/2000/svg" 
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" 
          preserveAspectRatio="none" 
          shapeRendering="auto"
        >
          <defs>
            <path 
              id="gentle-wave" 
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" 
            />
          </defs>
          <g className="wave-animation">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(56, 189, 248, 0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(59, 130, 246, 0.4)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(99, 102, 241, 0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(79, 70, 229, 0.2)" />
          </g>
        </svg>
      </div>
      
      {/* Footer Content */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-12">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">APEX BG Remover</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-xs">Transform your images instantly with our AI-powered background removal tool. No signup required.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-cyan-300 transition-all duration-300 hover:text-white hover:-translate-y-1">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-cyan-300 transition-all duration-300 hover:text-white hover:-translate-y-1">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-cyan-300 transition-all duration-300 hover:text-white hover:-translate-y-1">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-cyan-300 transition-all duration-300 hover:text-white hover:-translate-y-1">
                  <Github size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Features', 'Pricing', 'Blog', 'About Us'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-cyan-300 transition-colors flex items-center group">
                      <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2">
                {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'GDPR'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-cyan-300 transition-colors flex items-center group">
                      <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Stay Updated</h4>
              <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and features.</p>
              <div className="flex mb-6">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/10 border border-white/20 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 rounded-r-lg transition-all">
                  <ChevronRight size={20} />
                </button>
              </div>
              <div className="flex items-center text-gray-300 hover:text-cyan-300 transition-colors">
                <Mail size={16} className="mr-2" />
                <a href="mailto:contact@apexbgremover.com">contact@apexbgremover.com</a>
              </div>
            </div>
          </div>

          {/* Features Highlight */}
          <div className="border-t border-white/10 pt-8 mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg text-cyan-300 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 group-hover:text-white transition-all duration-300">
                  <Wand2 size={18} />
                </div>
                <span className="text-gray-300 group-hover:text-cyan-200 transition-colors duration-300">AI-Powered Technology</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg text-cyan-300 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 group-hover:text-white transition-all duration-300">
                  <Shield size={18} />
                </div>
                <span className="text-gray-300 group-hover:text-cyan-200 transition-colors duration-300">100% Secure & Private</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg text-cyan-300 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 group-hover:text-white transition-all duration-300">
                  <Zap size={18} />
                </div>
                <span className="text-gray-300 group-hover:text-cyan-200 transition-colors duration-300">Lightning Fast Processing</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 mt-8 text-center sm:text-left sm:flex sm:justify-between sm:items-center">
            <p className="text-sm text-gray-400">&copy; {currentYear} APEX BG Remover. All rights reserved.</p>
            <p className="text-sm text-gray-400 mt-2 sm:mt-0">
              Made with ❤️ for creators worldwide
            </p>
          </div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        .wave-animation > use {
          animation: moveForever 25s cubic-bezier(.55,.5,.45,.5) infinite;
        }
        .wave-animation > use:nth-child(1) {
          animation-delay: -2s;
          animation-duration: 7s;
        }
        .wave-animation > use:nth-child(2) {
          animation-delay: -3s;
          animation-duration: 10s;
        }
        .wave-animation > use:nth-child(3) {
          animation-delay: -4s;
          animation-duration: 13s;
        }
        .wave-animation > use:nth-child(4) {
          animation-delay: -5s;
          animation-duration: 20s;
        }
        @keyframes moveForever {
          0% { transform: translate3d(-90px, 0, 0); }
          100% { transform: translate3d(85px, 0, 0); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;