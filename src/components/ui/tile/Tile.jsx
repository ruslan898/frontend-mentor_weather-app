import clsx from 'clsx';

import './tile.scss';

export default function Tile({ variant, icon, title, text, value = [] }) {
  const classes = clsx('tile', variant && `tile-${variant}`);
  const valueArr = typeof value === 'string' ? [value] : value;
  const defaultContent = 'No data';

  if (variant === 'main') {
    return (
      <div className={classes}>
        <div className="tile-top">
          <h2 className="tile-title">{title || defaultContent}</h2>
          <p className="tile-text">{text || defaultContent}</p>
        </div>
        <div className="tile-bottom">
          <img src={icon} alt="Weather icon" className="tile-icon" />
          <p className="tile-value">{valueArr[0] || defaultContent}</p>
        </div>
      </div>
    );
  }

  if (variant === 'daily') {
    return (
      <div className={classes}>
        <p className="tile-text">{text || defaultContent}</p>
        <img src={icon} alt="" className="tile-icon" />
        <div className="tile-bottom">
          <p className="tile-value">{valueArr[0] || defaultContent}</p>
          <p className="tile-value">{valueArr[1] || defaultContent}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={classes}>
      <div className="tile-top">
        <p className="tile-text">{text || defaultContent}</p>
      </div>
      <div className="tile-bottom">
        <p className="tile-value">{valueArr[0] || defaultContent}</p>
      </div>
    </div>
  );
}
