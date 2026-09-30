import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail, FileText, CheckCircle2, Download, Share2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { generateAndDownloadCV } from '../utils/generatePdf';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenShare: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenShare }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Revenue Engine', href: '#process' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Skills', href: '#skills' },
    { label: 'Tools', href: '#tools' },
    { label: 'Education', href: '#education' },
    { label: 'References', href: '#references' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
        isScrolled 
          ? 'bg-slate-950/95 text-slate-100 backdrop-blur-md shadow-lg shadow-blue-950/20 py-3 border-b border-blue-900/30' 
          : 'bg-slate-950 text-slate-100 py-4 border-b border-slate-850'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a 
            href="#" 
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-lg font-display shadow-md shadow-blue-600/30 group-hover:bg-blue-500 transition-colors">
              JJ
            </div>
            <div>
              <div className="font-bold tracking-tight text-white flex items-center gap-2">
                <span>JOSEPH JOHN</span>
                <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-950 text-blue-300 border border-blue-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse mr-1.5"></span>
                  Remote • Hybrid • On-site
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono-code truncate max-w-[200px] sm:max-w-xs">
                Business Development & Key Accounts
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-2.5 py-1.5 rounded-md hover:text-blue-400 hover:bg-blue-950/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Share Link Button */}
            <button
              onClick={onOpenShare}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-md border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 transition-all shadow-sm"
              title="Share Public Link"
            >
              <Share2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Share</span>
            </button>

            {/* Direct Download Link for Employers */}
            <a
              href="/Joseph_John_Curriculum_Vitae.pdf"
              download="Joseph_John_Curriculum_Vitae.pdf"
              onClick={(e) => {
                // Also trigger client-side download fallback
                try {
                  generateAndDownloadCV();
                  e.preventDefault();
                } catch {
                  // allow default anchor download
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-md border border-blue-500/50 bg-blue-950/60 hover:bg-blue-900/80 text-blue-200 hover:text-white transition-all shadow-sm"
              title="Download PDF CV directly"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              <span>Download CV</span>
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-md border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 transition-all shadow-sm"
              title="View & Print Full CV"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>View CV</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-md bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-600/30"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenShare}
              className="p-2 rounded-md border border-slate-700 bg-slate-900 text-blue-400"
              title="Share Public Link"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <a
              href="/Joseph_John_Curriculum_Vitae.pdf"
              download="Joseph_John_Curriculum_Vitae.pdf"
              onClick={(e) => {
                try {
                  generateAndDownloadCV();
                  e.preventDefault();
                } catch {
                  // fallback
                }
              }}
              className="p-2 rounded-md border border-blue-800 bg-blue-950 text-blue-300"
              title="Download CV"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenResume}
              className="p-2 rounded-md border border-slate-700 bg-slate-900 text-blue-400"
              title="View CV"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          <div className="py-2 mb-2 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
            <span className="font-semibold text-blue-400">Available: Remote, Hybrid & On-site</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3 h-3" /> Ready to hire
            </span>
          </div>
          <div className="grid grid-cols-2 gap-1.5 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-slate-200 hover:bg-blue-950 hover:text-blue-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="/Joseph_John_Curriculum_Vitae.pdf"
              download="Joseph_John_Curriculum_Vitae.pdf"
              onClick={(e) => {
                try {
                  generateAndDownloadCV();
                  e.preventDefault();
                } catch {
                  // fallback
                }
              }}
              className="w-full py-2.5 px-4 rounded-md border border-blue-600 bg-blue-950/80 text-blue-200 text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>Download CV (PDF)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 px-4 rounded-md border border-slate-700 bg-slate-900 text-slate-100 text-sm font-semibold flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>View Online CV Document</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold flex items-center justify-center gap-2 text-center shadow-md shadow-blue-600/30"
            >
              <span>Contact Joseph John</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
