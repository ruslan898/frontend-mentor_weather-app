import Tile from '../tile/Tile';

import './daily-forecast.scss';

import iconRain from '/src/assets/images/icon-rain.webp';
import iconDrizzle from '/src/assets/images/icon-drizzle.webp';
import iconSunny from '/src/assets/images/icon-sunny.webp';
import iconPartlyCloudy from '/src/assets/images/icon-partly-cloudy.webp';
import iconStorm from '/src/assets/images/icon-storm.webp';
import iconSnow from '/src/assets/images/icon-snow.webp';
import iconFog from '/src/assets/images/icon-fog.webp';

export default function DailyForecast() {
  return (
    <div className="daily-forecast">
      <h2 className="title">Daily forecast</h2>
      <div className="daily-forecast-grid">
        <Tile
          variant="daily"
          text="Tue"
          icon={iconRain}
          value={['20°', '14°']}
        />
        <Tile
          variant="daily"
          text="Wed"
          icon={iconDrizzle}
          value={['21°', '15°']}
        />
        <Tile
          variant="daily"
          text="Thu"
          icon={iconSunny}
          value={['24°', '14°']}
        />
        <Tile
          variant="daily"
          text="Fri"
          icon={iconPartlyCloudy}
          value={['25°', '13°']}
        />
        <Tile
          variant="daily"
          text="Sat"
          icon={iconStorm}
          value={['21°', '15°']}
        />
        <Tile
          variant="daily"
          text="Sun"
          icon={iconSnow}
          value={['25°', '16°']}
        />
        <Tile
          variant="daily"
          text="mon"
          icon={iconFog}
          value={['24°', '15°']}
        />
      </div>
    </div>
  );
}
