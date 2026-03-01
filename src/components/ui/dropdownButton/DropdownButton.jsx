import './dropdown-button.scss';

export default function DropdownButton({ children, active, ...props }) {
  return (
    <button
      type="button"
      className={`dropdown-button ${active ? 'active' : ''}`}
      {...props}
    >
      {children}
    </button>
  );
}
