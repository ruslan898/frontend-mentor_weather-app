import './dropdown-button.scss';

export default function DropdownButton({
  children,
  active,
  onUnitToggle,
}) {
  return (
    <button
      className={`dropdown-button ${active ? 'active' : ''}`}
      onClick={onUnitToggle}
    >
      {children}
    </button>
  );
}
