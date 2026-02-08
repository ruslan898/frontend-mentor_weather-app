import Button from '../button/Button';
import TitleSecondary from '../titleSecondary/TitleSecondary';
import Tile from '../tile/Tile';
import { getWeatherIcon } from '../../utility';

import './hourly-forecast.scss';

import iconDropdown from '/src/assets/images/icon-dropdown.svg';

export default function HourlyForecast({ weatherData }) {
  const now = new Date();
  now.setMinutes(0, 0, 0);

  const pad = (n) => String(n).padStart(2, '0');
  const currentHour =
    `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}` +
    `T${pad(now.getHours())}:${pad(now.getMinutes())}`;

  const startIndex = weatherData.hourly.time.findIndex(
    (date) => date === currentHour,
  );

  const hourlyTemperatureArr = weatherData.hourly.temperature_2m.slice(
    startIndex,
    startIndex + 8,
  );
  const hourlyTimeArr = weatherData.hourly.time.slice(
    startIndex,
    startIndex + 8,
  );
  const hourlyWeatherCodeArr = weatherData.hourly.weather_code.slice(
    startIndex,
    startIndex + 8,
  );

  const tiles = hourlyTimeArr.map((item, index) => {
    const hours = new Date(item).getHours();
    const hoursFormatted =
      hours === 0 ? '12 AM' : hours <= 12 ? `${hours} AM` : `${hours - 12} PM`;
    const temperature = Math.round(hourlyTemperatureArr[index]);
    const weatherIcon = getWeatherIcon(hourlyWeatherCodeArr[index]);
    const temperatureUnit = weatherData.hourly_units.temperature_2m;

    return (
      <Tile
        variant="hourly"
        icon={weatherIcon}
        text={hoursFormatted}
        valueNum={temperature}
        valueUnit={temperatureUnit[0]}
        key={hoursFormatted}
      />
    );
  });

  return (
    <div className="hourly-forecast">
      <div className="hourly-forecast-top">
        <TitleSecondary>Hourly forecast</TitleSecondary>
        <Button type="hourly">
          <span>Tuesday</span>
          <img src={iconDropdown} alt="Arrow down icon" />
        </Button>
      </div>
      {tiles}
    </div>
  );
}
