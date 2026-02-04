import Tile from '../tile/Tile';

import './current-forecast.scss';

import iconSunny from '/src/assets/images/icon-sunny.webp';

export default function CurrentForecast() {
  return (
    <div className="current-forecast">
      <div className="current-forecast-main">
        <Tile
          variant="main"
          icon={iconSunny}
          title="Berlin, Germany"
          text="Tuesday, Aug 5, 2025"
          value="20°"
        />
      </div>

      <div className="current-forecast-secondary">
        <Tile text="Feels Like" value="18°" />
        <Tile text="Humidity" value="46%" />
        <Tile text="Wind" value="14 km/h" />
        <Tile text="Precipitation" value="0 mm" />
      </div>
    </div>
  );
}
