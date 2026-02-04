import clsx from 'clsx';

import './tile.scss';

export default function Tile({ variant, children }) {
  const classes = clsx('tile', variant && `tile-${variant}`);

  return <div className={classes}>{children}</div>;
}
