import Button from '../button/Button';
import TitleSecondary from '../titleSecondary/TitleSecondary';
import Tile from '../tile/Tile';
import DropdownMenu from '../dropdownMenu/DropdownMenu';
import DropdownButton from '../dropdownButton/DropdownButton';
import { getWeatherIcon } from '../../../utility/getWeatherIcon';
import { useToggle } from '../../hooks/useToggle';

import './hourly-forecast.scss';

import iconDropdown from '/src/assets/images/icon-dropdown.svg';

export default function HourlyForecast({
  weatherData,
  hourlyTimeIndex,
  onHourlyTimeIndexChange,
}) {
  const [dropdownOpen, toggleDropdownOpen] = useToggle(false);

  const startIndex = hourlyTimeIndex;
  const endIndex = startIndex + 8;

  const hourlyTemperatureArr = weatherData.hourly.temperature_2m.slice(
    startIndex,
    endIndex,
  );
  const hourlyTimeArr = weatherData.hourly.time.slice(startIndex, endIndex);
  const hourlyWeatherCodeArr = weatherData.hourly.weather_code.slice(
    startIndex,
    endIndex,
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

  function getWeekday(date) {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
    });
  }

  const currentDate = weatherData.hourly.time[startIndex];

  const currentWeekday = getWeekday(currentDate);

  const dateIndexes = [];
  for (let index = 15; index < weatherData.hourly.time.length; index += 24) {
    dateIndexes.push(index);
  }

  const dropdownButtons = dateIndexes.map((index) => {
    const dateArr = weatherData.hourly.time;

    return (
      <DropdownButton
        onClick={() => {
          onHourlyTimeIndexChange(index);
          toggleDropdownOpen();
        }}
        key={index}
      >
        {getWeekday(dateArr[index])}
      </DropdownButton>
    );
  });

  return (
    <div className="hourly-forecast">
      <div className="hourly-forecast-top">
        <TitleSecondary>Hourly forecast</TitleSecondary>

        <div className="btn-wrapper">
          <Button variant="hourly" onClick={toggleDropdownOpen}>
            <span>{currentWeekday}</span>
            <img src={iconDropdown} alt="Arrow down icon" />
          </Button>

          {dropdownOpen && (
            <div className="dropdown-wrapper-normal">
              <DropdownMenu>{dropdownButtons}</DropdownMenu>
            </div>
          )}
        </div>
      </div>
      {tiles}
    </div>
  );
}
