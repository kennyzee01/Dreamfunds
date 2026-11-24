import card from '../assets/icons/credit-card.svg';
import coins from '../assets/icons/hand-coins.svg';
import bell from '../assets/icons/bell.svg';
import receipt from '../assets/icons/receipt.svg';
import FeatureCard from './FeatureCard';
import ParentPhone from './ParentPhone';
import { LINKS } from '../config/site';
import './Audience.css';

export default function ForParents() {
  return (
    <section className="audience-section audience-section--parents" id="for-parents" aria-labelledby="parents-title">
      <div className="container audience-section__inner">
        <div className="audience-section__art audience-section__art--phone">
          <ParentPhone />
        </div>
        <div className="audience">
          <p className="eyebrow">For parents</p>
          <h2 id="parents-title" className="h2">
            Simple financial support that helps parents stay on top of school fees.
          </h2>
          <ul className="features" role="list">
            <FeatureCard icon={card} title="Pay flexibly" body="Choose flexible ways to pay that fit your budget and schedule." />
            <FeatureCard icon={coins} title="Get micro-loans" body="Quick access to small loans to help cover school fees." />
            <FeatureCard icon={bell} title="Receive reminders" body="Timely alerts ensure you never miss a school fee payment." />
            <FeatureCard icon={receipt} title="Get instant invoices" body="Receive receipts immediately after each successful payment." />
          </ul>
          <a href={LINKS.downloadApp} className="btn btn--primary audience__cta">
            Download app <span className="arrow" aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
