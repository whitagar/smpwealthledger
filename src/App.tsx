import React from 'react';
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ApproachSection } from './components/ApproachSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { ComingSoon } from './components/ComingSoon';

function Home() {
  return (
    <div className="min-h-screen bg-offwhite text-dark font-sans selection:bg-beige-300 selection:text-brown-900">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ApproachSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function PreviewGate({ children }: { children: React.ReactNode }) {
  const [searchParams] = useSearchParams();
  if (searchParams.get('preview') !== 'true') {
    return <ComingSoon />;
  }
  return <>{children}</>;
}

export function App() {
  return (
    <BrowserRouter>
      <PreviewGate>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </PreviewGate>
    </BrowserRouter>
  );
}
