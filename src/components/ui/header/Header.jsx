import { useToggle } from '../../hooks/useToggle';

import Logo from '../logo/Logo';
import Button from '../button/Button';
import DropdownMenu from '../dropdownMenu/DropdownMenu';
import DropdownButton from '../dropdownButton/DropdownButton';
import { isMetricUnit } from '../../../utility/isMetricUnit';

import './header.scss';

import logo from '/src/assets/images/logo.svg';
import iconUnits from '/src/assets/images/icon-units.svg';
import iconDropdown from '/src/assets/images/icon-dropdown.svg';

export default function Header({ appInfo, onUnitToggle }) {
  const [dropdownOpen, toggleDropdownOpen] = useToggle(false);

  return (
    <header className="header">
      <div className="container">
        <Logo>
          <img src={logo} alt="Logo icon and text" />
        </Logo>

        <div className="btn-wrapper">
          <Button onClick={toggleDropdownOpen}>
            <img src={iconUnits} alt="Gear icon" className="btn-gear-icon" />
            <span>Units</span>
            <img
              src={iconDropdown}
              alt="Arrow down icon"
              className="btn-arrow-icon"
            />
          </Button>

          {dropdownOpen && (
            <div className="dropdown-wrapper-normal">
              <DropdownMenu>
                <DropdownButton
                  onClick={() => onUnitToggle(appInfo.unitTypes, 'all')}
                >
                  Switch to{' '}
                  {isMetricUnit(appInfo.unitTypes, 'majority')
                    ? 'Imperial'
                    : 'Metric'}
                </DropdownButton>

                <h3 className="dropdown-title">Temperature</h3>

                <DropdownButton
                  onClick={() => onUnitToggle(appInfo.unitTypes, 'temperature')}
                  active={isMetricUnit(appInfo.unitTypes, 'temperature')}
                >
                  Celsius (°C)
                </DropdownButton>

                <DropdownButton
                  onClick={() => onUnitToggle(appInfo.unitTypes, 'temperature')}
                  active={!isMetricUnit(appInfo.unitTypes, 'temperature')}
                >
                  Fahrenheit (°F)
                </DropdownButton>

                <div className="dropdown-divider" />

                <h3 className="dropdown-title">Wind Speed</h3>

                <DropdownButton
                  onClick={() => onUnitToggle(appInfo.unitTypes, 'windSpeed')}
                  active={isMetricUnit(appInfo.unitTypes, 'windSpeed')}
                >
                  km/h
                </DropdownButton>

                <DropdownButton
                  onClick={() => onUnitToggle(appInfo.unitTypes, 'windSpeed')}
                  active={!isMetricUnit(appInfo.unitTypes, 'windSpeed')}
                >
                  mph
                </DropdownButton>

                <div className="dropdown-divider" />

                <h3 className="dropdown-title">Precipitation</h3>

                <DropdownButton
                  onClick={() =>
                    onUnitToggle(appInfo.unitTypes, 'precipitation')
                  }
                  active={isMetricUnit(appInfo.unitTypes, 'precipitation')}
                >
                  Millimeters (mm)
                </DropdownButton>

                <DropdownButton
                  onClick={() =>
                    onUnitToggle(appInfo.unitTypes, 'precipitation')
                  }
                  active={!isMetricUnit(appInfo.unitTypes, 'precipitation')}
                >
                  Inches (in)
                </DropdownButton>
              </DropdownMenu>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
