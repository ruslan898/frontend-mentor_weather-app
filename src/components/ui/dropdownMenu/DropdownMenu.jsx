import DropdownItem from '../dropdownItem/DropdownItem';

import './dropdown-menu.scss'

export default function DropdownMenu({children}) {
  return (
    <div className="dropdown-menu">
      {children}
    </div>
  );
}