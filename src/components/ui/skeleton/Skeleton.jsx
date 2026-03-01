import './skeleton.scss';

import iconLoading from '/src/assets/images/icon-loading.svg';
import iconDropdown from '/src/assets/images/icon-dropdown.svg';

export default function Skeleton() {
  return (
    <>
      <div className="current-forecast">
        <div className="current-forecast-main">
          <div className="tile tile-main skeleton">
            <div className="loading-box">
              <img
                src={iconLoading}
                alt="Loading icon"
                className="loading-icon"
              />
              <h2 className="loading-text">Loading...</h2>
            </div>
          </div>
        </div>

        <div className="current-forecast-secondary">
          <div className="tile">
            <div className="tile-top">
              <p className="tile-text">Feels like</p>
            </div>
            <div className="tile-bottom">
              <p className="tile-value">-</p>
            </div>
          </div>
          <div className="tile">
            <div className="tile-top">
              <p className="tile-text">Humidity</p>
            </div>
            <div className="tile-bottom">
              <p className="tile-value">-</p>
            </div>
          </div>
          <div className="tile">
            <div className="tile-top">
              <p className="tile-text">Wind</p>
            </div>
            <div className="tile-bottom">
              <p className="tile-value">-</p>
            </div>
          </div>
          <div className="tile">
            <div className="tile-top">
              <p className="tile-text">Precipitation</p>
            </div>
            <div className="tile-bottom">
              <p className="tile-value">-</p>
            </div>
          </div>
        </div>
      </div>
      <div className="daily-forecast">
        <h2 className="title">Daily forecast</h2>
        <div className="daily-forecast-grid">
          <div className="tile tile-daily"></div>
          <div className="tile tile-daily"></div>
          <div className="tile tile-daily"></div>
          <div className="tile tile-daily"></div>
          <div className="tile tile-daily"></div>
          <div className="tile tile-daily"></div>
          <div className="tile tile-daily"></div>
        </div>
      </div>
      <div className="hourly-forecast">
        <div className="hourly-forecast-top">
          <h2 className="title">Hourly forecast</h2>

          <button type="button" className="btn btn-hourly">
            <span>-</span>
            <img src={iconDropdown} alt="Arrow down icon" />
          </button>
        </div>
        <div className="tile tile-hourly"></div>
        <div className="tile tile-hourly"></div>
        <div className="tile tile-hourly"></div>
        <div className="tile tile-hourly"></div>
        <div className="tile tile-hourly"></div>
        <div className="tile tile-hourly"></div>
        <div className="tile tile-hourly"></div>
        <div className="tile tile-hourly"></div>
      </div>
    </>
  );
}
