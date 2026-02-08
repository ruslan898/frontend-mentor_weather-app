import './dropdown-item.scss'

export default function DropdownItem({children, type, active, onUnitToggle}) {
  return type === 'button' ? (
    <button className="dropdown-item" onClick={onUnitToggle}>
      {children}
    </button>
  ) : (
    <div className={`dropdown-item ${active ? 'active' : ''}`}>{children}</div>
  );
}