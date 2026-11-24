import type { Logo } from './logos';
import './LogoStrip.css';

type Props = { logos: Logo[]; label: string };

/** White pill with a slow, seamless logo marquee (pauses on hover, static if reduced motion). */
export default function LogoStrip({ logos, label }: Props) {
  const row = (hidden: boolean) => (
    <ul className="logo-strip__row" aria-hidden={hidden || undefined}>
      {logos.map((logo, i) => (
        <li key={i}>
          <img
            src={logo.src}
            alt={hidden ? '' : logo.alt}
            width={logo.w}
            height={logo.h}
            loading="lazy"
            decoding="async"
            style={{ width: logo.w, height: logo.h }}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="logo-strip" role="region" aria-label={label}>
      <div className="logo-strip__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
