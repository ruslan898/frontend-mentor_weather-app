import Tile from '../tile/Tile';
import { getWeatherIcon } from '../../../utility/getWeatherIcon';

import './current-forecast.scss';

export default function CurrentForecast({ weatherData, locationName }) {
  // const location = weatherData.timezone.split('/').reverse().join(', ');

  const {
    time,
    temperature_2m: temperature,
    apparent_temperature: apparentTemperature,
    precipitation,
    relative_humidity_2m: humidity,
    wind_speed_10m: windSpeed,
    weather_code: weatherCode,
  } = weatherData.current;

  const {
    temperature_2m: temperatureUnit,
    apparent_temperature: apparentTemperatureUnit,
    precipitation: precipitationUnit,
    relative_humidity_2m: humidityUnit,
    wind_speed_10m: windSpeedUnit,
  } = weatherData.current_units;

  const dateFormatted = new Date(time).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="current-forecast">
      <div className="current-forecast-main">
        <Tile
          variant="main"
          icon={getWeatherIcon(weatherCode)}
          title={locationName}
          text={dateFormatted}
          valueNum={temperature}
          valueUnit={temperatureUnit[0]}
        />
      </div>

      <div className="current-forecast-secondary">
        <Tile
          text="Feels Like"
          valueNum={apparentTemperature}
          valueUnit={apparentTemperatureUnit[0]}
        />
        <Tile text="Humidity" valueNum={humidity} valueUnit={humidityUnit} />
        <Tile text="Wind" valueNum={windSpeed} valueUnit={windSpeedUnit} />
        <Tile
          text="Precipitation"
          valueNum={precipitation}
          valueUnit={precipitationUnit}
        />
      </div>
    </div>
  );
}
