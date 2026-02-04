import clsx from 'clsx';
import './button.scss';

export default function Button({ children, type }) {
  const classes = clsx('btn', type && `btn-${type}`)

  return <button className={classes}>{children}</button>;
}
