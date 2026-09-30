import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Heart, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Brief */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center font-display text-base shadow-md shadow-blue-600/30">
                JJ
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                JOSEPH JOHN
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Business development, sales operations, and key account management executive with 8+ years experience winning clients, scaling CRM pipelines, and leading teams in Nairobi, Kenya and globally.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                Nairobi, Kenya
              </span>
              <span>•</span>
              <span className="text-blue-400 font-semibold flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" /> Open to Remote, Hybrid & On-site roles
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">About Joseph</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-400 transition-colors">Experience & Wins</a>
              </li>
              <li>
                <a href="#process" className="hover:text-blue-400 transition-colors">Revenue Process</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors">Core Competencies</a>
              </li>
              <li>
                <a href="#tools" className="hover:text-blue-400 transition-colors">Tech & CRM Stack</a>
              </li>
              <li>
                <a href="#references" className="hover:text-blue-400 transition-colors">References</a>
              </li>
              <li className="pt-1">
                <a 
                  href="/Joseph_John_Curriculum_Vitae.pdf" 
                  download="Joseph_John_Curriculum_Vitae.pdf" 
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>Download CV (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-blue-400 transition-colors flex items-center gap-2 truncate"
                >
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PERSONAL_INFO.phonePrimary.replace(/\s+/g, '')}`}
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-slate-500" />
                  <span>{PERSONAL_INFO.phonePrimary}</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4 text-slate-500" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © 2026 Joseph John. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">
              Open to Remote, Hybrid and On-site opportunities
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1 border border-slate-800"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
