import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { ExperienceSection } from './components/ExperienceSection';
import { HighlightsSection } from './components/HighlightsSection';
import { SkillsSection } from './components/SkillsSection';
import { ToolsSection } from './components/ToolsSection';
import { SolutionsShowcase } from './components/SolutionsShowcase';
import { EducationSection } from './components/EducationSection';
import { ReferencesSection } from './components/ReferencesSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ShareModal } from './components/ShareModal';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [experienceFilter, setExperienceFilter] = useState<string>('all');

  const publicUrl = typeof window !== 'undefined' && window.location.origin && !window.location.origin.includes('localhost')
    ? window.location.origin
    : (PERSONAL_INFO.publicWebsiteUrl || 'https://ais-pre-5k6yvqfi75kbzuxih2a2qb-929851772140.europe-west2.run.app');

  const handleSelectIndustryFilter = (industryId: string) => {
    // Map industryId to Experience category
    if (industryId === 'consultancy') {
      setExperienceFilter('consultancy');
    } else if (industryId === 'tech-ict' || industryId === 'retail-fmcg') {
      setExperienceFilter('ict');
    } else if (industryId === 'hospitality-realestate') {
      setExperienceFilter('hospitality');
    } else {
      setExperienceFilter('all');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Top Sticky Navigation */}
      <Navbar 
        onOpenResume={() => setResumeOpen(true)} 
        onOpenShare={() => setShareOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero with Portrait & Quick Stats */}
        <Hero 
          onOpenResume={() => setResumeOpen(true)} 
          onOpenShare={() => setShareOpen(true)}
          onSelectIndustryFilter={handleSelectIndustryFilter}
        />

        {/* Philosophy & Executive Snapshot */}
        <AboutSection />

        {/* Commercial Framework: How I Grow Revenue */}
        <ProcessSection />

        {/* High-Value Solutions & Products Closed */}
        <SolutionsShowcase />

        {/* Professional Experience Timeline */}
        <ExperienceSection 
          selectedFilter={experienceFilter}
          onFilterChange={(f) => setExperienceFilter(f)}
        />

        {/* Where The Work Shows: 6 Impact Pillars */}
        <HighlightsSection />

        {/* Core Competencies with Search */}
        <SkillsSection />

        {/* Tools and Technologies */}
        <ToolsSection />

        {/* Education, Certifications & Awards */}
        <EducationSection />

        {/* Professional References */}
        <ReferencesSection />

        {/* Recruiter & Hiring Manager FAQs */}
        <FaqSection />

        {/* Contact and Hire Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Public Share & Copy Link Modal */}
      <ShareModal
        isOpen={shareOpen}
        onClose={() => setShareOpen(false)}
        publicUrl={publicUrl}
      />
    </div>
  );
}
