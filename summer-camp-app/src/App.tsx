import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import InstructorRecruitment from './components/InstructorRecruitment';
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
        <InstructorRecruitment />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;




