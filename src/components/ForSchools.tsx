import wallet from '../assets/icons/wallet.svg';
import chart from '../assets/icons/chart-line-up.svg';
import file from '../assets/icons/file-text.svg';
import money from '../assets/icons/money-wavy.svg';
import FeatureCard from './FeatureCard';
import SchoolDashboard from './SchoolDashboard';
import { LINKS } from '../config/site';
import './Audience.css';

export default function ForSchools() {
  return (
    <section className="audience-section audience-section--schools on-blue" id="how-it-works" aria-labelledby="schools-title">
      <div className="container audience-section__inner">
        <div className="audience">
          <p className="eyebrow">For schools</p>
          <h2 id="schools-title" className="h2">
            Smart financial tools that give schools total control and clarity.
          </h2>
          <ul className="features" role="list">
            <FeatureCard icon={wallet} title="Manage wallets" body="Easily manage and track all incoming and outgoing payments." />
            <FeatureCard icon={chart} title="Track fees" body="Get updates on student payments and outstanding balances." />
            <FeatureCard icon={file} title="Generate reports" body="Generate smart reports and reconcile payments quickly." />
            <FeatureCard icon={money} title="Disburse salaries" body="Pay staff directly and securely — no paperwork needed." />
          </ul>
          <a href={LINKS.getStarted} className="btn btn--light audience__cta">
            Get started <span className="arrow" aria-hidden>→</span>
          </a>
        </div>
        <div className="audience-section__art audience-section__art--bleed">
          <div className="bezel">
            <SchoolDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
