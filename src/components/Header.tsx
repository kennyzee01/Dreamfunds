import { useEffect, useState } from 'react';
import logo from '../assets/icons/logo-wordmark.svg';
import { BRAND, LINKS, NAV } from '../config/site';
import './Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > 860 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="container site-header__bar">
        <a href="#top" className="site-header__logo" onClick={close}>
          <img src={logo} alt={BRAND} width={112} height={20} />
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a href={LINKS.login} className="btn btn--ghost btn--sm">
            Log in
          </a>
          <a href={LINKS.getStarted} className="btn btn--primary btn--sm">
            Get started
          </a>
        </div>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className="site-header__panel" hidden={!open}>
        <nav className="container" aria-label="Mobile">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
          <div className="site-header__panel-actions">
            <a href={LINKS.login} className="btn btn--secondary" onClick={close}>
              Log in
            </a>
            <a href={LINKS.getStarted} className="btn btn--primary" onClick={close}>
              Get started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
