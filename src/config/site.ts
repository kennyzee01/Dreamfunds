/**
 * Single source of truth for brand name and outbound links.
 * Swap these when real destinations exist (web app login, store listings, socials).
 */
export const BRAND = 'Dreamfund';

export const LINKS = {
  // No live web app yet: these route to the in-page download section.
  login: '#download',
  getStarted: '#download',
  downloadApp: '#download',
  contact: '#contact',
  googlePlay: '#download',
  appStore: '#download',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  twitter: 'https://x.com',
} as const;

export const NAV = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'Contact us', href: LINKS.contact },
] as const;
