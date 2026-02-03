import Button from '../button/Button';

import './header.scss';

import logo from '/src/assets/images/logo.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo icon and text" />
        </div>
        <Button />
      </div>
    </header>
  );
}
