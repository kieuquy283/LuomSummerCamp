import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ProgramInfo from './components/ProgramInfo';
import InstructorRecruitment from './components/InstructorRecruitment';
import Process from './components/Process';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <ProgramInfo />
        <InstructorRecruitment />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
