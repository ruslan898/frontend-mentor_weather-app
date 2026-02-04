import clsx from 'clsx';
import './input.scss';

export default function Input({ variant, ...props }) {
  const classes = clsx('input', variant && 'input-search')

  return <input {...props} className={classes} />;
}
