import Input from '../input/Input';
import Button from '../button/Button';
import DropdownMenu from '../dropdownMenu/DropdownMenu';
import DropdownItem from '../dropdownButton/DropdownButton';

import './search-form.scss';

export default function SearchForm() {
  return (
    <form action="#" className="search-form">
      <div className="input-wrapper">
        <Input
          type="text"
          placeholder="Search for a place..."
          name="search"
          variant="search"
        />
        {/* <div className="input-dropdown">
          <DropdownMenu>
            <DropdownItem>City name</DropdownItem>
            <DropdownItem>City name</DropdownItem>
            <DropdownItem>City name</DropdownItem>
            <DropdownItem>City name</DropdownItem>
          </DropdownMenu>
        </div> */}
      </div>
      <Button type="search">Search</Button>
    </form>
  );
}
