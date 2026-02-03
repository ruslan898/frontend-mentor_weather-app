import Logo from '../logo/Logo';
import Button from '../button/Button';

import './header.scss';

import logo from '/src/assets/images/logo.svg';
import iconUnits from '/src/assets/images/icon-units.svg';
import iconDropdown from '/src/assets/images/icon-dropdown.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Logo>
          <img src={logo} alt="Logo icon and text" />
        </Logo>

        <Button>
          <img src={iconUnits} alt="Gear icon" className="btn-gear-icon" />
          <span>Units</span>
          <img
            src={iconDropdown}
            alt="Arrow down icon"
            className="btn-arrow-icon"
          />
        </Button>
      </div>
    </header>
  );
}
