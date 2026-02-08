import clsx from 'clsx';

import './tile.scss';

export default function Tile({
  variant,
  icon,
  title,
  text,
  valueNum = [],
  valueUnit,
}) {
  const classes = clsx('tile', variant && `tile-${variant}`);

  const valueNumArr = (Array.isArray(valueNum) ? valueNum : [valueNum]).map(
    (valueNum) => Math.round(valueNum),
  );


  if (variant === 'main') {
    return (
      <div className={classes}>
        <div className="tile-top">
          <h2 className="tile-title">{title}</h2>
          <p className="tile-text">{text}</p>
        </div>
        <div className="tile-bottom">
          <img src={icon} alt="Weather icon" className="tile-icon" />
          <p className="tile-value">
            {valueNumArr[0]}
            {valueUnit}
          </p>
        </div>
      </div>
    );
  }

  if (variant === 'daily') {
    return (
      <div className={classes}>
        <p className="tile-text">{text}</p>
        <img src={icon} alt="Weather icon" className="tile-icon" />
        <div className="tile-bottom">
          <p className="tile-value">
            {valueNumArr[0]}
            {valueUnit}
          </p>
          <p className="tile-value">
            {valueNumArr[1]}
            {valueUnit}
          </p>
        </div>
      </div>
    );
  }

  if (variant === 'hourly') {
    return (
      <div className={classes}>
        <img src={icon} alt="Weather icon" className="tile-icon" />
        <p className="tile-text">{text}</p>
        <p className="tile-value">
          {valueNumArr[0]}
          {valueUnit}
        </p>
      </div>
    );
  }

  return (
    <div className={classes}>
      <div className="tile-top">
        <p className="tile-text">{text}</p>
      </div>
      <div className="tile-bottom">
        {text === 'Wind' || text === 'Precipitation' ? (
          <p className="tile-value">
            {valueNumArr[0]} {valueUnit}
          </p>
        ) : (
          <p className="tile-value">
            {valueNumArr[0]}
            {valueUnit}
          </p>
        )}
      </div>
    </div>
  );
}
