import clsx from 'clsx';
import './button.scss';

export default function Button({ children, variant, ...props }) {
  const classes = clsx('btn', variant && `btn-${variant}`);

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
