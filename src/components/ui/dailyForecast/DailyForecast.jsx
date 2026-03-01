import Tile from '../tile/Tile';
import TitleSecondary from '../titleSecondary/TitleSecondary';
import { getWeatherIcon } from '../../../utility/getWeatherIcon';

import './daily-forecast.scss';

export default function DailyForecast({ weatherData }) {
  const dailyForecastTiles = weatherData.daily.time.map((item, index) => {
    const weekDayShort = new Date(item).toLocaleDateString('en-US', {
      weekday: 'short',
    });
    const temperatureMax = weatherData.daily.temperature_2m_max[index];
    const temperatureMin = weatherData.daily.temperature_2m_min[index];
    const temperatureUnit = weatherData.daily_units.temperature_2m_max;
    const weatherCode = weatherData.daily.weather_code[index];

    return (
      <Tile
        variant="daily"
        text={weekDayShort}
        icon={getWeatherIcon(weatherCode)}
        valueNum={[temperatureMax, temperatureMin]}
        valueUnit={temperatureUnit[0]}
        key={weekDayShort}
      />
    );
  });

  return (
    <div className="daily-forecast">
      <TitleSecondary>Daily forecast</TitleSecondary>
      <div className="daily-forecast-grid">{dailyForecastTiles}</div>
    </div>
  );
}
