type Props = { icon: string; title: string; body: string };

export default function FeatureCard({ icon, title, body }: Props) {
  return (
    <li className="feature">
      <span className="feature__icon" aria-hidden>
        <img src={icon} alt="" width={20} height={20} />
      </span>
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  );
}
