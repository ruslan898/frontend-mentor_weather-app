import clsx from 'clsx';
import './button.scss';

export default function Button({ children, type, ...props }) {
  const classes = clsx('btn', type && `btn-${type}`)

  return <button className={classes} {...props} >{children}</button>;
}
