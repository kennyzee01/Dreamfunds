import phone from '../assets/img/parents-phone.webp';
import { BRAND } from '../config/site';
import { useFitScale } from '../hooks/useFitScale';
import NotificationCard from './NotificationCard';
import './ParentPhone.css';

/**
 * The hand-held phone photo from the design, with a fresh parent-app screen and
 * floating cards laid over it. Coordinates are photo pixels (678 × 748), so the
 * overlay stays locked to the phone at every size.
 */
const ART_W = 678;
const ART_H = 748;

const HISTORY = [
  { item: 'Learning Materials', meta: 'Tolu · JSS 2 · 12 Sep', amount: '₦28,500' },
  { item: 'PTA Levy', meta: 'Family levy · 3 Oct', amount: '₦10,000' },
];

export default function ParentPhone() {
  const { ref, scale } = useFitScale<HTMLDivElement>(ART_W);

  return (
    <div className="pp-fit" ref={ref} style={{ height: ART_H * scale }}>
      <div className="pp" style={{ width: ART_W, height: ART_H, transform: `scale(${scale})` }}>
        <img
          className="pp__photo"
          src={phone}
          width={ART_W}
          height={ART_H}
          loading="lazy"
          decoding="async"
          alt={`A parent holding a phone with the ${BRAND} app open, showing a wallet balance of ₦245,500, a completed First Term tuition payment of ₦185,000 and a payment confirmation for an examination fee.`}
        />

        <div className="pp__overlay" aria-hidden>
          {/* In-app screen (below the status bar of the photo) */}
          <div className="pp-screen">
            <div className="pp-screen__head">
              <span className="pp-avatar pp-avatar--parent">FA</span>
              <span className="pp-screen__hello">
                Hello, <b>Funmi</b>
              </span>
              <span className="pp-screen__bell" />
            </div>

            <div className="pp-screen__balance">
              <div>
                <p className="pp-screen__amount">₦245,500.00</p>
                <p className="pp-screen__label">Wallet balance</p>
              </div>
              <span className="pp-screen__pay">Pay fees</span>
            </div>

            <div className="pp-screen__kids">
              <span className="pp-chip is-active">Tolu · JSS 2</span>
              <span className="pp-chip">Tobi · SS 1</span>
            </div>

            <div className="pp-screen__due">
              <b>Second Term fees</b> due 5 Jan 2027
            </div>

            <div className="pp-screen__section">
              <span>Recent payments</span>
              <span className="pp-screen__see">See all</span>
            </div>

            <ul className="pp-screen__list">
              <li>
                <span className="pp-dot pp-dot--blue" />
                <span>
                  <b>School Bus · First Term</b>
                  <small>Tobi · SS 1 · 8 Sep</small>
                </span>
                <em>₦45,000</em>
              </li>
              {HISTORY.map((h) => (
                <li key={h.item}>
                  <span className="pp-dot" />
                  <span>
                    <b>{h.item}</b>
                    <small>{h.meta}</small>
                  </span>
                  <em>{h.amount}</em>
                </li>
              ))}
            </ul>

            <nav className="pp-tabs">
              <span className="is-active">
                <HomeIcon /> Home
              </span>
              <span>
                <WalletIcon />
              </span>
              <span>
                <ReceiptIcon />
              </span>
              <span>
                <UserIcon />
              </span>
            </nav>
          </div>

          {/* Floating cards */}
          <div className="pp-card pp-card--balance">
            <div>
              <p className="pp-card__amount">₦245,500.00</p>
              <p className="pp-card__label">Wallet balance</p>
            </div>
            <span className="pp-card__btn">Pay fees</span>
          </div>

          <div className="pp-card pp-card--payment">
            <span className="pp-avatar pp-avatar--child">TA</span>
            <div className="pp-card__col">
              <p className="pp-card__title">First Term Tuition</p>
              <p className="pp-card__sub">Tolu Adeyemi · 8 Sep 2026</p>
            </div>
            <div className="pp-card__col pp-card__col--end">
              <p className="pp-card__title">₦185,000.00</p>
              <p className="pp-card__ok">Completed</p>
            </div>
          </div>

          <NotificationCard
            className="pp-notif"
            title="Payment successful"
            body="Examination fee of ₦15,000 for Tobi Adeyemi (SS 1) has been received by Greenfield Heights College."
            time="Today, 10:42am · Receipt GHC-26-04817"
          />
        </div>
      </div>
    </div>
  );
}

const icon = { width: 15, height: 15, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
function HomeIcon() {
  return (
    <svg {...icon}>
      <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" fill="currentColor" stroke="none" />
    </svg>
  );
}
function WalletIcon() {
  return (
    <svg {...icon}>
      <rect x="3" y="6" width="18" height="14" rx="3" />
      <path d="M16 13h2M3 9h15" />
    </svg>
  );
}
function ReceiptIcon() {
  return (
    <svg {...icon}>
      <path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2z" />
      <path d="M9 8h6M9 12h6" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg {...icon}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  );
}
