import Input from '../input/Input';
import Button from '../button/Button';

import './search-form.scss';

export default function SearchForm() {
  return (
    <form action="#" className="search-form">
      <Input
        type="text"
        placeholder="Search for a place..."
        name="search"
        variant="search"
      />
      <Button type="search">Search</Button>
    </form>
  );
}
