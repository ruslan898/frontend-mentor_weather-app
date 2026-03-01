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
          key={latitude}
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
    <form
      action={(formData) => {
        const inputValue = formData.get('search');
        if (inputValue.trim().length < 2) return;

        if (searchResults.length > 0) {
          const { name, country, latitude, longitude } = searchResults[0];
          const locationName = `${name}, ${country}`;
          onLocationChange({ locationName, latitude, longitude });
        }
      }}
      className="search-form"
    >
      <div className="input-wrapper">
        <Input
          type="text"
          placeholder="Search for a place..."
          aria-label="Search for a place..."
          name="search"
          variant="search"
          minLength={2}
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
      <Button variant="search" type='submit'>Search</Button>
    </form>
  );
}
