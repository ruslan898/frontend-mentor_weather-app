import Button from '../button/Button';
import TitleSecondary from '../titleSecondary/TitleSecondary';
import Tile from '../tile/Tile';

import './hourly-forecast.scss';

import iconDropdown from '/src/assets/images/icon-dropdown.svg';
import iconOvercast from '/src/assets/images/icon-overcast.webp';
import iconSunny from '/src/assets/images/icon-sunny.webp';
import iconPartlyCloudy from '/src/assets/images/icon-partly-cloudy.webp';
import iconSnow from '/src/assets/images/icon-snow.webp';
import iconFog from '/src/assets/images/icon-fog.webp';

export default function HourlyForecast() {
  return (
    <div className="hourly-forecast">
      <div className="hourly-forecast-top">
        <TitleSecondary>Hourly forecast</TitleSecondary>
        <Button type="hourly">
          <span>Tuesday</span>
          <img src={iconDropdown} alt="Arrow down icon" />
        </Button>
      </div>
      <Tile variant="hourly" icon={iconOvercast} text="3 PM" value="20°" />
      <Tile variant="hourly" icon={iconPartlyCloudy} text="4 PM" value="20°" />
      <Tile variant="hourly" icon={iconSunny} text="5 PM" value="20°" />
      <Tile variant="hourly" icon={iconOvercast} text="6 PM" value="19°" />
      <Tile variant="hourly" icon={iconSnow} text="7 PM" value="18°" />
      <Tile variant="hourly" icon={iconFog} text="8 PM" value="18°" />
      <Tile variant="hourly" icon={iconSnow} text="9 PM" value="17°" />
      <Tile variant="hourly" icon={iconOvercast} text="10 PM" value="17°" />
    </div>
  );
}
