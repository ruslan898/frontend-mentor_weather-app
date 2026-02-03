import './button.scss';

import iconUnits from '/src/assets/images/icon-units.svg';
import iconDropdown from '/src/assets/images/icon-dropdown.svg';

export default function Button() {
  return (
    <button className="btn">
      <img src={iconUnits} alt="Gear icon" className="btn-gear-icon" />
      Units
      <img
        src={iconDropdown}
        alt="Arrow down icon"
        className="btn-arrow-icon"
      />
    </button>
  );
}
