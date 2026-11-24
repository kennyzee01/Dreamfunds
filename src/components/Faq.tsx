import { useId, useState } from 'react';
import plus from '../assets/icons/plus.svg';
import { LINKS } from '../config/site';
import './Faq.css';

const FAQS = [
  {
    q: 'How does Dreamfund help schools manage fee payments?',
    a: 'Schools get a dashboard that issues invoices, collects payments by transfer, card or USSD, and reconciles every naira against each student automatically. Bursars see what has been paid and what is outstanding by class, and can send reminders in one click.',
  },
  {
    q: 'Can parents pay school fees in installments?',
    a: 'Yes. Where a school allows it, parents can split a term’s fees into instalments that fit their budget. Each payment is receipted instantly and the school sees the balance update in real time.',
  },
  {
    q: 'Is Dreamfund safe and secure for financial transactions?',
    a: 'Payments are processed through licensed banking and Banking-as-a-Service partners regulated by the Central Bank of Nigeria. Data is encrypted in transit and at rest, and every transaction produces an auditable receipt.',
  },
  {
    q: 'What types of schools can use Dreamfund?',
    a: 'Nursery, primary and secondary schools — private or mission — of any size. Multi-campus groups can manage every campus from a single account.',
  },
  {
    q: 'How do I get started as a parent or school?',
    a: 'Parents can download the Dreamfund app, link their child with the school’s student ID and start paying. Schools can contact our team to set up their fee structure and go live, usually within a few days.',
  },
  {
    q: 'Are there any hidden charges for using Dreamfund?',
    a: 'No. Any transaction fee is shown clearly before you confirm a payment, and loan terms are displayed upfront before you accept them.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const base = useId();

  return (
    <section className="faq section" id="faq" aria-labelledby="faq-title">
      <div className="container faq__inner">
        <div className="faq__intro">
          <p className="eyebrow">FAQs</p>
          <h2 id="faq-title" className="h2">
            What you need to know
          </h2>
          <p className="faq__help">
            Can’t find what you’re looking for? <a href={LINKS.contact}>Contact our team</a>.
          </p>
        </div>

        <div className="faq__list">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            const btnId = `${base}-q${i}`;
            const panelId = `${base}-a${i}`;
            return (
              <div key={item.q} className={`faq__item${isOpen ? ' is-open' : ''}`}>
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <img src={plus} alt="" width={20} height={20} />
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={btnId} className="faq__panel">
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
