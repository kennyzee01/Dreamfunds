import Header from './components/Header';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import WhyUs from './components/WhyUs';
import ForSchools from './components/ForSchools';
import ForParents from './components/ForParents';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import { SCHOOL_LOGOS, PARTNER_LOGOS } from './components/logos';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="band band--schools" aria-label="Schools using Dreamfund">
          <div className="container band__inner">
            <p className="band__label">
              Trusted by <strong>200+ schools</strong> across Nigeria
            </p>
            <LogoStrip logos={SCHOOL_LOGOS} label="Partner schools" />
          </div>
        </section>
        <WhyUs />
        <ForSchools />
        <ForParents />
        <Testimonials />
        <section className="band band--partners" aria-labelledby="partners-title">
          <div className="container band__inner">
            <div className="section-head section-head--center">
              <p className="eyebrow">Our financial partners</p>
              <h2 id="partners-title" className="h2 band__title">
                Supported by top financial institutions
              </h2>
            </div>
            <LogoStrip logos={PARTNER_LOGOS} label="Financial partners" />
          </div>
        </section>
        <Faq />
      </main>
      <Footer />
    </>
  );
}
