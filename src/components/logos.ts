import s1 from '../assets/logos/schools/s1.webp';
import s2 from '../assets/logos/schools/s2.webp';
import s3 from '../assets/logos/schools/s3.webp';
import s4 from '../assets/logos/schools/s4.webp';
import s5 from '../assets/logos/schools/s5.webp';
import s7 from '../assets/logos/schools/s7.webp';
import s8 from '../assets/logos/schools/s8.webp';
import p1 from '../assets/logos/partners/p1.webp';
import p2 from '../assets/logos/partners/p2.webp';
import p3 from '../assets/logos/partners/p3.webp';
import p4 from '../assets/logos/partners/p4.webp';
import p5 from '../assets/logos/partners/p5.webp';
import p6 from '../assets/logos/partners/p6.webp';
import p7 from '../assets/logos/partners/p7.webp';
import p8 from '../assets/logos/partners/p8.webp';

export type Logo = { src: string; alt: string; w: number; h: number };

// Sizes are the Figma slot sizes at 1440px.
export const SCHOOL_LOGOS: Logo[] = [
  { src: s1, alt: 'School crest', w: 73, h: 73 },
  { src: s2, alt: 'School crest', w: 73, h: 73 },
  { src: s3, alt: 'ANCOPSS crest', w: 73, h: 73 },
  { src: s4, alt: 'School crest', w: 73, h: 73 },
  { src: s5, alt: 'School crest', w: 73, h: 73 },
  { src: s3, alt: 'ANCOPSS crest', w: 73, h: 73 },
  { src: s7, alt: 'DSS crest', w: 73, h: 73 },
  { src: s8, alt: 'School crest', w: 73, h: 73 },
];

export const PARTNER_LOGOS: Logo[] = [
  { src: p1, alt: 'Partner institution', w: 73, h: 73 },
  { src: p2, alt: 'Green Finance Institute', w: 73, h: 73 },
  { src: p3, alt: 'Moniepoint', w: 146, h: 73 },
  { src: p4, alt: 'Digital Finance Institute', w: 73, h: 73 },
  { src: p5, alt: 'OPay', w: 128, h: 37 },
  { src: p6, alt: 'CFI', w: 98, h: 51 },
  { src: p7, alt: 'PalmPay', w: 173, h: 52 },
  { src: p8, alt: 'Partner institution', w: 73, h: 73 },
];
