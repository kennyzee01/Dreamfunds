import './NotificationCard.css';

type Props = {
  title: string;
  body: string;
  time: string;
  className?: string;
  style?: React.CSSProperties;
};

/** The "New · Transaction Successful" toast used in the hero collage and on the parent phone. */
export default function NotificationCard({ title, body, time, className = '', style }: Props) {
  return (
    <div className={`notif ${className}`} style={style}>
      <span className="notif__badge">New</span>
      <p className="notif__title">{title}</p>
      <p className="notif__body">{body}</p>
      <p className="notif__time">{time}</p>
    </div>
  );
}
