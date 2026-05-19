import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Giới thiệu', href: '#' },
    { name: 'Chương trình', href: '#' },
    { name: 'Lợi ích', href: '#' },
    { name: 'Tuyển giảng viên', href: '#' },
    { name: 'FAQ', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-navy/95 backdrop-blur-sm border-b border-brand-deep/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 cursor-pointer">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 mr-3">
              <Shield className="w-6 h-6 text-brand-yellow" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight tracking-wide">
                AI Smart & Safe
              </span>
              <span className="text-brand-cyan text-sm font-medium leading-tight">
                Summer Camp
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-semibold px-6 py-2.5 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-all hover:scale-105 active:scale-95 duration-200">
              Đăng ký ngay
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-navy border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 px-3">
              <button className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-semibold px-6 py-3 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-all">
                Đăng ký ngay
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
