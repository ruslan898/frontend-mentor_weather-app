import useToggle from '../../hooks/useToggle';

import Logo from '../logo/Logo';
import Button from '../button/Button';
import DropdownMenu from '../dropdownMenu/DropdownMenu';
import DropdownItem from '../dropdownItem/DropdownItem';

import './header.scss';

import logo from '/src/assets/images/logo.svg';
import iconUnits from '/src/assets/images/icon-units.svg';
import iconDropdown from '/src/assets/images/icon-dropdown.svg';

export default function Header({ appInfo, onUnitToggle }) {
  const [dropdownOpen, toggleDropdownOpen] = useToggle(false);

  const isMetricUnit = appInfo.unitType === 'Metric';

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
            <div className="units-dropdown">
              <DropdownMenu>
                <DropdownItem type="button" onUnitToggle={onUnitToggle}>
                  Switch to {isMetricUnit ? 'Imperial' : 'Metric'}
                </DropdownItem>

                <h3 className="dropdown-title">Temperature</h3>

                <DropdownItem active={isMetricUnit}>Celsius (°C)</DropdownItem>

                <DropdownItem active={!isMetricUnit}>
                  Fahrenheit (°F)
                </DropdownItem>

                <div className="dropdown-divider" />

                <h3 className="dropdown-title">Wind Speed</h3>

                <DropdownItem active={isMetricUnit}>km/h</DropdownItem>

                <DropdownItem active={!isMetricUnit}>mph</DropdownItem>

                <div className="dropdown-divider" />

                <h3 className="dropdown-title">Precipitation</h3>

                <DropdownItem active={isMetricUnit}>
                  Millimeters (mm)
                </DropdownItem>

                <DropdownItem active={!isMetricUnit}>Inches (in)</DropdownItem>
              </DropdownMenu>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
