import wallet from '../assets/icons/why-wallet.svg';
import shield from '../assets/icons/why-shield-check.svg';
import book from '../assets/icons/why-book-open.svg';
import { LINKS } from '../config/site';
import './WhyUs.css';

const REASONS = [
  {
    icon: wallet,
    title: 'Financial peace of mind',
    body: 'Dreamfund makes paying school fees easy, clear, and reliable, helping parents and schools avoid confusion.',
  },
  {
    icon: shield,
    title: 'Fast, simple & secure payment',
    body: 'Payments happen fast and smooth, no delays or hassles, giving parents and schools peace of mind every time.',
  },
  {
    icon: book,
    title: 'Every child deserves to learn',
    body: 'We take the worry out of school fees by offering loans to parents, so children focus on their dreams.',
  },
];

export default function WhyUs() {
  return (
    <section className="why section" id="about" aria-labelledby="why-title">
      <div className="container">
        <div className="why__head">
          <div>
            <p className="eyebrow">Why Dreamfund</p>
            <h2 id="why-title" className="h2">
              Why schools and parents trust us
            </h2>
          </div>
          <p className="lead">
            Empowering schools and parents with simple, smart tools to manage school fees effortlessly, reduce stress,
            and stay financially organized.
          </p>
        </div>

        <ul className="why__panel">
          {REASONS.map((r) => (
            <li key={r.title} className="why__item">
              <span className="why__icon" aria-hidden>
                <img src={r.icon} alt="" width={22} height={22} />
              </span>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </li>
          ))}
        </ul>

        <div className="why__cta">
          <p>
            <strong>Join the community making school payments easier.</strong> Let’s chat and find the best fit for
            your school or family.
          </p>
          <a href={LINKS.contact} className="btn btn--secondary btn--sm">
            Contact us <span className="arrow" aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
