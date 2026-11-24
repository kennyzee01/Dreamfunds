import { BRAND } from '../config/site';
import { useFitScale } from '../hooks/useFitScale';
import './SchoolDashboard.css';

/**
 * Product mock-up for the "For schools" section: a bursar's fee-collection overview.
 * Drawn on a fixed 1040px artboard and scaled to fit, so it reads like a crisp screenshot.
 */
const ART_W = 1040;
const ART_H = 956;

// First Term 2026/27 started Mon 7 Sep 2026; "today" in the mock is Tue 24 Nov (week 12).
const WEEKS = [21.4, 16.8, 12.1, 9.6, 8.2, 7.4, 6.9, 5.8, 7.1, 5.3, 6.1, 6.2]; // ₦ millions, sums to ₦112.9m
const MAX_Y = 25;

const CLASSES = [
  { name: 'Nursery & Primary', pct: 91, owing: '38 owing' },
  { name: 'JSS 1 – 3', pct: 82, owing: '61 owing' },
  { name: 'SS 1', pct: 71, owing: '44 owing' },
  { name: 'SS 2', pct: 68, owing: '39 owing' },
  { name: 'SS 3', pct: 64, owing: '32 owing' },
];

const PAYMENTS = [
  { initials: 'CO', tone: 'violet', name: 'Chidinma Okafor', id: 'GHC/25/0417', cls: 'JSS 2', item: 'First Term Tuition', method: 'Bank transfer', status: 'Paid', amount: '₦185,000' },
  { initials: 'TA', tone: 'teal', name: 'Tobi Adeyemi', id: 'GHC/23/0233', cls: 'SS 1', item: 'Examination Fee', method: 'Card', status: 'Paid', amount: '₦15,000' },
  { initials: 'IN', tone: 'amber', name: 'Ifeoma Nwosu', id: 'GHC/22/0381', cls: 'Primary 5', item: 'Tuition · Instalment 2 of 3', method: 'Dreamfund wallet', status: 'Part-paid', amount: '₦62,500' },
] as const;

const TABS = ['Overview', 'Fee collection', 'Students', 'Payroll', 'Reports', 'Settings'];

function BarChart() {
  const w = 520;
  const h = 172;
  const left = 34;
  const bottom = 22;
  const plotW = w - left;
  const plotH = h - bottom - 6;
  const slot = plotW / WEEKS.length;
  const barW = 22;
  const y = (v: number) => 6 + plotH - (v / MAX_Y) * plotH;
  const last = WEEKS.length - 1;

  return (
    <svg className="dash-chart" viewBox={`0 0 ${w} ${h}`} width={w} height={h} role="img" aria-label="Weekly fee collections, weeks 1 to 12">
      {[0, 5, 10, 15, 20, 25].map((t) => (
        <g key={t}>
          <line x1={left} x2={w} y1={y(t)} y2={y(t)} className="dash-chart__grid" />
          <text x={left - 8} y={y(t) + 3.5} className="dash-chart__axis" textAnchor="end">
            {t === 0 ? '0' : `${t}m`}
          </text>
        </g>
      ))}
      {WEEKS.map((v, i) => {
        const x = left + i * slot + (slot - barW) / 2;
        return (
          <g key={i}>
            <rect x={x} y={y(v)} width={barW} height={y(0) - y(v)} rx={5} className={i === last ? 'dash-chart__bar is-current' : 'dash-chart__bar'} />
            <text x={x + barW / 2} y={h - 6} className="dash-chart__axis" textAnchor="middle">
              W{i + 1}
            </text>
          </g>
        );
      })}
      {/* tooltip for the current week */}
      <g transform={`translate(${left + last * slot + slot / 2 - 96}, ${y(WEEKS[last]) - 50})`}>
        <rect width="96" height="38" rx="8" className="dash-chart__tip" />
        <text x="10" y="15" className="dash-chart__tip-label">This week</text>
        <text x="10" y="30" className="dash-chart__tip-value">₦6,204,500</text>
      </g>
    </svg>
  );
}

export default function SchoolDashboard() {
  const { ref, scale } = useFitScale<HTMLDivElement>(ART_W);

  return (
    <div className="dash-fit" ref={ref} style={{ height: ART_H * scale }}>
      <div
        className="dash"
        style={{ width: ART_W, height: ART_H, transform: `scale(${scale})` }}
        role="img"
        aria-label={`${BRAND} school dashboard showing First Term fee collections for Greenfield Heights College: ₦112.9 million of ₦148.6 million collected, weekly collections and recent payments.`}
      >
        <div aria-hidden className="dash__inner">
          {/* Top bar */}
          <div className="dash__top">
            <div className="dash__brand">
              <span className="dash__mark">D</span>
              <span className="dash__brand-name">{BRAND}</span>
              <span className="dash__brand-tag">Schools</span>
            </div>
            <div className="dash__school">
              <span className="dash__crest">GH</span>
              <span>
                <strong>Greenfield Heights College</strong>
                <small>Lekki Campus</small>
              </span>
              <Chevron />
            </div>
            <div className="dash__search">
              <SearchIcon />
              <span>Search students, receipts…</span>
              <kbd>/</kbd>
            </div>
            <span className="dash__bell">
              <BellIcon />
              <i />
            </span>
            <div className="dash__user">
              <span className="dash__avatar">FB</span>
              <span>
                <strong>Funke Bello</strong>
                <small>Bursar</small>
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div className="dash__tabs">
            {TABS.map((t, i) => (
              <span key={t} className={i === 0 ? 'is-active' : undefined}>
                {t}
              </span>
            ))}
            <span className="dash__term">
              <CalendarIcon /> 2026/27 · First Term <Chevron />
            </span>
          </div>

          <div className="dash__body">
            {/* Greeting + actions */}
            <div className="dash__hello">
              <div>
                <h4>Good morning, Mrs Bello</h4>
                <p>Here’s where First Term collections stand · Tuesday, 24 November 2026</p>
              </div>
              <div className="dash__actions">
                <span className="dash-btn dash-btn--ghost">
                  <BellIcon /> Send reminders
                </span>
                <span className="dash-btn dash-btn--primary">+ Create invoice</span>
              </div>
            </div>

            {/* KPIs */}
            <div className="dash__kpis">
              <div className="kpi">
                <p className="kpi__label">Expected this term</p>
                <p className="kpi__value">₦148,600,000</p>
                <p className="kpi__meta">1,128 students · 42 classes</p>
              </div>
              <div className="kpi kpi--feature">
                <div className="kpi__row">
                  <p className="kpi__label">Collected so far</p>
                  <span className="kpi__chip">▲ ₦6.2m this week</span>
                </div>
                <p className="kpi__value">₦112,940,500</p>
                <div className="kpi__progress">
                  <span style={{ width: '76%' }} />
                </div>
                <p className="kpi__meta">76% of expected fees received</p>
              </div>
              <div className="kpi">
                <div className="kpi__row">
                  <p className="kpi__label">Outstanding</p>
                  <span className="kpi__chip kpi__chip--amber">214 students</span>
                </div>
                <p className="kpi__value">₦35,659,500</p>
                <p className="kpi__meta">63 on instalment plans · 151 not started</p>
              </div>
            </div>

            {/* Chart + by class */}
            <div className="dash__row">
              <div className="dash-card">
                <div className="dash-card__head">
                  <div>
                    <h5>Weekly collections</h5>
                    <p>Since resumption, 7 Sep 2026</p>
                  </div>
                  <span className="dash-seg">
                    <b>Weekly</b>
                    <span>Monthly</span>
                  </span>
                </div>
                <BarChart />
              </div>
              <div className="dash-card">
                <div className="dash-card__head">
                  <div>
                    <h5>Collection by class</h5>
                    <p>Share of fees received</p>
                  </div>
                </div>
                <ul className="dash-classes">
                  {CLASSES.map((c) => (
                    <li key={c.name}>
                      <div className="dash-classes__top">
                        <span>{c.name}</span>
                        <b>{c.pct}%</b>
                      </div>
                      <div className="dash-classes__bar">
                        <span style={{ width: `${c.pct}%` }} />
                      </div>
                      <small>{c.owing}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recent payments */}
            <div className="dash-card dash-card--table">
              <div className="dash-card__head">
                <h5>Recent payments</h5>
                <span className="dash-link">View all →</span>
              </div>
              <div className="dash-table">
                <div className="dash-table__row dash-table__row--head">
                  <span>Student</span>
                  <span>Class</span>
                  <span>Fee item</span>
                  <span>Method</span>
                  <span>Status</span>
                  <span>Amount</span>
                </div>
                {PAYMENTS.map((p) => (
                  <div className="dash-table__row" key={p.name}>
                    <span className="dash-table__student">
                      <i className={`tone-${p.tone}`}>{p.initials}</i>
                      <span>
                        <strong>{p.name}</strong>
                        <small>{p.id}</small>
                      </span>
                    </span>
                    <span>{p.cls}</span>
                    <span>{p.item}</span>
                    <span className="dash-table__muted">{p.method}</span>
                    <span>
                      <em className={`status status--${p.status.toLowerCase()}`}>{p.status}</em>
                    </span>
                    <span className="dash-table__amount">{p.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Chevron() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}
function BellIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}
