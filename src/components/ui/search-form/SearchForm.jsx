import Input from '../input/Input';
import Button from '../button/Button';
import DropdownMenu from '../dropdownMenu/DropdownMenu';
import DropdownButton from '../dropdownButton/DropdownButton';

import './search-form.scss';

export default function SearchForm({
  inputValue,
  onInputChange,
  searchResults,
  onLocationChange,
}) {
  const searchResultsItems = searchResults.map(
    ({ name, country, latitude, longitude }) => {
      const locationName = `${name}, ${country}`;

      return (
        <DropdownButton
          onClick={() =>
            onLocationChange({ locationName, latitude, longitude })
          }
        >
          {`${name}, ${country}`}
        </DropdownButton>
      );
    },
  );

  return (
    <form action="#" className="search-form">
      <div className="input-wrapper">
        <Input
          type="text"
          placeholder="Search for a place..."
          name="search"
          variant="search"
          value={inputValue}
          onChange={(e) => {
            onInputChange(e.target.value);
          }}
        />

        {searchResults.length > 0 && inputValue.length >= 2 && (
          <div className="input-dropdown">
            <DropdownMenu>{searchResultsItems}</DropdownMenu>
          </div>
        )}
      </div>
      <Button type="search">Search</Button>
    </form>
  );
}
