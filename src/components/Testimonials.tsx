import { useCallback, useEffect, useState } from 'react';
import johnson from '../assets/img/avatar-johnson.webp';
import amina from '../assets/img/avatar-amina.webp';
import ade from '../assets/img/avatar-ade.webp';
import arrowLeft from '../assets/icons/arrow-left.svg';
import arrowRight from '../assets/icons/arrow-right.svg';
import './Testimonials.css';

type Story = { quote: string; name: string; role: string; photo?: string; initials?: string; pos?: string };

// The three stories in the Figma frame sit at index 1–3, so the default view matches the design.
const STORIES: Story[] = [
  {
    quote: 'Splitting the term’s fees into three instalments meant I never had to choose between rent and my children’s tuition.',
    name: 'Mr Emeka',
    role: 'Parent of two',
    initials: 'E',
  },
  {
    quote: 'We recovered almost all outstanding fees quickly and smoothly. Dreamfund made managing school fees so easy.',
    name: 'Mr Johnson',
    role: 'School Owner',
    photo: johnson,
    pos: '50% 12%',
  },
  {
    quote: 'The micro-loan feature helped me pay my child’s fees on time without worries.',
    name: 'Mrs Amina',
    role: 'Parent',
    photo: amina,
  },
  {
    quote: 'Our school’s fee dashboard gives us clear insights every month. Dreamfund’s secure system gave us confidence to manage fees digitally.',
    name: 'Mrs Ade',
    role: 'School Finance Manager',
    photo: ade,
  },
  {
    quote: 'Reconciling fees used to take our bursary a full week every term. Now it’s done before the first assembly.',
    name: 'Mr Okon',
    role: 'School Bursar',
    initials: 'O',
  },
];

function usePerView() {
  const get = () => (window.innerWidth <= 700 ? 1 : window.innerWidth <= 1100 ? 2 : 3);
  const [n, setN] = useState(get);
  useEffect(() => {
    const onResize = () => setN(get());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return n;
}

export default function Testimonials() {
  const perView = usePerView();
  const [active, setActive] = useState(2); // middle dot active, as in the design
  const total = STORIES.length;
  const go = useCallback((i: number) => setActive(((i % total) + total) % total), [total]);

  // Desktop: window of 3 centred on the active story. Smaller screens: active story first.
  const start = perView === 3 ? active - 1 : perView === 2 ? active - 1 : active;
  const visible = Array.from({ length: perView }, (_, k) => STORIES[(((start + k) % total) + total) % total]);

  return (
    <section className="stories section" aria-labelledby="stories-title">
      <div className="container">
        <div className="stories__head">
          <div className="section-head">
            <p className="eyebrow">Testimonials</p>
            <h2 id="stories-title" className="h2">
              Real stories from people like you
            </h2>
            <p className="lead">
              Explore experiences from schools and parents who’ve found ease, trust, and financial peace with our
              simple, smart fee management tools.
            </p>
          </div>
          <div className="stories__arrows">
            <button type="button" onClick={() => go(active - 1)} aria-label="Previous story">
              <img src={arrowLeft} alt="" width={18} height={18} />
            </button>
            <button type="button" onClick={() => go(active + 1)} aria-label="Next story">
              <img src={arrowRight} alt="" width={18} height={18} />
            </button>
          </div>
        </div>

        <ul className="stories__grid" style={{ gridTemplateColumns: `repeat(${perView}, minmax(0, 1fr))` }} aria-live="polite">
          {visible.map((s) => (
            <li key={`${active}-${s.name}`} className="story">
              <p className="story__quote">{s.quote}</p>
              <div className="story__by">
                {s.photo ? (
                  <img className="story__avatar" src={s.photo} alt="" width={40} height={40} loading="lazy" style={{ objectPosition: s.pos }} />
                ) : (
                  <span className="story__avatar story__avatar--initials" aria-hidden>
                    {s.initials}
                  </span>
                )}
                <div>
                  <p className="story__name">{s.name}</p>
                  <p className="story__role">{s.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="stories__dots">
          {STORIES.map((s, i) => (
            <button
              key={s.name}
              type="button"
              className={i === active ? "is-active" : undefined}
              aria-label={`Show story ${i + 1} of ${total}`}
              aria-current={i === active || undefined}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
