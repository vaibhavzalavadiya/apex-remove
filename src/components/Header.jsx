import React, { useState, useEffect } from 'react';
import { Flame, Sparkles, Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 transition-all duration-300 ${
        scrolled ? 'py-2 shadow-lg' : 'py-4 sm:py-5'
      } w-full bg-gradient-to-r from-blue-900 via-indigo-800 to-violet-900 z-50`}
    >
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <svg className="absolute w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" d="M0,0 L100,100 M100,0 L0,100" />
          <path fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" d="M0,50 L100,50 M50,0 L50,100" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="relative z-10 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Flame className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-300 mr-2" />
            <div>
              <h1 className="m-0 font-extrabold text-xl sm:text-2xl md:text-3xl flex items-center">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">APEX</span>
                <span className="text-white mx-1 md:mx-2 font-light">|</span>
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">BG Remover</span>
              </h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-200 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-200 hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-200 hover:text-white transition-colors">Pricing</a>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/20">
              <Sparkles className="h-4 w-4 text-yellow-300 mr-2" />
              <p className="text-gray-200 text-sm font-medium">AI-Powered • Instant • Free</p>
            </div>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-2 px-5 rounded-full transition-all shadow-lg hover:shadow-cyan-500/20">
              Get Started
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute w-full bg-gradient-to-b from-blue-900 to-indigo-900 shadow-xl transition-all duration-300 ease-in-out z-40 ${
        mobileMenuOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
      }`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a href="#features" className="text-gray-200 hover:text-white py-2 transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-200 hover:text-white py-2 transition-colors">How It Works</a>
          <a href="#pricing" className="text-gray-200 hover:text-white py-2 transition-colors">Pricing</a>
          <div className="py-2">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
              <Sparkles className="h-3 w-3 text-yellow-300 mr-1" />
              <p className="text-gray-200 text-xs font-medium">AI-Powered • Instant • Free</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-2 px-5 rounded-full transition-all shadow-lg w-full">
            Get Started
          </button>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"></div>
    </header>
  );
};

export default Header;