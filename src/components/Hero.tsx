import { useFitScale } from '../hooks/useFitScale';
import tablet from '../assets/img/hero-tablet.webp';
import family from '../assets/img/hero-family.webp';
import NotificationCard from './NotificationCard';
import { LINKS } from '../config/site';
import './Hero.css';

const ART_W = 610;
const ART_H = 495;

export default function Hero() {
  const { ref, scale } = useFitScale<HTMLDivElement>(ART_W);

  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden />
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1 className="display">Making Education Possible, One Payment at a Time.</h1>
          <p className="lead">
            We help schools manage fees and empower parents with savings &amp; loans — all in one platform.
          </p>
          <div className="hero__actions">
            <a href={LINKS.getStarted} className="btn btn--primary">
              Get started
            </a>
            <a href="#how-it-works" className="btn btn--secondary">
              How it works
            </a>
          </div>
        </div>

        <div className="hero__art" ref={ref} style={{ height: ART_H * scale }}>
          <div className="hero__canvas" style={{ width: ART_W, height: ART_H, transform: `scale(${scale})` }}>
            <figure className="hero__photo" style={{ left: 0, top: 0, width: 432, height: 324 }}>
              <img
                src={tablet}
                alt="School administrator smiling while reviewing fee payments on a tablet"
                width={432}
                height={324}
                {...{ fetchpriority: 'high' }}
                style={{ objectPosition: '95% 50%' }}
              />
            </figure>
            <figure className="hero__photo" style={{ left: 288, top: 232, width: 322, height: 252 }}>
              <img src={family} alt="Parents laughing with their young daughter at home" width={322} height={252} style={{ objectPosition: '97% 50%' }} />
            </figure>
            <NotificationCard
              style={{ left: 318, top: 56, width: 284 }}
              title="Payment received"
              body="₦185,000 First Term tuition for Chidinma Okafor (JSS 2) has been received and receipted."
              time="12:56pm"
            />
            <NotificationCard
              style={{ left: -24, top: 368, width: 300 }}
              title="Transaction successful"
              body="Your ₦45,000 school bus payment for Tobi Adeyemi (SS 1) was successful. Receipt sent."
              time="9:14am"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
