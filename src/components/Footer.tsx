import { useState, type FormEvent } from 'react';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import xLogo from '../assets/icons/x.svg';
import googlePlay from '../assets/icons/google-play.svg';
import apple from '../assets/icons/apple.svg';
import { BRAND, LINKS, NAV } from '../config/site';
import './Footer.css';

const SOCIALS = [
  { label: 'Facebook', href: LINKS.facebook, icon: facebook },
  { label: 'Instagram', href: LINKS.instagram, icon: instagram },
  { label: 'Twitter', href: LINKS.twitter, icon: xLogo },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Footer() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'error' | 'done'>('idle');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setState('error');
      return;
    }
    // No mailing-list backend is connected yet; see README ("Newsletter").
    setState('done');
    setEmail('');
  };

  return (
    <>
      <section className="cta-wrap" id="download" aria-labelledby="cta-title">
        <div className="container">
          <div className="cta">
            <div className="cta__copy">
              <h2 id="cta-title">Download the {BRAND} parent app on iOS or Android today</h2>
              <p>Stay in control of your child’s education — track fees, get reminders, and access support anytime.</p>
            </div>
            <div className="cta__stores">
              <a className="store" href={LINKS.googlePlay} aria-label="Get the app on Google Play">
                <img src={googlePlay} alt="" width={24} height={26} />
                <span>
                  <small>Get it on</small>
                  Google Play
                </span>
              </a>
              <a className="store" href={LINKS.appStore} aria-label="Download on the Apple App Store">
                <img src={apple} alt="" width={22} height={27} />
                <span>
                  <small>Download on the</small>
                  App Store
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="container footer__grid">
          <div className="footer__brand">
            <p className="footer__name">{BRAND}</p>
            <p className="footer__legal">
              {BRAND} is not a bank. We are a financial technology platform developed and powered by Direct Guidance
              Tech, a company duly registered with the Corporate Affairs Commission (CAC) in Nigeria. All financial
              services on {BRAND} are provided through licensed Banking and Banking-as-a-Service (BaaS) partners
              regulated by the Central Bank of Nigeria (CBN). The {BRAND} name, logo, and related assets are
              trademarks of Direct Guidance Tech.
            </p>
          </div>

          <nav className="footer__col" aria-label="Quick links">
            <p className="footer__heading">Quick links</p>
            <ul>
              {['About', 'How It Works', 'Contact us'].map((label) => {
                const item = NAV.find((n) => n.label === label)!;
                return (
                  <li key={label}>
                    <a href={item.href}>{label}</a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="footer__col">
            <p className="footer__heading">Follow us</p>
            <ul>
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="footer__social">
                    <img src={s.icon} alt="" width={18} height={18} />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form className="footer__news" onSubmit={onSubmit} noValidate>
            <label htmlFor="newsletter-email" className="footer__heading">
              Subscribe to our newsletter
            </label>
            <p className="footer__news-note">Product updates and fee-season tips. No spam.</p>
            <div className="footer__news-row">
              <input
                id="newsletter-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                aria-invalid={state === 'error'}
                aria-describedby="newsletter-msg"
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (state !== 'idle') setState('idle');
                }}
              />
              <button type="submit" className="btn btn--light footer__subscribe">
                Subscribe
              </button>
            </div>
            <p id="newsletter-msg" className={`footer__msg footer__msg--${state}`} role="status">
              {state === 'error' && 'Please enter a valid email address.'}
              {state === 'done' && 'Thanks — you’re on the list.'}
            </p>
          </form>
        </div>
        <div className="container">
          <div className="footer__bottom">
            <p>
              © {new Date().getFullYear()} {BRAND}. All rights reserved.
            </p>
            <p>Powered by Direct Guidance Tech</p>
          </div>
        </div>
      </footer>
    </>
  );
}
