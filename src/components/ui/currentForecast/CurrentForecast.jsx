import Tile from '../tile/Tile';

import './current-forecast.scss';

import iconSunny from '/src/assets/images/icon-sunny.webp';

export default function CurrentForecast() {
  return (
    <div className="current-forecast">
      <div className="current-forecast-main">
        <Tile variant="main">
          <div className="tile-top">
            <h2 className="tile-title">Berlin, Germany</h2>
            <p className="tile-text">Tuesday, Aug 5, 2025</p>
          </div>
          <div className="tile-bottom">
            <img src={iconSunny} alt="Weather icon" className="tile-icon" />
            <p className="tile-value">20°</p>
          </div>
        </Tile>
      </div>
      
      <div className="current-forecast-secondary">
        <Tile>
          <div className="tile-top">
            <p className="tile-text">Feels Like</p>
          </div>
          <div className="tile-bottom">
            <p className="tile-value">18°</p>
          </div>
        </Tile>
        <Tile>
          <div className="tile-top">
            <p className="tile-text">Humidity</p>
          </div>
          <div className="tile-bottom">
            <p className="tile-value">46%.</p>
          </div>
        </Tile>
        <Tile>
          <div className="tile-top">
            <p className="tile-text">Wind</p>
          </div>
          <div className="tile-bottom">
            <p className="tile-value">14 km/h</p>
          </div>
        </Tile>
        <Tile>
          <div className="tile-top">
            <p className="tile-text">Precipitation</p>
          </div>
          <div className="tile-bottom">
            <p className="tile-value">0 mm</p>
          </div>
        </Tile>
      </div>
    </div>
  );
}
